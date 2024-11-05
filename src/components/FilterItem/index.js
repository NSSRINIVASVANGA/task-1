import './index.css'
import { Link } from 'react-router-dom'

const FilterItem = (props) => {
    const{details} = props
    const{name,path} = details
    return(
        // <Link to = {path} className = "link-el">
        // <li className = "filter-item">
        //    {name}
        // </li>
        // </Link>
        <>
        <li className = "filter-item">
            {name}
        </li>
        </>
    )

}

export default FilterItem