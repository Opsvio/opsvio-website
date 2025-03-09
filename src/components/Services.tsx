import { motion } from 'framer-motion';
import { Brain, Shield, Cog, Users } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Implementing intelligent systems that drive business value through machine learning and automation.',
  },
  {
    icon: Cog,
    title: 'DevOps Excellence',
    description: 'Streamlining development workflows and optimizing deployment pipelines for maximum efficiency.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Protecting your digital assets with comprehensive security measures and best practices.',
  },
  {
    icon: Users,
    title: 'Engineering Leadership',
    description: 'Guiding teams to success with proven methodologies and strategic technical direction.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-neutral-muted max-w-2xl mx-auto">
            We deliver comprehensive solutions that transform your business through technology innovation and strategic leadership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-neutral-muted">{service.description}</p>
              <button className="mt-4 text-secondary hover:text-secondary-light transition-colors font-medium">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}