import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Loader2 } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    city: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'submitting', 'success', 'error'

  // Auto-hide toast after 4 seconds
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Please enter your name";
    else if (!/^[A-Za-z\s]+$/.test(formData.name)) tempErrors.name = "Only letters and spaces allowed";

    if (!formData.phone) tempErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone)) tempErrors.phone = "Enter a valid 10-digit phone number";

    if (!formData.service) tempErrors.service = "Please select a service";
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '7168e2c6-b3fd-4114-8eab-c15a7a3dfdbf',
          subject: 'New Makeup Booking Request 💄',
          from_name: 'Sridharani Makeup Website',
          name: formData.name,
          email: formData.email,
          phone: `+91 ${formData.phone}`,
          service: formData.service,
          date: formData.date || 'Not specified',
          city: formData.city || 'Not specified',
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');

        const message = `✨ *Hello Sri & Shine Makeover!*

I would love to book a makeup session 💄

👤 *Name:* ${formData.name}
💍 *Service:* ${formData.service}
📅 *Event Date:* ${formData.date || 'TBD'}
📍 *Location:* ${formData.city || 'TBD'}
📞 *Contact:* +91 ${formData.phone}

💬 *Message:*
${formData.message}

Please let me know your availability and pricing.

Looking forward to your response 😊`;

        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/919042761497?text=${encodedMessage}`;

        setTimeout(() => {
          window.open(url, '_blank');
          setFormData({ name: '', email: '', phone: '', service: '', date: '', city: '', message: '' });
        }, 1500);

      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 px-6 md:px-16 bg-[#FAF9F7] relative" id="contact">

      {/* Toast Notification (Top Right) */}
      <AnimatePresence>
        {(status === 'success' || status === 'error') && (
          <motion.div
            initial={{ opacity: 0, x: 50, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
            className="fixed top-24 right-6 md:right-10 z-[100] max-w-sm w-full"
          >
            {status === 'success' ? (
              <div className="bg-white border-l-4 border-l-[#25D366] shadow-[0_15px_40px_rgba(37,211,102,0.15)] rounded-r-xl rounded-l-sm p-4 flex items-start gap-3">
                <span className="text-[1.2rem] mt-0.5">✨</span>
                <div>
                  <h4 className="text-text font-semibold text-[0.95rem] mb-1">Booking Sent!</h4>
                  <p className="text-text-muted text-[0.85rem]">Your request has been sent successfully. Redirecting to WhatsApp...</p>
                </div>
              </div>
            ) : (
              <div className="bg-white border-l-4 border-l-red-500 shadow-[0_15px_40px_rgba(239,68,68,0.15)] rounded-r-xl rounded-l-sm p-4 flex items-start gap-3">
                <span className="text-[1.2rem] mt-0.5">❌</span>
                <div>
                  <h4 className="text-text font-semibold text-[0.95rem] mb-1">Error</h4>
                  <p className="text-text-muted text-[0.85rem]">Something went wrong. Please try again or use WhatsApp directly.</p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Info Area (Staggered Fade In) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block text-[0.68rem] tracking-[0.3em] uppercase text-gold font-medium mb-3">
              ✦ Let's Connect
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15] text-charcoal font-serif">
              Let’s Create Your <br /><em className="italic text-gold">Dream Look</em>
            </h2>
            <div className="w-[40px] h-[1px] bg-gold mt-[1.4rem] mb-[2.4rem]"></div>

            <p className="text-[1.1rem] text-charcoal font-cormorant italic leading-[1.6] mb-3">
              "Every face tells a story — let’s make yours unforgettable."
            </p>
            <p className="text-[0.95rem] text-text-muted leading-[1.8] mb-6">
              ✨ 300+ brides styled &bull; Trusted across Tamil Nadu
            </p>

            <div className="flex flex-col gap-4">
              <a href="https://wa.me/919042761497" className="flex items-center gap-4 p-[1.1rem_1.4rem] rounded-xl border border-border bg-white no-underline text-text text-[0.88rem] transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-md shadow-sm group" target="_blank" rel="noreferrer">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-white">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <strong className="block text-[0.75rem] tracking-[0.08em] uppercase text-text-muted mb-[0.1rem] font-medium">WhatsApp</strong>
                  +91 90427 61497
                </div>
              </a>
              <a href="tel:+919042761497" className="flex items-center gap-4 p-[1.1rem_1.4rem] rounded-xl border border-border bg-white no-underline text-text text-[0.88rem] transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-md shadow-sm group">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-gold shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Phone size={18} />
                </div>
                <div>
                  <strong className="block text-[0.75rem] tracking-[0.08em] uppercase text-text-muted mb-[0.1rem] font-medium">Phone</strong>
                  +91 90427 61497
                </div>
              </a>
              <a href="mailto:srianndshinemakeover@gmail.com" className="flex items-center gap-4 p-[1.1rem_1.4rem] rounded-xl border border-border bg-white no-underline text-text text-[0.88rem] transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-md shadow-sm group">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-gold shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Mail size={18} />
                </div>
                <div>
                  <strong className="block text-[0.75rem] tracking-[0.08em] uppercase text-text-muted mb-[0.1rem] font-medium">Email</strong>
                  srianndshinemakeover@gmail.com
                </div>
              </a>
              <a href="https://www.instagram.com/sri_and_shine?igsh=NXQ5dXNuaHBibTZv" className="flex items-center gap-4 p-[1.1rem_1.4rem] rounded-xl border border-border bg-white no-underline text-text text-[0.88rem] transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-md shadow-sm group" target="_blank" rel="noreferrer">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-gold shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <FaInstagram size={18} />
                </div>
                <div>
                  <strong className="block text-[0.75rem] tracking-[0.08em] uppercase text-text-muted mb-[0.1rem] font-medium">Instagram</strong>
                  @sri_and_shine
                </div>
              </a>
              <div className="flex items-center gap-4 p-[1.1rem_1.4rem] rounded-xl border border-border bg-white text-text text-[0.88rem] transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-md shadow-sm group cursor-default">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-gold shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <MapPin size={18} />
                </div>
                <div>
                  <strong className="block text-[0.75rem] tracking-[0.08em] uppercase text-text-muted mb-[0.1rem] font-medium">Location</strong>
                  Karur, Tamil Nadu
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Area Wrapper (Delayed Reveal + Anti-Gravity) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <form onSubmit={submitForm} className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-500 gpu-accelerate">
                <div className="font-serif text-[1.8rem] font-normal mb-2 text-charcoal">Book Your <em className="italic text-gold">Slot</em></div>
                <div className="text-[0.9rem] text-text-muted mb-8">Tell me about your special day ✨</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-text-muted mb-2 font-medium">Full Name</label>
                    <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your name" className={`w-full p-[0.8rem_1rem] border ${errors.name ? 'border-red-300 bg-red-50' : 'border-border bg-off-white'} rounded-[12px] font-sans text-[0.9rem] text-text transition-all duration-300 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 focus:bg-white`} />
                    {errors.name && <span className="text-red-500 text-[0.75rem] mt-1 block">{errors.name}</span>}
                  </div>
                  <div>
                    <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-text-muted mb-2 font-medium">Phone</label>
                    <div className="relative flex">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-[0.9rem]">+91</span>
                      <input name="phone" value={formData.phone} onChange={handleChange} type="tel" maxLength="10" placeholder="XXXXXXXXXX" className={`w-full pl-10 pr-4 py-[0.8rem] border ${errors.phone ? 'border-red-300 bg-red-50' : 'border-border bg-off-white'} rounded-[12px] font-sans text-[0.9rem] text-text transition-all duration-300 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 focus:bg-white`} />
                    </div>
                    {errors.phone && <span className="text-red-500 text-[0.75rem] mt-1 block">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-text-muted mb-2 font-medium">Email</label>
                    <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Optional" className="w-full p-[0.8rem_1rem] border border-border rounded-[12px] font-sans text-[0.9rem] text-text bg-off-white transition-all duration-300 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-text-muted mb-2 font-medium">Service</label>
                    <select name="service" value={formData.service} onChange={handleChange} className={`w-full p-[0.8rem_1rem] border ${errors.service ? 'border-red-300 bg-red-50' : 'border-border bg-off-white'} rounded-[12px] font-sans text-[0.9rem] text-text transition-all duration-300 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 focus:bg-white appearance-none`}>
                      <option value="">Select Service</option>
                      <option value="Bridal Makeup">Bridal Makeup</option>
                      <option value="Engagement Look">Engagement Look</option>
                      <option value="Party Makeup">Party Makeup</option>
                      <option value="Editorial / Shoot">Editorial / Shoot</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.service && <span className="text-red-500 text-[0.75rem] mt-1 block">{errors.service}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-text-muted mb-2 font-medium">Event Date</label>
                    <input name="date" value={formData.date} onChange={handleChange} type="date" className="w-full p-[0.8rem_1rem] border border-border rounded-[12px] font-sans text-[0.9rem] text-text bg-off-white transition-all duration-300 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-text-muted mb-2 font-medium">City</label>
                    <input name="city" value={formData.city} onChange={handleChange} type="text" placeholder="Karur / Coimbatore etc." className="w-full p-[0.8rem_1rem] border border-border rounded-[12px] font-sans text-[0.9rem] text-text bg-off-white transition-all duration-300 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 focus:bg-white" />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-text-muted mb-2 font-medium">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your vision, style preferences..." className={`w-full p-[0.8rem_1rem] border ${errors.message ? 'border-red-300 bg-red-50' : 'border-border bg-off-white'} rounded-[12px] font-sans text-[0.9rem] text-text transition-all duration-300 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 focus:bg-white h-[120px] resize-none`}></textarea>
                  {errors.message && <span className="text-red-500 text-[0.75rem] mt-1 block">{errors.message}</span>}
                </div>

                <button
                  disabled={status === 'submitting'}
                  type="submit"
                  className="group relative overflow-hidden w-full p-[1.1rem] bg-gradient-to-r from-gold to-[#b8924f] text-white border-none rounded-full font-sans text-[0.85rem] tracking-[0.15em] uppercase font-semibold cursor-pointer transition-all duration-300 shadow-[0_8px_25px_rgba(201,169,110,0.35)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.4)] hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <div className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === 'submitting' ? <Loader2 size={18} className="animate-spin" /> : <MessageCircle size={18} />}
                    {status === 'submitting' ? 'Sending...' : 'Send via WhatsApp'}
                  </span>
                </button>

                <div className="text-center mt-5">
                  <a href="https://wa.me/919042761497" target="_blank" rel="noreferrer" className="text-[0.8rem] text-text-muted hover:text-[#25D366] transition-colors">
                    Prefer direct chat? Click here for WhatsApp fallback.
                  </a>
                </div>
              </form>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
