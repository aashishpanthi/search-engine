import styles from "./style.module.css";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { forwardRef } from "react";

const NoResultFound = ({ query, open, setOpen }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          No results found.
        </Alert>
      </Snackbar>
      <div className={styles.noResultFound}>
        <h1>No results found for "{query}"</h1>
        <img src="/static/searching.svg" alt="searching" />
        <p>Try searching for something else.</p>
      </div>
    </>
  );
};
export default NoResultFound;
