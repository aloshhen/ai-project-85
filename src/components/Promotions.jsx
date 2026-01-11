import { motion } from 'framer-motion'

export default function Promotions() {
  const promotions = [
    {
      title: "Summer Special",
      description: "15% discount on all routes during July and August",
      code: "SUMMER15"
    },
    {
      title: "New Customer Offer",
      description: "First shipment at 20% off for new customers",
      code: "WELCOME20"
    },
    {
      title: "Volume Discount",
      description: "Special rates for shipments over 5,000 miles",
      code: "VOLUME10"
    }
  ]
  
  return (
    <section className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Current <span className="text-primary-DEFAULT">Promotions</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Take advantage of our special offers and save on your shipments</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <motion.div 
              key={index}
              className="bg-dark-DEFAULT p-8 rounded-xl shadow-lg border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary-DEFAULT">{promo.title}</h3>
              <p className="text-gray-300 mb-6">{promo.description}</p>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <p className="text-sm text-gray-400 mb-1">Promo code:</p>
                <p className="font-mono font-bold text-lg">{promo.code}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}