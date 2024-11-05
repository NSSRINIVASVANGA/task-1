import FilterSection from '../FilterSection'
import {Routes,Route} from 'react-router-dom'
import All from '../All'
import Unread from '../Unread'
import './index.css'

const Home = () => {
    return(
        <div className = "home-con">
            <div className = "part-1">
                <FilterSection/>
                {/* <Routes>
                    <Route exact path = "/" element = {<All />} />
                    <Route exact path = "/unread" element = {<Unread />} />
                </Routes> */}
                <All />
            </div>
        </div>
    )
}

export default Home