import React from 'react';
import logo from './logo.svg';
import './App.css';
import CompanyFilteredList from "./components/CompanyList/CompanyFilteredList";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import CompanyContainer from "./components/Company/CompanyContainer";
import Company from "./components/Company/Company";

const App = () => {
  return (

    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <CompanyFilteredList/>
                </Route>
                <Route path="/company/:id" children={<CompanyRoute />} />
                <Route path="*">
                    <div>404</div>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}


function CompanyRoute() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();

    if (id === undefined) {
        return <div>Boum</div>;
    }

    return (
        <CompanyContainer id={parseInt(id)} />
    );
}

export default App;
