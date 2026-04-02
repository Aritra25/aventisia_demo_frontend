// ArticleItem.js (The Drawer)
import { X } from 'lucide-react';

export default function ArticleItem({ open, setOpen }) {
  if (!open) return null;

  const labelClass = "block text-[13px] font-medium text-[#111827] mb-1.5";
  const inputClass = "w-full border border-[#E5E7EB] rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-gray-300";

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" 
        onClick={() => setOpen(false)}
      />

      {/* Drawer Content */}
      <div className="relative w-[450px] bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-[#F3F4F6]">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-[16px] font-semibold text-[#111827]">
                Create New Knowledge Base
              </h2>
              <p className="text-[12px] text-[#6B7280] mt-0.5">
                Best for quick answers from documents, websites and text files.
              </p>
            </div>
            <button 
              onClick={() => setOpen(false)}
              className="text-[#9CA3AF] hover:text-[#111827] transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Form Fields */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          <div>
            <label className={labelClass}>
              Name (Cannot be edited later)<span className="text-red-500">*</span>
            </label>
            <input className={inputClass} placeholder="Name" />
          </div>

          <div>
            <label className={labelClass}>Description</label>
            <textarea className={`${inputClass} h-28 resize-none`} placeholder="Description" />
          </div>

          <div>
            <label className={labelClass}>
              Vector Store<span className="text-red-500">*</span>
            </label>
            <select className={inputClass}>
              <option>Qdrant</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>
              LLM Embedding Model<span className="text-red-500">*</span>
            </label>
            <select className={inputClass}>
              <option>text-embedding-ada-002</option>
            </select>
          </div>
        </div>

        {/* Footer with Button at bottom-right */}
        <div className="p-6 border-t border-[#F3F4F6] flex justify-end">
          <button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 py-2.5 rounded-lg text-[13px] font-medium transition-all shadow-sm">
            Create
          </button>
        </div>

      </div>
    </div>
  );
}