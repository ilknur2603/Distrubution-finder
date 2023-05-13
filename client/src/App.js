import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom'; 

import NavBar from "./components/NavBar";
import {setContext} from "@apollo/client/link/context"
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';


//import {ToastContainer} from "react-toastify"

// Import your components for each page
import OurPeople from './pages/OurPeople';
import WhyGiv2 from './pages/WhyGiv2';
import Resources from '../src/pages/Resources';
import Donate from '../src/pages/Donate';
import SignupForm from './components/SignUpForm';
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import CharitySearch from "../src/pages/CharitySearch";


// import Hero from "./components/Hero";

// import SignUp from "./components/SignUp";


const httpLink = createHttpLink({

  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (

    
    <ApolloProvider client={client}>

    <Router>
      
      <NavBar /> 
      <div>
<header>
          {/* <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">// */}

          
      </header>
        
        <Switch>
          <Route exact path="/" component={Hero}/>
          <Route path="/ourpeople" component={OurPeople} />
          <Route path="/whygiv2" component={WhyGiv2} />
          <Route path="/resources" component={Resources} />
          <Route path="/donate" component={Donate} />
          <Route path='/signup' component={SignupForm} />
          <Route path='/login' component={LoginForm} />
          <Route path="/CharitySearch" component={CharitySearch} />
          <Route  path='*'  element={<h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
       
        <Footer />
        </div>
        </Router>
      {/*<ToastContainer/>*/}
    
    </ApolloProvider>
     
  );
}


export default App;

