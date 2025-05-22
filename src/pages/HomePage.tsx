import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, BarChart3, MessageSquare, Award, BarChartHorizontal, Zap, Clock, Target } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
                Master Your <span className="text-teal-400">Sales Skills</span> with AI Role-Play
              </h1>
              <p className="text-xl text-gray-200 mb-8 animate-fadeInDelay">
                Practice real-world sales scenarios with our advanced AI voice chat. Get instant feedback, refine your approach, and close more deals.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/role-play" 
                  className="px-8 py-3 rounded-full bg-teal-500 text-white font-medium text-center hover:bg-teal-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-fadeInDelay2"
                >
                  Start Practicing Now
                </Link>
                <button className="px-8 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-indigo-900 transition-all duration-300 animate-fadeInDelay3">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fadeInRight">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-2xl transform rotate-6 opacity-30 blur-xl"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="p-6 bg-gray-900">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-gray-400 text-xs">SalesPitch Pro</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-indigo-900">Software Demo Call</h3>
                      <span className="text-xs font-medium text-teal-600 bg-teal-100 px-2 py-1 rounded-full">In Progress</span>
                    </div>
                    <div className="space-y-4">
                      <ChatBubble 
                        isAi={true} 
                        message="Hi there! I'm interested in your CRM solution, but I'm concerned about the implementation time." 
                      />
                      <ChatBubble 
                        isAi={false} 
                        message="That's a great question! Our implementation typically takes 2-4 weeks, and we provide dedicated support throughout the process." 
                      />
                      <ChatBubble 
                        isAi={true} 
                        message="That sounds reasonable. What about data migration from our current system?" 
                      />
                      <div className="flex justify-center my-4">
                        <div className="px-4 py-2 bg-indigo-100 rounded-full text-indigo-800 text-sm font-medium animate-pulse">
                          Your turn to respond...
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mt-6 bg-gray-100 rounded-full p-2">
                      <button className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                        <Mic size={18} />
                      </button>
                      <div className="mx-3 h-6 flex-grow bg-indigo-200 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How SalesPitch Pro Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform helps you master sales conversations through realistic practice and actionable feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MessageSquare size={24} className="text-teal-500" />}
              title="Realistic Scenarios"
              description="Practice with AI that mimics real customer objections, questions, and buying signals."
            />
            <FeatureCard 
              icon={<Mic size={24} className="text-teal-500" />}
              title="Voice Recognition"
              description="Speak naturally and get real-time feedback on your tone, pace, and word choice."
            />
            <FeatureCard 
              icon={<BarChart3 size={24} className="text-teal-500" />}
              title="Performance Analytics"
              description="Track your progress over time with detailed metrics and improvement suggestions."
            />
            <FeatureCard 
              icon={<Zap size={24} className="text-teal-500" />}
              title="Instant Feedback"
              description="Receive immediate guidance on handling objections and improving your pitch."
            />
            <FeatureCard 
              icon={<Clock size={24} className="text-teal-500" />}
              title="Practice Anytime"
              description="Available 24/7 for convenient practice whenever fits your schedule."
            />
            <FeatureCard 
              icon={<Target size={24} className="text-teal-500" />}
              title="Industry-Specific Training"
              description="Scenarios tailored to your industry, product type, and customer demographics."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how sales professionals are transforming their results with SalesPitch Pro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="After just 3 weeks of practice, my close rate improved by 32%. The AI feedback helped me identify and fix weaknesses in my pitch I didn't even know I had."
              name="Sarah Johnson"
              title="Sales Director, TechSolutions Inc."
              image="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <TestimonialCard 
              quote="The realistic scenarios prepared me for every objection I encountered in real calls. It's like having a sales coach available 24/7."
              name="Michael Rodriguez"
              title="Account Executive, Global Services"
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <TestimonialCard 
              quote="As a new sales rep, this platform fast-tracked my confidence and competence. My manager noticed the improvement within days."
              name="Emily Chen"
              title="Sales Representative, InnovateCorp"
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Sales Skills?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of sales professionals who are closing more deals with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/role-play" 
              className="px-8 py-3 rounded-full bg-teal-500 text-white font-medium hover:bg-teal-600 transition-colors duration-300 shadow-lg"
            >
              Start Free Trial
            </Link>
            <button className="px-8 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-indigo-900 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ChatBubble = ({ isAi, message }: { isAi: boolean; message: string }) => (
  <div className={`flex ${isAi ? 'justify-start' : 'justify-end'}`}>
    <div 
      className={`max-w-xs sm:max-w-sm rounded-2xl px-4 py-3 ${
        isAi ? 'bg-gray-100 text-gray-800' : 'bg-indigo-600 text-white'
      }`}
    >
      <p className="text-sm">{message}</p>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, name, title, image }: { quote: string; name: string; title: string; image: string }) => (
  <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <div className="flex items-center mb-6">
      <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover mr-4" />
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
    <p className="text-gray-700 italic">"{quote}"</p>
    <div className="mt-4 flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  </div>
);

export default HomePage;