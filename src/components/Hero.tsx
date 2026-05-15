export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex flex-col bg-black overflow-hidden pt-28 md:pt-32">
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

      <div className="relative z-10 flex-grow px-8 md:px-12 lg:px-16 flex flex-col pt-0 md:pt-4">
        {/* Upper Left: Visual Marketing Designer */}
        <div className="max-w-fit">
          <h1 className="text-[125.37px] leading-[108.71px] font-normal text-white tracking-[-0.05em] font-['Arial'] text-left ml-[52px] mt-[-55px] border-0 border-solid rounded-none">
            Visual<br />
            marketing<br />
            designer
          </h1>
        </div>

        {/* Tagline */}
        <div className="absolute bottom-[23vw] md:bottom-[21vw] left-1/2 md:left-[55%] lg:left-[60%] -translate-x-1/2 md:translate-x-0 z-10 w-full max-w-[280px] md:max-w-md mt-auto mb-4 px-4 md:px-0">
          <p className="text-white text-[27px] leading-[35.5px] font-normal tracking-tight opacity-90 text-right mt-0 pl-0 pt-0 pr-0 pb-0 mb-[-52px] ml-0 mr-[-80px]">
            trusted by regional brands and agencies,<br />
            “turning their vision into visuals”
          </p>
        </div>
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
