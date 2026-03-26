import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Home, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Home, value: 500, suffix: "+", label: "Properties Sold" },
  { icon: Users, value: 300, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Clock, value: 24, suffix: "/7", label: "Support Available" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
        let current = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(current);
          }
        }, 20);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, started]);

  return <div ref={ref} className="font-display text-4xl md:text-5xl font-bold text-gold">{count}{suffix}</div>;
};

const Stats = () => (
  <section className="py-20 bg-charcoal">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <stat.icon className="w-8 h-8 text-gold mx-auto mb-4" />
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="text-primary-foreground/60 text-sm mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
