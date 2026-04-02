// Card.js
export default function Card({ title, desc, date }) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[200px]">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-[#111827] text-base leading-tight">
            {title}
          </h3>
          <button className="text-[#6B7280] hover:bg-gray-100 rounded-full p-1 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
        </div>

        <p className="text-[#6B7280] text-[13px] mt-3 leading-relaxed">
          {desc}
        </p>
      </div>

      <div className="border-t border-[#F3F4F6] mt-6 pt-4 text-[12px] text-[#6B7280]">
        Created On: <span className="text-[#111827] font-medium ml-1">{date}</span>
      </div>
    </div>
  );
}