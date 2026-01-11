import { Clock, Shield, MapPin, Package } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      icon: <Clock className="text-primary-DEFAULT" size={32} />,
      title: "Fast Delivery",
      description: "Guaranteed on-time delivery with our optimized routes and 24/7 monitoring."
    },
    {
      icon: <Shield className="text-primary-DEFAULT" size={32} />,
      title: "Safe Transport",
      description: "Professional handling and insurance coverage for all types of cargo."
    },
    {
      icon: <MapPin className="text-primary-DEFAULT" size={32} />,
      title: "Nationwide Coverage",
      description: "We serve all major cities and regions across the country with our extensive network."
    },
    {
      icon: <Package className="text-primary-DEFAULT" size={32} />,
      title: "Various Cargo Types",
      description: "From small packages to oversized loads, we handle all types of shipments."
    }
  ]
  
  return (
    <section id="services" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-primary-DEFAULT">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Professional transportation solutions tailored to your business needs</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-dark-DEFAULT p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}