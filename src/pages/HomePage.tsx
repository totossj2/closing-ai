import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mic, BarChart3, MessageSquare, Award, Brain, Target, Clock, Sparkles } from 'lucide-react';

const HomePage = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const headlines = [
    { text: "Master Your Sales Skills", highlight: "in Minutes, Not Months" },
    { text: "Perfect Your Pitch", highlight: "with AI-Powered Practice" },
    { text: "Close More Deals", highlight: "with Confidence" },
    { text: "Level Up Your Sales Game", highlight: "Through Smart Practice" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setHeadlineIndex((current) => (current + 1) % headlines.length);
        setIsTransitioning(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="relative h-[180px] mb-6">
                <h1 
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight headline-transition ${
                    isTransitioning ? 'headline-inactive' : 'headline-active'
                  }`}
                >
                  {headlines[headlineIndex].text}{" "}
                  <span className="text-teal-400">{headlines[headlineIndex].highlight}</span>
                </h1>
              </div>
              <p className="text-xl text-gray-200 mb-8 animate-fadeInDelay">
                Practice real-world sales scenarios with our advanced AI voice chat. Get instant feedback, refine your approach, and boost your confidence.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/role-play" 
                  className="px-8 py-3 rounded-lg bg-teal-500 text-white font-medium text-center hover:bg-teal-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-fadeInDelay2"
                >
                  Start Free Practice
                </Link>
                <button className="px-8 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 animate-fadeInDelay3">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fadeInRight">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-2xl transform rotate-6 opacity-30 blur-xl"></div>
                <div className="relative bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-gray-400 text-xs">SalesPitch Pro</div>
                    </div>
                    <div className="space-y-4">
                      <ChatBubble 
                        isAi={true} 
                        message="I'm interested in your enterprise solution, but I have concerns about the implementation timeline." 
                      />
                      <ChatBubble 
                        isAi={false} 
                        message="I understand your concern. Let me walk you through our proven 4-week implementation process." 
                      />
                      <div className="flex justify-center my-4">
                        <div className="px-4 py-2 bg-teal-900/30 rounded-full text-teal-400 text-sm font-medium animate-pulse">
                          AI is analyzing your response...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-500 font-semibold mb-2 block">THE PROBLEM</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Traditional sales training is <span className="text-red-500">ineffective</span> and <span className="text-red-500">time-consuming</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProblemCard 
              title="Limited Practice Opportunities"
              description="Role-playing with colleagues is scheduling-dependent and inconsistent."
            />
            <ProblemCard 
              title="No Real-Time Feedback"
              description="Traditional training lacks immediate guidance on improvement areas."
            />
            <ProblemCard 
              title="Generic Scenarios"
              description="Standard training fails to address your specific industry challenges."
            />
            <ProblemCard 
              title="Time-Consuming Process"
              description="Traditional learning methods take months to show real results."
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-teal-400 font-semibold mb-2 block">THE SOLUTION</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Master Sales Conversations with <span className="text-teal-400">AI-Powered Practice</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get instant feedback and improve your sales skills through realistic AI role-play scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Brain className="text-teal-400" />}
              title="AI-Powered Scenarios"
              description="Practice with intelligent AI that adapts to your responses and simulates real customer behavior."
            />
            <FeatureCard 
              icon={<BarChart3 className="text-teal-400" />}
              title="Real-Time Analytics"
              description="Get instant feedback on your performance, tone, and effectiveness."
            />
            <FeatureCard 
              icon={<Target className="text-teal-400" />}
              title="Industry-Specific Training"
              description="Practice scenarios tailored to your specific industry and product type."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-300">Start improving your sales skills in three simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard 
              number="1"
              title="Choose Your Scenario"
              description="Select from a variety of industry-specific sales scenarios."
            />
            <StepCard 
              number="2"
              title="Practice Your Pitch"
              description="Engage in natural conversation with our AI customer."
            />
            <StepCard 
              number="3"
              title="Get Instant Feedback"
              description="Receive detailed analysis and improvement suggestions."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Sales Skills?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of sales professionals who are closing more deals with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/role-play" 
              className="px-8 py-3 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 transition-colors duration-300 shadow-lg"
            >
              Start Free Trial
            </Link>
            <button className="px-8 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-white hover:text-gray-900 transition-all duration-300">
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
      className={`max-w-xs sm:max-w-sm rounded-xl px-4 py-3 ${
        isAi ? 'bg-gray-700 text-gray-100' : 'bg-teal-500 text-white'
      }`}
    >
      <p className="text-sm">{message}</p>
    </div>
  </div>
);

const ProblemCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
      <span className="text-red-500">×</span>
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600">
    <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 relative">
    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
      {number}
    </div>
    <h3 className="text-xl font-semibold text-white mb-3 mt-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default HomePage;