import { useState } from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { facilities } from '../data';

export function Facilities() {
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);

  const handleFacilityClick = (id: string) => {
    setSelectedFacility(selectedFacility === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="relative py-24 bg-[#2F3E46]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Our Facilities</h1>
            <p className="text-[#CAD2C5] max-w-2xl mx-auto">
              Explore our diverse range of playground areas designed for children of all ages. 
              Each space is thoughtfully created to encourage play, learning, and connection with nature.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilities.map((facility) => (
                <div 
                  key={facility.id}
                  className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                    selectedFacility === facility.id ? 'ring-2 ring-[#52796F]' : 'hover:shadow-lg'
                  }`}
                  onClick={() => handleFacilityClick(facility.id)}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={facility.imageUrl} 
                      alt={facility.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#2F3E46] mb-2">
                      {facility.name}
                    </h3>
                    <p className="text-sm text-[#52796F] mb-3">
                      Recommended for: {facility.ageRange}
                    </p>
                    <p className="text-[#354F52] mb-4">
                      {facility.description}
                    </p>

                    {selectedFacility === facility.id && (
                      <div className="mt-4 pt-4 border-t border-[#CAD2C5] animate-fade-in">
                        <h4 className="font-medium text-[#2F3E46] mb-2">Additional Information</h4>
                        <p className="text-[#354F52]">
                          Our {facility.name.toLowerCase()} is designed with safety and fun in mind. 
                          Regular maintenance ensures all equipment meets the highest safety standards.
                          This area is supervised during peak hours for additional safety.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#CAD2C5]/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#2F3E46] mb-6">Facility Rentals</h2>
            <p className="text-[#354F52] max-w-2xl mx-auto mb-8">
              Looking to host a birthday party, school event, or community gathering? 
              Our playground facilities are available for reservation to ensure your special event has dedicated space.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[#52796F] text-white px-6 py-3 rounded-md hover:bg-[#354F52] transition-colors duration-200 font-medium"
            >
              Inquire About Rentals
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}