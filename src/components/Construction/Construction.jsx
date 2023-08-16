import work1 from "./constructionImages/work1.PNG";
import work2 from "./constructionImages/work2.PNG";
import work3 from "./constructionImages/work3.PNG";
import work4 from "./constructionImages/work4.PNG";

const Construction = () => {
    const workdata = [
        {
            image: work1,
            title: "棄土跟拍",
            date: "2022/8/11",
        },
        {
            image: work2,
            title: "施工中",
            date: "2022/9/18",
        },
        {
            image: work3,
            title: "檢測",
            date: "2022/10/20",
        },
        {
            image: work4,
            title: "水泥澆置",
            date: "2022/12/6",
        },
        {
            image: work2,
            title: "施工中",
            date: "2022/9/18",
        },
        {
            image: work1,
            title: "棄土跟拍",
            date: "2022/8/11",
        },
        {
            image: work4,
            title: "水泥澆置",
            date: "2022/12/6",
        },
        {
            image: work1,
            title: "棄土跟拍",
            date: "2022/8/11",
        },
    ];
    return (
        <>
            <div className="flex flex-wrap my-3">
                {workdata.map((data) => (
                    <div className="w-full sm:w-1/1 lg:w-1/4 p-4" key={data.title}>
                        <div className="relative group overflow-hidden rounded-2xl">
                            <img
                                src={data.image}
                                alt={data.title}
                                className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black bg-opacity-50 transform translate-y-full group-hover:translate-y-0 transition duration-300 opacity-0 group-hover:opacity-100">
                                <div className="text-white text-center">
                                    <h2 className="text-2xl">{data.title}</h2>
                                    <p className="hidden sm:block">{data.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Construction