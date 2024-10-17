import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getImageUrl } from '../utils';

const CustomCarousel = ({ news }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselStyle = {
    width: '100%',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div style={carouselStyle}>
      <Carousel responsive={responsive} showDots={true}>
        {news.map((item, index) => (
          <div key={index}>
            <img style={imageStyle} src={getImageUrl(item.image_url)} alt={item.image_url} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
