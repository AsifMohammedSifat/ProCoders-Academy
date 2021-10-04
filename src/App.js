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
        {/* header section  */}
        <Header></Header>
       
      <Switch>

        {/* home section  */}
        <Route path="/home">
          <Home></Home>       
        </Route>

        <Route exact path="/">
          <Home></Home>       
        </Route>

        <Route path="/courses">
          <Courses></Courses>         
        </Route>
        
        
        <Route path="/about">
          <About></About>      
        </Route>

        
         <Route path="/tutorials">
          <Tutorials></Tutorials>
        </Route>

        <Route exact  path="/">

        </Route>
       
        <Route path="*">
          <Notfound></Notfound>
          
        </Route>
        
      </Switch>
      <Footer></Footer>
      
      </Router>
    </div>
  );
}

export default App;
