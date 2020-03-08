import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Backdrop from "@material-ui/core/Backdrop";
import InfoIcon from "@material-ui/icons/Info";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const DEMO_RESPONSE = {
  copyright: "Francisco Sojuel",
  date: "2020-03-16",
  explanation:
    "Why does Saturn appear so big? It doesn't -- what is pictured are foreground clouds on Earth crossing in front of the Moon. The Moon shows a slight crescent phase with most of its surface visible by reflected Earthlight known as ashen glow. The Sun directly illuminates the brightly lit lunar crescent from the bottom, which means that the Sun must be below the horizon and so the image was taken before sunrise.  This double take-inducing picture was captured on 2019 December 24, two days before the Moon slid in front of the Sun to create a solar eclipse. In the foreground, lights from small Guatemalan towns are visible behind the huge volcano Pacaya.   Follow APOD in English on: Instagram, Facebook,  Reddit, or Twitter",
  hdurl: "https://apod.nasa.gov/apod/image/2003/SaturnMoon_Sojuel_1824.jpg",
  media_type: "image",
  service_version: "v1",
  title: "A Moon Dressed Like Saturn",
  url: "https://apod.nasa.gov/apod/image/2003/SaturnMoon_Sojuel_960.jpg"
};
const DEMO_RESPONSE_VIDEO = {
  date: "2020-03-15",
  explanation:
    "You couldn't really be caught in this blizzard while standing by a cliff on Churyumov-Gerasimenko. Orbiting the comet -- frequently abbreviated as 67P or CG -- in June of 2016, the Rosetta spacecraft's narrow angle camera did record streaks of dust and ice particles -- similar to snow -- as they drifted across the field of view near the camera and above the comet's surface. Some of the bright specks in the scene, however, are likely due to a rain of energetic charged particles or cosmic rays hitting the camera, and the dense background of stars in the direction of the constellation of the Big Dog (Canis Major). In the featured video, these background stars are easy to spot trailing from top to bottom. The stunning movie was constructed from 33 consecutive images taken over 25 minutes while Rosetta cruised some 13 kilometers from the comet's nucleus.",
  media_type: "video",
  service_version: "v1",
  title: "The Snows of Churyumov-Gerasimenko",
  url: "https://www.youtube.com/embed/PpyPgJHKxSw?rel=0"
};

const isApiOverloaded = false;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  },
  videoContainer: {
    height: "80vh"
  }
}));

function App() {
  const classes = useStyles();

  const [apod, setApod] = useState({});
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const loadApod = async () => {
      console.log("fetching netlify function");
      let apod;
      if (isApiOverloaded) {
        apod = DEMO_RESPONSE;
      } else {
        apod = await fetch(`.netlify/functions/potd`).then(res => res.json());
      }
      setApod(apod);
    };
    loadApod();
  }, []);

  return (
    <div className="App">
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              stranger than fiction
            </Typography>
            <Button color="inherit">Mars</Button>
            <Button color="inherit">POTD</Button>
          </Toolbar>
        </AppBar>
      </div>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexDirection="column"
        style={{ width: "100%", height: "90vh" }}
      >
        {apod.media_type === "image" ? (
          <img
            src={apod.url}
            style={{ maxWidth: "100%", maxHeight: "100%", overflow: "visible" }}
            alt={apod.title}
          />
        ) : (
          <iframe
            src={apod.url}
            width={560 * 1.5}
            height={315 * 1.5}
            title={apod.title}
          />
        )}
        <Box>
          <Button onClick={handleToggle} startIcon={<InfoIcon />}>
            NASA's Photo of the Day
          </Button>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        css={{ padding: 10 }}
      >
        <Backdrop
          className={classes.backdrop}
          open={open}
          onClick={handleClose}
        >
          <Box maxWidth="950px">
            <Card>
              <CardContent>
                <Typography
                  variant="h4"
                  component="h3"
                  align="center"
                  color="textSecondary"
                  gutterBottom
                >
                  {apod.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {apod.explanation}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {apod.copyright}, {apod.date}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Backdrop>
      </Box>
    </div>
  );
}

export default App;
