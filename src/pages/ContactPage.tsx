import React, { useState } from 'react';
import emailjs, { init } from '@emailjs/browser';
import { Send, Brain, Sparkles, Shield, Clock, DollarSign } from 'lucide-react';
import Navbar from '../components/Navbar';

// Initialize EmailJS with your public key
init("dNgbSgz45xOHH5tbn");

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinicName: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      phone: '',
    setLoading(true);
    setError('');

    emailjs.send(
      'service_medcode',  // Service ID from EmailJS
      'template_sp7t6gg', // Template ID from EmailJS
      {
        to_email: 'emmanuel.gama.ibarra@gmail.com',
        from_name: formData.name,
        phone: formData.phone,
        clinic_name: formData.clinicName,
        message: `New contact request from ${formData.clinicName}:
          \nName: ${formData.name}
          \nEmail: ${formData.email}
          \nPhone: ${formData.phone}
          \nClinic: ${formData.clinicName}`
      },
      undefined // We don't need to pass the public key here since we initialized it above
    )
      .then(() => {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          clinicName: ''
        });
      })
      .catch((err) => {
        setError('Failed to send message. Please try again later.');
        console.error('Email error:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Get Started with MedCode AI</h2>
            <p className="text-gray-600 mb-8">
              Ready to transform your medical coding process? Leave your contact information below,
              and our team will reach out to discuss how we can help your practice thrive.
            </p>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-green-100 rounded-full p-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700">
                  We've received your information and will contact you shortly to discuss how MedCode AI
                  can benefit your practice.
                </p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-700">{error}</p>
                  </div>
                )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="clinicName" className="block text-sm font-medium text-gray-700 mb-1">Clinic Name</label>
                  <input
                    type="text"
                    id="clinicName"
                    name="clinicName"
                    value={formData.clinicName}
                    onChange={handleChange}
                    placeholder="Smith Family Practice"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@smithclinic.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Contact Me'}
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
              </>
            )}
          </div>

          {/* Information Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Why MedCode AI is Different</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Advanced AI Technology</h4>
                  <p className="text-gray-600">
                    Our AI model is trained on millions of medical records, ensuring accurate and
                    reliable coding suggestions for your specific practice needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Continuous Learning</h4>
                  <p className="text-gray-600">
                    The system learns from your team's feedback, continuously improving its accuracy
                    and adapting to your specific coding patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">HIPAA Compliant</h4>
                  <p className="text-gray-600">
                    Built with security in mind, our platform ensures all data handling meets or
                    exceeds HIPAA requirements and industry standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Quick Implementation</h4>
                  <p className="text-gray-600">
                    Get up and running in days, not months. Our team handles the integration process,
                    ensuring minimal disruption to your workflow.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <DollarSign className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">ROI Guarantee</h4>
                  <p className="text-gray-600">
                    We're so confident in our solution that we guarantee a positive ROI within the
                    first 6 months of implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}