import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">About Opsvio</h2>
            <p className="text-lg text-neutral-muted mb-6">
              At Opsvio, we're passionate about transforming businesses through technology. Our team of experts brings together decades of experience in AI, DevOps, Security, and Engineering Leadership to deliver exceptional results for our clients.
            </p>
            <p className="text-lg text-neutral-muted mb-8">
              We believe in building long-term partnerships with our clients, understanding their unique challenges, and delivering tailored solutions that drive real business value. Our approach combines cutting-edge technology with proven methodologies to ensure sustainable success.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">200+</h4>
                <p className="text-neutral-muted">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">98%</h4>
                <p className="text-neutral-muted">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-primary mb-12 text-center">Our Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300",
                name: "David Chen",
                role: "CEO & Technical Director",
                bio: "15+ years of experience in technology leadership and digital transformation."
              },
              {
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300",
                name: "Sarah Johnson",
                role: "Head of AI Solutions",
                bio: "PhD in Machine Learning with extensive industry experience."
              },
              {
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300",
                name: "Michael Roberts",
                role: "Security Director",
                bio: "Former cybersecurity advisor for Fortune 500 companies."
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-bold text-primary mb-2">{member.name}</h4>
                <p className="text-secondary mb-2">{member.role}</p>
                <p className="text-neutral-muted">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}