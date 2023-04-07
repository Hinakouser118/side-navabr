import './App.css';
import Sidebar from './Components/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Overview from './pages/Overview';
import {Reports, ReportsOne, ReportsTwo, ReportsThree} from './pages/Reports';
import Products from './pages/Products';
import Team from './pages/Team';

function App() {
    return (
        <Router>
            <Sidebar/>
            <Switch>
                <Route path='/overview' exact component={Overview}/>
                <Route path='/reports' exact component={Reports}/>
                <Route path='/reports/reports1' exact component={ReportsOne}/>
                <Route path='/reports/reports2' exact component={ReportsTwo}/>
                <Route path='/reports/reports3' exact component={ReportsThree}/>
                <Route path='/products' exact component={Products}/>
                <Route path='/team' exact component={Team}/>
            </Switch>
        </Router>
    );
}
// import './App.css';

// import React, { useState } from 'react'
// import NavBar from './components/NavBar';
// import News from './components/News';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'
// import Sidebar from './components/sidebar';

// const App = ()=> {
//   const pageSize = 5;
//   // const apiKey = process.env.REACT_APP_NEWS_API
//   const [progress, setProgress] = useState(0)
 
//     return (
//       <div>
//         <Router>
//         <Sidebar/> 
//         <NavBar/>
//         <LoadingBar
//         height={3}
//         color='#f11946'
//         progress={progress} 
//       />
//         <Switch>
//           <Route exact path="/"><News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/business"><News setProgress={setProgress}  key="business" pageSize={pageSize} country="in" category="business"/></Route> 
//           <Route exact path="/entertainment"><News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
//           <Route exact path="/general"><News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/health"><News setProgress={setProgress}  key="health" pageSize={pageSize} country="in" category="health"/></Route> 
//           <Route exact path="/science"><News setProgress={setProgress}  key="science" pageSize={pageSize} country="in" category="science"/></Route> 
//           <Route exact path="/sports"><News setProgress={setProgress}  key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
//           <Route exact path="/technology"><News setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
//         </Switch>
//         <Switch>
//           <Route exact path="/"><News setProgress={setProgress}  key="general" pageSize={pageSize} country="us" category="general"/></Route> 
//           <Route exact path="/business"><News setProgress={setProgress}  key="business" pageSize={pageSize} country="us" category="business"/></Route> 
//           <Route exact path="/entertainment"><News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="us" category="entertainment"/></Route> 
//           <Route exact path="/general"><News setProgress={setProgress}  key="general" pageSize={pageSize} country="us" category="general"/></Route> 
//           <Route exact path="/health"><News setProgress={setProgress}  key="health" pageSize={pageSize} country="us" category="health"/></Route> 
//           <Route exact path="/science"><News setProgress={setProgress}  key="science" pageSize={pageSize} country="us" category="science"/></Route> 
//           <Route exact path="/sports"><News setProgress={setProgress}  key="sports" pageSize={pageSize} country="us" category="sports"/></Route> 
//           <Route exact path="/technology"><News setProgress={setProgress}  key="technology" pageSize={pageSize} country="us" category="technology"/></Route> 
//         </Switch>
//         <Switch>
//           <Route exact path="/"><News setProgress={setProgress}  key="general" pageSize={pageSize} country="au" category="general"/></Route> 
//           <Route exact path="/business"><News setProgress={setProgress}  key="business" pageSize={pageSize} country="au" category="business"/></Route> 
//           <Route exact path="/entertainment"><News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="au" category="entertainment"/></Route> 
//           <Route exact path="/general"><News setProgress={setProgress}  key="general" pageSize={pageSize} country="au" category="general"/></Route> 
//           <Route exact path="/health"><News setProgress={setProgress}  key="health" pageSize={pageSize} country="au" category="health"/></Route> 
//           <Route exact path="/science"><News setProgress={setProgress}  key="science" pageSize={pageSize} country="au" category="science"/></Route> 
//           <Route exact path="/sports"><News setProgress={setProgress}  key="sports" pageSize={pageSize} country="au" category="sports"/></Route> 
//           <Route exact path="/technology"><News setProgress={setProgress}  key="technology" pageSize={pageSize} country="au" category="technology"/></Route> 
//         </Switch>
//         </Router>
//       </div>
//     )
 
// }

// export default App;
export default App;
