//材料使用圖
import { Pie } from 'react-chartjs-2';

const MaterialChart = () => {
    const dataMaterialChart = {
        labels: ['鋼筋', '混凝土', '鍍鋅格柵板', 'PVC止水帶', '化妝蓋板', '人形孔蓋'],
        datasets: [
            {
                label: '# of Votes',
                data: [1000, 2000, 3000, 4000, 5000, 6000],
                backgroundColor: ['#dcd8b1', "#a59f7c", "#af8e6c", "#f7d59a", '#8b7766', '#fff9c4'],
                borderColor: ['#695b4f'],
                borderWidth: 5,
            },
        ],
    };
    
    const optionsMaterialChart = {
        plugins: {
            legend: {
                //display:false,
                position: "bottom",
                align: "start",
                labels: {
                    font: {
                    size: 20,
                    family: 'Mochiy Pop One',
                    },
                }
            },
            tooltip: {
                bodyFont: {
                    size: 18, /*提示字大小*/
                    family: 'Mochiy Pop One',
                },
                callbacks: {
                    label: ({ label, formattedValue }) => ` ${label}: ${formattedValue} `
                }
            }
        },   
    };
  return (
    <>
        <div className="card w-[28%] bg-[#fff8ea] shadow-xl h-68 space-x-4">
            <div className="card-body">
                <h2 className="card-title text-[#54524a] text-3xl font-normal pb-2">材料使用</h2>
                <Pie data={dataMaterialChart} options={optionsMaterialChart}/>
            </div>
        </div>
    </>
  )
}

export default MaterialChart