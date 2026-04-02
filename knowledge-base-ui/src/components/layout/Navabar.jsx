import React from "react";
import { Search, Bell, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="relative h-[52px] bg-[#0F0D2E] text-white flex items-center justify-between px-4 border-b border-white/5 overflow-hidden rounded-md mx-3">
      {/* Subtle Background Glow - positioned specifically behind the search area */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, rgba(15, 13, 46, 0) 70%)`,
        }}
      />

      {/* Left Section: Logo & Selector */}
      <div className="z-10 flex items-center gap-5">
        <div className="flex items-center gap-2">
          {/* Logo matching image color and shape */}
          <div className="text-[#6366f1]">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21V7" />
              <path d="M5 12L12 5L19 12" />
              <path d="M5 21H19" opacity="0.35" />
            </svg>{" "}
          </div>
          <h1 className="text-[16px] font-bold tracking-tight text-white">
            Worcspace
          </h1>
        </div>

        {/* Workspace Pill */}
        <button className="flex items-center gap-2 bg-[#1E1B4B] hover:bg-[#2D2970] px-3 py-1 rounded-full text-[12px] transition-colors border border-white/10">
          <span className="font-medium">Worcspace 1</span>
          <ChevronDown size={14} className="opacity-50" />
        </button>
      </div>

      {/* Middle Section: Search Bar */}
      <div className="z-10 relative group">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
          <Search size={14} />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="w-[400px] bg-white/[0.05] border border-white/10 px-9 py-1.5 rounded-lg text-[13px] focus:outline-none focus:bg-white/[0.08] transition-all placeholder:text-white/20"
        />
        {/* Keyboard Shortcut Icon */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 text-[10px] font-medium flex items-center gap-0.5">
          <span className="text-xs">⌘</span>
          <span>K</span>
        </div>
      </div>

      {/* Right Section: Actions & Profile */}
      <div className="z-10 flex items-center gap-4">
        <button className="text-white/40 hover:text-white transition-colors relative">
          <Bell size={18} />
          {/* Unread indicator */}
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#6366f1] rounded-full border-2 border-[#0F0D2E]"></span>
        </button>

        {/* Profile Avatar */}
        <div className="w-8 h-8 bg-[#8E99F3] text-[#0F0D2E] rounded-full flex items-center justify-center font-bold text-[11px] cursor-pointer ring-1 ring-white/10 hover:ring-white/30 transition-all">
          GK
        </div>
      </div>
    </nav>
  );
}
