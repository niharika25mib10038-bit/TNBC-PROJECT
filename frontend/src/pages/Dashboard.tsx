import React, { useEffect, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Activity,
  Database,
  Clock,
  ShieldCheck,
} from 'lucide-react';

const COLORS = {
  BL1: '#3b82f6',
  BL2: '#8b5cf6',
  M: '#10b981',
  LAR: '#f59e0b',
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [analyses, setAnalyses] = useState<any[]>([]);

  useEffect(() => {
    // Mock data for dashboard UI
    setTimeout(() => {
      setAnalyses([
        {
          id: '1',
          predicted_subtype: 'BL1',
          confidence: 0.92,
          created_at: new Date().toISOString(),
        },
        {
          id: '2',
          predicted_subtype: 'M',
          confidence: 0.85,
          created_at: new Date().toISOString(),
        },
        {
          id: '3',
          predicted_subtype: 'LAR',
          confidence: 0.78,
          created_at: new Date().toISOString(),
        },
        {
          id: '4',
          predicted_subtype: 'BL2',
          confidence: 0.95,
          created_at: new Date().toISOString(),
        },
      ]);

      setLoading(false);
    }, 1000);
  }, []);

  const data = [
    { name: 'BL1', value: 40 },
    { name: 'BL2', value: 20 },
    { name: 'M', value: 25 },
    { name: 'LAR', value: 15 },
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold dark:text-white">
          System Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="glass-card h-32 skeleton"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card h-96 skeleton" />
          <div className="glass-card h-96 skeleton" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold dark:text-white">
        System Dashboard
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Total Analyses */}
        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                Total Analyses
              </p>

              <h3 className="text-3xl font-bold dark:text-white mt-1">
                1,248
              </h3>
            </div>

            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-500 font-medium">
              +12%
            </span>

            <span className="text-slate-500 ml-2">
              from last month
            </span>
          </div>
        </div>

        {/* Average Confidence */}
        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                Avg Confidence
              </p>

              <h3 className="text-3xl font-bold dark:text-white mt-1">
                87.4%
              </h3>
            </div>

            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
        </div>

        {/* Inference Time */}
        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                Avg Inference Time
              </p>

              <h3 className="text-3xl font-bold dark:text-white mt-1">
                1.2s
              </h3>
            </div>

            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
              <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
          </div>
        </div>

        {/* Model Status */}
        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                Model Status
              </p>

              <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-2 flex items-center">
                <span className="status-dot online"></span>
                ResNet-50 Active
              </h3>
            </div>

            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Subtype Distribution */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold mb-4 dark:text-white">
            Subtype Distribution
          </h3>

          <div className="h-72">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        COLORS[
                          entry.name as keyof typeof COLORS
                        ]
                      }
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Analyses */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold mb-4 dark:text-white">
            Recent Analyses
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400">
                <tr>
                  <th className="px-4 py-3 rounded-tl-lg">
                    ID
                  </th>

                  <th className="px-4 py-3">
                    Subtype
                  </th>

                  <th className="px-4 py-3">
                    Confidence
                  </th>

                  <th className="px-4 py-3 rounded-tr-lg">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {analyses.map((a, i) => {
                  const subtypeColor =
                    COLORS[
                      a.predicted_subtype as keyof typeof COLORS
                    ];

                  return (
                    <tr
                      key={i}
                      className="border-b dark:border-slate-700 last:border-0"
                    >
                      <td className="px-4 py-3 font-medium dark:text-white">
                        {a.id.substring(0, 8)}
                      </td>

                      <td className="px-4 py-3">
                        <span
                          className="px-2 py-1 rounded text-xs font-bold text-white"
                          style={{
                            backgroundColor: subtypeColor,
                          }}
                        >
                          {a.predicted_subtype}
                        </span>
                      </td>

                      <td className="px-4 py-3 dark:text-slate-300">
                        {(a.confidence * 100).toFixed(1)}%
                      </td>

                      <td className="px-4 py-3 dark:text-slate-300">
                        {new Date(
                          a.created_at
                        ).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}