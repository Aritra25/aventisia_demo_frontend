import { useState } from "react";
import Container from "../components/layout/Container";
import Button from "../components/common/Button";
import SearchBar from "../components/common/Searchbar";
import ArticleList from "../components/kb/ArticleList";
import ArticleItem from "../components/kb/ArticleItem";

// export default function Home() {
//   const [open, setOpen] = useState(false);

//   return (
//     <Container>
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-semibold text-[#111827]">
//           Knowledge Base
//         </h1>

//         <div className="flex gap-3">
//           <SearchBar />
//           <Button
//             onClick={() => setOpen(true)}
//             className="bg-[#4F46E5] text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-[#3730A3] transition"
//           >
//             + Create New
//           </Button>
//         </div>
//       </div>

//       <ArticleList />

//       <ArticleItem open={open} setOpen={setOpen} />
//     </Container>
//   );
// }

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-[26px] font-semibold text-[#111827]">
          Knowledge Base
        </h1>

        <div className="flex gap-3 w-full md:w-auto">
          <SearchBar />
          <Button
            onClick={() => setOpen(true)}
            className="bg-[#4F46E5] text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-[#3730A3] transition"
          >
            + Create New
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <ArticleList />
      </div>
      <ArticleItem open={open} setOpen={setOpen} />
    </Container>
  );
}
