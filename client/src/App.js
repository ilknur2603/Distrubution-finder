import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logodark from '../src/assets/logodark.png';
import {ToastContainer} from "react-toastify"



// Import your components for each page
import OurPeople from './pages/OurPeople';
import WhyGiv2 from './pages/WhyGiv2';
import Resources from '../src/pages/Resources';
import Donate from '../src/pages/Donate';
/*
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
*/







function App() {
  return (
    

    <Router>
      <div>
        <header className="pb-6 bg-white lg:pb-0">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* <!-- lg+ --> */}
            <nav className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <Link to="/" title="" className="flex">
                  <img className="w-auto h-8 lg:h-10" src={logodark} alt="" />
                </Link>
              </div>

              {/* ... rest of the navbar ... */}

              <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <Link to="/our-people" className="text-base font-medium text-orange-950 transition-all duration-200 hover:text-cyan-600 focus:text-cyan-600">
                  Our people
                </Link>

                <Link to="/why-giv2" className="text-base font-medium text-orange-950 transition-all duration-200 hover:text-cyan-600 focus:text-cyan-600">
                  Why giv2?
                </Link>

                <Link to="/resources" className="text-base font-medium text-orange-950 transition-all duration-200 hover:text-cyan-600 focus:text-cyan-600">
                  Resources
                </Link>

                <Link to="/donate" className="text-base font-medium text-orange-950 transition-all duration-200 hover:text-cyan-600 focus:text-cyan-600">
                  Donate
                </Link>
              </div>

              {/* ... rest of the navbar ... */}
            </nav>

            {/* ... rest of the navbar ... */}
          </div>
        </header>

        <Route>
          <Route exact path="/" />
          <Route path="/our-people" component={OurPeople} />
          <Route path="/why-giv2" component={WhyGiv2} />
          <Route path="/resources" component={Resources} />
          <Route path="/donate" component={Donate} />
        </Route>
        </div>
     </Router>
     
     
   
   
  );
}

export default App;

