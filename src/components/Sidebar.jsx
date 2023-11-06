import { Link, useNavigate } from "react-router-dom";
import {
  DashboardIcon,
  CashIcon,
  ProjectIcon,
  TaskIcon,
  ClientIcon,
  ResultIcon,
  NoticeIcon,
  ScheduleIcon,
  LogoutIcon,
} from "./Icons";
const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    console.log("logotu");
    localStorage.removeItem('user')
    navigate('/')
  }
  return (
    <>
      <div className="w-[13%] min-h-screen bg-violet-800 fixed text-slate-400">
        <div className="p-8">
          <Link to="/admin" className="flex gap-3">
            <DashboardIcon />
            Dashboard
          </Link>
          <Link to="/user" className="flex gap-3 mt-10">
            <CashIcon />
            Users
          </Link>
          <Link to="/project" className="flex gap-3 mt-10">
            <ProjectIcon />
            Projects
          </Link>
          <Link to="/task" className="flex gap-3 mt-10">
            <TaskIcon />
            Tasks
          </Link>
          <Link to="/client" className="flex gap-3 mt-10">
            <ClientIcon />
            Clients
          </Link>
          <Link to="/result" className="flex gap-3 mt-10">
            <ResultIcon />
            Result
          </Link>
          <Link to="/notice" className="flex gap-3 mt-10">
            <NoticeIcon />
            Notice
          </Link>
          <Link to="/schedule" className="flex gap-3 mt-10">
            <ScheduleIcon />
            Schedule
          </Link>
          <div onClick={handleLogout} className="flex gap-3 mt-[300px]">
            <LogoutIcon />
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
