import './App.css';
import Header from './component/Header/Header';
import Courses from './component/Courses/Courses';
import Home from './component/Home/Home';
import Tutorials from './component/Tutorials/Tutorials';
import About from './component/About/About';

import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './component/Footer/Footer';
import Notfound from './component/Notfound/Notfound';


function App() {
  return (
    <div className="App">
     
      <Router>
        {/* navbar header   */}
        <Header></Header>
       
      <Switch>

        {/* home section  */}
        <Route path="/home">
          <Home></Home>       
        </Route>
        <Route exact path="/">
          <Home></Home>       
        </Route>

        {/* course as services*/}
        <Route path="/courses">
          <Courses></Courses>         
        </Route>
        
        {/* about  */}
        <Route path="/about">
          <About></About>      
        </Route>

        {/* tutorials  */}
         <Route path="/tutorials">
          <Tutorials></Tutorials>
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
