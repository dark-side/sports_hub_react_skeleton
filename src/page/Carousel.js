import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const CustomCarousel = ({ news }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  return (
    <Carousel responsive={responsive} showDots={true}>
      {news.map((item, index) => (
        <div key={index}>
          <img style={{ maxHeight: '620px' }} src={`${ASSETS_URL}/${item.image_url}`} alt={item.image_url} />
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
