export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        h-[42px]
        px-5
        bg-[#4F46E5]
        text-white
        text-sm
        font-medium
        rounded-lg
        shadow-sm
        hover:bg-[#4338CA]
        transition
        whitespace-nowrap
      "
    >
      {children}
    </button>
  );
}