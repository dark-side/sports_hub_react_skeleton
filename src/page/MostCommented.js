import News1 from '../img/news1.jpg';
import News2 from '../img/news3.jpg';
import News3 from '../img/news4.jpg';
import { Image } from 'react-bootstrap';

const MostCommented = () => {
    function generateNews() {
        const news = [
            {
                title: 'Lorem Impsum 1',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                img: News1
            },
            {
                title: 'Lorem Impsum 2',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                img: News2
            },
            {
                title: 'Lorem Impsum 3',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                img: News3
            }
        ]
        return news.map((news, index) => {
            return (
                <>
                    <div className="news-item">
                        <Image src={news.img} rounded height='100px' width='120px' />
                        <div>
                            <h2>{news.title}</h2>
                            <p>{news.text}</p>
                        </div>
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
export default MostCommented;