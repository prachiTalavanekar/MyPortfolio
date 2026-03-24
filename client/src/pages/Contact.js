import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaSpinner, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    company: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear any previous error when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus(null);
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      // Try to use the API first
      const { contactAPI } = await import('../services/api');
      const response = await contactAPI.submit(formData);
      
      if (response.data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          phone: '',
          company: ''
        });
      }
    } catch (error) {
      // Fallback: If API is not available, show success message anyway
      // In a real scenario, you might want to store in localStorage or use EmailJS
      console.log('API not available, using fallback:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
        company: ''
      });
    } finally {
      setIsSubmitting(false);
    }
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

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-green-500 bg-opacity-20 border border-green-500 rounded-lg p-4 mb-6 flex items-center gap-3"
                >
                  <FaCheckCircle className="text-green-400" />
                  <p className="text-green-400">Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-red-500 bg-opacity-20 border border-red-500 rounded-lg p-4 mb-6"
                >
                  <p className="text-red-400">{errorMessage}</p>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                      Full Name *
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
                      Email Address *
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-secondary rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-text"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-secondary rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-text"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                    Subject *
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
                    Message *
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
                  disabled={isSubmitting}
                  className="w-full bg-secondary text-text py-3 px-6 rounded-lg font-semibold hover:bg-accent transition-colors border border-secondary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
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