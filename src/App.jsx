import { useState, useRef, useMemo } from 'react';
import { ConfigPanel } from './components/ConfigPanel';
import { PhoneSimulator } from './components/PhoneSimulator';
import { AvatarStyle } from './utils/constants';
import { generateChatList } from './utils/generator';
import { captureLongScreenshot } from './utils/screenshot';
import './App.css';

function App() {
  const [config, setConfig] = useState({
    message: '[链接] 2024年度报告分析',
    count: 15,
    avatarStyle: AvatarStyle.Mixed,
    wifiStrength: 3
  });
  const [regenerateKey, setRegenerateKey] = useState(0);
  const [screenshotMode, setScreenshotMode] = useState(false);
  const [screenshotStatus, setScreenshotStatus] = useState({ loading: false, message: '' });
  const phoneRef = useRef(null);

  // 使用 useMemo 缓存聊天列表，避免重复生成
  const chats = useMemo(
    () => generateChatList(config.count, config.message, config.avatarStyle, regenerateKey),
    [config.count, config.message, config.avatarStyle, regenerateKey]
  );

  const handleGenerate = () => {
    setRegenerateKey(prev => prev + 1);
  };

  const handleLongScreenshot = async () => {
    console.log('🎯 开始长截图流程...');
    
    if (!phoneRef.current) {
      console.error('❌ phoneRef.current 为空');
      alert('无法获取手机模拟器引用，请刷新页面重试');
      return;
    }
    
    setScreenshotStatus({ loading: true, message: '正在准备截图...' });
    
    // 临时进入截图模式以确保布局正确
    const wasInScreenshotMode = screenshotMode;
    if (!wasInScreenshotMode) {
      setScreenshotMode(true);
      // 等待状态更新和重新渲染
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    try {
      // 直接使用 ref 指向的手机模拟器元素
      const phoneElement = phoneRef.current;
      
      console.log('📱 phoneElement:', phoneElement);
      console.log('📱 phoneElement className:', phoneElement.className);
      
      if (!phoneElement) {
        console.error('❌ 未找到手机模拟器元素');
        setScreenshotStatus({ loading: false, message: '' });
        if (!wasInScreenshotMode) setScreenshotMode(false);
        alert('未找到手机模拟器元素，请检查页面结构');
        return;
      }

      setScreenshotStatus({ loading: true, message: '正在生成长截图...' });
      console.log('🚀 调用 captureLongScreenshot...');

      // 生成长截图
      await captureLongScreenshot(phoneElement, {
        filename: `wechat-screenshot-${Date.now()}.png`,
        quality: 0.95,
      });

      console.log('✅ 长截图生成成功！');
      setScreenshotStatus({ loading: false, message: '截图已保存！' });
      
      // 恢复原来的截图模式状态
      if (!wasInScreenshotMode) {
        setScreenshotMode(false);
      }
      
      // 3秒后清除成功消息
      setTimeout(() => {
        setScreenshotStatus({ loading: false, message: '' });
      }, 3000);
      
    } catch (error) {
      console.error('❌ 长截图生成失败:', error);
      setScreenshotStatus({ loading: false, message: '' });
      if (!wasInScreenshotMode) setScreenshotMode(false);
      alert(`长截图生成失败: ${error.message}\n请查看控制台了解详情`);
    }
  };

  return (
    <div className={`flex flex-col md:flex-row justify-center items-center min-h-screen p-4 md:p-6 transition-colors duration-500 ${screenshotMode ? 'bg-black' : 'bg-gray-50'}`}>
      <div className={`w-full md:w-auto mb-6 md:mb-0 ${screenshotMode ? 'opacity-0 pointer-events-none absolute' : 'opacity-100 relative'} transition-opacity duration-300`}>
        <ConfigPanel 
          config={config} 
          setConfig={setConfig} 
          onGenerate={handleGenerate} 
          onScreenshotMode={() => setScreenshotMode(true)}
          onLongScreenshot={handleLongScreenshot}
          screenshotStatus={screenshotStatus}
        />
      </div>
      <div className={`divider hidden md:block w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent mx-8 h-[600px] transition-opacity ${screenshotMode ? 'opacity-0' : 'opacity-100'}`}></div>
      <PhoneSimulator 
        ref={phoneRef}
        screenshotMode={screenshotMode} 
        exitScreenshotMode={() => setScreenshotMode(false)}
        chats={chats}
        wifiStrength={config.wifiStrength}
        onLongScreenshot={handleLongScreenshot}
        screenshotStatus={screenshotStatus}
      />
    </div>
  );
}

export default App;
