import { useState } from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after successful submission
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="relative py-24 bg-[#2F3E46]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-[#CAD2C5] max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formSubmitted && (
                    <div className="bg-[#84A98C]/20 border border-[#84A98C] text-[#2F3E46] px-4 py-3 rounded-md mb-4 animate-fade-in">
                      <p className="font-medium">Thank you for your message!</p>
                      <p>We'll get back to you as soon as possible.</p>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-[#354F52] font-medium mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-[#CAD2C5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#52796F]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[#354F52] font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-[#CAD2C5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#52796F]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-[#354F52] font-medium mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-[#CAD2C5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#52796F]"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Facility Rental">Facility Rental</option>
                      <option value="Volunteering">Volunteering</option>
                      <option value="Donation Question">Donation Question</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-[#354F52] font-medium mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-[#CAD2C5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#52796F]"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-[#52796F] text-white px-6 py-3 rounded-md hover:bg-[#354F52] transition-colors duration-200 font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-6">Contact Information</h2>
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#2F3E46] mb-2">Address</h3>
                    <p className="text-[#354F52]">
                      123 Nature Way<br />
                      Green Park City, GPC 12345
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#2F3E46] mb-2">Phone</h3>
                    <p className="text-[#354F52]">(555) 123-4567</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#2F3E46] mb-2">Email</h3>
                    <p className="text-[#354F52]">info@natureplayground.com</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-[#2F3E46] mb-2">Social Media</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="text-[#52796F] hover:text-[#2F3E46] transition-colors"
                        aria-label="Facebook"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="text-[#52796F] hover:text-[#2F3E46] transition-colors"
                        aria-label="Instagram"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="text-[#52796F] hover:text-[#2F3E46] transition-colors"
                        aria-label="Twitter"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#CAD2C5]/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#2F3E46] mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-[#354F52] mb-1">Is admission free?</h4>
                      <p className="text-[#52796F]">
                        Yes, admission to the playground is completely free and open to the public.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#354F52] mb-1">Do you have restrooms available?</h4>
                      <p className="text-[#52796F]">
                        Yes, clean restrooms with changing stations are available on-site.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#354F52] mb-1">Can I host a birthday party at the playground?</h4>
                      <p className="text-[#52796F]">
                        Yes, we offer facility rentals for birthdays and events. Contact us for details.
                      </p>
                    </div>
                  </div>
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