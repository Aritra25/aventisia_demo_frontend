import Navbar from "./Navabar";
import Sidebar from "./Sidebar";

export default function Container({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">{children}</div>
      </div>
    </>
  );
}