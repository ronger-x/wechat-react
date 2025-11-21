import { RefreshIcon, CameraIcon, SettingsIcon, InfoIcon, GitHubIcon, DownloadIcon } from './Icons';
import { AvatarStyle } from '../utils/constants';

export const ConfigPanel = ({ config, setConfig, onGenerate, onScreenshotMode, onLongScreenshot, screenshotStatus }) => {
  const handleChange = (key, value) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="w-full md:w-[320px] flex-shrink-0">
      <div className="bg-white p-6 rounded-xl shadow-panel space-y-6 h-fit transition-all duration-300 hover:shadow-lg border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 border-b border-gray-100 pb-3 flex items-center gap-2">
          <SettingsIcon size={20} className="text-wx-green" />
          <span>生成配置</span>
        </h2>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">统一聊天内容</label>
          <textarea
            value={config.message}
            onChange={(e) => handleChange('message', e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg text-sm h-24 focus:ring-2 focus:ring-wx-green focus:border-wx-green outline-none resize-none bg-gray-50 text-gray-900 transition-all placeholder-gray-400"
            placeholder="例如：[链接] 2024年度报告..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">生成数量 (条)</label>
          <input
            type="number"
            value={config.count}
            min={1}
            max={50}
            onChange={(e) => handleChange('count', Number(e.target.value))}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-wx-green focus:border-wx-green outline-none text-gray-900 transition-all placeholder-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">头像样式</label>
          <div className="relative">
            <select
              value={config.avatarStyle}
              onChange={(e) => handleChange('avatarStyle', e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-wx-green focus:border-wx-green outline-none bg-white text-gray-900 transition-all appearance-none cursor-pointer"
            >
              <option value={AvatarStyle.Mixed} className="text-gray-900 bg-white">🎨 混合样式 (随机风格)</option>
              <option value={AvatarStyle.Grayscale} className="text-gray-900 bg-white">⚫ 黑白风格</option>
              <option value={AvatarStyle.Blur} className="text-gray-900 bg-white">🌫️ 模糊效果</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Wi-Fi 信号强度</label>
          <div className="flex gap-2">
            {[1, 2, 3].map((level) => (
              <button
                key={level}
                onClick={() => handleChange('wifiStrength', level)}
                className={`flex-1 p-3 rounded-lg border-2 transition-all ${
                  config.wifiStrength === level
                    ? 'border-wx-green bg-wx-green/10 text-wx-green font-bold'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`}
              >
                {level === 1 && '📶 弱'}
                {level === 2 && '📶📶 中'}
                {level === 3 && '📶📶📶 强'}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-3">
          <button
            onClick={onGenerate}
            className="w-full bg-wx-green hover:bg-[#06ad56] text-white py-3 px-4 rounded-lg font-bold transition-all active:scale-95 shadow-sm flex items-center justify-center gap-2"
          >
            <RefreshIcon size={18} />
            <span>重新生成列表</span>
          </button>
          <button
            onClick={onScreenshotMode}
            className="w-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-lg font-medium transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <CameraIcon size={18} />
            <span>进入截图模式</span>
          </button>
          <button
            onClick={onLongScreenshot}
            disabled={screenshotStatus?.loading}
            className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-all active:scale-95 shadow-sm flex items-center justify-center gap-2 ${
              screenshotStatus?.loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {screenshotStatus?.loading ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>{screenshotStatus.message || '处理中...'}</span>
              </>
            ) : (
              <>
                <DownloadIcon size={18} />
                <span>生成长截图</span>
              </>
            )}
          </button>
        </div>

        {screenshotStatus?.message && !screenshotStatus?.loading && (
          <div className="text-xs text-green-600 bg-green-50 p-3 rounded-lg flex items-center gap-2 border border-green-200">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{screenshotStatus.message}</span>
          </div>
        )}

        <div className="text-xs text-gray-400 bg-gray-50 p-3 rounded-lg flex items-start gap-2">
          <InfoIcon size={14} className="mt-0.5 flex-shrink-0" />
          <div className="space-y-1">
            <p>• 截图模式：背景变黑，手机居中，点击退出</p>
            <p>• 长截图：自动展开所有聊天记录并下载完整图片</p>
          </div>
        </div>

        <a 
          href="https://github.com/ronger-x/wechat-react" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 transition-colors py-2 text-sm font-medium"
        >
          <GitHubIcon size={20} />
        </a>
      </div>
    </div>
  );
};
