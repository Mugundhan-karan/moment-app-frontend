import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./components/layout/Layout"
import axios from "axios";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoginStatus } from "./services/authService";
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import { AddMoment } from "./pages/addMoment/AddMoment";
import MomentDetails from "./components/content/momentDetails/MomentDetails";
import EditMoment from "./pages/editMoment/EditMoment";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";

axios.defaults.withCredentials = true;  //Keep adding the credentials everywhere in App

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus()
      dispatch(SET_LOGIN(status))
    }
    loginStatus()
  }, [dispatch])

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <Sidebar>
            <Layout>
              <Dashboard />
            </Layout>
          </Sidebar>
        } />
        <Route path="/add-moment" element={
          <Sidebar>
            <Layout>
              <AddMoment />
            </Layout>
          </Sidebar>
        } />
        <Route path="/moment-details/:id" element={
          <Sidebar>
            <Layout>
              <MomentDetails />
            </Layout>
          </Sidebar>
        } />

        <Route path="/edit-moment/:id" element={
          <Sidebar>
            <Layout>
              <EditMoment />
            </Layout>
          </Sidebar>
        } />
        <Route path="/profile" element={
          <Sidebar>
            <Layout>
              <Profile />
            </Layout>
          </Sidebar>
        } />
        <Route path="/edit-profile" element={
          <Sidebar>
            <Layout>
              <EditProfile />
            </Layout>
          </Sidebar>
        } />
      </Routes></BrowserRouter>


  );
}

export default App;
