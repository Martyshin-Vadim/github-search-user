import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Search from "./components/Search/Search";
import UserCard from "./components/UserCard/UserCard";
import { LocalGithubUser, defaultUser } from "./types";
import { isGithubUser } from "./utils/typeguards";
import { extractLocalUser } from "./utils/exract-local-user";

const BASE_URL = "https://api.github.com/users/";
function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (username) {
        const url = BASE_URL + username;
        try {
          const res = await fetch(url);
          const data = await res.json();
          if (isGithubUser(data)) {
            setUser(extractLocalUser(data));
          } else {
            setUser(null);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchData();
  }, [username]);

  return (
    <Layout>
      {" "}
      <Header />
      <Search hasError={!user} onSubmit={setUsername} />
      {user && <UserCard {...user} />}
    </Layout>
  );
}

export default App;
