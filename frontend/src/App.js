import './App.css';
import  {BrowserRouter, Route } from 'react-router-dom'
import Homepage from './Components/IndexPage/Homepage/Homepage';
import Userprofile from './Components/Userprofile/Userprofile';
import Navbar from './Components/Nav/Navbar';
import Newsfeed from './Components/Newsfeed/Newsfeed';

function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
        <Route path='/'exact component={Homepage}/>
        <Navbar/>
        <Route path='/profile' component={Userprofile}/>
        <Route path='/nav' component={Navbar}/>
        <Route path='/feed' component={Newsfeed}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
