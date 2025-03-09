import React, { useState } from 'react';
import { 
  Facebook, Instagram, Linkedin, ChevronDown, Menu, Brain, Cloud, 
  Shield, Users, Target, Rocket, Award, Globe, Star, ArrowRight,
  CheckCircle, Mail, Phone, MapPin, Code
} from 'lucide-react';
import { Logo } from './components/Logo';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', email);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-primary-900 text-2xl font-bold">
              <Logo />
            </div>
            
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 border-b md:border-0 border-gray-100`}>
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <a href="#home" className="text-gray-600 hover:text-primary-900">Home</a>
                <a href="#features" className="text-gray-600 hover:text-primary-900">Features</a>
                <a href="#testimonials" className="text-gray-600 hover:text-primary-900">Testimonials</a>
                <a href="#contact" className="text-gray-600 hover:text-primary-900">Contact</a>
                <a 
                  href="#contact" 
                  className="px-6 py-2 bg-primary-900 text-white rounded-full hover:bg-primary-800 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-primary-900 mb-6">
                <Star size={16} className="text-yellow-500" />
                <span className="text-sm font-medium">Trusted by 500+ Companies</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your Business with Digital Excellence
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Empower your organization with cutting-edge solutions that drive growth, efficiency, and innovation. Experience the future of digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="cta-button inline-flex items-center justify-center px-8 py-3 bg-primary-900 text-white rounded-full hover:bg-primary-800"
                >
                  Get Started <ArrowRight size={20} className="ml-2" />
                </a>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div className="flex -space-x-4">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                {/* <div className="text-sm text-gray-600">
                  <strong>500+</strong> happy customers
                </div> */}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
                alt="Digital Transformation"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Opsvio?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver comprehensive digital transformation solutions that help your business thrive in the modern age
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="text-white" size={32} />,
                title: "AI-Powered Solutions",
                description: "Leverage cutting-edge artificial intelligence to automate processes and gain valuable insights.",
                benefits: [
                  "Predictive analytics for business intelligence",
                  "Automated workflow optimization",
                  "Smart decision support systems"
                ]
              },
              {
                icon: <Cloud className="text-white" size={32} />,
                title: "Cloud Infrastructure",
                description: "Build scalable and reliable systems with our expert cloud architecture solutions.",
                benefits: [
                  "High-availability architecture",
                  "Auto-scaling capabilities",
                  "Disaster recovery planning"
                ]
              },
              {
                icon: <Shield className="text-white" size={32} />,
                title: "Enterprise Security",
                description: "Protect your digital assets with our comprehensive security framework.",
                benefits: [
                  "Zero-trust architecture implementation",
                  "Real-time threat monitoring",
                  "Compliance management"
                ]
              },
              {
                icon: <Code className="text-white" size={32} />,
                title: "API Development",
                description: "Create robust and scalable APIs that power your digital ecosystem.",
                benefits: [
                  "RESTful and GraphQL expertise",
                  "Microservices architecture",
                  "API security and versioning"
                ]
              }
            ].map((feature, index) => (
              <div key={index} className="feature-card p-8 bg-white rounded-2xl border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${
                  index === 0 ? "from-blue-500 to-purple-500" :
                  index === 1 ? "from-cyan-500 to-blue-500" :
                  index === 2 ? "from-emerald-500 to-cyan-500" :
                  "from-indigo-500 to-blue-500"
                } rounded-xl flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CTO at TechCorp",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64",
                content: "Opsvio transformed our digital infrastructure, resulting in a 40% increase in operational efficiency."
              },
              {
                name: "Michael Chen",
                role: "CEO at InnovateCo",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
                content: "The AI solutions provided by Opsvio have revolutionized how we handle customer service."
              },
              {
                name: "Emily Davis",
                role: "COO at GlobalTech",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
                content: "Outstanding security implementation and ongoing support. Highly recommended!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card p-8 bg-white rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
                <div className="flex gap-1 mt-4">
                  {[1,2,3,4,5].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to transform your business? Let's discuss how we can help you achieve your goals.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Mail className="text-primary-900" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <p className="text-gray-600">contact@opsvio.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Phone className="text-primary-900" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-primary-900" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Location</h4>
                    <p className="text-gray-600">123 Innovation Street, Tech City</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-gray-100">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="How can we help?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <Logo className="text-white" />
              </div>
              <p className="text-gray-400 mb-4">
                Transforming businesses through digital innovation
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">AI Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cloud Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Opsvio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;