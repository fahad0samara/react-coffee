import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LoginForm } from './components/Auth/LoginForm';
import { ProfilePage } from './components/Profile/ProfilePage';
import { CategoryList } from './components/Menu/CategoryList';

import { MenuSection } from './components/Menu/MenuSection';
import { TestimonialSection } from './components/Testimonials/TestimonialSection';
import { OrderSteps } from './components/OrderProcess/OrderSteps';
import { CartDrawer } from './components/Cart/CartDrawer';
import { HeroContent } from './components/HeroContent';

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <RecoilRoot>
      <Router>
        <div className="min-h-screen bg-emerald-900">
         <Navbar onCartClick={() => setIsCartOpen(true)} />
          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <Routes>
            <Route path="/" element={
              <main className="container mx-auto px-6 pt-12">
                <div className=" lg:grid-cols-2 gap-12">
                     
                  <HeroContent />
              
                </div>
                
                <section id="categories" className="mt-20">
                  <h2 className="text-4xl text-white font-light mb-8">Categories</h2>
                  <CategoryList />
                </section>

                <MenuSection />
                <TestimonialSection />
                <OrderSteps />
                
     
                
                <section id="contact" className="mt-20">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-12 text-white">
                    <h2 className="text-4xl font-light mb-6">Contact Us</h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="Name"
                        className="bg-white/20 rounded-lg p-3 text-white placeholder:text-white/60"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="bg-white/20 rounded-lg p-3 text-white placeholder:text-white/60"
                      />
                      <textarea
                        placeholder="Message"
                        className="bg-white/20 rounded-lg p-3 text-white placeholder:text-white/60 md:col-span-2"
                        rows={4}
                      />
                      <button
                        type="submit"
                        className="bg-lime-400 text-emerald-900 py-3 px-6 rounded-lg hover:bg-lime-500 transition md:col-span-2"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </section>
              </main>
            } />
            <Route path="/login" element={
              <div className="min-h-screen flex items-center justify-center">
                <LoginForm />
              </div>
            } />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
          
          <Footer />
          <Toaster position="top-right" />
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;