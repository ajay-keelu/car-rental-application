
 import './App.css';
import OwnerDashboard from './Components/ownerComponents/ownerDashboard';
import Layout from './Components/Layout/Layout';
import UserDashboard from './Components/userComponent/userDashboard'
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route path='/ownerDashboard/*' element={<OwnerDashboard />} />
        <Route path='/userDashboard/*' element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default App;
