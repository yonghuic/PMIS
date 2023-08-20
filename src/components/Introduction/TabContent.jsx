import content1 from "./IntroductionImages/content1.png";
import content2 from "./IntroductionImages/content2.png";
import content3 from "./IntroductionImages/content3.png";
import content4 from "./IntroductionImages/content4.png";
import content5 from "./IntroductionImages/content5.png";
import content6 from "./IntroductionImages/content6.png";

const TabContent = () => {
    //卡片內容資料
    const contentdata = [
        {
            image: content1,
            title: "代辦管線工程",
            intro: "代辦管線遷移工程含台電高低壓管線、自來水管。",
        },
        {
            image: content2,
            title: "穿越高速公路車行地下道",
            intro: "以管冪工法配合地質改良，進行穿越地下開挖。",
        },
        {
            image: content3,
            title: "排水集水坑工程",
            intro: "利用管冪推管工作井開挖空間設置集水坑，達到排水延時、減緩洪峰之效果，減低極端氣候降雨之影響，進行穿越地下開挖。",
        },
        {
            image: content4,
            title: "未來捷運汐止民生線共線預留基座",
            intro: "本工程共預留3組捷運橋墩基礎，避免未來捷運施工時已完成通車之引道段路堤二次施工。",
        },
        {
            image: content5,
            title: "排水集水坑工程",
            intro: "利用管冪推管工作井開挖空間設置集水坑，達到排水延時、減緩洪峰之效果，減低極端氣候降雨之影響，進行穿越地下開挖。",
        },
        {
            image: content6,
            title: "穿越高速公路車行地下道",
            intro: "以管冪工法配合地質改良，進行穿越地下開挖。",
        },
    ];
    return (
        <>
            <div className="bg-[#fffaef] overflow-hidden">
                <div className="introductionContent">
                    <div className="contentContainer flex flex-wrap justify-center gap-4">
                        {contentdata.map((data) => (
                            <div className="mx-[0.87rem] mt-7 mb-[5.5rem] contentCard w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-wheat rounded-lg shadow-md transition-transform transform hover:scale-105 ease-in-out">
                                <div className="contentimg mt-2">
                                    <img src={data.image} alt="content1" className="h-full w-full object-cover rounded-t-lg -mt-5" style={{width:"315px", height:"190px"}}/>
                                </div>
                                <div className="contentDetail mt-[-60px] p-4 text-center text-black bg-opacity-90 opacity-0 hover:opacity-100 transform hover:-translate-y-90 transition-transform ease-in-out">
                                    <div className="text-xl text-[#54524a]">{data.title}</div>
                                    <div className="text-md py-4 text-[#8b7766]">{data.intro}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabContent