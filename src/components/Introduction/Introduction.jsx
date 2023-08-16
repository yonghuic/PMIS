import { useState } from 'react'
import origin from "./IntroductionImages/origin.png"
import benefit from "./IntroductionImages/benefit.png"
import TabOverview from './TabOverview';
import TabContent from './TabContent';
const Introduction = () => {
    const [tabs, setTabs] = useState('origin');

    const handleTabClick = (tab) => {
        setTabs(tab);
    };

    const tabActivecss = {
        backgroundColor: "#fff3da",
        color: "#603e1b",
        border: "2px solid #603e1b"
    };

    const TabOriginAndTabBenefits = ({image, altText}) => {
        return (
            <div className="bg-[#fffaef] overflow-hidden">
                <div className="my-[7.8rem] mt-5 max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-xl">
                    <img className="w-full h-auto" src={image} alt={altText} />
                </div>
            </div>
        );
    };

    return (
        <>
            {/*Tab 標籤*/}
            <div className="flex justify-center mt-5">
                <div className="tabs tabs-boxed bg-[#ffe4a9]">
                    <a
                        className={`tab ${tabs === 'origin' ? 'tab-active' : ''}`}
                        style={tabs === 'origin' ? tabActivecss : {}}
                        href="##"
                        onClick={() => handleTabClick('origin')}
                    >
                        緣起
                    </a>
                    <a
                        className={`tab ${tabs === 'overview' ? 'tab-active' : ''}`}
                        style={tabs === 'overview' ? tabActivecss : {}}
                        href="##"
                        onClick={() => handleTabClick('overview')}
                    >
                        概述
                    </a>
                    <a
                        className={`tab ${tabs === 'content' ? 'tab-active' : ''}`}
                        style={tabs === 'content' ? tabActivecss : {}}
                        href="##"
                        onClick={() => handleTabClick('content')}
                    >
                        內容
                    </a>
                    <a
                        className={`tab ${tabs === 'benefits' ? 'tab-active' : ''}`}
                        style={tabs === 'benefits' ? tabActivecss : {}}
                        href="##"
                        onClick={() => handleTabClick('benefits')}
                    >
                        效益
                    </a>
                </div>
            </div>
            {/*tab緣起的內容*/}
            {tabs === 'origin' && (
                <>
                    <TabOriginAndTabBenefits image={origin} altText="originimg" />
                </>
            )}
            {/*tab概述的內容*/}
            {tabs === 'overview' && (
                <>
                    <TabOverview />
                </>
            )}
            {/*tab內容*/}
            {tabs === 'content' && (
                <>
                    <TabContent />
                </>
            )}
            {/*tab效益的內容*/}
            {tabs === 'benefits' && (
                <>
                    <TabOriginAndTabBenefits image={benefit} altText="benefitimg" />
                </>
            )}
        </>
    )
}

export default Introduction