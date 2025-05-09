import { testimonials } from '../data';

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-[#52796F] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Visitors Say</h2>
          <p className="text-[#CAD2C5] max-w-2xl mx-auto">
            Hear from families and educators who have experienced our playground
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-[#354F52] p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <svg className="h-8 w-8 text-[#84A98C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-[#CAD2C5] mb-4 italic">
                {testimonial.text}
              </p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-[#84A98C]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}