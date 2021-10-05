// App.js import 

import './App.css';

// import component 
import Navbar from './component/Navbar/Navbar';
import Courses from './component/Courses/Courses';
import Home from './component/Home/Home';
import Tutorials from './component/Tutorials/Tutorials';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import Notfound from './component/Notfound/Notfound';

// import routers tool 
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <div className="App">
     
      <Router>
        {/* navbar header   */}
       <Navbar></Navbar>
       
      <Switch>

        {/* home section  */}
        <Route path="/home">
          <Home></Home>       
        </Route>
       

        {/* coursea as services*/}
        <Route path="/courses">
          <Courses></Courses>         
        </Route>
        
        {/* about  */}
        <Route path="/about">
          <About></About>      
        </Route>

        {/* tutorials as video  */}
         <Route path="/tutorials">
          <Tutorials></Tutorials>
        </Route>
         
         {/* default search  */}
         <Route exact path="/">
          <Home></Home>       
        </Route>

        {/* wrong search rout  */}
        <Route path="*">
          <Notfound></Notfound>          
        </Route>
        
      </Switch>
      {/* page footer  */}
      <Footer></Footer>
      
      </Router>
    </div>
  );
}

export default App;
