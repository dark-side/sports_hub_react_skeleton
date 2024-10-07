import { Image } from 'react-bootstrap';
import { FaComment } from 'react-icons/fa';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const MostCommented = ({ news }) => {
    const lineWithTextStyle = { marginTop: '50px', marginBottom: '50px' };

    function generateNews() {
        const mostCommented = [...news].sort((a, b) => b.comments_count - a.comments_count).slice(0, 3);

        return mostCommented.map((article, index) => {
            return (
                <>
                    <div className="news-item">
                        <Image src={`${ASSETS_URL}/${article.image_url}`} rounded height='100px' width='120px' />
                        <div>
                            <h2>{article.title}</h2>
                            <p>{article.short_description}</p>
                        </div>
                    </div>
                    <p><FaComment /> {article.comments_count}</p>
                </>
            )
        })
    }

    return (
        <>
            <div class="line-with-text" style={lineWithTextStyle}>
                <span>Most Commented</span>
            </div>
            {generateNews()}
        </>
    );
}
export default MostCommented;
