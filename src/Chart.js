import React from 'react';
import {Bar, Line, Doughnut} from 'react-chartjs-2';
import './Chart.css'

class MyChart extends React.Component{
    state = {
        chartData: {
            radius: 50,
            labels: ['Mumbai','Delhi','Bangalore','Hyderabad','Kolkata'],
            datasets: [{
                label: 'population',
                data: [ 12442373, 11007835, 8436675, 6809970, 4486679 ],
                backgroundColor: ['green', 'coral', 'cyan', 'brown', 'red'],
            }]
        }
    }


    sum = this.state.chartData.datasets[0].data.reduce((sum, num)=>{
        return sum + num;
    }, 0);

    render(){
        return(
            <div className= 'chart'>
            
            <div className='percentPopulation'>
                <h4>Mumbai: {((12442373/this.sum)*100).toFixed(2)}%</h4>
                <h4>Delhi: {((11007835/this.sum)*100).toFixed(2)}%</h4>
                <h4>Bangalore: {((8436675/this.sum)*100).toFixed(2)}%</h4>
                <h4>Hyderabad: {((6809970/this.sum)*100).toFixed(2)}%</h4>
                <h4>Kolkata: {((4486679/this.sum)*100).toFixed(2)}%</h4>
            </div>
            <Doughnut className='doughnutChart' 
                data={this.state.chartData}
                height={100}
                // width={50}
                options={{
                    cutoutPercentage: 75,
                    title:{
                        display: true,
                        text: 'Largest cities in India',
                        fontSize: 25
                    },
                    legend:{
                        display: true,
                        position: 'right',
                        labels:{
                          fontColor: 'red'
                        }
                    },
                    animation:{
                        animateScale : true
                    },
                    responsive: true
                }}
            />
            </div>
            
        )
    }
}

export default MyChart;