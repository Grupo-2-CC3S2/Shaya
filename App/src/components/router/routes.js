import DashboardPage from "../DashboardPage";
//import LoginPage from "../LoginPage";
import ProfilePage from "../ProfilePage";
import { Login } from "../Login";
import SimpleForm  from "../SimpleForm";

//import Home from '../Home';
import Profile from '../Profile';
//import ChatRooms from './ChatRooms';
import Pizarra from '../Pizarra';

import Video from '../../Video';
import Home from '../../Home';


const routes = {
  private: [
    {
      path: "/",
      name: "dashboard",
      component: DashboardPage
    },
    {
      path: "/mainHome/Perfil",
      name: "profile",
      component: Profile
    },
    {
      path: "/mainHome/Pizarra",
      name: "pizarra",
      component: Pizarra
    },
    {
      path: "/mainHome/Home",
      name: "home",
      component: Home
    },
    {
      path: "/mainHome/Home:url",
      name: "video",
      component: Video
    },
    {
      path: "/mainHome/simpleForm",
      name: "simpleForm",
      component: SimpleForm
    }
  ],
  public: [
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
}

export default routes

