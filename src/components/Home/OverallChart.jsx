//整體進度圖 OverallChart
import { Doughnut } from 'react-chartjs-2';

const OverallChart = () => {
    //data
    const dataOverallChart = {
        labels: ['實際進度', '剩餘進度'],
        datasets: [
        {
            label: '',
            data: [20, 80],
            backgroundColor: [
            '#fff9c4',
            '#8b7766',
            ],
            borderColor: [
            '#dcd8b1',
            '#695b4f',
            ],
            borderWidth: 5,
            circumference: 180,
            rotation: -90,
        },
        
        ],
    };

    //options
    const optionsOverallChart = {
        plugins: {
        legend: {
        //display:false,
            position: "bottom",
            labels: {
            font: {
                size: 20, /*25 */
                family: 'Mochiy Pop One',
            },
            }
        },
        tooltip: {
            bodyFont: {
            size: 16, /*提示字大小 28*/
            family: 'Mochiy Pop One',
            },
            callbacks: {
            label: ({ label, formattedValue }) => ` ${label}: ${formattedValue} %`
            }
        }
        },   
    };
    return (
        <>
            <div className="card w-[15rem] bg-[#fff8ea] shadow-xl h-68 space-x-4">
                <div className="card-body">
                    <h2 className="card-title text-[#54524a] text-3xl font-normal pb-10">整體進度</h2>
                    <Doughnut data={dataOverallChart} options={optionsOverallChart}/>
                </div>
            </div>
        </>
    )
}

export default OverallChart
