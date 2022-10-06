export type User = {
  id: number;
  lastUpdate: string;
  kod: string;
  nazev: string;
  ic: string;
  dic: string;
  ulice: string;
  mesto: string;
  psc: string;
  stat: string;
  "stat@evidencePath": string;
  "stat@showAs": string;
  "stat@ref": string;
};

export type TableProps = {
  searchTerm: string;
  userList: User[];
  currentPosts: User[];
};

export type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (value: React.SetStateAction<string>) => void;
};

export type PaginationProps = {
  postsPerPage: number;
  totalPosts: number;
  paginateHandler: (pageNumber: number) => void;
};
