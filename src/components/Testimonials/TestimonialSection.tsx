
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    text: 'The best coffee Ive ever had! The atmosphere is perfect for both work and relaxation.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    text: 'Their cold brew is absolutely amazing. I come here every morning before work.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    text: 'Great selection of pastries and the staff is always friendly. Highly recommend!',
    rating: 5
  }
];

export function TestimonialSection() {
  return (
    <section className="mt-20">
      <h2 className="text-4xl text-white font-light mb-8">What Our Customers Say</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <div className="flex items-center mb-4">
          
              <div>
                <h3 className="text-white font-light">{testimonial.name}</h3>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-white/80">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}