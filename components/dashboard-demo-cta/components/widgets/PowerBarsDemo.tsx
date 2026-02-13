import { motion } from 'framer-motion';
import { PowerInstallation } from '../../types/dashboard.types';
import { useStaggeredAnimation } from '../hooks';

interface PowerBarProps {
  installation: PowerInstallation;
  index: number;
}

function PowerBar({ installation, index }: PowerBarProps) {
  const { name, installedPower, totalSize, percentage, status } = installation;

  // Color based on percentage
  const getBarColor = () => {
    if (percentage >= 80) return 'from-emerald-500 to-emerald-600';
    if (percentage >= 60) return 'from-cyan-500 to-cyan-600';
    if (percentage >= 40) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  // Status indicator
  const getStatusColor = () => {
    switch (status) {
      case 'online':
        return 'bg-emerald-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-[#1d3557] rounded-lg p-3 border border-gray-700 hover:border-gray-600 transition-colors"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${getStatusColor()}`} />
          <h4 className="text-white text-sm font-medium">{name}</h4>
        </div>
        <span className="text-gray-300 text-xs">{installedPower} / {totalSize} MW</span>
      </div>

      {/* Progress bar */}
      <div className="relative h-2 bg-[#0d1f35] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${getBarColor()} rounded-full`}
        />
      </div>

      <div className="flex items-center justify-between mt-2">
        <span className="text-gray-400 text-xs">{installation.park}</span>
        <span className="text-white text-sm font-semibold">{percentage.toFixed(1)}%</span>
      </div>
    </motion.div>
  );
}

interface PowerBarsDemoProps {
  installations: PowerInstallation[];
  maxItems?: number;
}

export default function PowerBarsDemo({
  installations,
  maxItems = 5,
}: PowerBarsDemoProps) {
  const { containerVariants } = useStaggeredAnimation(0.1);
  const displayInstallations = installations.slice(0, maxItems);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-3"
    >
      {displayInstallations.map((installation, index) => (
        <PowerBar
          key={installation.id}
          installation={installation}
          index={index}
        />
      ))}
    </motion.div>
  );
}
