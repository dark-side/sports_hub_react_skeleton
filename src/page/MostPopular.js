import News1 from '../img/news1.jpg';
import News2 from '../img/news3.jpg';
import News3 from '../img/news4.jpg';
import { Image } from 'react-bootstrap';

const MostPopular = ({ news }) => {
    function generateNews() {
        const mostPopular = [...news].sort((a, b) => b.article_likes - a.article_likes).slice(0, 3);


        return mostPopular.map((article, index) => {
            return (
                <>
                    <div className="news-item">
                        <Image src={article.image_url} rounded height='100px' width='120px' />
                        <div>
                            <h2>{article.title}</h2>
                            <p>{article.short_description}</p>
                        </div>
                        <p>Likes: {article.article_likes}</p>
                    </div>
                </>
            )
        })
    }

    return (
        <>
            {generateNews()}
        </>
    );
}
export default MostPopular;
