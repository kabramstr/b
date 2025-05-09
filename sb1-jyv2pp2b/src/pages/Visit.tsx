import { CalendarCheck, Clock, Info, Shield } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { openingHours } from '../data';

export function Visit() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="relative py-24 bg-[#2F3E46]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Plan Your Visit</h1>
            <p className="text-[#CAD2C5] max-w-2xl mx-auto">
              Everything you need to know to make the most of your visit to Nature Playground
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Clock size={28} className="text-[#52796F]" />
                  <h2 className="text-2xl font-bold text-[#2F3E46]">Opening Hours</h2>
                </div>
                
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                  <table className="w-full">
                    <tbody>
                      {openingHours.map((item, index) => (
                        <tr key={index} className={index !== openingHours.length - 1 ? "border-b border-[#CAD2C5]" : ""}>
                          <td className="py-3 text-[#354F52] font-medium">{item.day}</td>
                          <td className="py-3 text-[#52796F] text-right">{item.hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-4 text-sm text-[#52796F]">
                    *We may close early during inclement weather for safety reasons. 
                    Please check our social media for real-time updates.
                  </p>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <CalendarCheck size={28} className="text-[#52796F]" />
                  <h2 className="text-2xl font-bold text-[#2F3E46]">Special Events</h2>
                </div>
                
                <div className="bg-white shadow-md rounded-lg p-6">
                  <div className="mb-6 pb-6 border-b border-[#CAD2C5]">
                    <h3 className="text-lg font-semibold text-[#2F3E46] mb-2">
                      Nature Explorers (Monthly)
                    </h3>
                    <p className="text-[#354F52] mb-1">
                      First Saturday of each month, 10:00 AM - 12:00 PM
                    </p>
                    <p className="text-[#52796F]">
                      Guided exploration of our nature trail with activities for children to learn 
                      about local plants, insects, and wildlife.
                    </p>
                  </div>
                  
                  <div className="mb-6 pb-6 border-b border-[#CAD2C5]">
                    <h3 className="text-lg font-semibold text-[#2F3E46] mb-2">
                      Family Picnic Day (Seasonal)
                    </h3>
                    <p className="text-[#354F52] mb-1">
                      Every third Sunday during summer months
                    </p>
                    <p className="text-[#52796F]">
                      Bring your own picnic and enjoy special activities, games, and entertainment 
                      throughout the playground.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-[#2F3E46] mb-2">
                      Community Clean-up Day
                    </h3>
                    <p className="text-[#354F52] mb-1">
                      Quarterly volunteer event
                    </p>
                    <p className="text-[#52796F]">
                      Join our efforts to maintain and beautify the playground. Great opportunity 
                      for families to volunteer together.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield size={28} className="text-[#52796F]" />
                  <h2 className="text-2xl font-bold text-[#2F3E46]">Playground Rules</h2>
                </div>
                
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-[#2F3E46] mb-4">
                    For the safety and enjoyment of all visitors
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#52796F] font-bold text-lg">•</span>
                      <p className="text-[#354F52]">
                        <span className="font-medium">Adult supervision required</span> for all children under 12 years of age
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#52796F] font-bold text-lg">•</span>
                      <p className="text-[#354F52]">
                        <span className="font-medium">Respect age recommendations</span> for different play areas
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#52796F] font-bold text-lg">•</span>
                      <p className="text-[#354F52]">
                        <span className="font-medium">No food or drinks</span> on play equipment (designated picnic areas available)
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#52796F] font-bold text-lg">•</span>
                      <p className="text-[#354F52]">
                        <span className="font-medium">Appropriate footwear</span> must be worn at all times
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#52796F] font-bold text-lg">•</span>
                      <p className="text-[#354F52]">
                        <span className="font-medium">Use equipment as intended</span> - no climbing on outside of structures
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#52796F] font-bold text-lg">•</span>
                      <p className="text-[#354F52]">
                        <span className="font-medium">Share and take turns</span> - be respectful of other visitors
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#52796F] font-bold text-lg">•</span>
                      <p className="text-[#354F52]">
                        <span className="font-medium">No pets allowed</span> in play areas (service animals excepted)
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#52796F] font-bold text-lg">•</span>
                      <p className="text-[#354F52]">
                        <span className="font-medium">No smoking, alcohol, or glass containers</span> on premises
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <Info size={28} className="text-[#52796F]" />
                  <h2 className="text-2xl font-bold text-[#2F3E46]">Accessibility</h2>
                </div>
                
                <div className="bg-white shadow-md rounded-lg p-6">
                  <p className="text-[#354F52] mb-4">
                    We are committed to making our playground accessible to visitors of all abilities.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#52796F] font-bold text-lg">•</span>
                      <p className="text-[#354F52]">
                        <span className="font-medium">Accessible parking spaces</span> located close to the playground entrance
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#52796F] font-bold text-lg">•</span>
                      <p className="text-[#354F52]">
                        <span className="font-medium">Paved pathways</span> throughout the playground suitable for wheelchairs and strollers
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#52796F] font-bold text-lg">•</span>
                      <p className="text-[#354F52]">
                        <span className="font-medium">Inclusive play equipment</span> designed for children of all abilities
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#52796F] font-bold text-lg">•</span>
                      <p className="text-[#354F52]">
                        <span className="font-medium">Accessible restrooms</span> available on-site
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#52796F] font-bold text-lg">•</span>
                      <p className="text-[#354F52]">
                        <span className="font-medium">Quiet space</span> available for children who need a sensory break
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}