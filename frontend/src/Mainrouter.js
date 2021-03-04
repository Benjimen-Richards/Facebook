import './App.css';
import  {BrowserRouter, Route } from 'react-router-dom'
import Homepage from './Components/IndexPage/Homepage/Homepage';
import Userprofile from './Components/Userprofile/Userprofile';
import Navbar from './Components/Nav/Navbar';
import Newsfeed from './Components/Newsfeed/Newsfeed';
import Rough from './Rough';
import Error from './Components/Error'
import Register from './Components/Register/Register'
function Mainrouter() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Route path='/'exact component={Homepage}/>
        <Route path='/profile'  component={Userprofile}/>
        <Route path='/feed' component={Newsfeed}/>
        <Route path='/register' component={Register}/>
        <Route path='/play' component={Rough}/>
      </BrowserRouter>
    </div>
  );
}

export default Mainrouter;
