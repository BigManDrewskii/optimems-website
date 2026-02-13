import { motion } from 'framer-motion';
import { StatCardData } from '../../types/dashboard.types';
import { useCounterAnimation, useDashboardAnimation } from '../hooks';

interface StatCardProps {
  title: string;
  value: number;
  subtitle?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  delay?: number;
}

function StatCard({
  title,
  value,
  subtitle,
  trend,
  delay = 0,
}: StatCardProps) {
  const { ref, isInView } = useDashboardAnimation();
  const animatedValue = useCounterAnimation(value, 1500, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-lg p-4 shadow-lg hover:scale-[1.02] transition-transform duration-300"
      style={{ background: 'var(--dashboard-surface)', border: '1px solid var(--dashboard-border)' }}
    >
      <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--dashboard-text-primary)' }}>{title}</h3>
      <p className="text-2xl font-bold mb-1" style={{ color: 'var(--dashboard-text-primary)' }}>
        {animatedValue}
      </p>
      {subtitle && <p className="text-xs" style={{ color: 'var(--dashboard-text-secondary)' }}>{subtitle}</p>}

      {trend && (
        <div className="mt-2">
          <span
            className={`text-xs font-medium ${
              trend.isPositive ? 'text-emerald-400' : 'text-red-400'
            }`}
          >
            {trend.value}
          </span>
        </div>
      )}
    </motion.div>
  );
}

interface StatCardsDemoProps {
  stats: StatCardData[];
  columns?: 1 | 2 | 3 | 4;
}

export default function StatCardsDemo({
  stats,
  columns = 4,
}: StatCardsDemoProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-3`}>
      {stats.map((stat, index) => (
        <StatCard
          key={stat.title}
          {...stat}
          value={typeof stat.value === 'number' ? stat.value : parseInt(stat.value.toString())}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}
