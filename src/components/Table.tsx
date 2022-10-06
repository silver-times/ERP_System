import { TableProps } from "../types/Types";

const Table = ({ userList, searchTerm, currentPosts }: TableProps) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
      <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6">
            PSC
          </th>
          <th scope="col" className="py-3 px-6">
            NAME
          </th>
          <th scope="col" className="py-3 px-6">
            STREET
          </th>
          <th scope="col" className="py-3 px-6">
            CITY
          </th>
          <th scope="col" className="py-3 px-6">
            ID
          </th>
        </tr>
      </thead>
      <tbody>
        {searchTerm
          ? userList
              .filter((user) =>
                (user?.psc).replace(/ +/g, "").startsWith(searchTerm)
              )
              .map((user) => (
                <tr
                  key={user?.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {(user?.psc).replace(/ +/g, "")}
                  </th>
                  <td className="py-4 px-6">{user?.nazev}</td>
                  <td className="py-4 px-6">{user?.ulice}</td>
                  <td className="py-4 px-6">{user?.mesto}</td>
                  <td className="py-4 px-6">{user?.id}</td>
                </tr>
              ))
          : currentPosts
              .filter((user) =>
                (user?.psc).replace(/ +/g, "").startsWith(searchTerm)
              )
              .map((user) => (
                <tr
                  key={user?.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {(user?.psc).replace(/ +/g, "")}
                  </th>
                  <td className="py-4 px-6">{user?.nazev}</td>
                  <td className="py-4 px-6">{user?.ulice}</td>
                  <td className="py-4 px-6">{user?.mesto}</td>
                  <td className="py-4 px-6">{user?.id}</td>
                </tr>
              ))}
      </tbody>
    </table>
  );
};

export default Table;
