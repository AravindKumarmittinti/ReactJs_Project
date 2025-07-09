// layouts/MainLayout.js
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';


const MainLayout = () => {
  return (
    <div>
      <div style={{ background: '#f5f5f5' }}>
        <SideBar />
      </div>

      <div style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
