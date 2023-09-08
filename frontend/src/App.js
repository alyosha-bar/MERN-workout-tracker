import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddWorkout from './pages/AddWorkout';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            {/* <Route
              path='/'
              element = { <div className="main-content"><Home /> <AddWorkout /> </div>}
            /> */}
            <Route
              path='/'
              element = { <Home />}
            />
            <Route
              path='/new'
              element = { <AddWorkout /> }
            />
            <Route 
              path='/details/:id'
              element = { <Details /> }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
