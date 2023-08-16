import { useState, useEffect } from 'react'
import { slideimg } from './overviewImageData'

const TabOverview = () => {
    //carousel
    const [current, setCurrent] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)
    let timeOut = null
    const slideRight = () => {
        setCurrent(current === slideimg.length - 1 ? 0 : current + 1)
    }

    const slideLeft = () => {
        setCurrent(current === 0 ? slideimg.length -1 : current - 1)
    }
    
    useEffect(() => {
        timeOut = autoPlay && setTimeout(() => {slideRight()},2000)
    })

    const captioncss = {
        textShadow: "rgb(96, 62, 27) 2px 0px 0px, rgb(96, 62, 27) 1.75517px 0.958851px 0px, rgb(96, 62, 27) 1.0806px 1.68294px 0px, rgb(96, 62, 27) 0.141474px 1.99499px 0px, rgb(96, 62, 27) -0.832294px 1.81859px 0px, rgb(96, 62, 27) -1.60229px 1.19694px 0px, rgb(96, 62, 27) -1.97998px 0.28224px 0px, rgb(96, 62, 27) -1.87291px -0.701566px 0px, rgb(96, 62, 27) -1.30729px -1.5136px 0px, rgb(96, 62, 27) -0.421592px -1.95506px 0px, rgb(96, 62, 27) 0.567324px -1.91785px 0px, rgb(96, 62, 27) 1.41734px -1.41108px 0px, rgb(96, 62, 27) 1.92034px -0.558831px 0px"
    }

    //工程資訊簡介資料
    const introdata = [
        {
            title: "主辦機關:",
            content: "桃園市政府新建工程處"
        },
        {
            title: "設計/監造:",
            content: "OO工程顧問股份有限公司"
        },
        {
            title: "施工廠商:",
            content: "嘉皓營造有限公司"
        },
        {
            title: "總工程費:",
            content: "100億元"
        },
        {
            title: "開工日期:",
            content: "111年5月"
        },
        {
            title: "預定完工:",
            content: "112年10月"
        },
    ];
    return (
        <>
            <div className='bg-[#fffaef]'>
                {/*Carousel*/}
                <div className="carousel mt-5" onMouseEnter={() => {
                        setAutoPlay(false)
                        clearTimeout(timeOut)
                    }} 
                        onMouseLeave={() => {
                        setAutoPlay(true)
                    }}>
                
                    <div className="carousel_wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {slideimg.map((image, index) => {
                            return ( <div key={index} className={index===current ? "carousel_card carousel_card-active w-full" : "carousel_card w-full"}>
                                <img className="card_image rounded-xl" src={image.image} alt="" />
                                <div className={`${image.position} mt-[18rem] text-[28px] text-center text-[#ffeba9]`} style={captioncss}>{image.caption}</div>
                            </div>
                            )
                        })}
                        <div className="carousel_arrow_left" onClick={slideLeft}>
                            &lsaquo;
                        </div>
                        <div className="carousel_arrow_right" onClick={slideRight}>
                            &rsaquo;
                        </div>
                        <div className="carousel_pagination">
                            {slideimg.map((_,index) => {
                                return (
                                    <div key={index} className={index===current ? "pagination_dot pagination_dot-active" : "pagination_dot"} onClick={() => setCurrent(index)}></div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/*工程資訊簡介*/}
                <div className="flex justify-center items-center h-screen">
                    <div className="bg-[#fff8ea] overflow-hidden border-[#cbae82] border-[6px] rounded-3xl shadow-md p-6 md:p-8 lg:p-10 xl:p-12 max-w-lg">
                        {introdata.map((data) => (
                        <div className="mb-4 flex">
                            <div className="text-2xl text-[#8b7766]">{data.title}</div>
                            <p className="text-xl text-[#54524a] ml-2">{data.content}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabOverview
