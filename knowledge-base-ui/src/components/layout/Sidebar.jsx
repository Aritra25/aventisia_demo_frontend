import React from 'react';
/* Re-mapping icons to match your specific image reference */
import { 
  UserCircle2, 
  Box, 
  Library, 
  Send, 
  Monitor, 
  Layers, 
  Zap, 
  PlayCircle, 
  Activity, 
  ShieldCheck, 
  Database, 
  Key, 
  Building2, 
  Puzzle 
} from 'lucide-react';

const menuData = [
  { group: "MY PROJECTS", items: [
    { label: "Agents", icon: UserCircle2 }, // Swapped for the circle-user icon
    { label: "AI Models", icon: Box },        // Swapped for the box/cube icon
    { label: "Library", icon: Library },
  ]},
  { group: "ORCHESTRATOR", items: [
    { label: "Published", icon: Send },
    { label: "Machines", icon: Monitor },     // Swapped for the monitor/screen icon
    { label: "Queues", icon: Layers },      // Swapped for the stack/layers icon
    { label: "Triggers", icon: Zap },
    { label: "Jobs", icon: PlayCircle },
    { label: "Executions", icon: Activity },
    { label: "Vault", icon: ShieldCheck },
    { label: "Knowledge Base", icon: Database, active: true },
    { label: "Key Store", icon: Key },
  ]},
  { group: "ADMIN", items: [
    { label: "Tenant", icon: Building2 },
    { label: "Integrations", icon: Puzzle },
  ]}
];

export default function Sidebar() {
  return (
    <aside 
      className="w-64 bg-white h-[calc(100vh-52px)] border-r border-[#F3F4F6] flex flex-col py-4 overflow-y-auto no-scrollbar"
      style={{
        msOverflowStyle: 'none', 
        scrollbarWidth: 'none'
      }}
    >
      {/* CSS to hide scrollbar for Chrome/Safari */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {menuData.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="px-6 py-2 text-[11px] font-bold text-[#9CA3AF] tracking-widest">
            {section.group}
          </h3>

          <div className="flex flex-col mt-1">
            {section.items.map((item) => (
              <div
                key={item.label}
                className={`relative flex items-center gap-3 px-6 py-2.5 cursor-pointer transition-colors group ${
                  item.active 
                    ? "bg-[#F3F4FF] text-[#4F46E5]" 
                    : "text-[#6B7280] hover:bg-gray-50 hover:text-[#111827]"
                }`}
              >
                {/* Vertical Active Indicator */}
                {item.active && (
                  <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-[#4F46E5] rounded-r-md" />
                )}

                <item.icon 
                  size={18} 
                  /* Thinner stroke for non-active, thicker for active to match image */
                  strokeWidth={item.active ? 2.2 : 1.8}
                  className={`${item.active ? "text-[#4F46E5]" : "text-[#9CA3AF] group-hover:text-[#6B7280]"}`} 
                />
                
                <span className={`text-[13px] ${item.active ? "font-semibold" : "font-medium"}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}