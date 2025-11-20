export const ChatList = ({ chats }) => {
  return (
    <div className="bg-white overflow-y-auto w-full scrollbar-hide" style={{ height: 'calc(100% - 47px - 56px - 83px)' }}>
      {chats.map((chat) => (
        <div key={chat.id} className="flex h-[74px] bg-white w-full relative hover:bg-gray-50 transition-colors cursor-pointer active:bg-[#EDEDED]">
          <div className="w-[76px] h-full flex items-start pt-[12px] justify-center flex-shrink-0 pl-1">
            <div className="w-[48px] h-[48px] shadow-[0_0_1px_rgba(0,0,0,0.1)] rounded-[6px] overflow-hidden">
              <img src={chat.avatarUrl} alt={chat.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="flex-1 h-full flex flex-col pt-[14px] pr-4 min-w-0 relative">
            <div className="flex justify-between items-baseline mb-0.5">
              <h3 className="text-[16px] text-[#191919] font-normal truncate pr-2 leading-tight tracking-tight">{chat.name}</h3>
              <span className="text-[10px] text-black/30 font-normal flex-shrink-0 transform translate-y-[-2px]">{chat.time}</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[13px] text-[#B2B2B2] truncate w-full pr-6 leading-snug font-normal tracking-wide">{chat.message}</p>
            </div>
            <div className="absolute bottom-0 right-0 left-0 h-[0.5px] bg-[#E5E5E5] scale-y-50 origin-bottom"></div>
          </div>
        </div>
      ))}
      <div className="h-4 w-full bg-white"></div>
    </div>
  );
};
