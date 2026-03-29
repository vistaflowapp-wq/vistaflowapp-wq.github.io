/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Download, Smartphone, Zap, Image as ImageIcon, Shield, Mail, ExternalLink, ChevronRight, Star } from "lucide-react";

export default function App() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.vistaflow.app";
  const termsUrl = "https://vistaflowapp-wq.github.io/legal/";
  const privacyUrl = "https://vistaflowapp-wq.github.io/legal/privacy.html";
  const supportEmail = "vistaflow.app@gmail.com";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/attached_file_1.png" alt="Vistaflow Logo" className="w-10 h-10 rounded-xl shadow-lg" referrerPolicy="no-referrer" />
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Vistaflow
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#support" className="hover:text-white transition-colors">Support</a>
            <a 
              href={playStoreUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white text-black rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} />
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-wider mb-6">
              <Star size={14} fill="currentColor" />
              Premium 4K Wallpapers
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tighter">
              Elevate Your Screen with <span className="text-orange-500">Vistaflow</span>
            </h1>
            <div className="space-y-2 mb-10">
              <p className="text-xl text-white/80 leading-relaxed">
                Stunning HD & 4K wallpapers for your device.
              </p>
              <p className="text-lg text-white/50 italic">
                "Shots clicked by real photographers"
              </p>
              <p className="text-sm text-white/40">
                Search powered by <span className="font-semibold text-white/60">Pexels</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-orange-500 text-white rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-3 shadow-xl shadow-orange-500/20 group"
              >
                Get it on Google Play
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#features"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Explore Features
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="/attached_file_0.png" 
                alt="Vistaflow App Preview" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Featured Photo Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 order-2 lg:order-1"
            >
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Curated Library</h2>
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                Explore a vast collection of shots clicked by real photographers. Our library is powered by Pexels, ensuring you get the highest quality imagery for your device.
              </p>
              <div className="flex items-center gap-4 text-sm text-white/40">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-orange-500/20 flex items-center justify-center overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <span>Join thousands of users finding their perfect look.</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 order-1 lg:order-2"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="/attached_file_2.png" 
                    alt="Featured Library Shots" 
                    className="w-full h-auto transform transition duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Why Choose Vistaflow?</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Designed for those who appreciate visual excellence. Vistaflow brings the world's most beautiful imagery to your fingertips.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-orange-500" />,
                title: "4K & Ultra HD",
                desc: "Crystal clear quality that brings every pixel to life on your high-resolution display."
              },
              {
                icon: <ImageIcon className="text-blue-500" />,
                title: "Diverse Categories",
                desc: "From abstract art to breathtaking landscapes, find exactly what matches your style."
              },
              {
                icon: <Smartphone className="text-green-500" />,
                title: "Daily Updates",
                desc: "Fresh content added every single day to keep your home screen looking new."
              },
              {
                icon: <Zap className="text-purple-500" />,
                title: "Shuffle Mode",
                desc: "Can't decide? Let Vistaflow surprise you with curated shuffles across categories."
              },
              {
                icon: <Shield className="text-red-500" />,
                title: "Lightweight",
                desc: "Optimized performance that doesn't drain your battery or slow down your device."
              },
              {
                icon: <Star className="text-yellow-500" />,
                title: "Favorites",
                desc: "Save your most-loved wallpapers to your personal collection for quick access."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 tracking-tight">What's New</h2>
          <div className="p-8 rounded-3xl bg-orange-500/5 border border-orange-500/20 text-left">
            <p className="text-white/70 leading-relaxed mb-4">
              We are constantly improving Vistaflow to provide you with the best wallpaper experience. In our latest update:
            </p>
            <ul className="space-y-3 text-white/60">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></div>
                Enhanced 4K rendering for smoother previews.
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></div>
                New "Nature & Wildlife" category with exclusive high-res shots.
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></div>
                Improved shuffle algorithm for better variety.
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></div>
                Bug fixes and performance optimizations.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Need Support?</h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">
              Have questions, feedback, or need help with the app? Our team is here to assist you. Reach out to us anytime.
            </p>
            <div className="space-y-6">
              <a 
                href={`mailto:${supportEmail}`}
                className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase font-bold tracking-widest mb-1">Email Us</div>
                  <div className="text-lg font-medium group-hover:text-orange-500 transition-colors">{supportEmail}</div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <div className="space-y-4">
                <a href={termsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all group">
                  <span className="text-white/70 group-hover:text-white">Terms & Conditions</span>
                  <ExternalLink size={18} className="text-white/30 group-hover:text-white" />
                </a>
                <a href={privacyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all group">
                  <span className="text-white/70 group-hover:text-white">Privacy Policy</span>
                  <ExternalLink size={18} className="text-white/30 group-hover:text-white" />
                </a>
                <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all group">
                  <span className="text-white/70 group-hover:text-white">Google Play Store</span>
                  <ExternalLink size={18} className="text-white/30 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-50">
            <img src="/attached_file_1.png" alt="Vistaflow Logo" className="w-6 h-6 rounded-md" referrerPolicy="no-referrer" />
            <span className="font-bold tracking-tight">Vistaflow</span>
          </div>
          <div className="text-white/30 text-sm">
            © {new Date().getFullYear()} NextGen IT-Devs. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-white/40">
            <a href={privacyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy</a>
            <a href={termsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}