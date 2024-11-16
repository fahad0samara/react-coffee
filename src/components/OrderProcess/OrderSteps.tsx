import React from 'react';
import { Coffee, Settings, CreditCard, Coffee as CoffeeIcon } from 'lucide-react';

const steps = [
  {
    icon: Coffee,
    title: 'Select Your Coffee',
    description: 'Browse our menu and choose your favorite drinks'
  },
  {
    icon: Settings,
    title: 'Customize Your Order',
    description: 'Adjust size, strength, and add extras to your taste'
  },
  {
    icon: CreditCard,
    title: 'Checkout',
    description: 'Securely pay for your order online'
  },
  {
    icon: CoffeeIcon,
    title: 'Enjoy!',
    description: 'Pick up your perfectly crafted coffee and enjoy'
  }
];

export function OrderSteps() {
  return (
    <section className="mt-20">
      <h2 className="text-4xl text-white font-light mb-8">How to Order</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <step.icon size={32} className="text-emerald-900" />
            </div>
            <h3 className="text-xl text-white font-light mb-2">{step.title}</h3>
            <p className="text-white/80">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}