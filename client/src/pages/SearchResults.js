import styles from "./styles/searchresult.module.css";
import { Content, Page, NoResultFound } from "../components";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const SearchResults = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  if (!query) {
    navigate("/");
  }

  const fetchResult = async () => {
    setLoading(true);

    // get using axios
    const { data } = await axios.get(`/api/search/${query}`);
    setLoading(false);
    if (data.length === 0) {
      setOpen(true);
    } else {
      setData(data);
    }
  };

  useEffect(() => {
    fetchResult();
  }, [query]);

  return (
    <Page title={`${query} | Search Results`}>
      <div className={styles.container}>
        <div className={styles.sidenav}>
          <Link to={`/search?q=${query}`}>
            <button className={styles.btn}>All</button>
          </Link>
          <Link to={`/search/images?q=${query}`}>
            <button className={styles.btn}>Images</button>
          </Link>
          {/* <button className={styles.btn}>Videos</button> */}
        </div>
        <div className={styles.result}>
          {loading ? (
            <CircularProgress className={styles.loader} />
          ) : (
            data.map((result) => (
              <Content key={result.entityId} result={result} />
            ))
          )}

          {data.length === 0 && !loading && (
            <NoResultFound open={open} setOpen={setOpen} query={query} />
          )}
        </div>
      </div>
    </Page>
  );
};

export default SearchResults;
