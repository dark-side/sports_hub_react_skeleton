import Image from 'react-bootstrap/Image';

const PhotoOfTheDay = ({ news }) => {
    const lineWithTextStyle = { marginTop: '50px', marginBottom: '50px' };
    const imageContainerStyle = { position: 'relative', display: 'inline-block' };
    const imageStyle = { maxHeight: '650px' };
    const captionStyle = { position: 'absolute', bottom: '10px', left: '10px' };
    const textStyle = { color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '10px' };

    return (
        <>
            <div class="line-with-text" style={lineWithTextStyle}>
                <span>Photo of the Day</span>
            </div>
            <div style={imageContainerStyle}>
                <Image src={news.image_url} fluid style={imageStyle} />
                <div style={captionStyle}>
                    <h2 style={textStyle}>{news.title}</h2>
                    <p style={textStyle}>{news.short_description}</p>
                </div>
            </div>
        </>
    );
}

export default PhotoOfTheDay;   