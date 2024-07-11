import { Image } from 'react-bootstrap';

const MostCommented = ({ news }) => {
    const lineWithTextStyle = { marginTop: '50px', marginBottom: '50px' };

    function generateNews() {
        const mostCommented = [...news].sort((a, b) => b.comments_count - a.comments_count).slice(0, 3);

        return mostCommented.map((article, index) => {
            return (
                <>
                    <div className="news-item">
                        <Image src={article.image_url} rounded height='100px' width='120px' />
                        <div>
                            <h2>{article.title}</h2>
                            <p>{article.short_description}</p>
                        </div>
                    </div>
                    <p>Comments: {article.comments_count}</p>
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