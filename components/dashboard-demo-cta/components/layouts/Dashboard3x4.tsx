import { motion } from 'framer-motion';
import { useMockData } from '../hooks/useMockData';
import StatCardsDemo from '../widgets/StatCardsDemo';
import PowerBarsDemo from '../widgets/PowerBarsDemo';

export function Dashboard3x4() {
  const { stats, installations } = useMockData();

  // Prepare stat cards data
  const statCardsData = [
    {
      title: 'Parks',
      value: stats.parks,
      subtitle: 'Active locations',
    },
    {
      title: 'Devices',
      value: stats.devices,
      subtitle: 'Connected',
    },
    {
      title: 'Total Size',
      value: stats.totalSize,
      subtitle: 'MWp installed',
    },
    {
      title: 'Active Now',
      value: stats.activeConnections,
      subtitle: 'Online devices',
    },
  ];

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden p-4" style={{ background: 'var(--dashboard-bg)' }}>
      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center mb-6"
      >
        <div className="flex items-center space-x-3">
          <img
            src="/optimems-logos/optimems-logo-icon-dark.svg"
            alt="OptiMems"
            className="w-10 h-10"
          />
          <img
            src="/optimems-logos/optimems-logo-fontmark-dark.svg"
            alt="OptiMems"
            className="h-7"
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 space-y-4 overflow-y-auto [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Stat Cards - Vertical stack */}
        <div>
          <StatCardsDemo stats={statCardsData} columns={1} />
        </div>

        {/* Power Bars */}
        <div className="rounded-lg p-4" style={{ background: 'var(--dashboard-surface)', border: '1px solid var(--dashboard-border)' }}>
          <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--dashboard-text-primary)' }}>Installations</h3>
          <PowerBarsDemo installations={installations} maxItems={3} />
        </div>

        {/* Info Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center py-4"
        >
          <p className="text-sm" style={{ color: 'var(--dashboard-text-secondary)' }}>Real-time solar energy management</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
