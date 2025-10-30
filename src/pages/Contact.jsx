import React from "react";

function Contact(){
    return(
        <section className="contact">
            <h2>Contact Me</h2>
            <form>
                <input type="text" placeholder="Your Name" required/>
                <input type="email" placeholder="Your Email" required/>
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
            <p>Email: <a href="mailto:ahmad@gmail.com">ahmad@gmail.com</a></p>
        </section>
    )
}

export default Contact;
