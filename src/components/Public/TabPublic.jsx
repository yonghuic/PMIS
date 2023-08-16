import React from 'react'

const TabPublic = () => {
    const publicdata = [
        {
            title: "公司名稱:",
            content: "嘉皓營造有限公司",
        },
        {
            title: "成立時間:",
            content: "民國86年",
        },
        {
            title: "營業項目:",
            content: "土木工程、道路工程、養護工程承包",
        },
    ];
    return (
        <>
            {/*公開資料*/}
            <div className='bg-[#fffaef]'>
                <div className="flex justify-center items-center h-screen">
                    <div className="mt-[-15rem] bg-[#fff8ea] overflow-hidden border-[#cbae82] border-[6px] rounded-3xl shadow-md p-4 md:p-6 lg:p-8 xl:p-10 max-w-lg">
                        {publicdata.map((data) => (
                            <div className="my-3 flex">
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

export default TabPublic
