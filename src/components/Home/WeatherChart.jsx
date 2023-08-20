import useFetch from "../useFetch"
import { weatherdata } from "./WeatherData"

const WeatherChart = () => {
    const url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-005?Authorization=CWB-02B0CD26-4949-45B6-8CDD-806B3FE20E83&elementName=Wx,T,RH,PoP6h&locationName=桃園區"
    const { data: weather, loading, error, refetch } = useFetch(url)
    if (loading) return <h1>Loading...</h1>
    if (error) return console.log(error)

    const dataindex = (index) => {
        return weather?.records.locations[0].location[0].weatherElement[index].time[0].elementValue[0].value
    }
    const weatherid = weather?.records.locations[0].location[0].weatherElement[0].time[0].elementValue[1].value //判斷哪種天氣 ex:晴天 雨天
    const locationName = weather?.records.locations[0].location[0].locationName //地區
    const weatherToday = dataindex(0) //今日天氣
    const temperature = dataindex(1)  //溫度
    const humidity = dataindex(2)     //濕度
    const chanceOfRain = dataindex(3) //降雨機率

    const matchingWeather = weatherdata.find(data => data.id === weatherid); //找出天氣對應的圖片
    const weatherImage = matchingWeather ? matchingWeather.name : ''; //天氣對應的圖片的路徑

    const temperaturecss = {
        textShadow: "rgb(96, 62, 27) 2px 0px 0px, rgb(96, 62, 27) 1.75517px 0.958851px 0px, rgb(96, 62, 27) 1.0806px 1.68294px 0px, rgb(96, 62, 27) 0.141474px 1.99499px 0px, rgb(96, 62, 27) -0.832294px 1.81859px 0px, rgb(96, 62, 27) -1.60229px 1.19694px 0px, rgb(96, 62, 27) -1.97998px 0.28224px 0px, rgb(96, 62, 27) -1.87291px -0.701566px 0px, rgb(96, 62, 27) -1.30729px -1.5136px 0px, rgb(96, 62, 27) -0.421592px -1.95506px 0px, rgb(96, 62, 27) 0.567324px -1.91785px 0px, rgb(96, 62, 27) 1.41734px -1.41108px 0px, rgb(96, 62, 27) 1.92034px -0.558831px 0px"
    }

    return (
        <>
            <div className="card max-w-[15rem] h-68 bg-[#fff8ea] shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-[#54524a] text-3xl font-normal">今日天氣</h2>
                    <div class="relative overflow-hidden">
                    <img
                        className="ml-2 max-w-[60%] animate-slide w-[20rem]"
                        src={weatherImage} // 顯示該天氣對應的圖片
                        alt={weatherImage}
                    />
                    </div>
                    <div className="text-2xl">
                        {locationName}
                        <span className="text-[#ffeba9] pl-4 text-[30px]" style={temperaturecss}>&nbsp;{temperature + "°"}</span>
                    </div>
                    <div>{weatherToday}</div>
                    <div>{"降雨機率: " + chanceOfRain + "%"}</div>
                    <div>{"濕度: " + humidity + "%"}</div>
                </div>
            </div>
        </>
    )
}

export default WeatherChart