// Icon Components
export const SignalIcon = () => (
  <div className="flex items-end gap-[1px] h-[10px]">
    <div className="w-[3px] h-[6px] bg-black rounded-[1px]"></div>
    <div className="w-[3px] h-[8px] bg-black rounded-[1px]"></div>
    <div className="w-[3px] h-[10px] bg-black rounded-[1px]"></div>
    <div className="w-[3px] h-[12px] bg-black rounded-[1px]"></div>
  </div>
);

export const WifiIcon = ({ strength = 3 }) => (
  <svg width="19" height="15" viewBox="0 0 20 16" fill="black" className="ml-0.5">
    <path d="M9.99305 14.2154C10.3252 14.5287 10.8462 14.512 11.1581 14.1785L12.2228 13.0402C12.5283 12.7135 12.5145 12.2033 12.1921 11.8943C11.6006 11.3272 10.8079 11.0011 9.99453 11.0011C9.18966 11.0011 8.40448 11.3211 7.81544 11.8807C7.48944 12.1904 7.47551 12.7025 7.78306 13.0285L8.83965 14.1487C9.15433 14.4823 9.67719 14.5007 10.0109 14.1888L9.99305 14.2154Z" />
    <path opacity={strength >= 2 ? "1" : "0.3"} fillRule="evenodd" clipRule="evenodd" d="M9.99453 8.49038C8.14769 8.49038 6.43186 9.03507 4.98618 9.96667C4.63199 10.1949 4.1606 10.1311 3.87749 9.81884L3.03062 8.88504C2.73022 8.55382 2.74653 8.04952 3.0674 7.73839C4.94327 5.91941 7.37294 4.9052 9.99453 4.9052C12.626 4.9052 15.0649 5.92666 16.9442 7.75666C17.2629 8.067 17.2773 8.56943 16.9785 8.89928L16.1304 9.83541C15.8476 10.1476 15.3759 10.2119 15.0212 9.98404C13.5675 9.05024 11.8451 8.49038 9.99453 8.49038Z" />
    <path opacity={strength >= 3 ? "1" : "0.3"} fillRule="evenodd" clipRule="evenodd" d="M9.99453 2.25C6.60197 2.25 3.46066 3.34448 0.89216 5.21955C0.548715 5.47026 0.0878287 5.42901 0.788039 5.11981L-0.0091586 4.18802C-0.306545 3.84039 -0.272053 3.32234 0.0654386 3.01024C3.02383 0.274142 6.42225 0 9.99453 0C13.5258 0 16.9404 0.26889 19.9363 3.0306C20.2739 3.34191 20.3093 3.86006 20.0128 4.20822L19.2101 5.15092C18.9229 5.48813 18.4383 5.54123 18.087 5.27224C15.7445 3.4785 12.9672 2.25 9.99453 2.25Z" />
  </svg>
);

export const BatteryIcon = () => (
  <div className="relative flex items-center ml-0.5">
    <div className="w-[22px] h-[11px] rounded-[2.5px] border border-[#333] border-opacity-40 flex items-center p-[1px]">
      <div className="w-full h-full bg-black rounded-[1.5px]"></div>
    </div>
    <div className="w-[1.5px] h-[4px] bg-[#333] bg-opacity-40 rounded-r-sm translate-x-[-0.5px]"></div>
  </div>
);

export const PlusIcon = () => (
  <div className="rounded-full border-[1.3px] border-[#111] p-[3px] opacity-90">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  </div>
);

export const TabWeChat = ({ active }) => (
  <svg viewBox="0 0 24 24" className={`w-full h-full ${active ? 'text-[#07C160] fill-current' : 'text-black fill-current'}`}>
    <path d="M12 2C6.5 2 2 6 2 11c0 2.2 1 4.2 2.6 5.7L3.5 20l4-2c1.5 0.7 3.2 1 5 1c5.5 0 10-4 10-9S17.5 2 12 2z"/>
  </svg>
);

export const RefreshIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 2v6h-6"></path>
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
    <path d="M3 22v-6h6"></path>
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
  </svg>
);

export const CameraIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
    <circle cx="12" cy="13" r="3"></circle>
  </svg>
);

export const SettingsIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

export const InfoIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

export const UsersIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

export const CompassIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
  </svg>
);

export const UserIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export const GitHubIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
