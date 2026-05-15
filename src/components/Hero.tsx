export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex flex-col bg-black overflow-hidden pt-32 md:pt-40">
      {/* Decorative SVG Lines */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden h-full w-full">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="w-full h-full opacity-30">
          {/* Top Curves */}
          <path d="M470,0 C650,150 850,250 1050,100" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M520,0 C700,250 900,350 1050,200" stroke="white" strokeWidth="0.5" fill="none" />
          
          {/* Main diagonal cross lines */}
          <line x1="500" y1="900" x2="1100" y2="150" stroke="white" strokeWidth="0.5" />
          <line x1="450" y1="1000" x2="1150" y2="300" stroke="white" strokeWidth="0.5" />
          
          {/* Rectangular element on the right */}
          <rect x="768" y="290" width="158" height="260" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 flex-grow px-8 md:px-12 lg:px-16 flex flex-col">
      </div>

      {/* Large Name Text Typography Grounded at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none select-none z-0">
        <div className="relative h-[22vw] md:h-[20vw] flex items-end justify-center">
          {/* Subtle "RAWAT" background */}
          <div className="absolute bottom-0 left-[52%] -translate-x-1/2 w-full text-center">
             <span className="text-[25vw] font-medium text-white/[0.03] tracking-tighter block translate-y-[10%]">RAWAT</span>
          </div>
          {/* Stark "VIKRAM" foreground - positioned with less translation to stay grounded */}
          <div className="relative w-full text-center">
            <h2 className="text-[28vw] md:text-[25vw] font-medium text-white tracking-tighter translate-y-[12%] inline-block">
              VIKRAM
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
