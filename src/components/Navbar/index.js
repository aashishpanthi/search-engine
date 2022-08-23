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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const Navbar = () => {
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
    } else {
      setTheme("dark-theme");
      setBox("fa-solid fa-sun");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <button className={styles.button} onClick={handleOpen}>
          <p>Webportal</p>
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
              <Button onClick={() => handleClose()} sx={{ ml: 45 }}>
                <CloseIcon />
              </Button>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  cursor: "default",
                }}
              >
                Webportal
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "center",
                  cursor: "default",
                }}
              >
                Let us know about your sites
              </Typography>
              <TextField
                required
                id="outlined-search"
                label="Enter your Link"
                sx={{ mt: 4, display: "flex", justifyContent: "center" }}
              />
              <Button variant="outlined" size="medium" sx={{ mt: 4, ml: 20 }}>
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
