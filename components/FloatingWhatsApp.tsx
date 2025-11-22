
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group animate-fade-in"
      aria-label="Chat on WhatsApp"
    >
      {/* Ping Animation */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
      
      {/* Icon */}
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current relative z-10">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.932.513 1.745.709 2.799.709 3.181 0 5.768-2.587 5.768-5.766.001-3.181-2.585-5.767-5.767-5.767zm.612 10.03c-.826.001-1.596-.227-2.305-.621l-1.657.435.442-1.615c-.452-.717-.69-1.508-.69-2.463.001-2.51 2.044-4.553 4.555-4.553 2.511 0 4.553 2.043 4.553 4.552 0 2.511-2.042 4.553-4.551 4.553zm2.52-3.412c-.14-.07-.826-.408-.954-.454-.128-.047-.221-.07-.314.07-.093.14-.361.454-.442.547-.082.093-.163.105-.303.035-.14-.07-.59-.218-1.124-.693-.418-.372-.7-.831-.782-.971-.082-.14-.009-.216.061-.286.063-.063.14-.163.21-.245.07-.082.093-.14.14-.233.047-.093.023-.175-.012-.245-.035-.07-.314-.757-.43-1.036-.113-.271-.227-.234-.314-.239-.082-.004-.175-.004-.268-.004-.093 0-.245.035-.373.175-.128.14-.489.477-.489 1.164 0 .687.501 1.351.571 1.444.07.093.985 1.504 2.387 2.109 1.402.605 1.402.403 1.658.378.256-.024.826-.337.942-.663.117-.326.117-.606.082-.663-.035-.058-.128-.093-.268-.163z"/>
      </svg>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded-lg shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us!
      </span>
    </a>
  );
};
