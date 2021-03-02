import React from 'react'
import FilterProjects from './FilterProjects'

const FilterList = ({tags, doFilter}) => {
    return (
        <div className="filter-row">
            <span onClick={()=>doFilter("Reset")}>Reset</span>
            {tags.map(td => <FilterProjects key={td.id} tag={td} clickFunc={doFilter}/>)}
        </div>
    )
}

export default FilterList
