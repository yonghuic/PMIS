//施工要項內容的資料
import worker1 from "../../images/worker1.png";
import worker2 from "../../images/worker2.png"; 
import worker3 from "../../images/worker3.png"; 
import circle1 from "../../images/circle1.png";
import circle2 from "../../images/circle2.png";
import circle3 from "../../images/circle3.png";
import v1 from "../../images/v1.png";
import v3 from "../../images/v3.png";
import barrier from "../../images/barrier.png";

export const ConstructionItemsData = [
    {
        "_id": 1,
        "topimg": v1,
        "topimgcss": "w-32 h-32",
        "topimgPosition": "translate-x-[2.3rem] -translate-y-[6.9rem]",
        "title": "上週",
        "titleimg": worker1,
        "itemimg": circle1,
        "item1": "機具組裝",
        "item2": "預壘樁鋼筋籠製作",
        "item3": "低壓地改遮斷壁復工",
    },
    {
        "_id": 2,
        "topimg": barrier,
        "topimgcss": "w-24 h-24",
        "topimgPosition": "-translate-x-1/2 -translate-y-[5.8rem]",
        "title": "本週",
        "titleimg": worker2,
        "itemimg": circle2,
        "item1": "鋪設地面",
        "item2": "水泥澆置",
        "item3": "灑水養護",
    },
    {
        "_id": 3,
        "topimg": v3,
        "topimgcss": "w-28 h-28",
        "topimgPosition": "-translate-x-[0.5rem] -translate-y-[6rem]",
        "title": "下週",
        "titleimg": worker3,
        "itemimg": circle3,
        "item1": "機具組裝",
        "item2": "H型鋼橋塗裝",
        "item3": "導溝開挖",
    },
];


