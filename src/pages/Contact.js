import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with EmailJS or your backend API
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-text mb-8">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-secondary text-text p-3 rounded-lg border border-secondary">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-text">Email</h3>
                  <p className="text-text-muted">talavanekarprachi31@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-secondary text-text p-3 rounded-lg border border-secondary">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-text">Phone</h3>
                  <p className="text-text-muted">+91 94225 09340</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-secondary text-text p-3 rounded-lg border border-secondary">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-text">Location</h3>
                  <p className="text-text-muted">Kudal, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-text mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/prachiTalavanekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-text p-3 rounded-lg hover:bg-secondary transition-colors border border-secondary"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/prachi-talavanekar-124195312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-text p-3 rounded-lg hover:bg-secondary transition-colors border border-secondary"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-primary rounded-lg shadow-md p-8 border border-secondary">
              <h2 className="text-2xl font-bold text-text mb-6">
                Send Me a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-secondary rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-text"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-secondary rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-text"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-secondary rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-text"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-secondary rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent resize-none text-text"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-text py-3 px-6 rounded-lg font-semibold hover:bg-accent transition-colors border border-secondary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;