import { BrowserRouter as Router ,Routes ,  Route, Switch  } from 'react-router-dom';
import Newuser from './components/pages/Newuser';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


function App() {
  return (

    <>
      <Router>
        <div className='App'>
         
         
            <Routes>
              <Route exact path='/' element={<Login />} />
              <Route exact path='/dashboard' element={<Dashboard /> } />
              <Route exact path='/users/newuser' element={<Newuser />} />
            </Routes>
         
        </div>
      </Router>
    </>



  );
}

export default App;
