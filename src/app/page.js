"use client";
import React, { useState } from 'react';
import { Menu, X, Plus } from 'lucide-react';
import Marquee from "react-fast-marquee";


export default function DessoBuildLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(1);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">DessoBuild</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/architects" className="text-gray-700 hover:text-gray-900 text-[15px] font-medium transition-colors">
                Architects
              </a>
              <a href="/architects" className="text-gray-700 hover:text-gray-900 text-[15px] font-medium transition-colors">
                Interior Designers
              </a>
              <a href="/architects" className="text-gray-700 hover:text-gray-900 text-[15px] font-medium transition-colors">
                Vastu-Experts
              </a>
              <a href="/contact" className="text-gray-700 hover:text-gray-900 text-[15px] font-medium transition-colors">
                Contact Us
              </a>
            </div>

            {/* Get Started Button - Desktop */}
            <div className="hidden lg:block">
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-[15px]">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-1">
              <a
                href="#architects"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Architects
              </a>
              <a
                href="#designers"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Interior Designers
              </a>
              <a
                href="#vastu"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Vastu-Experts
              </a>
              <a
                href="#contact"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
              <div className="pt-3">
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full mb-6">
            <span className="text-blue-600 text-sm">✨ SMART CONSTRUCTION SOLUTIONS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Be Smart. Build Smart.<br />Build Better.
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto mb-8 px-4">
            Connect with top architects, interior designers, and Vastu consultants to transform your vision into reality.
            Experience seamless project management from concept to completion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 w-full sm:w-auto">
              Find an Expert
            </button>
            <button className="bg-white text-gray-700 px-8 py-3 rounded-md border-2 border-gray-300 hover:border-gray-400 w-full sm:w-auto">
              Join as Expert
            </button>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <div className="h-48 bg-gray-200">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" alt="Architects" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 bg-blue-50">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Architects</h3>
              <p className="text-gray-600">
                Professional architects to design your dream spaces with precision and creativity.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <div className="h-48 bg-gray-200">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=300&fit=crop" alt="Interior Designers" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 bg-purple-50">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interior Designers</h3>
              <p className="text-gray-600">
                Expert interior designers to create beautiful and functional living spaces.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition sm:col-span-2 lg:col-span-1">
            <div className="h-48 bg-gray-200">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop" alt="Vastu Experts" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 bg-yellow-50">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vastu Experts</h3>
              <p className="text-gray-600">
                Certified Vastu consultants to ensure positive energy and harmony in your space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How DessoBuilds Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Thousands of professionals have already found the right job with us faster, easier, and with less stress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Choose a Category</h3>
              <p className="text-gray-600">
                Find the right expert, connect towards, and start building smarter — all in just a few clicks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Select an Expert</h3>
              <p className="text-gray-600">
                Whether you&apos;re seeking architectural advice or interior design help, getting started is easy and seamless.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Start the Conversation</h3>
              <p className="text-gray-600">
                Connect with trusted Architects, Designers, and Vastu-Experts — from vision to reality, get paired with the right solution faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-blue-600 rounded-2xl p-8 sm:p-12 lg:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Smarter Collaboration.<br />Faster Results.
          </h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-8">
            Discover the easy route to expert insights, and inspiring advice from Architects, Interior Designers, and Vastu-Experts right into transforming modern design and perfecting the way our everyday spaces, without without being neglected.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 font-semibold">
            Get Started
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Got Questions? We&apos;ve Got Answer
            </h2>
            <p className="text-gray-600 text-lg">
              Find quick answers to the most common questions about our platform and how we can help you build your dream project
            </p>
          </div>

          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="border rounded-lg">
                <button
                  className="w-full flex justify-between items-center p-4 sm:p-6 text-left hover:bg-gray-50"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900">
                    What is DessoBuild and how it works?
                  </span>
                  <Plus
                    className={`transform transition-transform ${openFaq === index ? 'rotate-45' : ''
                      }`}
                    size={20}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600">
                    {index === 1 ? (
                      <p>
                        We offer a range of real options, including eco-friendly materials, sustainable construction and environmentally conscious design practices.
                      </p>
                    ) : (
                      <p>DessoBuild is a platform connecting clients with expert architects, interior designers, and Vastu consultants for seamless project management.</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Unlock Your Career Potential
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Thousands of professionals have already found the right job with us faster, easier, and with less stress
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
            Get Started
          </button>
        </div>

        <Marquee className='py-3'>
          {['Civil Engineer', '3D Visualizer', 'Senior Planner','3D Artist', 'Junior Architect', 'Civil Engineer', '3D Visualizer', 'Sketch Master', 'Super Planner', 'Architect'].map((role, index) => (
            <div key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm mx-2">
              {role}
            </div>
          ))}
        </Marquee>

        <Marquee direction="right">
          {['Civil Engineer', '3D Visualizer', 'Senior Planner', 'Architect', 'Vastu Expert', 'Junior Architect', 'Civil Engineer', '3D Visualizer', 'Senior Planner', 'Sketch Master'].map((role, index) => (
            <div key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm mx-2">
              {role}
            </div>
          ))}
        </Marquee>
        <Marquee className='py-3'>
          {['Civil Engineer', '3D Visualizer', 'Senior Planner', 'Architect', 'Vastu Expert', '3D Artist', 'Junior Architect', 'Civil Engineer', '3D Visualizer', 'Sketch Master', 'Super Planner', 'Architect'].map((role, index) => (
            <div key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm mx-2">
              {role}
            </div>
          ))}
        </Marquee>
        {/* <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
          {['3D Artist', 'Junior Architect', 'Civil Engineer', '3D Visualizer', 'Sketch Master',
            'Super Planner', 'Architect', '3D Artist', 'Vastu Expert', 'Junior Architect',
            'Civil Engineer', 'Civil Engineer', '3D Visualizer', 'Senior Planner', 'Architect',
            'Sketch Master'].map((role, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition"
              >
                {role}
              </span>
            ))}
        </div> */}
      </section>

      {/* Blog Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Architectural Insights That Inspire
            </h2>
            <p className="text-gray-600 text-lg">
              Discover trends, tips, and expert stories from Architects, Interior Designers, and Vastu-Experts redefining the way we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" alt="Blog" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mb-3">
                    ARCHITECTURE
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Top 10 Architecture Trends for Modern Homes
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Explore the latest design trends shaping modern home design in 2024
                  </p>
                  <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Explore</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Architects</a></li>
                <li><a href="#" className="hover:text-white">Interior Designers</a></li>
                <li><a href="#" className="hover:text-white">Vastu Experts</a></li>
                <li><a href="#" className="hover:text-white">Register/Login/Register</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Become A Member</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Linkedin</a></li>
                <li><a href="#" className="hover:text-white">Youtube</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <span className="text-2xl font-bold mb-4 sm:mb-0">DessoBuild</span>
              <span className="text-gray-400 text-sm text-center sm:text-right">
                © 2025 DessoBuild. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}