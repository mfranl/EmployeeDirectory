import React, { useState } from 'react';
import Layout from "./components/Layout";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import employee from "./data/employee.json";
import EmployeeInfo from './components/EmployeeInfo';

function App() {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ sort, alphabetical] = useState(false);
    const [ data, setEmployee ] = useState(employee);

    function handleSearchTerm (event) {
        setSearchTerm(event.target.value)
    }

    function nameSort(){
        setEmployee(data.sort((a,b) => (a.name > b.name)
        ))
        alphabetical(true);
    }
    const filteredEmployees = data.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));

    return (
        <div>
            <Header/>
            <Layout>
                    <SearchBar 
                    onSearch={handleSearchTerm}
                    searchTerm={searchTerm}
                    nameSort={nameSort}
                    />
                <EmployeeInfo data={filteredEmployees}/>
            </Layout>
        </div>
    )

}

export default App;
