import "./main.css"
const Main = ()=>{
    return(
        <div className="Main">
            <div className="main main-one">
                <h3 className="w-50 color">― WORK EXPERIENCE</h3>
                <div className="w-50 ">
                <h5 className=" text-font">Senior project manager</h5>    
                <p className="m-20">Stilltech  / Aug 2018 - Present</p>
                <p className="m-20">I’ve been central to delivering two extensive projects while working at Stilltech, both in the augmented reality space.</p>
                <h5 className="m-20 text-font">Project manager</h5>
                <p className="m-20">Yeall & Co / Aug 2016 - Aug 2018</p>
                <p className="m-20">I was lucky to learn the ropes at Yeall Co., where I worked with an international team on projects including edible smartphone cases and human cloning. </p>
                </div>
            </div>
            <div className="main main-two">
                <h3 className="w-50 color">― EDUCATION</h3>
                <div className="w-50">
                <h5 className="m-20 text-font">Columbia University</h5>    
                <p className="m-20">Master's degree, International Business / 2016 - 2018</p>
                <h5 className="m-20 text-font">Stanford University</h5>
                <p className="m-20">Bachelor’s degree, Business Administration / 2012 - 2016</p>
         
                </div>
            </div>
            <div className="main main-three">
                <h3 className="w-50 color">― COURSES</h3>
                <div className="w-50">
                <h5 className="m-20 text-font">Agile methodology</h5>    
                <p className="m-20">Spaetzle Institute / 2016</p>

                <h5 className="m-20 text-font">Project management methodologies</h5>
                <p className="m-20">Knödl Labs / 2017 </p>

                </div>
            </div>
        </div>
    )
}


export default Main;