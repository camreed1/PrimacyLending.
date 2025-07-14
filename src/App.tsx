import React from 'react';
import { Phone, Calendar, Home, FileText, CheckCircle, Star, ArrowRight, Shield, Clock, TrendingUp } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">Primacy Lending</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#reviews" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <a href="tel:256-555-0123" className="hidden sm:flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                (661) 857-2291
              </a>
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Unlock the Power of Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
                  Home Equity
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Free home equity review — no obligation, no credit pull. 
                Discover how much you could save or access today.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
                Book Your Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Schedule Your Free Consultation</h3>
              {/* GHL Calendar Widget Placeholder */}
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">GoHighLevel Calendar Widget</p>
                <p className="text-sm text-gray-500 mt-2">Integration placeholder - embed calendar here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to unlock your home's potential</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule Your Free Call</h3>
              <p className="text-gray-600 leading-relaxed">Book a convenient time that works for you. No credit check required, just a friendly conversation about your goals.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore Your Options</h3>
              <p className="text-gray-600 leading-relaxed">We'll review your situation and present clear options for refinancing, cash-out, or accessing your equity.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Unlock Your Equity</h3>
              <p className="text-gray-600 leading-relaxed">Move forward with confidence knowing you're getting the best possible terms for your financial situation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Professional Headshot</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Cameron Reed</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Cameron Reed is a licensed loan officer with AMIC (NMLS #xxxxx), dedicated to helping 
                  Alabama homeowners refinance and access their equity without stress. Through Primacy Lending, 
                  Cameron delivers fast, clear loan guidance and a personalized approach.
                </p>
                <div className="flex items-center mt-6 space-x-6">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-semibold">Licensed Professional</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-semibold">Alabama Specialist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white" id="reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real stories from Alabama homeowners</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Cameron made the refinancing process so easy. We saved $400 a month and got cash out for home improvements. Highly recommend!"
              </p>
              <p className="font-semibold text-gray-900">— Sarah M., Huntsville</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Professional, responsive, and honest. Cameron explained everything clearly and got us the best rate possible."
              </p>
              <p className="font-semibold text-gray-900">— Mike & Lisa T., Birmingham</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Fast, efficient, and kept us informed every step of the way. The whole process was stress-free."
              </p>
              <p className="font-semibold text-gray-900">— Robert K., Madison</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 inline-block">
              <p className="text-gray-600 font-medium">TrustPilot / Google Reviews Widget</p>
              <p className="text-sm text-gray-500 mt-1">Integration placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common refinancing questions</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Will checking my equity options affect my credit score?</h3>
              <p className="text-gray-600">No, our initial review requires no credit pull. We only run credit when you're ready to move forward with an application.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much equity can I access from my home?</h3>
              <p className="text-gray-600">Typically up to 80-85% of your home's value, minus what you owe. We'll help you determine your exact options during our call.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does the refinancing process take?</h3>
              <p className="text-gray-600">Most refinances close within 30-45 days. We'll keep you informed throughout and work to meet your timeline needs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What are the costs involved?</h3>
              <p className="text-gray-600">Closing costs vary but are often rolled into the loan. We'll provide a detailed breakdown with no hidden fees during your consultation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you work with all credit types?</h3>
              <p className="text-gray-600">We work with a variety of credit situations. Even if you've been turned down elsewhere, we may have options for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Second CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Don't wait to unlock your home's potential. Book your free consultation today 
                and discover how much you could save or access.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center">
                  Book My Free Call
                  <Clock className="ml-2 h-5 w-5" />
                </button>
                <a href="tel:256-555-0123" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Schedule Now</h3>
              {/* Second GHL Calendar Widget Placeholder */}
              <div className="bg-white/20 border-2 border-dashed border-white/40 rounded-lg p-8 text-center">
                <Calendar className="h-12 w-12 text-white/60 mx-auto mb-4" />
                <p className="text-white font-medium">GoHighLevel Calendar Widget</p>
                <p className="text-sm text-white/70 mt-2">Second integration point</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Home className="h-5 w-5 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold">Primacy Lending</span>
              </div>
              <p className="text-gray-400">
                Helping Alabama homeowners unlock their home's potential with personalized mortgage solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Cameron</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3" />
                  <span>(256) 555-0123</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-3" />
                  <span>Book Online 24/7</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="text-sm text-gray-500 space-y-2">
              <p>
                <strong>Legal Disclaimer:</strong> Primacy Lending is a marketing name used by Cameron Reed, 
                licensed Mortgage Loan Originator (NMLS #123456). All loans arranged through American Mortgage 
                Investment Corp (AMIC), NMLS #XXXXXX. Equal Housing Lender.
              </p>
              <p>
                This is not a commitment to lend. All loans subject to approval based on creditworthiness 
                and property evaluation. Terms and conditions apply.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-6 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                © 2025 Primacy Lending. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <a href="#privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;