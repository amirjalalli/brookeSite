import "./Footer.css"
const Footer = ()=>{
    return(
        <div className="Footer">
            <div className="footer-right">
                <h2 className="txtFooter txth2">Brooke R.</h2>
                <p className="txtFooter">Powered by Zyro.com</p>
            </div>
            <div className="footer-left">
            <ul className="footer-section">
                <li className="list-item txtFooter txt-left">― SOCIALS</li>
                <li className="list-item"><a className="linkFooter" href="#">Linkedin</a></li>
                <li className="list-item"><a className="linkFooter" href="#">Facebook</a></li>
                <li className="list-item"><a className="linkFooter" href="#">Twitter</a></li>
            </ul>
            <ul className="footer-section">
                <li className="list-item txtFooter">― CONTACTS</li>
                <li className="list-item"><a className="linkFooter" href="#">your@mail.com</a></li>
                <li className="list-item"><a className="linkFooter" href="#">123-123-1234</a></li>
            </ul>
            </div>
        </div>
    )
}

export default Footer;