// import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Inquiry from './component/Inquiry/Inquiry';
import InquiryAdd from './component/Inquiry/InquiryAdd';
import InquiryEdit from './component/Inquiry/InquiryEdit';
import useToken from './component/useToken';
import {

  Routes,
  Route


  
} from "react-router-dom";
import Employee from './component/Employee/Employee';
import ReplyAdd from './component/Inquiry/ReplyAdd';
import ChangePassword from './component/ChangePassword';
import Tags from './component/Tags/Tags';
import TagView from './component/Tags/TagView';
import TagEdit from './component/Tags/TagEdit';
import Role from './component/Role/Role';
import RoleView from './component/Role/RoleView';
import RoleEdit from './component/Role/RoleEdit';
import Permission from './component/Permission/Permission';
import EmployeeAdd from './component/Employee/EmployeeAdd';
import EmployeeEdit from './component/Employee/EmployeeEdit';
import Technology from './component/Technology/Technology';
import TechnologyEdit from './component/Technology/TechnologyEdit';
import Status from './component/Status/Status';
import StatusEdit from './component/Status/StatusEdit'
import Project from './component/Project/Project'
import ProjectEdit from './component/Project/ProjectEdit'
function App() {


  return (
    <>
    
    


  
    <Routes>
    <Route path="/" element={ <Login />} />
      <Route path="/Dashboard" element={ <Dashboard/>} />
    <Route path="/inquiry" element={ <Inquiry/>} /> 
    <Route path="/employe" element={ <Employee/>} /> 
    <Route path="/inquiry/add" element={ <InquiryAdd/>} />
    <Route path="/inquiry/view/:id" element={ <ReplyAdd/>} />
    <Route path="/changepassword" element={ <ChangePassword />} />
    <Route path="/login" element={ <Login />} />
    <Route path="/tags" element={ <Tags />} />
    <Route path="/technology" element={ <Technology />} />
    <Route path="/status" element={ <Status />} />
    <Route path="/project" element={ <Project />} />



    {/* <Route path="/tagview/:id" element={ <TagView />} /> */}
    <Route path="/tag/edit/:id" element={ <TagEdit />} />
    <Route path="/technology/edit/:id" element={ <TechnologyEdit />} />
    <Route path="/status/edit/:id" element={ <StatusEdit />} />
    <Route path="/role/edit/:id" element={ <RoleEdit />} />
    <Route path="/project/edit/:id" element={ <ProjectEdit />} />
    <Route path="/employee/edit/:id" element={ <EmployeeEdit />} />
    <Route path="/inquiry/edit/:id" element={ <InquiryEdit />} />


    <Route path="/role" element={ <Role />} />
    <Route path="/permission" element={ <Permission />} />
    <Route path="/employeeadd" element={ <EmployeeAdd />} />
    

    </Routes>

  </>
  );
}

export default App;
