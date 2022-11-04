
import React from "react"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero.js";
import Gallery from "./components/Carousel/Gallery";
import TestModal from "./components/TestModal/TestModal";
import MediaCard from "./components/MediaCard/MediaCard";
import data from "./data/pics";
import Box from "@mui/material/Box";
import Masonry from "react-masonry-css";
import "./App.css"
import PopUpGrid from "./components/PopUpGrid/PopUpGrid";


function App() {
    // const ItemCard = DB.map((item)=>{
    //     return <MediaCard
    //     key={item.id}
    //     title={item.title}
    //     description={item.description}
    //     price={item.price}
    //     isAvailable={item.available}
    //     image={item.image}
    //     />
    // })
    const breakpoints = {
        default: 7,
        1200: 4,
        1100: 2,
        700: 1,
    }
  return (

    <div className={"App"}>
        <Header/>
        <Hero/>
       {/* <Gallery/>*/}
       {/* <TestModal/>*/}
       {/* <Masonry*/}
       {/*     breakpointCols={breakpoints}*/}
       {/*     className={"my-masonry-grid"}*/}
       {/*     columnClassName={"my-masonry-grid_column"}*/}
       {/*             >*/}
       {/*                 {data.map((item) => <MediaCard*/}
       {/*                 title={item.title}*/}
       {/*                 description={item.description}*/}
       {/*                 price={item.price}*/}
       {/*                 isAvalible={item.available}*/}
       {/*                 image={item.image}/>)}*/}
       {/* </Masonry>*/}
        <PopUpGrid/>
    </div>
  );
}

export default App;
 