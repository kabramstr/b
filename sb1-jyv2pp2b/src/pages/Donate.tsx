import { CreditCard, Heart, Users } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export function Donate() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="relative py-24 bg-[#2F3E46]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Support Our Playground</h1>
            <p className="text-[#CAD2C5] max-w-2xl mx-auto">
              Your contributions help us maintain and improve our playground, ensuring it remains a safe and 
              enjoyable space for children for years to come.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-[#2F3E46] mb-6 text-center">
                Why Your Support Matters
              </h2>
              <p className="text-[#354F52] mb-6">
                Nature Playground is a community-supported space that relies on donations to maintain our facilities, 
                enhance play areas, and provide free programming for children of all backgrounds. Your contribution,
                no matter the size, makes a direct impact on the quality and accessibility of our playground.
              </p>
              <p className="text-[#354F52]">
                As a registered non-profit organization, all donations are tax-deductible. We are committed to 
                transparency in how funds are used and the impact they create in our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#84A98C]/20 rounded-full flex items-center justify-center mb-4">
                  <Heart size={32} className="text-[#52796F]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2F3E46] mb-3">
                  One-time Donation
                </h3>
                <p className="text-[#354F52] mb-6">
                  Make a single contribution of any amount to support our current projects and maintenance needs.
                </p>
                <div className="grid grid-cols-3 gap-2 w-full mb-6">
                  {['$10', '$25', '$50', '$100', '$250', 'Other'].map((amount) => (
                    <button
                      key={amount}
                      className="bg-[#CAD2C5]/20 hover:bg-[#84A98C]/20 text-[#354F52] py-2 rounded transition-colors"
                    >
                      {amount}
                    </button>
                  ))}
                </div>
                <button className="w-full bg-[#52796F] text-white py-3 rounded-md hover:bg-[#354F52] transition-colors font-medium">
                  Donate Now
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center border-2 border-[#84A98C] relative">
                <div className="absolute -top-4 bg-[#84A98C] text-[#2F3E46] px-4 py-1 rounded-full font-medium text-sm">
                  Most Popular
                </div>
                <div className="w-16 h-16 bg-[#84A98C]/20 rounded-full flex items-center justify-center mb-4">
                  <CreditCard size={32} className="text-[#52796F]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2F3E46] mb-3">
                  Monthly Support
                </h3>
                <p className="text-[#354F52] mb-6">
                  Become a playground patron with a recurring monthly donation that provides sustainable support.
                </p>
                <div className="grid grid-cols-3 gap-2 w-full mb-6">
                  {['$5', '$10', '$15', '$25', '$50', 'Other'].map((amount) => (
                    <button
                      key={amount}
                      className="bg-[#CAD2C5]/20 hover:bg-[#84A98C]/20 text-[#354F52] py-2 rounded transition-colors"
                    >
                      {amount}
                    </button>
                  ))}
                </div>
                <button className="w-full bg-[#84A98C] text-[#2F3E46] py-3 rounded-md hover:bg-[#52796F] hover:text-white transition-colors font-medium">
                  Become a Patron
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#84A98C]/20 rounded-full flex items-center justify-center mb-4">
                  <Users size={32} className="text-[#52796F]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2F3E46] mb-3">
                  Corporate Sponsorship
                </h3>
                <p className="text-[#354F52] mb-6">
                  Partner with us as a business to make a significant impact while gaining recognition in our community.
                </p>
                <ul className="text-left text-[#354F52] mb-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#52796F] font-bold">•</span>
                    <span>Logo placement on playground signage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#52796F] font-bold">•</span>
                    <span>Recognition on our website and social media</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#52796F] font-bold">•</span>
                    <span>Special access to host company events</span>
                  </li>
                </ul>
                <button className="w-full bg-[#52796F] text-white py-3 rounded-md hover:bg-[#354F52] transition-colors font-medium">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="bg-[#CAD2C5]/20 rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#2F3E46] mb-6 text-center">
                How Your Donation Helps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#2F3E46] mb-4">
                    Current Projects
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#52796F] font-bold">•</span>
                      <div>
                        <p className="font-medium text-[#354F52]">Accessible Swing Installation</p>
                        <p className="text-[#52796F]">Adding specialized swings for children with mobility challenges</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#52796F] font-bold">•</span>
                      <div>
                        <p className="font-medium text-[#354F52]">Nature Trail Expansion</p>
                        <p className="text-[#52796F]">Extending our educational trail with new native plant species</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#52796F] font-bold">•</span>
                      <div>
                        <p className="font-medium text-[#354F52]">Shade Structure Installation</p>
                        <p className="text-[#52796F]">Adding additional sun protection over play areas</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2F3E46] mb-4">
                    Annual Expenses
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#52796F] font-bold">•</span>
                      <div>
                        <p className="font-medium text-[#354F52]">Regular Maintenance</p>
                        <p className="text-[#52796F]">Ensuring all equipment meets safety standards</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#52796F] font-bold">•</span>
                      <div>
                        <p className="font-medium text-[#354F52]">Free Community Programs</p>
                        <p className="text-[#52796F]">Educational workshops and family events</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#52796F] font-bold">•</span>
                      <div>
                        <p className="font-medium text-[#354F52]">Landscaping & Gardens</p>
                        <p className="text-[#52796F]">Maintaining our green spaces and garden areas</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#52796F] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Other Ways to Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#354F52] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Volunteer Your Time</h3>
                <p className="text-[#CAD2C5] mb-4">
                  Join our team of volunteers for maintenance days, events, and educational programs.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-white text-[#2F3E46] px-4 py-2 rounded-md hover:bg-[#CAD2C5] transition-colors duration-200 font-medium"
                >
                  Learn More
                </a>
              </div>
              
              <div className="bg-[#354F52] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">In-Kind Donations</h3>
                <p className="text-[#CAD2C5] mb-4">
                  Donate materials, plants, equipment, or professional services to support our playground.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-white text-[#2F3E46] px-4 py-2 rounded-md hover:bg-[#CAD2C5] transition-colors duration-200 font-medium"
                >
                  Contact Us
                </a>
              </div>
              
              <div className="bg-[#354F52] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Spread the Word</h3>
                <p className="text-[#CAD2C5] mb-4">
                  Follow us on social media and share our mission with friends and family in the community.
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="#" 
                    className="text-white hover:text-[#CAD2C5] transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-white hover:text-[#CAD2C5] transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-white hover:text-[#CAD2C5] transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
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