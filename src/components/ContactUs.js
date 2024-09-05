import "./ContactUsStyles.css";


function ContactUs(){
    return(

        <div className="form-container">
        <h1>Send me a message to Us!</h1>
        <form>
            <input placeholder="Name" />
            <input placeholder="E-mail" />
            <input placeholder="Subject" />
            <textarea placeholder="Message" rows="4"></textarea>
          <button className="btn">Send Message</button>
        </form>
        </div>
    )
}

export default ContactUs;
