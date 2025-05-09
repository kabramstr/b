import { Clock, Map, Shield } from 'lucide-react';
import { openingHours } from '../data';

export function VisitInfoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2F3E46] mb-4">Plan Your Visit</h2>
          <p className="text-[#354F52] max-w-2xl mx-auto">
            Everything you need to know before visiting our playground
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#CAD2C5]/20 p-6 rounded-lg">
            <div className="mb-4 flex justify-center">
              <Clock size={48} className="text-[#52796F]" />
            </div>
            <h3 className="text-xl font-semibold text-[#2F3E46] mb-4 text-center">
              Opening Hours
            </h3>
            <ul className="space-y-2">
              {openingHours.map((item, index) => (
                <li key={index} className="flex justify-between text-[#354F52]">
                  <span>{item.day}</span>
                  <span className="font-medium">{item.hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[#52796F]">
              *Hours may vary during special events and holidays
            </p>
          </div>
          
          <div className="bg-[#CAD2C5]/20 p-6 rounded-lg">
            <div className="mb-4 flex justify-center">
              <Map size={48} className="text-[#52796F]" />
            </div>
            <h3 className="text-xl font-semibold text-[#2F3E46] mb-4 text-center">
              Location &amp; Directions
            </h3>
            <p className="text-[#354F52] mb-4">
              123 Nature Way<br />
              Green Park City, GPC 12345
            </p>
            <div className="mb-4 h-48 bg-[#84A98C]/30 rounded flex items-center justify-center">
              <p className="text-[#52796F]">Interactive Map Placeholder</p>
            </div>
            <p className="text-[#354F52] mb-2">
              <span className="font-medium">By Car:</span> Free parking available on-site
            </p>
            <p className="text-[#354F52]">
              <span className="font-medium">Public Transit:</span> Bus routes 12, 15, and 28 stop nearby
            </p>
          </div>
          
          <div className="bg-[#CAD2C5]/20 p-6 rounded-lg">
            <div className="mb-4 flex justify-center">
              <Shield size={48} className="text-[#52796F]" />
            </div>
            <h3 className="text-xl font-semibold text-[#2F3E46] mb-4 text-center">
              Playground Rules
            </h3>
            <ul className="text-[#354F52] space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#52796F] font-bold">•</span>
                <span>Adult supervision required for all children</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#52796F] font-bold">•</span>
                <span>No food or drinks on play equipment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#52796F] font-bold">•</span>
                <span>Appropriate footwear must be worn</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#52796F] font-bold">•</span>
                <span>Use equipment as intended</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#52796F] font-bold">•</span>
                <span>Be respectful of other visitors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#52796F] font-bold">•</span>
                <span>No pets allowed in play areas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#52796F] font-bold">•</span>
                <span>No smoking or alcohol on premises</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}