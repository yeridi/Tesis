import React from 'react'
/* style */
import './selected.scss'

const Selected = ({filterProducts}) =>{
    return (
        <>
            <div className="filter-type">
                <h4>Category</h4>
                <select  onChange={filterProducts}>
                    <option value="fish">Pescado</option>
                    <option value="chicken">Pollo</option>
                    <option value="sweet">Dulce</option>
                </select>
            </div>
        </>
    )
}
export default Selected;