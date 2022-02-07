import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hoots/useQuery";
import styles from "./Search.module.css";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText);
  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
