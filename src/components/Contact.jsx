import { motion } from 'framer-motion'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icons in Leaflet
const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().matches(/^[0-9]+$/, 'Must be only digits').min(10, 'Too short').required('Required'),
  message: Yup.string().required('Required')
})

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema: ContactSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
      // Here you would typically send the form data to your backend
    }
  })
  
  return (
    <section id="contact" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="text-primary-DEFAULT">Touch</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Have questions or ready to book your shipment? Contact us today.</p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="w-full px-4 py-3 bg-dark-DEFAULT border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                ) : null}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full px-4 py-3 bg-dark-DEFAULT border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                ) : null}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className="w-full px-4 py-3 bg-dark-DEFAULT border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent"
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
                ) : null}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className="w-full px-4 py-3 bg-dark-DEFAULT border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent"
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                ) : null}
              </div>
              
              <motion.button 
                type="submit" 
                className="w-full bg-primary-DEFAULT hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-dark-DEFAULT p-6 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-primary-DEFAULT mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <p className="font-medium">Headquarters</p>
                    <p className="text-gray-400">1234 Truck Lane, Suite 100<br />Dallas, TX 75201</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-primary-DEFAULT mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-400">Main: (800) 555-1234<br />Support: (800) 555-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-primary-DEFAULT mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-400">info@truckexpress.com<br />support@truckexpress.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-96 rounded-xl overflow-hidden">
              <MapContainer center={[32.7767, -96.7970]} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[32.7767, -96.7970]} icon={defaultIcon}>
                  <Popup>Our Headquarters</Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}