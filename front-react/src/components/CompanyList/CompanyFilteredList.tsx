import React, { useState } from 'react';
import CompanyListContainer from "./CompanyListContainer";

function CompanyFilteredList() {
    // Declare a new state variable, which we'll call "count"
    const [search, setSearch] = useState("");


    return (
        <div>
            <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
            <CompanyListContainer search={search}/>
        </div>
    );
}

export default CompanyFilteredList;
