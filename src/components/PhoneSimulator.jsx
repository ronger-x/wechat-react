import { forwardRef } from 'react';
import { StatusBar } from './StatusBar';
import { ChatList } from './ChatList';
import { TabBar } from './TabBar';
import { PlusIcon } from './Icons';

export const PhoneSimulator = forwardRef(({ screenshotMode, exitScreenshotMode, chats, wifiStrength, onLongScreenshot, screenshotStatus }, ref) => {
  return (
    <div className="phone-container flex-shrink-0 transition-all duration-500 ease-in-out md:ml-8 flex flex-col items-center gap-4">
      <div
        ref={ref}
        className={`relative bg-white overflow-hidden transition-all duration-500 ease-in-out ${
          screenshotMode
            ? 'scale-100 ring-0 shadow-none mx-auto rounded-none'
            : 'ring-4 md:ring-8 ring-black/10 rounded-[30px] md:rounded-[45px] shadow-phone'
        }`}
        style={{
          width: screenshotMode ? '390px' : 'min(390px, 100vw)',
          height: screenshotMode ? 'auto' : '844px',
          maxWidth: screenshotMode ? '390px' : 'calc(100vw - 2rem)',
          minHeight: screenshotMode ? '844px' : '844px',
        }}
      >
        <StatusBar wifiStrength={wifiStrength} />
        <div className="h-[56px] bg-[#EDEDED] px-3 flex items-center justify-between border-b border-[#dcdcdc] relative mt-[47px] z-20">
          <div className="w-[80px] flex items-center justify-start">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#111] ml-1">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="font-medium text-[17px] text-[#111111] leading-none">
              微信
            </div>
          </div>
          <div className="w-[80px] flex justify-end items-center pr-1">
            <PlusIcon />
          </div>
        </div>
        <ChatList chats={chats} screenshotMode={screenshotMode} />
        <TabBar />
      </div>
      
      {/* 截图模式下的操作按钮 - 放在手机容器外部 */}
      {screenshotMode && (
        <div className="w-[390px] flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onLongScreenshot();
            }}
            disabled={screenshotStatus.loading}
            className="flex-1 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-medium shadow-lg transition-colors flex items-center justify-center gap-2"
          >
            {screenshotStatus.loading ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                生成中...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                生成长截图
              </>
            )}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              exitScreenshotMode();
            }}
            className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-medium shadow-lg transition-colors"
          >
            退出
          </button>
        </div>
      )}
    </div>
  );
});

PhoneSimulator.displayName = 'PhoneSimulator';
