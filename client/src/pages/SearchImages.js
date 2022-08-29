import styles from "./styles/searchimage.module.css";
import { Image, Page, NoResultFound } from "../components";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const Images = () => {
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
    const { data } = await axios.get(`/api/images/${query}`);
    setLoading(false);
    if (data.length === 0) {
      setOpen(true);
    } else {
      setData(data);
    }
  };

  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    const data = localStorage.getItem("theme");

    if (!data) {
      setTheme(JSON.parse(data));
    }
    fetchResult();
    document.body.className = theme;
  }, []);

  return (
    <Page title="Images">
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
              <Image key={result.entityId} result={result} />
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

export default Images;
