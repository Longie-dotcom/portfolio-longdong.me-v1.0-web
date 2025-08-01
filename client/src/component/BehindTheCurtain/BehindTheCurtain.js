import './BehindTheCurtain.css';
import TEXT from '../../assets/TEXT';
import AboutMe3 from '../../assets/pictures/about-me-3.jpg'
import AboutMe4 from '../../assets/pictures/about-me-4.jpg'
import MyCat1 from '../../assets/pictures/mycat-1.png';
import MyCat2 from '../../assets/pictures/mycat-2.png';
import MyCat3 from '../../assets/pictures/mycat-3.png';

function BehindTheCurtain() {
    return (
        <div className='behind-the-curtain-wrapper'>
            <div id="BehindTheCurtain">
                <div className='straight-line'>

                </div>

                <div className="curtain-title">
                    {TEXT.behind_title}
                </div>

                <div className="curtain-content">
                    <p>
                        {TEXT.behind_description_p1}&nbsp;
                        <span className='special'>
                            {TEXT.behind_description_p2}
                        </span>
                        {TEXT.behind_description_p3}
                    </p>
                </div>

                <div className='huge-title'>
                    {TEXT.behind_huge_title}
                </div>

                <div className='minipc-content'>
                    <div className='image-wrapper'>
                        <div className='box'>
                            {TEXT.behind_image_title_1}
                        </div>
                        <img src={AboutMe3} />
                    </div>

                    <div className='image-wrapper'>
                        <div className='box'>
                            {TEXT.behind_image_title_2}
                        </div>
                        <img src={AboutMe4} />
                    </div>

                    <div className='story'>
                        {TEXT.behind_story}
                        <div className='my-cat-1'>
                            <img src={MyCat1} />
                        </div>
                        <div className='my-cat-2'>
                            <img src={MyCat2} />
                        </div>
                        <div className='my-cat-3'>
                            <img src={MyCat3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BehindTheCurtain;
