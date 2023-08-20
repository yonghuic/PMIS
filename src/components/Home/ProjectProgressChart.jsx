//工程進度圖 ProjectProgressChart
import { Line } from 'react-chartjs-2';

const ProjectProgressChart = () => {
//options
const optionsProjectProgressChart = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 20, //28
            family: 'Mochiy Pop One',
          },
        }
      },
      title: {
        display: false,
      },
      tooltip: {
        bodyFont: {
          size: 20, /*提示字大小 28*/
          family: 'Mochiy Pop One',
        },
        callbacks: {
          label: ({ label, formattedValue }) => ` ${label}: ${formattedValue} %`
        }
      }
    },
    scales: {
      x: {
        ticks:{
          font: {
            size: 10, //12
            family: 'Mochiy Pop One',
          },
        },
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "年/月",
          font: {
            size: 16, //28
            family: 'Mochiy Pop One',
          },
        },
      },
      y: {
        ticks:{
          font: {
            size: 12, //12
            family: 'Mochiy Pop One',
          },
        },
      },
    }
};

//data
const dataProjectProgressChart = {
    labels: ['2022/6', '2022/7', '2022/8', '2022/9', '2022/10', '2022/11', '2022/12', '2023/1', '2023/2', '2023/3', '2023/4', '2023/5'],
    datasets: [
      {
        label: '實際進度',
        data: [0, 12.36, 14.27, 16.56, 17, 19.9, 20.12, 21.28, 22.19, 24.56, 27.69, 32.32],
        borderColor: '#957d62', //#957d62
        backgroundColor: '#ffeba9', //c9ad8c
        borderWidth: 5,
        fill:true,
        order: 1
      },
      {
        label: '預定進度',
        data: [0, 7.25, 8.78, 10.56, 11.48, 12.9, 14, 14.58, 15.19, 16.56, 17.69, 19.42],
        borderColor: '#585858',
        backgroundColor: '#b8a89a', //#c3c3c3 dadada
        borderWidth: 5,
        fill: true, // 3. Set the fill options
      },
    ],
};

    return (
        <>  
            <div className="card w-[53%] bg-[#fff8ea] shadow-xl h-68 space-x-4">
                <div className="card-body">
                    <h2 className="card-title text-[#54524a] text-3xl font-normal">工程進度</h2>
                    <Line options={optionsProjectProgressChart} data={dataProjectProgressChart} />
                </div>
            </div>
        </>
    )
}

export default ProjectProgressChart