import React from 'react'
import category from '../../constants/Category'

const CategoryList = () => {
    

    return (
        <ul>
            {category.map(i => 
                <li key={i}>{i}</li>
            )}
        </ul>
    )
}


export default CategoryList