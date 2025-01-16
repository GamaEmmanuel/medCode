import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Brain, Clock, DollarSign, Send } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      element?.scrollIntoView({ behavior: 'smooth' });
      // Clean up the state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <Navbar />
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Medical Coding with AI
            </h1>
            <p className="text-xl mb-8">
              Boost your medical coders' efficiency by 80% with our AI-powered solution. 
              Reduce costs and increase revenue for your family practice clinic.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Get Started
              <Send className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">How Our AI Transforms Medical Coding</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Accuracy</h3>
              <p className="text-gray-600">
                Our AI learns from millions of medical records to suggest accurate codes with high confidence.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">80% Time Savings</h3>
              <p className="text-gray-600">
                Dramatically reduce coding time while maintaining accuracy and compliance.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Revenue Optimization</h3>
              <p className="text-gray-600">
                Identify missed revenue opportunities and optimize reimbursement rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Why Choose MedCode AI?</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reduced Operational Costs</h3>
                  <p className="text-gray-600">
                    Significantly lower your coding expenses while maintaining high accuracy and compliance.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Faster Reimbursements</h3>
                  <p className="text-gray-600">
                    Speed up your billing cycle with accurate, AI-assisted coding that reduces errors and denials.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                  <p className="text-gray-600">
                    Works alongside your existing EHR system with minimal disruption to your workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}