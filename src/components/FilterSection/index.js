import './index.css'
import FilterItem from '../FilterItem'
import { Link } from 'react-router-dom'

const filter_list = [
    {
        id : 1,
        name : "All",
        value : "ALL",
        path_value : "/"
    },
    {
        id : 2,
        name : "Unread",
        value : "UNREAD",
        path_value : "/unread"
    },
    {
        id : 3,
        name : "Sent",
        value : "SENT",
        path_value : "/sent"
    },
    {
        id : 4,
        name : "Flagged",
        value : "FLAGGED",
        path_value : "/flagged"
    },
]

const FilterSection = () => {
    return(
        <>
        <ul className = "filter-con">
            {
                filter_list.map(eachItem => <FilterItem details = {eachItem} key = {eachItem.id}/>)
            }
            {/* <Link to = "/" className = "link-el"><li> All </li></Link>
            <Link to = "/unread" className = "link-el"><li> Unread </li></Link>
            <Link to = "/" className = "link-el"><li> Sent </li></Link>
            <Link to = "/" className = "link-el"><li> Falgged </li></Link> */}
        </ul>
        </>
    )
}

export default FilterSection