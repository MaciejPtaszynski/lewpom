
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero.js";
import Gallery from "./components/Carousel/Gallery";
import TestModal from "./components/TestModal/TestModal";
import MediaCard from "./components/MediaCard/MediaCard";
import DB from "./DataBase/DataBase";
import Box from "@mui/material/Box";




function App() {
    const ItemCard = DB.map((item)=>{
        return <MediaCard
        key={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
        isAvailable={item.available}
        image={item.image}
        />
    })
  return (

    <div>
        <Header/>
      <Hero/>
       {/* <Gallery/>*/}
       {/* <TestModal/>*/}
       <Box>{DB.map((item)=><MediaCard
               key={item.id}
               title={item.title}
               description={item.description}
               price={item.price}
               isAvailable={item.available}
               image={item.image}
           />
       )}</Box>


      
    </div>
  );
}

export default App;
 