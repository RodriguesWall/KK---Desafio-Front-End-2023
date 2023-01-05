import React from 'react'
import Layout from './components/Layout/Layout';
import { Switch, BrowserRouter as Router } from "react-router-dom"
import Authmiddleware from "./routes/middleware"
import AllRoutes from "./routes/routes";
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartProvider } from './contexts/cartContext';


export default function App() {
  return (
    <React.Fragment>
      <Router>
        <CartProvider>
          <Switch>
            {AllRoutes.map((route, idx) => (
              <Authmiddleware
                path={route.path}
                layout={Layout}
                component={route.component}
                key={idx}
                exact
              />
            ))}
          </Switch>
        </CartProvider>
      </Router>
    </React.Fragment>
  );
}

