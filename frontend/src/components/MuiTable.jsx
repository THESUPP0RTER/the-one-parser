import * as React from 'react';
import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Paper } from '@mui/material';

import axios from 'axios'


export function CharacterTable() {
    //Set list of characters as a state
    const [character, setCharacters] = useState([])
    
    //Retrieve character data from API
    const apiData = async () => {
        //Utilize asynchronous function via HTTP request
        const response = await axios.get("http://127.0.0.1:8000/character/")
        .catch(err => console.log(err))

        if(response){
        //Assign HTTP response to character state
            const characters = response.data;
            setCharacters(characters.docs)
        }
    };
    //Call async function on page startup
    React.useEffect(() => { apiData();}, [] )

   
    
    return ( 
    //Render Material UI table
    <TableContainer component = {Paper} sx = {{margin: '10px 10px', maxWidth:1000}}>
        <Table title = 'title' aria-label="simple table">
          <TableHead>
            <TableRow sx = {{backgroundColor: "lightblue"}}>
              <TableCell>Name</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Race</TableCell>
              <TableCell align="right">Wiki Article</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {character.map((characters) => (
              <TableRow
                key={characters.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {characters.name}
                </TableCell>
                <TableCell align="right">{characters.gender}</TableCell>
                <TableCell align="right">{characters.race}</TableCell>
                <TableCell align="right">{characters.wikiUrl}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>);
}

