import { motion } from 'framer-motion'
import { Users, Award, Clock, Map } from 'lucide-react'

export default function About() {
  const stats = [
    { value: "15+", label: "Years Experience", icon: <Clock className="text-primary-DEFAULT" size={24} /> },
    { value: "500+", label: "Happy Clients", icon: <Users className="text-primary-DEFAULT" size={24} /> },
    { value: "1M+", label: "Miles Driven", icon: <Map className="text-primary-DEFAULT" size={24} /> },
    { value: "10+", label: "Industry Awards", icon: <Award className="text-primary-DEFAULT" size={24} /> }
  ]
  
  return (
    <section id="about" className="py-20 bg-dark-DEFAULT">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://source.unsplash.com/800x600/?truck,company" 
              alt="Our company" 
              className="rounded-xl shadow-2xl w-full"
            />
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-primary-DEFAULT">TruckExpress</span></h2>
            <p className="text-gray-400 mb-6">
              Founded in 2008, TruckExpress has grown from a small regional carrier to one of the most trusted nationwide transportation providers. Our mission is to deliver your cargo safely, on time, and at competitive rates.
            </p>
            <p className="text-gray-400 mb-8">
              We invest in modern equipment, continuous driver training, and advanced logistics technology to ensure the highest level of service for our customers.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-dark-light p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {stat.icon}
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}