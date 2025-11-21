import { useState, useEffect } from 'react';
import { SignalIcon, WifiIcon, BatteryIcon } from './Icons';

const getCurrentTime = () => {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
};

export const StatusBar = ({ wifiStrength = 3 }) => {
  const [time, setTime] = useState(getCurrentTime());
  
  useEffect(() => {
    const interval = setInterval(() => setTime(getCurrentTime()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[47px] px-6 flex items-end justify-between select-none absolute top-0 w-full z-30 overflow-hidden">
      <div className="font-semibold text-black text-[16px] leading-none mb-[10px] font-ios tracking-tight w-[80px]">
        {time}
      </div>
      <div className="flex items-center gap-[6px] text-black mb-[10px]">
        <SignalIcon />
        <WifiIcon strength={wifiStrength} />
        <BatteryIcon />
      </div>
    </div>
  );
};
