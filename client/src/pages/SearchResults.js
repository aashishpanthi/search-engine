import styles from "./styles/searchresult.module.css";
import { Content, Page, NoResultFound } from "../components";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect, forwardRef } from "react";
import axios from "axios";
import { CircularProgress, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const SearchResults = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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

  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    const data = localStorage.getItem("theme");
    setTheme(JSON.parse(data));

    fetchResult();
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <Page title="Search Results">
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
            <>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  No results found.
                </Alert>
              </Snackbar>

              <NoResultFound query={query} />
            </>
          )}
        </div>
      </div>
    </Page>
  );
};

export default SearchResults;
