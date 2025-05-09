import { facilities } from '../data';

export function FacilitiesSection() {
  const displayedFacilities = facilities.slice(0, 3);
  
  return (
    <section className="py-16 bg-[#CAD2C5]/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2F3E46] mb-4">
            Our Playground Facilities
          </h2>
          <p className="text-[#354F52] max-w-2xl mx-auto">
            Discover our diverse range of play areas designed for children of all ages and abilities. 
            Our playground promotes active play, creativity, and connection with nature.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedFacilities.map((facility) => (
            <div 
              key={facility.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={facility.imageUrl} 
                  alt={facility.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2F3E46] mb-2">
                  {facility.name}
                </h3>
                <p className="text-sm text-[#52796F] mb-3">
                  Recommended for: {facility.ageRange}
                </p>
                <p className="text-[#354F52] mb-4">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="/facilities" 
            className="inline-block bg-[#52796F] text-white px-6 py-3 rounded-md hover:bg-[#354F52] transition-colors duration-200 font-medium"
          >
            View All Facilities
          </a>
        </div>
      </div>
    </section>
  );
}