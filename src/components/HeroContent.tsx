import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const carouselItems = [
  {
    title: 'Delicious Deals Await',
    titilcoffe: 'Delicious Coffee',
    description: 'Our freshly brewed coffee and delicious pastries await you. Savor every sip and bite!',
    buttonText: 'How we do it?',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    price: 9.99,
    originalPrice: 12.49,
    discount: 20,
    modalContent: 'At Cafejungle, we use only the finest beans, freshly roasted and brewed to order. Our baristas prepare each cup with passion and precision, ensuring your coffee is as perfect as possible.'
  },
  {
    title: 'Handcrafted for Perfection',
    titilcoffe: 'Handcrafted Coffee',
    description: 'Every drink is an art form, prepared just the way you like it.',
    buttonText: 'Discover more',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    price: 8.99,
    originalPrice: 10.99,
    discount: 18,
    modalContent: 'Our expert baristas carefully craft each coffee drink, from espresso shots to frothy cappuccinos, with attention to every detail.'
  },
  {
    title: 'A Cozy Retreat',
    titilcoffe: 'Cozy Coffee',
    
    description: 'Relax and unwind in our comfortable and serene atmosphere, perfect for enjoying your favorite drink.',
    buttonText: 'See how it feels',
    imageUrl: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    price: 7.49,
    originalPrice: 9.99,
    discount: 25,
    modalContent: 'Cafejungle offers a cozy, warm atmosphere where you can catch up with friends, get some work done, or simply relax while sipping your favorite drink.'
  }
];

export function HeroContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const currentItem = carouselItems[currentIndex];

  return (
    <div className="space-y-8">
      {/* Text on left and image on right */}
      <div className="flex items-center space-x-8">
        <div className="text-white w-1/2">
          <h2 className="text-5xl font-extrabold leading-tight mb-4">{currentItem.title}</h2>
          <p className="text-white/80 text-xl mb-4">{currentItem.description}</p>
          
          <button 
            onClick={() => setShowModal(true)}
            className="text-lime-400 flex items-center space-x-2 group mt-4 hover:underline"
          >
            <span>{currentItem.buttonText}</span>
            <ChevronRight className="group-hover:translate-x-1 transition" />
          </button>
                {/* Arrow Buttons */}
      <div className="flex justify-center items-center space-x-4 mt-6">
        <button onClick={prevSlide} className="p-2 bg-emerald-800/50 rounded-full text-white hover:bg-emerald-700 transition-all transform hover:scale-110">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="p-2 bg-emerald-800/50 rounded-full text-white hover:bg-emerald-700 transition-all transform hover:scale-110">
          <ChevronRight size={24} />
        </button>
      </div>
        </div>

        {/* Image with text above */}
        <div className="w-1/2 relative">
          <img 
            src={currentItem.imageUrl}
            className="w-full h-[400px] object-cover  rounded-3xl"
            alt="Coffee Image"
          />
          <div className="absolute bottom-8 left-8 bg-black/20 backdrop-blur-md rounded-xl p-6 text-white">
            {/* Price, Discount, and Description below image */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-light">{currentItem.titilcoffe}</h3>
              
              </div>
              <span className="bg-lime-400 text-emerald-900 px-2 ml-3 py-1 rounded-full text-sm">{currentItem.discount}% OFF</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-white/60 line-through">{currentItem.originalPrice}$</span>
                <p className="text-2xl text-lime-400">{currentItem.price}$</p>
              </div>
              <button className="text-lime-400 flex items-center space-x-2">
                <span>Details</span>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>



      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-lg mx-4 relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-emerald-600 hover:text-emerald-700"
            >
              X
            </button>
            <h3 className="text-2xl font-light text-emerald-900 mb-4">How We Do It</h3>
            <p className="text-gray-600 mb-6">{currentItem.modalContent}</p>
            <button 
              onClick={() => setShowModal(false)}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
