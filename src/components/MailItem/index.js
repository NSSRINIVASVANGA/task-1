import './index.css'

const MailItem = (props) => {
    const{details} = props
    const {heading,date} = details
    return(
        <>
        <li>
            <div className = "mail-item-con">
                <p className = "heading"> {heading} </p>
                <b className = "date"> {date} </b>
            </div>
        </li>
        </>
    )
}

export default MailItem