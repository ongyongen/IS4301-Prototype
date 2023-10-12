import Layout from '../../Layout';
import Reading from '../../../public/img/reading.png';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { PageSubtitle } from '../../components/PageSubtitle/PageSubtitle';
import { Footer } from '../../components/Footer/Footer';
import { HomeCardData } from './Home.config';
import { ImgTextCard } from '../../components/Card/ImgTextCard';
import { FAQ } from './FAQ';
import { FAQData } from './Home.config';
const Home = () => {
    return (
        <Layout>
            <div className="flex flex-row flex-wrap justify-center items-center">
                <div className="sm:w-2/6">
                    <PageTitle title={'App Name'} className={'text-center'} />
                    <PageSubtitle
                        subTitle={'Insert Subtitle'}
                        className={'text-center'}
                    />
                </div>
                <div className="sm:w-3/6 bg-red flex-wrap">
                    <img src={Reading} />
                </div>
            </div>
            <div className=" text-center mt-10 mb-20">
                <PageSubtitle
                    subTitle={'What App Name Provides'}
                    className={'font-bold'}
                />
                <div className="m-10 justify-center flex flex-row gap-10 mt-10">
                    {HomeCardData.map(card => {
                        return (
                            <ImgTextCard
                                key={card.id}
                                imgLink={card.imgLink}
                                title={card.title}
                                text={card.text}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="mt-10 mb-20">
                <PageSubtitle
                    subTitle={'How the app works'}
                    className={'font-bold text-center'}
                />
                {FAQData.map(faq => {
                    return (
                        <FAQ
                            key={faq.id}
                            title={faq.title}
                            paragraph={faq.paragraph}
                        />
                    );
                })}
            </div>
            <Footer />
        </Layout>
    );
};

export default Home;
