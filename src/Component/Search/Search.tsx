import { useState } from 'react';
import "./Search.css"

function Search() {
    const [searchInput, setSearchInput] = useState<string>("")

    return (

        <div className="searchPanel">
            <span className="material-symbols-outlined">search</span>
            <input className='jira-search-input' type="text" placeholder="Search" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
        </div>
    )
}

export default Search