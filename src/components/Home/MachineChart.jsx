//機械設備圖
import { Doughnut } from 'react-chartjs-2';

const MachineChart = () => {
    //data
    const dataMachineChart = {
        labels: ['挖土機', '水車', '吊車', '水泥車'],
        datasets: [
            {
            label: '',
            data: [3, 1, 1, 2],
            backgroundColor: ['#fff9c4', '#8b7766', '#dcd8b1', "#f7d59a",],
            borderColor: ['#695b4f'],
            borderWidth: 5,
            },
        ],
    };
    
    //options
    const optionsMachineChart = {
        plugins: {
            legend: {
            //display:false,
            position: "bottom",
            labels: {
                font: {
                size: 20,
                family: 'Mochiy Pop One',
                },
            }
            },
            tooltip: {
                bodyFont: {
                    size: 20, /*提示字大小*/
                    family: 'Mochiy Pop One',
                },
                callbacks: {
                    label: ({ label, formattedValue }) => ` ${label}: ${formattedValue} 部`
                }
            }
        },   
    };
  return (
    <>
        <div className="card w-[28%] bg-[#fff8ea] shadow-xl h-68">
            <div className="card-body">
                <h2 className="card-title text-[#54524a] text-3xl font-normal pb-4">機械設備</h2>
                <Doughnut data={dataMachineChart} options={optionsMachineChart}/>
            </div>
        </div>
    </>
  )
}

export default MachineChart
