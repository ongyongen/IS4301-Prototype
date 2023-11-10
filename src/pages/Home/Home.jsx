import Layout from '../../Layout';
import Reading from '../../../public/img/reading.png';
import { PageTitle } from '../../components/PageTitle/PageTitle';

const Home = () => {
    
    return (
        <Layout>
            <div className="flex flex-row flex-wrap justify-center items-center">
                <div className="sm:w-2/6">
                    <PageTitle title={"s"} className={'text-center'} />
                </div>
                <div className="sm:w-3/6 bg-red flex-wrap">
                    <img src={Reading} />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
