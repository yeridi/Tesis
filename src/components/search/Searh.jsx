import React from 'react'

const Search = (props) => {
    const updateSearch = e => {
        props.setInputText(e.target.value)
    }

    return (
        <>
            <form className="search__form">
                <div className="search__box">
                    <input type="text" className="search__bar" placeholder="Buscar..." onChange={updateSearch}/>
                    <button type="submit" className="searh__button" onClick={props.getSearch}><i class="fas fa-search"></i></button>
                </div>
            </form>
        </>
    )
}
export default Search;