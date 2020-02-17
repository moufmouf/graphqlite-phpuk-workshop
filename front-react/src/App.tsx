import React from 'react';
import './App.css';
import CompanyFilteredList from "./components/CompanyList/CompanyFilteredList";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
import CompanyContainer from "./components/Company/CompanyContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (

    <div className="App container">
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
        return <div>Boom</div>;
    }

    return (
        <CompanyContainer id={parseInt(id)} />
    );
}

export default App;
