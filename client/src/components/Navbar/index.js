import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  px: 3,
  py: 4,
};
const Navbar = () => {
  const [url, setUrl] = useState("");

  //mui
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //theme
  const [box, setBox] = useState("fa-solid fa-moon");
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
      setBox("fa-solid fa-moon");
      document.body.className = "light-theme";
    } else {
      setTheme("dark-theme");
      setBox("fa-solid fa-sun");
      document.body.className = "dark-theme";
    }
  };

  const submitLink = async (e) => {
    e.preventDefault();

    // send a post request to the server using axios with headers
    try {
      //save the data
      const { data } = await axios.post(`/api/link`, {
        url,
      });

      alert(`Site added successfully! ${url} has been added to our list.`);

      //clear the input field
      setUrl("");
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <button className={styles.button} onClick={handleOpen}>
          <p>Add your website</p>
        </button>

        <button className={styles.buttonn} onClick={() => toggleTheme()}>
          <FontAwesomeIcon icon={box} className={styles.icon} />
        </button>
      </div>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Button
                onClick={() => handleClose()}
                sx={{
                  display: "block",
                  marginLeft: "auto",
                }}
              >
                <CloseIcon />
              </Button>
              <Typography
                id="transition-modal-title"
                variant="h4"
                component="h1"
                sx={{ textAlign: "center" }}
              >
                Add your website url
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{
                  mt: 2,
                  textAlign: "center",
                }}
              >
                Enter your website url below. It will help us to know about your
                website and rank it.
              </Typography>
              <TextField
                required
                id="outlined-search"
                label="Enter your Link"
                sx={{ mt: 4, display: "flex", justifyContent: "center" }}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <Button
                variant="outlined"
                size="medium"
                sx={{ mt: 4, ml: 20 }}
                onClick={submitLink}
              >
                Submit
              </Button>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
