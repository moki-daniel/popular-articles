import React, {useState} from 'react'

const SearchForm = ({searchText}) => {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        searchText(text)
    }
    return (
        <div> 
            <form onSubmit={handleSubmit} className="px-10 py-5">
                <input type="text" 
                placeholder="period values are 1, 7 and 30,"
                className="py-1 px-2 rounded-l-lg" 
                onChange={(e) => setText(e.target.value)}/>
                 <button type="submit" className="bg-green-400 py-1 px-2 
                 text-white rounded-r-lg">Search</button>
            </form> 
        </div>
    )
}

export default SearchForm


