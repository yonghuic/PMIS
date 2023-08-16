import { useState } from 'react'
import TabTraffic from './TabTraffic';
import TabPublic from './TabPublic';
import TabEvents from './TabEvents';
const Public = () => {
    const [tabs, setTabs] = useState('traffic');

    const handleTabClick = (tab) => {
        setTabs(tab);
    };

    const tabActivecss = {
        backgroundColor: "#fff3da",
        color: "#603e1b",
        border: "2px solid #603e1b"
    };

    return (
        <>
            {/*Tab 標籤*/}
            <div className="flex justify-center mt-5">
                <div className="tabs tabs-boxed bg-[#ffe4a9]">
                    <a
                        className={`tab ${tabs === 'traffic' ? 'tab-active' : ''}`}
                        style={tabs === 'traffic' ? tabActivecss : {}}
                        href="##"
                        onClick={() => handleTabClick('traffic')}
                    >
                        交維資訊
                    </a>
                    <a
                        className={`tab ${tabs === 'public' ? 'tab-active' : ''}`}
                        style={tabs === 'public' ? tabActivecss : {}}
                        href="##"
                        onClick={() => handleTabClick('public')}
                    >
                        公開資料
                    </a>
                    <a
                        className={`tab ${tabs === 'events' ? 'tab-active' : ''}`}
                        style={tabs === 'events' ? tabActivecss : {}}
                        href="##"
                        onClick={() => handleTabClick('events')}
                    >
                        重大紀事
                    </a>
                </div>
            </div>
            {/*tab交維資訊的內容*/}
            {tabs === 'traffic' && (
                <>
                    <TabTraffic/>
                </>
            )}
            {/*tab交維資訊的內容*/}
            {tabs === 'public' && (
                <>
                    <TabPublic/>
                </>
            )}
             {/*tab重大紀事的內容*/}
             {tabs === 'events' && (
                <>
                    <TabEvents/>
                </>
            )}
        </>
    )
}

export default Public