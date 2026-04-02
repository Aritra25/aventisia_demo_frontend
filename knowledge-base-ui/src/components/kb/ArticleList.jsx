import { articles } from "../../data/articles";

function KBArticleCard({ article }) {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm p-6 flex flex-col justify-between min-h-[180px] group transition hover:shadow-md">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-base text-[#111827] mb-2">
            {article.title}
          </h3>
          <button className="text-[#6B7280] hover:bg-gray-100 rounded-full p-1 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
        </div>

        <div className="text-xs text-[#6B7280] leading-relaxed mb-6">
          {article.description}
        </div>
      </div>

      <div className="border-t border-[#F3F4F6] pt-4 text-[12px] text-[#6B7280]">
        Created On:
        <span className="text-[#111827] font-medium ml-1">
          {article.createdAt}
        </span>
      </div>
    </div>
  );
}

/* 🆕 Empty state */
function EmptyState() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <div className="mb-5 text-[#9CA3AF]">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21V7" />
          <path d="M5 12L12 5L19 12" />
          <path d="M5 21H19" opacity="0.3"/>
        </svg>
      </div>

      <h2 className="text-[#111827] font-semibold text-lg mb-2">
        No knowledge base articles yet
      </h2>

      <p className="text-[#6B7280] text-sm max-w-sm">
        Create your first article to help your team and customers find answers quickly.
      </p>
    </div>
  );
}

export default function ArticleList() {
  const navBtnClass =
    "w-8 h-8 flex items-center justify-center border border-[#E5E7EB] rounded-lg text-[#6B7280] hover:bg-gray-50 bg-white transition-colors disabled:opacity-50";

  return (
    <div className="flex flex-col h-full overflow-hidden">
      
      {/* Scroll Area */}
      <div className="flex-1 min-h-0 overflow-y-auto pr-2 px-8 py-4">
        {articles.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
            {articles.map((article) => (
              <KBArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>

      {/* Sticky Pagination */}
      <div className="flex items-center justify-between pt-4 text-[13px] text-[#374151] sticky bottom-0 mt-10">
        <div className="font-medium text-[#111827]">{articles.length} rows</div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[#6B7280]">Rows per page</span>
            <div className="relative">
              <select className="appearance-none bg-white border border-[#E5E7EB] rounded-lg px-3 py-1.5 pr-8 focus:outline-none text-[#111827] font-medium cursor-pointer">
                <option>10</option>
              </select>
              <div className="absolute inset-y-0 right-2.5 flex items-center pointer-events-none">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="text-[#6B7280]">
            page <span className="text-[#111827] font-semibold">1</span> of{" "}
            <span className="text-[#111827] font-semibold">1</span>
          </div>

          <div className="flex items-center gap-2">
            <button className={navBtnClass}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="m11 17-5-5 5-5m7 10-5-5 5-5" />
              </svg>
            </button>

            <button className={navBtnClass}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="m15 19-7-7 7-7" />
              </svg>
            </button>

            <button className={navBtnClass}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </button>

            <button className={navBtnClass}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="m13 5 5 5-5 5M6 5l5 5-5 5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}