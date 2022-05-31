import React, { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { CharacterTable } from './components/MuiTable';
import { CharacterChart } from './components/JsChart';
import  Header from './components/Header';
import { FrontPage } from './components/FrontPage';



export default function App() {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route path = "/"
          element = {<FrontPage/>}>
        </Route>
        <Route path = "/table"
          element = {<CharacterTable />}>
        </Route>
        <Route path = "/charts"
          element = {<CharacterChart />}>
        </Route>
      </Routes>
    </Router>
    
    
    
  );
};
