import React from "react";
import {useGlobalContext} from "../context.jsx";

const SearchForm = () => {

    const {setSearchTerm} = useGlobalContext()

    const searchValue = React.useRef('')

    React.useEffect(() => {
        searchValue.current.focus()
    }, [])

    const searchReception = () => {
        setSearchTerm(searchValue.current.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    return (
            <section className='section search'>
                <form className='search-form' onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="name"> search</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            ref={searchValue}
                            onChange={searchReception}
                        />
                    </div>
                </form>
            </section>
    )


}

export default SearchForm