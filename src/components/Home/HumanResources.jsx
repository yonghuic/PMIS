//人力資源圖
import { Bar } from 'react-chartjs-2';

const HumanResources = () => {
    //options
    const optionsHumanResourcesChart = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: 'bottom',
            labels: {
              font: {
                size: 25,
                family: 'Potta One',
              },
            }
          },
          tooltip: {
            bodyFont: {
              size: 20, /*提示字大小 28*/
              family: 'Mochiy Pop One',
            },
            callbacks: {
              label: ({ label, formattedValue }) => ` ${label}: ${formattedValue} 人`
            }
          },
          title: {
            display: false,
          },
        },
        scales: {
          x: {
            ticks:{
              font: {
                size: 19,
                family: 'Mochiy Pop One',
              },
            },
            grid: {
              display: false,
            },
          },
          y: {
            ticks:{
              display: false,
            },
            grid: {
              display: false,
            },
          },
        }
      };
    
    //data
    const dataHumanResourcesChart = {
        labels: ['監工', '技工', '小工', '大工', '鋼筋工'],
        datasets: [
            {
            label: '人力',
            data: [100, 200, 300, 400, 500],
            backgroundColor: ["#a59f7c", "#af8e6c", "#8b7766", "#f7d59a", "#fff9c4"], 
            borderColor: ['#695b4f'],
            borderWidth: 5,
            },
        ],
    };
    return (
        <>
            <div className="card w-[39%] bg-[#fff8ea] shadow-xl h-68 space-x-4">
                <div className="card-body">
                    <h2 className="card-title text-[#54524a] text-3xl font-normal pb-10">人力資源</h2>
                    <Bar options={optionsHumanResourcesChart} data={dataHumanResourcesChart} />
                </div>
            </div>
        </>
    )
}

export default HumanResources