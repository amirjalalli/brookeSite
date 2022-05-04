import "./Navheader.css";

const Navheader = () => {
    return (
        <div className="nav-header">
            <h2 className="nav-logo">BROOKE</h2>
            <ul className="nav-menu">
                <li><a className="navLink" href="#">ABOUT ME</a></li>
                <li><a className="navLink" href="#">EXPREIENCE</a></li>
                <li><a className="navLink" href="#">TESTIMONIALS</a></li>
                <li><a className="navLink" href="#">CONTACTS</a></li>
            </ul>
        </div>
    )
}


export default Navheader;