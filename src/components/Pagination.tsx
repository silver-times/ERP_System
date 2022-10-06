import { PaginationProps } from "../types/Types";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginateHandler,
}: PaginationProps) => {
  const pageNumbers = [];

  const pageNumberHandler = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    num: number
  ) => {
    event.preventDefault();
    paginateHandler(num);
  };

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="flex items-center justify-center my-5 gap-2">
        {pageNumbers.map((num) => (
          <li key={num}>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
              onClick={(event) => pageNumberHandler(event, num)}
            >
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
