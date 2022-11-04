
import Carousel from "flat-carousel";
import img1 from "../../assets/pj hard flip.jpeg"
import img2 from "../../assets/Hero.jpg"
import "./Carousel.css"

const images = [{id: 1, src: img1}, {id: 2, src: img2}]
export default function Gallery() {

    return (
        <Carousel>
            {images.map((img, index) => (
                <div key={img.id} className={"demo-item"} style={{backgroundImage: "url(" + img.src + ")"}}/>

            ))
            }
        </Carousel>
    )

}


