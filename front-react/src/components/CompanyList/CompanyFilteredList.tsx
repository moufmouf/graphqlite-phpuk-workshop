import React, { useState } from 'react';
import CompanyListContainer from "./CompanyListContainer";
import {Form} from "react-bootstrap";

function CompanyFilteredList() {
    // Declare a new state variable, which we'll call "count"
    const [search, setSearch] = useState("");


    return (
        <div>
            <h3>Companies</h3>


            <Form.Label>Search:</Form.Label>

            <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
            <CompanyListContainer search={search}/>
        </div>
    );
}

export default CompanyFilteredList;
