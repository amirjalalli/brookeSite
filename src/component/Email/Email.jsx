import './Email.css'
const Email =()=>{
    return(
        <div className='email-content'>
            <img className="img7" src="img/img7.avif"  />
            <div className='email-rigth'>
                <h2 className='txt-h2'>Let's talk</h2>
                <form className='form-content'>
                    <label>Name</label>
                    <input className='inputEmail' placeholder="Your name" type="text" />
                    <label>Your email</label>
                    <input className='inputEmail' placeholder="Your email address" type="email" />
                    <textarea className='textArea' placeholder='Entar your Message' cols="10" rows="3"></textarea>
                    <input className='submit' type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Email;