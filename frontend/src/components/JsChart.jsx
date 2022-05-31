import React from 'react';
import { useState } from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Paper } from '@mui/material';

import axios from 'axios'

ChartJS.register(ArcElement, Tooltip, Legend);

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

export function CharacterChart() {
    
    const [chart, setChart] = useState([])

     //Retrieve character data from API
     const apiData = async () => {
        //Utilize asynchronous function via HTTP request
        const response = await axios.get("http://127.0.0.1:8000/character/")
        .catch(err => console.log(err))

        if(response){
        //Assign HTTP response to character state
            const characters = response.data;
            setChart(characters.docs)
        }
    };
    //Call async function on page startup
    React.useEffect(() => { apiData();}, [] )

    const genders = chart?.map(x => x.gender).reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    const races = chart?.map(x => x.race).reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    var racedata = {
    labels: [...races.keys()],
    datasets: [
        {
        label: 'genders',
        data: [...races.values()],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        },
    ],
    };

    var genderdata = {
        labels: [...genders.keys()],
        datasets: [
            {
            label: 'genders',
            data: [...genders.values()],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            },
        ],
        };

    return( 
    
    
    <Paper elevation={4} style={styles}>
        <h1>Race</h1>
        <Paper style={{position: "relative", margin: "auto", width: "500px"}}>
            <Pie data={racedata} maintainAspectRatio='false'/>
        </Paper>
        <h1 text-align='center'>Gender</h1> 
        <Paper style={{position: "relative", margin: "auto", width: "500px"}}>
            <Pie data={genderdata} maintainAspectRatio='false'/>
        </Paper>
    </Paper>
    
    );
}

