import { useState } from 'react';

const ChatItem = ({ chat, screenshotMode }) => {
  const [avatarUrl, setAvatarUrl] = useState(chat.avatarUrl);
  const [retryCount, setRetryCount] = useState(0);

  const handleImageError = () => {
    if (retryCount < 3) {
      const newSeed = Math.floor(Math.random() * 1000000);
      // Replace the seed part in the URL to get a new image
      // URL format example: https://picsum.photos/seed/12345-0/100/100
      const newUrl = avatarUrl.replace(/\/seed\/[^/]+/, `/seed/${newSeed}`);
      setAvatarUrl(newUrl);
      setRetryCount(prev => prev + 1);
      console.log(`Retrying image for ${chat.name} (${retryCount + 1}/3)`);
    }
  };

  return (
    <div className="flex h-[74px] bg-white w-full relative hover:bg-gray-50 transition-colors cursor-pointer active:bg-[#EDEDED]">
      <div className="w-[76px] h-full flex items-start pt-[12px] justify-center flex-shrink-0 pl-1">
        <div className="w-[48px] h-[48px] shadow-[0_0_1px_rgba(0,0,0,0.1)] rounded-[6px] overflow-hidden bg-gray-100">
          <img 
            src={avatarUrl} 
            alt={chat.name} 
            className="w-full h-full object-cover" 
            loading="lazy" 
            crossOrigin="anonymous"
            onError={handleImageError}
          />
        </div>
      </div>
      <div className="flex-1 h-full flex flex-col pt-[14px] pr-4 min-w-0 relative">
        <div className="flex justify-between items-baseline mb-0.5">
          <h3 className={`text-[16px] text-[#191919] font-normal pr-2 leading-tight tracking-tight ${!screenshotMode && 'truncate'}`} style={screenshotMode ? { overflow: 'visible', textOverflow: 'clip', whiteSpace: 'nowrap', display: 'block', maxWidth: 'none' } : {}}>{chat.name}</h3>
          <span className="text-[10px] text-black/30 font-normal flex-shrink-0" style={{ marginTop: '-2px' }}>{chat.time}</span>
        </div>
        <div className="flex justify-between items-center">
          <p className={`text-[13px] text-[#B2B2B2] w-full pr-6 leading-snug font-normal tracking-wide ${!screenshotMode && 'truncate'}`} style={screenshotMode ? { overflow: 'visible', textOverflow: 'clip', whiteSpace: 'nowrap', display: 'block', maxWidth: 'none' } : {}}>{chat.message}</p>
        </div>
        <div className="absolute bottom-0 right-0 left-0 h-[0.33px] bg-[#E5E5E5]"></div>
      </div>
    </div>
  );
};

export const ChatList = ({ chats, screenshotMode = false }) => {
  return (
    <div 
      className="bg-white w-full scrollbar-hide" 
      style={{ 
        height: screenshotMode ? 'auto' : 'calc(100% - 47px - 56px - 83px)',
        overflow: screenshotMode ? 'visible' : 'auto',
      }}
    >
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} screenshotMode={screenshotMode} />
      ))}
      <div className={`w-full bg-white ${screenshotMode ? 'h-[80px]' : 'h-4'}`}></div>
    </div>
  );
};
