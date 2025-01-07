const Banner = () => {
    return (
      <div className="relative w-full h-96 bg-[#C4A484] overflow-hidden">
        {/* Create a textured overlay effect */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.3) 100%)`
          }}
        />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 space-y-6">
          <h2 className="text-white text-4xl font-bold tracking-wider">
            WE MAKE BETTER THINGS IN A BETTER WAY
          </h2>
          
          <p className="text-white text-xl max-w-2xl">
            By looking to the world's greatest innovator—Nature—we create shoes that deliver
            unrivaled comfort that you feel good in and feel good about.
          </p>
          
          {/* Logo */}
          <div className="mt-8">
            <h3 className="text-white text-3xl font-serif italic">
              allbirds
            </h3>
            <p className="text-white text-sm tracking-wider">
              BY NATURE
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;