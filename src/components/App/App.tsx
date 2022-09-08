import React, { useState, useEffect, FC } from "react";
import Header from "components/Header";
import { IUser } from "types";
import Main from "components/Main";

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [sortedValue, setSortedValue] = useState<string>("default");
  const [users, setUsers] = useState<IUser[]>([]);
  const [sortedUsers, setSortedUsers] = useState(users);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();

        setUsers(users);
        setIsLoading(false);
      } catch (error: any) {
        console.log(error.message);
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    switch (sortedValue) {
      case "ascending":
        const sortedUsersByAscending = [...users].sort(
          (user1: { name: String }, user2: any) =>
            user1.name.localeCompare(user2.name)
        );
        setSortedUsers(sortedUsersByAscending);
        return;

      case "descending":
        const sortedUsersByDescending = [...users].sort(
          (user1: { name: String }, user2: any) =>
            user2.name.localeCompare(user1.name)
        );
        setSortedUsers(sortedUsersByDescending);
        return;

      default:
        setSortedUsers(users);
    }
  }, [setSortedValue, sortedValue, users]);

  const filteredUsers = sortedUsers.filter(({ name }: { name: string }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleSortSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortedValue(e.target.value);
  };

  return (
    <>
      <Header
        onSearchChange={handleSearchChange}
        onSelectChange={handleSortSelect}
        value={filter}
      />
      <Main filteredUsers={filteredUsers} isLoading={isLoading} />
    </>
  );
};

export default App;
