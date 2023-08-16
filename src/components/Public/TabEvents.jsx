import React from 'react'

const TabEvents = () => {
    const tabledata = [
        {
            _id: 1,
            summary: "30公分預壘樁已完成169支",
            datetime: "2021/7/26 上午 12:00:00",
        },
        {
            _id: 2,
            summary: "主辦機關召開7/16 緊急事件檢討會議",
            datetime: "2021/7/22 上午 12:00:00",
        },
        {
            _id: 3,
            summary: "工地巡視防颱準備水溝清淤",
            datetime: "2021/7/21 上午 12:00:00",
        },
        {
            _id: 4,
            summary: "地改作業相關後續規劃會議",
            datetime: "2020/12/2 上午 09:00:00",
        },
        {
            _id: 5,
            summary: "人工、自動監測成果與LiDAR掃描成果整合",
            datetime: "2020/11/26 下午 02:00:00",
        },
        {
            _id: 6,
            summary: "高速公路地盤改良工程會議-高壓噴射地改施工落實及品質控制",
            datetime: "2020/11/17 上午 10:00:00",
        },
    ];
    return (
        <>
            <div className='bg-[#fffaef]'>
                <div className="mx-16 my-[3.8rem] overflow-x-auto border-[#603e1b] border-4 rounded-xl mt-8">
                    <div className="w-full overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead className="text-[#978162]">
                                <tr className="bg-[#ffe4a9]">
                                <th className="border-2 border-[#cbae82] text-lg px-4 py-2">項目</th>
                                <th className="border-2 border-[#cbae82] text-lg px-4 py-2">摘要</th>
                                <th className="border-2 border-[#cbae82] text-lg px-4 py-2">時間</th>
                                </tr>
                            </thead>
                            <tbody className="text-[#54524a]">
                                {tabledata.map((data, index) => (
                                <tr
                                    key={data._id}
                                    className={index % 2 === 0 ? 'bg-[#ffefce]' : 'bg-[#fff5de]'}
                                >
                                    <td className="border-2 border-[#cbae82] text-md px-4 py-2">{data._id}</td>
                                    <td className="border-2 border-[#cbae82] text-md px-4 py-2">{data.summary}</td>
                                    <td className="border-2 border-[#cbae82] text-md px-4 py-2">{data.datetime}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabEvents
