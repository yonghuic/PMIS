import { useState } from 'react';
import { ConstructionItemsData } from './ConstructionItemsData';

//react-chartjs-2
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, Filler, BarElement } from 'chart.js';

import ProjectProgressChart from './ProjectProgressChart'; //工程進度圖
import WeatherChart from './WeatherChart';                 //今日天氣圖
import OverallChart from './OverallChart';                 //整體進度圖
import HumanResources from './HumanResources';             //人力資源圖
import MachineChart from './MachineChart';                 //機械設備圖
import MaterialChart from './MaterialChart';               //材料使用圖

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, BarElement);
const Home = () => {
    const [tabs, setTabs] = useState('dynamicChart');

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
                className={`tab ${tabs === 'dynamicChart' ? 'tab-active' : ''}`}
                style={tabs === 'dynamicChart' ? tabActivecss : {}}
                href="##"
                onClick={() => handleTabClick('dynamicChart')}
            >
                動態圖表
            </a>
            <a
                className={`tab ${tabs === 'constructionItems' ? 'tab-active' : ''}`}
                style={tabs === 'constructionItems' ? tabActivecss : {}}
                href="##"
                onClick={() => handleTabClick('constructionItems')}
            >
                施工要項
            </a>
            </div>
        </div>

        {/*Tab 動態圖表內容
        <div className="mt-5 grid grid-cols-1 gap-10 lg:grid-cols-2">
        */}
        {tabs === 'dynamicChart' && (
            <>
                <div className="flex flex-wrap justify-center bg-[#fff8ea] space-x-4 space-y-4 pb-4 overflow-hidden">
                    <ProjectProgressChart /> {/*工程進度圖*/}
                    <WeatherChart />         {/*今日天氣圖*/}
                    <OverallChart />         {/*整體進度圖*/}
                    <HumanResources />       {/*人力資源圖*/}
                    <MachineChart />         {/*機械設備圖*/}
                    <MaterialChart />        {/*材料使用圖*/}
                </div>
            </>
        )}
        
        {/*Tab 施工要項內容*/}
        {tabs === 'constructionItems' && (
            <>
                <div className="bg-[#fffaef] overflow-hidden">
                    <div className="pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-12">
                        {/*施工要項*/}
                        {ConstructionItemsData.map((ItemsData) => {
                            return (
                                <div key={ItemsData._id} className="bg-[#fff8ea] h-[290px] border-[#cbae82] border-[6px] p-4 shadow-xl rounded-3xl flex flex-col items-center relative mt-24">
                                    <div className="flex items-center mb-2">
                                        <img src={ItemsData.titleimg} alt="titleimg" className="w-16 h-16 mr-2" />
                                        <h2 className="text-3xl text-[#54524a]">{ItemsData.title}</h2>
                                    </div>
                                    <ul className="list-disc pl-2 py-4 text-xl">
                                        <li className="flex items-center space-x-2 py-2">
                                            <img src={ItemsData.itemimg} alt="itemimg" className="w-8 h-8" />
                                            <span>{ItemsData.item1}</span>
                                        </li>
                                        <li className="flex items-center space-x-2 py-2">
                                            <img src={ItemsData.itemimg} alt="itemimg" className="w-8 h-8" />
                                            <span>{ItemsData.item2}</span>
                                        </li>
                                        <li className="flex items-center space-x-2 py-2">
                                            <img src={ItemsData.itemimg} alt="itemimg" className="w-8 h-8" />
                                            <span>{ItemsData.item3}</span>
                                        </li>
                                    </ul>
                                    <div className={`absolute top-0 left-1/2 transform ${ItemsData.topimgPosition}`}>
                                        <img src={ItemsData.topimg} alt="topimg" className={ItemsData.topimgcss} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        )}
    </>
  );
};

export default Home;
