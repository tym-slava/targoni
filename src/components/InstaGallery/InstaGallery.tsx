import React from "react";
import "../InstaGallery/InstaGallery.css";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import image1 from "../InstaGallery/img1.png";
import image2 from "../InstaGallery/img2.png";
import image3 from "../InstaGallery/img3.png";
import image4 from "../InstaGallery/img4.jpeg";
import image5 from "../InstaGallery/img5.jpeg";
import image6 from "../InstaGallery/img6.jpeg";
import image7 from "../InstaGallery/img7.jpeg";
// import tileData from "./tileData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
      width: "100%",
      height: "250px",
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
  })
);

const h = {
  height: "250",
};

//   The example data is structured as follows:

//   import image from 'path/to/image.jpg';
//   [etc...]

const tileData = [
  {
    img: image1,
    title: "",
    author: "author",
    link: "https://www.instagram.com/p/BXYT-BAhWMl/",
  },
  {
    img: image2,
    title: "",
    author: "author",
    link: "https://www.instagram.com/p/BYGgZaehFO4/",
  },
  {
    img: image3,
    title: "",
    author: "Targoni",
    link: "https://www.instagram.com/p/BTGfjWwjo7m/",
  },
  {
    img: image4,
    title: "",
    author: "Targoni",
    link: "https://www.instagram.com/p/B-hBd7Jgke-/",
  },
  {
    img: image5,
    title: "",
    author: "Targoni",
    link: "https://www.instagram.com/p/BXdH9pCh4vL/",
  },
  {
    img: image6,
    title: "",
    author: "Targoni",
    link: "https://www.instagram.com/p/BTd2OOnl-WT/",
  },
  {
    img: image7,
    title: "",
    author: "Targoni",
    link: "https://www.instagram.com/p/BTBeZpRDrsu/",
  },
];



// ФУНКЦИЯ ВЫСЧИТЫВАЕТ СКОЛЬКО ФОТОГРАФИЙ БУДЕТ РАЗМЕЩЕНО В ЗАВИСИМОСТИ ОТ ШИРИНЫ ЭКРАНА
let windowWidth: number = window.innerWidth;
function setCols(ww: number) {
  let col: number;

  if (ww <= 375) {
    col = 1.5;
      
  } else if (ww <= 576) {
    col = 1.5;
      
  } else if (ww <= 992) {
    col = 3.5;
  } else if (ww <= 1024) {
    col = 4;
      
  } else {
    col = 6.5;
    
  }return col;
  
};

function InstaGallery() {
  const classes = useStyles();
  let col = setCols(windowWidth);

  return (
    <div className="instagallery">
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={col}>
          {tileData.map((tile: any) => (
            <GridListTile key={tile.img} style={h}>
              <a href={tile.link}>
                <img src={tile.img} alt={tile.title} />
              </a>
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                //   actionIcon={
                //     <IconButton aria-label={`star ${tile.title}`}>
                //       <StarBorderIcon className={classes.title} />
                //     </IconButton>
                //   }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

export default InstaGallery;
