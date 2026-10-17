import Card from  "./components/card/Card.jsx";

import Home from  "./components/home/Home.jsx";
import Apis from  "./components/home/apis/Apis.jsx";
import Header from  "./components/header/Header.jsx";
import ContactUs from "./components/contactus/ContactUs";
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Profile from  "./components/profile/Profile.jsx";

import PersonalDetails from  "./components/profile/PersonalDetails.jsx";
import Orders from  "./components/profile/Orders.jsx";
import Payments from  "./components/profile/Payments.jsx";
import Logout from  "./components/profile/Logout.jsx";
import ChangePassword from  "./components/profile/ChangePassword.jsx";
import UseRef from "./components/profile/UseRef.jsx";
import A from "./components/profile/context-api/A.jsx";

function App(){
    return(
      <div>
          Welcome to React — en route to JavaScript XML (JSX)
          <Header />
          <Routes>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/products"} element={<Apis />}/>
                <Route path={"/signin"} element={<Signin />}/>
                <Route path={"/contactus"} element={<ContactUs />}/>
                <Route path={"/signup"} element={<Signup />}/>
                <Route path={"/optional"} element={<Profile />}>
                    <Route path={""} element={<PersonalDetails />}/>
                    <Route path={"pdetails"} element={<PersonalDetails />}/>
                    <Route path={"orders"} element={<Orders />}/>
                    <Route path={"payments"} element={<Payments />}/>
                    <Route path={"cpwd"} element={<ChangePassword />}/>
                    <Route path={"logout"} element={<Logout />}/>
                    <Route path={"use-ref"} element={<UseRef />} />
                    <Route path={"use-context"} element={<A />} />

                </Route>

          </Routes>
          
      </div>
    );
}
export default App;