import { useState } from 'react';
import { ConfigPanel } from './components/ConfigPanel';
import { PhoneSimulator } from './components/PhoneSimulator';
import { AvatarStyle } from './utils/constants';
import { generateChatList } from './utils/generator';
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

  // Generate chats based on config and regenerateKey
  const chats = generateChatList(config.count, config.message, config.avatarStyle, regenerateKey);

  const handleGenerate = () => {
    setRegenerateKey(prev => prev + 1);
  };

  return (
    <div className={`flex flex-col md:flex-row justify-center items-center min-h-screen p-6 transition-colors duration-500 ${screenshotMode ? 'bg-black' : 'bg-gray-50'}`}>
      <div className={`${screenshotMode ? 'opacity-0 pointer-events-none absolute' : 'opacity-100 relative'} transition-opacity duration-300`}>
        <ConfigPanel 
          config={config} 
          setConfig={setConfig} 
          onGenerate={handleGenerate} 
          onScreenshotMode={() => setScreenshotMode(true)}
        />
      </div>
      <div className={`divider hidden md:block w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent mx-8 h-[600px] transition-opacity ${screenshotMode ? 'opacity-0' : 'opacity-100'}`}></div>
      <PhoneSimulator 
        screenshotMode={screenshotMode} 
        exitScreenshotMode={() => setScreenshotMode(false)}
        chats={chats}
        wifiStrength={config.wifiStrength}
      />
    </div>
  );
}

export default App;
