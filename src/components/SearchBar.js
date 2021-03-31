import React from 'react'
import "../styles/SearchBar.css"

function SearchBar({onSearch, searchTerm, nameSort}) {
    return (
        <div className="row">
            <div className="column col-12 col-m-12 col-xl-12">
            <navbar>
                <button onClick={nameSort} type="button" className="btn btn-light">Name</button>
            <form>
                <input
                    value={searchTerm} 
                    onChange={onSearch} 
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="search employee"/>
            </form>
            </navbar>
            </div>
        </div>
    )
}

export default SearchBar