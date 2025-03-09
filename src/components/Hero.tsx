import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Your{' '}
              <span className="text-accent">digital blueprint</span>,
              <br />
              expertly designed and executed for{' '}
              <span className="text-secondary">secure, scalable</span>,
              <br />
              and{' '}
              <span className="text-accent">intelligent</span>{' '}
              customer experiences.
            </h1>
            <p className="text-lg md:text-xl text-neutral-light mb-8">
              We specialize in AI, DevOps, Security, and Engineering Leadership to transform your digital vision into reality.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-secondary hover:bg-secondary-light text-white rounded-lg transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}