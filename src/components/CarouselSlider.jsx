import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "@mui/material";

export default function CarouselSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{ opacity: 0.8 }}>
        <img
          src="images/Beserk.jpg"
          alt="animegirl"
          className="d-block w-100"
        ></img>
        <Carousel.Caption>
          <Button
            variant="contained"
            size="medium"
            sx={{ backgroundColor: "#fffeea !important", color: "black" }}
          >
            Check Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ opacity: 0.8 }}>
        <img
          src="images/kingdom.jpg"
          alt="animegirl"
          className="d-block w-100"
        ></img>
        <Carousel.Caption>
          <Button
            variant="contained"
            size="medium"
            sx={{ backgroundColor: "#fffeea !important", color: "black" }}
          >
            Check Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ opacity: 0.8 }}>
        <img
          src="images/one piece.jpeg"
          alt="animegirl"
          className="d-block w-100"
        ></img>

        <Carousel.Caption>
          <Button
            variant="contained"
            size="medium"
            sx={{ backgroundColor: "#fffeea !important", color: "black" }}
          >
            Check Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
