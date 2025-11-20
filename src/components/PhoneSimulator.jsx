import { StatusBar } from './StatusBar';
import { ChatList } from './ChatList';
import { TabBar } from './TabBar';
import { PlusIcon } from './Icons';

export const PhoneSimulator = ({ screenshotMode, exitScreenshotMode, chats, wifiStrength }) => {
  return (
    <div className="phone-container flex-shrink-0 transition-all duration-500 ease-in-out ml-8">
      <div
        className={`relative bg-white overflow-hidden transition-all duration-500 ease-in-out ${
          screenshotMode
            ? 'scale-100 cursor-pointer ring-0 shadow-none mx-auto'
            : 'ring-8 ring-black/10 rounded-[45px] shadow-phone'
        }`}
        style={{
          width: '390px',
          height: '844px',
          borderRadius: screenshotMode ? '0' : '45px',
        }}
        onClick={() => screenshotMode && exitScreenshotMode()}
      >
        <StatusBar wifiStrength={wifiStrength} />
        <div className="h-[56px] bg-[#EDEDED] px-3 flex items-center justify-between border-b border-[#dcdcdc] relative mt-[47px] z-20">
          <div className="w-[80px] flex items-center justify-start">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#111] ml-1">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <div className="font-medium text-[17px] text-[#111111] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            微信
          </div>
          <div className="w-[80px] flex justify-end items-center pr-1">
            <PlusIcon />
          </div>
        </div>
        <ChatList chats={chats} />
        <TabBar />
      </div>
    </div>
  );
};
