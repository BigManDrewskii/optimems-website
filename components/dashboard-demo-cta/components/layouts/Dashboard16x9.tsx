import { useMockData } from '../hooks/useMockData';
import StatCardsDemo from '../widgets/StatCardsDemo';
import PowerBarsDemo from '../widgets/PowerBarsDemo';
import SidebarDemo from '../widgets/SidebarDemo';

export function Dashboard16x9() {
  const { stats, installations } = useMockData();

  const statCardsData = [
    {
      title: 'Parks',
      value: stats.parks,
      subtitle: 'Active locations',
      trend: { value: '+2 this month', isPositive: true },
    },
    {
      title: 'Devices',
      value: stats.devices,
      subtitle: 'Connected',
      trend: { value: '+12 this week', isPositive: true },
    },
    {
      title: 'Total Size',
      value: stats.totalSize,
      subtitle: 'MWp installed',
      trend: { value: '+5% vs last month', isPositive: true },
    },
    {
      title: 'Active Now',
      value: stats.activeConnections,
      subtitle: 'Online devices',
      trend: { value: '98.5% uptime', isPositive: true },
    },
  ];

  return (
    <div className="h-full flex rounded-lg overflow-hidden" style={{ background: 'var(--dashboard-bg)' }}>
      {/* Sidebar */}
      <SidebarDemo autoCycle={false} />

      {/* Main Content */}
      <div
        className="flex-1 py-3 px-3 overflow-y-auto space-y-4 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Stat Cards */}
        <div
          className="rounded-lg p-3"
          style={{
            background: 'var(--dashboard-surface)',
            border: '1px solid var(--dashboard-border)',
          }}
        >
          <h3
            className="text-sm font-semibold mb-3"
            style={{ color: 'var(--dashboard-text-primary)' }}
          >
            Overview
          </h3>
          <StatCardsDemo stats={statCardsData} columns={1} />
        </div>

        {/* Power Bars */}
        <div
          className="rounded-lg p-3"
          style={{
            background: 'var(--dashboard-surface)',
            border: '1px solid var(--dashboard-border)',
          }}
        >
          <h3
            className="text-sm font-semibold mb-3"
            style={{ color: 'var(--dashboard-text-primary)' }}
          >
            Installations
          </h3>
          <PowerBarsDemo installations={installations} maxItems={5} />
        </div>
      </div>
    </div>
  );
}
