import { Truck, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-dark-DEFAULT border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Truck className="text-primary-DEFAULT" size={28} />
              <span className="text-xl font-bold">Truck<span className="text-primary-DEFAULT">Express</span></span>
            </div>
            <p className="text-gray-400 mb-6">Professional truck transportation services with reliability and care.</p>
            <div className="flex gap-4">
              {['twitter', 'facebook', 'linkedin', 'instagram'].map((social, index) => (
                <motion.a 
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-primary-DEFAULT transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d={`M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z`} clipRule="evenodd" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Tariffs', 'About Us', 'Contact'].map((link, index) => (
                <li key={index}>
                  <motion.a 
                    href="#" 
                    className="text-gray-400 hover:text-primary-DEFAULT transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {['Express Delivery', 'Heavy Load', 'Refrigerated', 'Hazardous Materials', 'Oversized Load'].map((service, index) => (
                <li key={index}>
                  <motion.a 
                    href="#" 
                    className="text-gray-400 hover:text-primary-DEFAULT transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-DEFAULT mt-1" size={18} />
                <span className="text-gray-400">1234 Truck Lane, Dallas, TX 75201</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-primary-DEFAULT mt-1" size={18} />
                <span className="text-gray-400">(800) 555-1234</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-primary-DEFAULT mt-1" size={18} />
                <span className="text-gray-400">info@truckexpress.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-primary-DEFAULT mt-1" size={18} />
                <span className="text-gray-400">Mon-Fri: 8AM - 6PM</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2023 TruckExpress. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}