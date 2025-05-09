export function DonationSection() {
  return (
    <section className="py-16 bg-[#354F52] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Playground</h2>
          <p className="text-[#CAD2C5] mb-8">
            Your donations help us maintain and improve our playground, ensuring it remains a vibrant 
            community space for generations to come. Every contribution makes a difference!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#2F3E46] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">One-time Gift</h3>
              <p className="text-[#CAD2C5] mb-4 text-sm">
                Make a one-time donation of any amount to support our current projects.
              </p>
              <a 
                href="/donate" 
                className="inline-block bg-[#84A98C] text-[#2F3E46] px-4 py-2 rounded-md hover:bg-[#52796F] hover:text-white transition-colors duration-200 font-medium"
              >
                Donate Now
              </a>
            </div>
            
            <div className="bg-[#2F3E46] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Monthly Support</h3>
              <p className="text-[#CAD2C5] mb-4 text-sm">
                Become a playground patron with a recurring monthly donation.
              </p>
              <a 
                href="/donate" 
                className="inline-block bg-[#84A98C] text-[#2F3E46] px-4 py-2 rounded-md hover:bg-[#52796F] hover:text-white transition-colors duration-200 font-medium"
              >
                Join Program
              </a>
            </div>
            
            <div className="bg-[#2F3E46] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Corporate Sponsors</h3>
              <p className="text-[#CAD2C5] mb-4 text-sm">
                Support as a business and get recognition in our playground.
              </p>
              <a 
                href="/donate" 
                className="inline-block bg-[#84A98C] text-[#2F3E46] px-4 py-2 rounded-md hover:bg-[#52796F] hover:text-white transition-colors duration-200 font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <p className="text-sm text-[#CAD2C5]">
            Nature Playground is a registered 501(c)(3) nonprofit organization. 
            All donations are tax-deductible to the extent allowed by law.
          </p>
        </div>
      </div>
    </section>
  );
}