import { TabWeChat, UsersIcon, CompassIcon, UserIcon } from './Icons';

export const TabBar = () => {
  return (
    <div className="h-[83px] bg-[#F7F7F7] border-t-[0.5px] border-[#B2B2B2]/50 flex items-start pt-[6px] justify-around absolute bottom-0 w-full z-20 pb-8 backdrop-blur-xl bg-opacity-95">
      <div className="flex flex-col items-center gap-0.5 w-16 cursor-pointer group relative">
        <div className="relative w-7 h-7">
          <TabWeChat active={true} />
        </div>
        <span className="text-[10px] font-medium text-[#07C160] scale-[0.9]">微信</span>
      </div>
      <div className="flex flex-col items-center gap-0.5 w-16 cursor-pointer group opacity-90">
        <div className="w-7 h-7 flex items-center justify-center text-[#111]">
          <UsersIcon size={24} />
        </div>
        <span className="text-[10px] font-medium text-[#111] scale-[0.9]">通讯录</span>
      </div>
      <div className="flex flex-col items-center gap-0.5 w-16 cursor-pointer group opacity-90">
        <div className="w-7 h-7 flex items-center justify-center text-[#111]">
          <CompassIcon size={24} />
        </div>
        <span className="text-[10px] font-medium text-[#111] scale-[0.9]">发现</span>
      </div>
      <div className="flex flex-col items-center gap-0.5 w-16 cursor-pointer group opacity-90">
        <div className="w-7 h-7 flex items-center justify-center text-[#111]">
          <UserIcon size={24} />
        </div>
        <span className="text-[10px] font-medium text-[#111] scale-[0.9]">我</span>
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-[#111] rounded-full z-30"></div>
    </div>
  );
};
