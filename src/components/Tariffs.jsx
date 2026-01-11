import { motion } from 'framer-motion'

export default function Tariffs() {
  const tariffs = [
    {
      name: "Standard",
      price: "$1.20",
      per: "per mile",
      features: [
        "Up to 5,000 lbs",
        "Basic insurance",
        "3-5 day delivery",
        "24/7 tracking"
      ],
      popular: false
    },
    {
      name: "Express",
      price: "$1.80",
      per: "per mile",
      features: [
        "Up to 10,000 lbs",
        "Enhanced insurance",
        "1-2 day delivery",
        "Priority loading",
        "24/7 tracking"
      ],
      popular: true
    },
    {
      name: "Heavy Load",
      price: "Custom",
      per: "quote",
      features: [
        "Over 10,000 lbs",
        "Full insurance",
        "Specialized equipment",
        "Dedicated team",
        "24/7 tracking"
      ],
      popular: false
    }
  ]
  
  return (
    <section id="tariffs" className="py-20 bg-dark-DEFAULT">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transportation <span className="text-primary-DEFAULT">Tariffs</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Competitive pricing for all your shipping needs</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tariffs.map((tariff, index) => (
            <motion.div 
              key={index}
              className={`relative bg-dark-light p-8 rounded-xl shadow-lg ${tariff.popular ? 'border-2 border-primary-DEFAULT' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {tariff.popular && (
                <div className="absolute top-0 right-0 bg-primary-DEFAULT text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{tariff.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{tariff.price}</span>
                <span className="text-gray-400"> {tariff.per}</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tariff.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-DEFAULT" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button 
                className={`w-full py-3 rounded-lg font-medium ${tariff.popular ? 'bg-primary-DEFAULT hover:bg-primary-dark' : 'bg-gray-700 hover:bg-gray-600'}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}