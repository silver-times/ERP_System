import { SearchBarProps } from "../types/Types";

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <div>
      <input
        className="bg-gray-50 border-2 border-[#374151] text-black text-lg w-full p-2.5 placeholder-gray-500"
        placeholder="Enter PSC number here..."
        required
        value={searchTerm}
        type="text"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
