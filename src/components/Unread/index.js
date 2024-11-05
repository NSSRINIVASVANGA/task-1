import MailItem from '../MailItem'
import './index.css'

const unread_list = [
    {
        id : 1,
        heading : "Designing and Implementing Inventory Management System",
        content : "User is designing and implementing a comprehensive inventory management system using Spring Boot and Java, including services for stock management, order fulfillment, supplier integration, and reporting.",
        date : "2024-07-01"
    },
    {
        id : 2,
        heading : "Restock Order Functionalities in Inventory System",
        content : "User is implementing restock order functionalities in their inventory management system.",
        date : "2024-07-03"
    },
    {
        id : 3,
        heading : "Virtual Classroom Web Application Development",
        content : "User is working on a virtual classroom web application where an administrator or instructor can manage classes. The app includes units (books), sessions (chapters), and lecture-based discussions. Only enrolled students can access materials.",
        date : "2024-09-14"
    },
    {
        id : 4,
        heading : "User Authentication Integration",
        content : "User is implementing a user authentication module, allowing secure login, password management, and role-based access controls across the system.",
        date : "2024-10-01"
    },
    {
        id : 5,
        heading : "Reporting and Analytics Module",
        content : "User is developing a reporting module to generate analytics on stock trends, order history, and supplier performance, providing valuable insights for strategic planning.",
        date : "2024-10-15"
    },
    {
        id : 6,
        heading : "Integration of Supplier APIs",
        content : "User is working on integrating supplier APIs to automate inventory replenishment, check availability, and track shipment status.",
        date : "2024-10-25"
    },
    {
        id : 7,
        heading : "Enhanced Session Management for Virtual Classroom",
        content : "User is adding enhanced session management features, allowing instructors to schedule and manage multiple sessions, with reminders for enrolled students.",
        date : "2024-11-01"
    },
    {
        id : 8,
        heading : "Real-Time Notifications and Alerts",
        content : "User is implementing real-time notifications to alert users about stock levels, restock orders, class session updates, and other important events.",
        date : "2024-11-03"
    }
]

const Unread = () => {
    return(
        <>
        <ul className = "all-list-con">
            {
                unread_list.map(eachItem => <MailItem details = {eachItem} key = {eachItem.id}/>)
            }
        </ul>
        </>
    )
}

export default Unread