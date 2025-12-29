"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Calendar, 
  Clock, 
  ChevronRight, 
  Menu, 
  X,
  Smartphone,
  Wrench,
  Scissors,
  GraduationCap
} from "lucide-react";
import { motion } from "framer-motion";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-rome-white/80 backdrop-blur-md border-b border-rome-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-rome-black rounded-lg flex items-center justify-center">
              {/* Kept 'R' as it still fits Roam */}
              <span className="text-rome-accent font-bold text-xl">R</span>
            </div>
            {/* UPDATED: Name changed to Roam */}
            <span className="font-bold text-xl tracking-tight">Roam</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-sm font-medium text-rome-gray hover:text-rome-black transition-colors">How it Works</a>
            <a href="#features" className="text-sm font-medium text-rome-gray hover:text-rome-black transition-colors">For Providers</a>
            <button className="text-sm font-medium px-4 py-2 text-rome-black hover:bg-rome-light rounded-full transition-colors">
              Log in
            </button>
            <button className="text-sm font-bold px-5 py-2.5 bg-rome-black text-white rounded-full hover:bg-rome-dark transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-rome-black p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-rome-gray/10 animate-in slide-in-from-top-5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-rome-gray hover:text-rome-black hover:bg-rome-light rounded-md" onClick={() => setIsOpen(false)}>How it Works</a>
            <a href="#features" className="block px-3 py-2 text-base font-medium text-rome-gray hover:text-rome-black hover:bg-rome-light rounded-md" onClick={() => setIsOpen(false)}>For Providers</a>
            <div className="pt-4 flex flex-col gap-2 px-3">
              <button className="w-full text-center px-4 py-3 bg-rome-light text-rome-black font-medium rounded-lg">Log in</button>
              <button className="w-full text-center px-4 py-3 bg-rome-black text-white font-bold rounded-lg">Get Started</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [activeZone, setActiveZone] = useState<'downtown' | 'midtown' | 'westend'>('downtown');

  // Variants for the underline animation
  const underlineVariants = {
    initial: { scaleX: 0, originX: 0 },
    hover: { scaleX: 1, originX: 0 }
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* UPDATED: Headline with hover animation on "chasing" */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-rome-black mb-6 leading-tight cursor-default">
              Stop{' '}
              <motion.span 
                className="relative inline-block cursor-pointer"
                whileHover="hover"
                initial="initial"
              >
                <span className="relative z-10">chasing</span>
                <motion.span 
                  variants={underlineVariants}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute left-0 bottom-1 h-[6px] w-full bg-rome-accent/60 -z-0"
                />
              </motion.span>
              {' '}appointments.<br />
              <span className="text-rome-gray">Command your route.</span>
            </h1>
            
            {/* UPDATED: Name changed to Roam */}
            <p className="mt-4 text-lg md:text-xl text-rome-gray max-w-2xl mx-auto leading-relaxed">
              Roam lets mobile service providers set <strong>Booking Zones</strong>. You decide where you'll be and when. Your customers simply book a slot that matches your plan.
            </p>
            
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-8 py-4 bg-rome-black text-white font-bold text-lg rounded-full hover:bg-rome-accent hover:text-rome-black transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                Start Free Trial <ChevronRight size={20} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white border border-rome-gray/20 text-rome-black font-medium text-lg rounded-full hover:bg-rome-light transition-all">
                View Demo
              </button>
            </div>
            
            <p className="mt-4 text-sm text-rome-gray">No credit card required. Cancel anytime.</p>
          </motion.div>
        </div>

        {/* --- APP INTERFACE MOCKUP --- */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3, duration: 0.6 }}
           className="mt-10 relative mx-auto max-w-6xl rounded-2xl border border-gray-200 shadow-2xl bg-white overflow-hidden flex flex-col md:flex-row h-auto md:h-[600px]"
        >
          {/* LEFT SIDEBAR: Zone Configuration */}
          <div className="w-full md:w-80 bg-white border-b md:border-b-0 md:border-r border-gray-100 z-20 flex flex-col relative shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
            
            {/* Sidebar Header */}
            <div className="p-6 border-b border-gray-50">
              <div className="flex items-center gap-3 mb-1">
                 <div className="w-8 h-8 rounded-full bg-rome-light flex items-center justify-center text-rome-black font-bold text-xs">JD</div>
                 <div>
                   <h3 className="text-sm font-bold text-rome-black">John Doe Services</h3>
                   <p className="text-xs text-rome-gray">Weekly Schedule</p>
                 </div>
              </div>
            </div>

            {/* Zone List */}
            <div className="p-4 space-y-3 flex-1 overflow-y-auto font-sans max-h-[300px] md:max-h-none bg-gray-50/50 md:bg-white">
               <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">Your Zones</p>
               
               {/* Zone Item 1: Downtown */}
               <div 
                  onClick={() => setActiveZone('downtown')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 group ${
                    activeZone === 'downtown' 
                      ? 'bg-rome-accent/10 border-rome-accent/50 shadow-sm' 
                      : 'bg-white border-transparent hover:bg-gray-50 hover:border-gray-200'
                  }`}
               >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`font-bold flex items-center gap-2 ${activeZone === 'downtown' ? 'text-rome-black' : 'text-gray-600'}`}>
                      <div className={`w-2 h-2 rounded-full ${activeZone === 'downtown' ? 'bg-rome-accent animate-pulse' : 'bg-gray-300'}`}></div>
                      Downtown
                    </span>
                    <span className="text-xs font-mono bg-white px-2 py-1 rounded border border-gray-100 text-rome-black whitespace-nowrap">
                      9AM - 12PM
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-rome-gray mb-3">
                    <Calendar size={12} />
                    <span>Every Monday</span>
                  </div>
                  <div className={`text-xs font-medium ${activeZone === 'downtown' ? 'text-rome-black' : 'text-gray-400'}`}>
                    10 people booked
                  </div>
               </div>

               {/* Zone Item 2: Midtown */}
               <div 
                  onClick={() => setActiveZone('midtown')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 group ${
                    activeZone === 'midtown' 
                      ? 'bg-blue-50 border-blue-200 shadow-sm' 
                      : 'bg-white border-transparent hover:bg-gray-50 hover:border-gray-200'
                  }`}
               >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`font-bold flex items-center gap-2 ${activeZone === 'midtown' ? 'text-blue-900' : 'text-gray-600'}`}>
                      <div className={`w-2 h-2 rounded-full ${activeZone === 'midtown' ? 'bg-blue-500 animate-pulse' : 'bg-gray-300'}`}></div>
                      Midtown
                    </span>
                    <span className="text-xs font-mono bg-white px-2 py-1 rounded border border-gray-100 text-rome-black whitespace-nowrap">
                      1PM - 5PM
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-rome-gray mb-3">
                    <Calendar size={12} />
                    <span>Every Tuesday</span>
                  </div>
                   <div className={`text-xs font-medium ${activeZone === 'midtown' ? 'text-blue-700' : 'text-gray-400'}`}>
                    5 people booked
                  </div>
               </div>

               {/* Zone Item 3: West End (GREEN) */}
               <div 
                  onClick={() => setActiveZone('westend')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 group ${
                    activeZone === 'westend' 
                      ? 'bg-emerald-50 border-emerald-200 shadow-sm' 
                      : 'bg-white border-transparent hover:bg-gray-50 hover:border-gray-200'
                  }`}
               >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`font-bold flex items-center gap-2 ${activeZone === 'westend' ? 'text-emerald-900' : 'text-gray-600'}`}>
                      <div className={`w-2 h-2 rounded-full ${activeZone === 'westend' ? 'bg-emerald-500 animate-pulse' : 'bg-gray-300'}`}></div>
                      West End
                    </span>
                    <span className="text-xs font-mono bg-white px-2 py-1 rounded border border-gray-100 text-rome-black whitespace-nowrap">
                      12PM - 5PM
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-rome-gray mb-3">
                    <Calendar size={12} />
                    <span>Every Wednesday</span>
                  </div>
                   <div className={`text-xs font-medium ${activeZone === 'westend' ? 'text-emerald-700' : 'text-gray-400'}`}>
                    7 people booked
                  </div>
               </div>
            </div>
          </div>

          {/* RIGHT PANEL: The Map */}
          <div className="relative bg-[#F8FAFC] overflow-hidden transition-all duration-500 ease-in-out h-[400px] md:h-auto md:flex-1">
             
             {/* 1. Base Grid (City Blocks) */}
             <div className="absolute inset-0 opacity-[0.03]" 
                  style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}>
             </div>

             {/* 2. Abstract Geography & Streets Layer */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice">
                
                {/* The "Lake" (Bottom) */}
                <path 
                  d="M0,520 C150,510 300,530 450,520 S 700,500 900,510 V600 H0 Z" 
                  fill="#e0f2fe" 
                />
                
                {/* --- ARTERIAL ROADS --- */}
                <line x1="-100" y1="250" x2="900" y2="450" stroke="#cbd5e1" strokeWidth="16" />
                <line x1="550" y1="-50" x2="450" y2="800" stroke="#cbd5e1" strokeWidth="12" />
                
                {/* --- SECONDARY STREETS --- */}
                <g stroke="#e2e8f0" strokeWidth="2">
                    <line x1="0" y1="100" x2="800" y2="120" /><line x1="0" y1="200" x2="800" y2="220" /><line x1="0" y1="350" x2="800" y2="370" /><line x1="0" y1="450" x2="800" y2="470" />
                    <line x1="150" y1="0" x2="180" y2="600" /><line x1="300" y1="0" x2="330" y2="600" /><line x1="650" y1="0" x2="620" y2="600" /><line x1="750" y1="0" x2="720" y2="600" />
                </g>

                {/* Parks */}
                <rect x="80" y="80" width="100" height="60" rx="10" fill="#dcfce7" opacity="0.6" transform="rotate(5 130 110)" />
                <rect x="600" y="300" width="120" height="80" rx="20" fill="#dcfce7" opacity="0.6" transform="rotate(-5 660 340)" />
             </svg>
             
             {/* Vignette Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent pointer-events-none"></div>


             {/* --- MAP ZONES --- */}

             {/* Zone 1: Downtown (Gold) */}
             <div 
                onClick={() => setActiveZone('downtown')}
                className={`absolute bottom-[25%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out cursor-pointer group ${
                  activeZone === 'downtown' ? 'opacity-100 scale-100 z-10' : 'opacity-60 scale-90 md:scale-95 grayscale hover:grayscale-0 hover:opacity-90'
                }`}
             >
                {/* Tooltip */}
                <div className={`absolute -top-12 md:-top-14 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 md:px-4 md:py-2 rounded-lg shadow-xl border border-gray-100 flex flex-col items-center min-w-[120px] md:min-w-[140px] transition-all duration-300 ${activeZone === 'downtown' ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                   <span className="text-xs font-bold text-rome-black whitespace-nowrap">Downtown Core</span>
                   <span className="text-[10px] text-gray-500 font-mono">Mon • 9-12</span>
                   <div className="w-2 h-2 bg-white transform rotate-45 absolute -bottom-1 border-r border-b border-gray-100"></div>
                </div>
                {/* Circle */}
                <div className="w-40 h-40 md:w-64 md:h-64 rounded-full bg-rome-accent/10 border-2 border-rome-accent flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.2)] group-hover:scale-105 transition-transform">
                   <div className="w-2 h-2 bg-rome-accent rounded-full animate-ping absolute"></div>
                   <div className="w-2 h-2 bg-rome-accent rounded-full relative"></div>
                </div>
             </div>

             {/* Zone 2: Midtown (Blue) */}
             <div 
                 onClick={() => setActiveZone('midtown')}
                 className={`absolute top-[30%] md:top-[40%] right-[10%] md:right-[8%] transform transition-all duration-500 ease-in-out cursor-pointer group ${
                   activeZone === 'midtown' ? 'opacity-100 scale-100 md:scale-110 z-10' : 'opacity-60 scale-90 grayscale hover:grayscale-0 hover:opacity-90'
                 }`}
             >
                 {/* Tooltip */}
                 <div className={`absolute -top-12 md:-top-14 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 md:px-4 md:py-2 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center min-w-[110px] md:min-w-[120px] transition-all duration-300 ${activeZone === 'midtown' ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                   <span className="text-xs font-bold text-blue-900">Midtown</span>
                   <span className="text-[10px] text-gray-400 font-mono">Tue • 1-5</span>
                   <div className="w-2 h-2 bg-white transform rotate-45 absolute -bottom-1 border-r border-b border-gray-100"></div>
                </div>
                {/* Circle */}
                <div className="w-32 h-32 md:w-56 md:h-56 rounded-full bg-blue-500/10 border-2 border-blue-500 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.2)] group-hover:scale-105 transition-transform">
                   <div className={`w-2 h-2 bg-blue-500 rounded-full absolute ${activeZone === 'midtown' ? 'animate-ping' : ''}`}></div>
                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
             </div>

             {/* Zone 3: West End (Emerald Green) */}
             <div 
                 onClick={() => setActiveZone('westend')}
                 className={`absolute bottom-[25%] md:bottom-[30%] left-[10%] transform transition-all duration-500 ease-in-out cursor-pointer group ${
                   activeZone === 'westend' ? 'opacity-100 scale-100 md:scale-110 z-10' : 'opacity-60 scale-90 grayscale hover:grayscale-0 hover:opacity-90'
                 }`}
             >
                 {/* Tooltip */}
                 <div className={`absolute -top-12 md:-top-14 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 md:px-4 md:py-2 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center min-w-[110px] md:min-w-[120px] transition-all duration-300 ${activeZone === 'westend' ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                   <span className="text-xs font-bold text-emerald-900">West End</span>
                   <span className="text-[10px] text-gray-400 font-mono">Wed • 12-5</span>
                   <div className="w-2 h-2 bg-white transform rotate-45 absolute -bottom-1 border-r border-b border-gray-100"></div>
                </div>
                {/* Circle */}
                <div className="w-32 h-32 md:w-56 md:h-56 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.2)] group-hover:scale-105 transition-transform">
                   <div className={`w-2 h-2 bg-emerald-500 rounded-full absolute ${activeZone === 'westend' ? 'animate-ping' : ''}`}></div>
                   <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                </div>
             </div>

             {/* Map Controls */}
             <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col gap-2 z-20">
               <button className="bg-white p-1.5 md:p-2 rounded-lg shadow-lg border border-gray-100 hover:bg-gray-50 text-gray-600 hover:text-rome-black transition-colors">
                 <span className="font-bold text-sm md:text-base">+</span>
               </button>
               <button className="bg-white p-1.5 md:p-2 rounded-lg shadow-lg border border-gray-100 hover:bg-gray-50 text-gray-600 hover:text-rome-black transition-colors">
                 <span className="font-bold text-sm md:text-base">-</span>
               </button>
             </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Steps = () => {
  const steps = [
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Create a Zone",
      desc: "Draw a circle on the map. This is where you will be working."
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Set the Schedule",
      desc: "Assign a date and time window to that specific zone (e.g., 'West End on Tuesdays')."
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Auto-Booking",
      desc: "Customers in that area can only book times when you are nearby. No more cross-town drives."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-rome-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          {/* UPDATED: Name changed to Roam */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The Roam Workflow</h2>
          <p className="text-gray-400 text-lg">Simplify your logistics in three steps.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group text-center md:text-left">
              <div className="w-14 h-14 bg-rome-dark border border-gray-800 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:border-rome-accent transition-colors shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UseCases = () => {
  const cases = [
    {
      icon: <Wrench size={32} />,
      title: "Home Maintenance",
      desc: "Group your plumbing or electrical jobs by neighborhood to cut travel time in half."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Mechanics",
      desc: "Perfect for tire changers and detailing. Service an entire office park in one go."
    },
    {
      icon: <Scissors size={32} />,
      title: "Pet Groomers",
      desc: "Park your van in one location and let the neighborhood come to you."
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Tutors",
      desc: "Manage in-home sessions efficiently by clustering students geographically."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-rome-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-rome-black mb-6">Built for the Mobile Workforce</h2>
          {/* UPDATED: Name changed to Roam */}
          <p className="text-lg text-rome-gray max-w-2xl mx-auto md:mx-0">
            If your business moves, Roam helps you move less and earn more.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group">
              <div className="text-rome-accent mb-5 group-transform group-hover:scale-110 transition-transform origin-left">{c.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-rome-black">{c.title}</h4>
              <p className="text-rome-gray leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden relative">
       {/* Abstract background shape */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-rome-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
       
       <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
         <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-rome-black">
           Ready to conquer your schedule?
         </h2>
         <p className="text-xl md:text-2xl text-rome-gray mb-12 leading-relaxed">
           Join thousands of service providers who have reclaimed their time and boosted their efficiency.
         </p>
         <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="px-10 py-5 bg-rome-black text-white font-bold text-xl rounded-full hover:bg-rome-accent hover:text-rome-black transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Get Started for Free
            </button>
         </div>
         <p className="mt-6 text-sm text-rome-gray">
            Free 14-day trial. No credit card required.
         </p>
       </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 bg-rome-black rounded-xl flex items-center justify-center">
                    {/* Kept 'R' */}
                    <span className="text-rome-accent font-bold text-2xl">R</span>
                    </div>
                    {/* UPDATED: Name changed to Roam */}
                    <span className="font-bold text-2xl tracking-tight text-rome-black">Roam</span>
                </div>
                <p className="text-rome-gray max-w-xs">
                    The location-first scheduling platform for mobile service professionals.
                </p>
            </div>
            <div>
                <h4 className="font-bold text-rome-black mb-4">Product</h4>
                <ul className="space-y-3 text-sm text-rome-gray">
                    <li><a href="#" className="hover:text-rome-accent transition-colors">Features</a></li>
                    <li><a href="#" className="hover:text-rome-accent transition-colors">Pricing</a></li>
                    <li><a href="#" className="hover:text-rome-accent transition-colors">Testimonials</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-rome-black mb-4">Company</h4>
                <ul className="space-y-3 text-sm text-rome-gray">
                    <li><a href="#" className="hover:text-rome-accent transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-rome-accent transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-rome-accent transition-colors">Careers</a></li>
                </ul>
            </div>
        </div>
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex gap-6">
            <a href="#" className="hover:text-rome-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-rome-black transition-colors">Terms of Service</a>
          </div>
          <div>
            {/* UPDATED: Copyright name changed to Roam */}
            © {new Date().getFullYear()} Roam Technologies Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main Page Composition ---

export default function Home() {
  return (
    <main className="min-h-screen bg-rome-white selection:bg-rome-accent/30 selection:text-rome-black">
      <Navbar />
      <Hero />
      <Steps />
      <UseCases />
      <CTA />
      <Footer />
    </main>
  );
}