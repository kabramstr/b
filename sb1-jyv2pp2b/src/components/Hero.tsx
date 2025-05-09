export function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-[#2F3E46]/70"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Welcome to Nature Playground
            </h1>
            <p className="text-xl text-[#CAD2C5] mb-8 animate-fade-in animation-delay-100">
              A safe and inclusive space for children of all ages to play, explore, and connect with nature
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-200">
              <a 
                href="/facilities" 
                className="bg-[#84A98C] text-[#2F3E46] px-6 py-3 rounded-md hover:bg-[#52796F] hover:text-white transition-colors duration-200 font-medium"
              >
                Explore Facilities
              </a>
              <a 
                href="/visit" 
                className="bg-transparent border-2 border-[#CAD2C5] text-[#CAD2C5] px-6 py-3 rounded-md hover:bg-[#CAD2C5]/10 transition-colors duration-200 font-medium"
              >
                Plan Your Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}