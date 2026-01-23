import { ReactNode } from "react";

interface PhoneMockupProps {
  image?: string;
  className?: string;
}

export function PhoneMockup({ image, className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Phone Frame */}
      <div
        className="relative mx-auto"
        style={{ width: "260px", height: "540px" }}
      >
        {/* Outer Body */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2.75rem] shadow-2xl">
          
          {/* Screen */}
          <div className="absolute inset-[12px] bg-black rounded-[2.25rem] overflow-hidden">
            
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10" />

            {/* Screen Content */}
            <div className="relative w-full h-full overflow-hidden">
              {image && (
                <img
                  src={image}
                  alt="App Screenshot"
                  className="w-full h-full object-cover object-top"
                />
              )}
            </div>
          </div>

          {/* Side Buttons */}
          <div className="absolute right-0 top-28 w-1 h-12 bg-gray-700 rounded-l" />
          <div className="absolute right-0 top-44 w-1 h-8 bg-gray-700 rounded-l" />
          <div className="absolute left-0 top-36 w-1 h-10 bg-gray-700 rounded-r" />
        </div>
      </div>
    </div>
  );
}
