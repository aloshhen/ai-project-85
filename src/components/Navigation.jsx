import { Truck, Phone, Menu } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navigation() {
  return (
    <nav className="fixed w-full bg-dark-DEFAULT/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Truck className="text-primary-DEFAULT" size={28} />
          <span className="text-xl font-bold">Truck<span className="text-primary-DEFAULT">Express</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <motion.a 
            href="#services" 
            className="hover:text-primary-DEFAULT transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Services
          </motion.a>
          <motion.a 
            href="#tariffs" 
            className="hover:text-primary-DEFAULT transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Tariffs
          </motion.a>
          <motion.a 
            href="#about" 
            className="hover:text-primary-DEFAULT transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.a 
            href="#contact" 
            className="hover:text-primary-DEFAULT transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </div>
        
        <motion.button 
          className="hidden md:flex items-center gap-2 bg-primary-DEFAULT px-4 py-2 rounded-lg font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone size={18} />
          Call Us
        </motion.button>
        
        <button className="md:hidden">
          <Menu />
        </button>
      </div>
    </nav>
  )
}