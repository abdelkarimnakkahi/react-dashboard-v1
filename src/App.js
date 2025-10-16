import './App.css'
import MainDashboard from './components/MainDashboard/MainDashboard';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <div className="dashboard">
          <Sidebar />
          <MainDashboard />
          <RightSide />
        </div>
    </div>
  );
}

export default App;
