import { useState, useEffect } from "react";
// components
import Heading from "./components/Heading";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
// types
import { User } from "./types/Types";
import { POST_PER_PAGE } from "./utils/utils";

const App = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetching the Data
  useEffect(() => {
    const dataHandler = async () => {
      const endpoint = "https://demo.flexibee.eu/v2/c/demo/adresar.json";
      const res = await fetch(endpoint);
      const data = await res.json();
      const { adresar } = data?.winstrom;
      setUserList(adresar);
    };
    dataHandler();
  }, []);

  // Pagination Logic
  const indexOfLastPost = currentPage * POST_PER_PAGE;
  const indexofFirstPost = indexOfLastPost - POST_PER_PAGE;
  const currentPosts = userList.slice(indexofFirstPost, indexOfLastPost);

  const paginateHandler = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <Heading />
      <div className="mx-[100px] mt-[40px]">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Table
          userList={userList}
          currentPosts={currentPosts}
          searchTerm={searchTerm}
        />
        <Pagination
          postsPerPage={POST_PER_PAGE}
          totalPosts={userList.length}
          paginateHandler={paginateHandler}
        />
      </div>
    </div>
  );
};

export default App;
