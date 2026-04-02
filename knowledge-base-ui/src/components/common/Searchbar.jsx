export default function SearchBar() {
  return (
    <input
      placeholder="Search..."
      className="
        h-[42px]
        w-full md:w-[260px]
        px-4
        border border-[#E5E7EB]
        rounded-lg
        outline-none
        text-sm
        focus:ring-2 focus:ring-indigo-500
      "
    />
  );
}