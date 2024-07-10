import Image from 'react-bootstrap/Image';

const PhotoOfTheDay = ({ news }) => {
    return (
        <div>
            <Image src={news.image_url} fluid style={{ maxHeight: '650px' }} />;
        </div>
    );
}

export default PhotoOfTheDay;    