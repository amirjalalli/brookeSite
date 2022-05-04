import "./Header.css"
const Header = () =>{
    return (
        
        <div className="Header-Content">
            <img className="imgHeader"src="./img/img1.avif"  />
            <div className="textContent">
                    <div className="Header-text">
                        <h1 >Hi, I am Brooke,<br /> a project manager</h1>
                    <button className="btn">Email me</button>
            </div>
            <ul className="Header-link">
                <li><a className="linkHeader" href="#">Linkdin/</a></li>
                <li><a className="linkHeader" href="#">FaceBook/</a></li>
                <li><a className="linkHeader" href="#">twitter</a></li>
            </ul>
            </div>
        
        </div>
 
      
    )
}

export default Header;