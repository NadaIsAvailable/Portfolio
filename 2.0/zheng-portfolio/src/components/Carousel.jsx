import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

export default function ImageCarousel({imgs}) {
  return (
    <Carousel slide={true}>
        {
            imgs.map((img, idx) => (
                <Carousel.Item key={`project-${idx}`}>
                    <img src={`/images/projects/${img}`} alt={`${img}-${idx}`}></img>
                </Carousel.Item>
            ))
        }
    </Carousel>
  );
}