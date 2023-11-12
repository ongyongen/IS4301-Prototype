import Reading from '../../../public/img/reading.png';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { PageSubtitle } from '../../components/PageSubtitle/PageSubtitle';
import { PAGE_TITLE, PAGE_SUBTITLE } from "./Landing.config.js"

const LandingPageContent = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center items-center">
            <div className="sm:w-2/6">
                <PageTitle title={PAGE_TITLE} className={'text-center'} />
                <PageSubtitle
                    subTitle={PAGE_SUBTITLE}
                    className={'text-center'}
                />
            </div>
            <div className="sm:w-3/6 bg-red flex-wrap">
                <img src={Reading} />
            </div>
        </div>
    )
}

export default LandingPageContent