import React from 'react'
import github from '../assets/images/github.gif'
import '../extracss/frame.css'
const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="https://formspree.io/f/mrgrbweb">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field half first">
                        <label htmlFor="name">Model name</label>
                        <input type="text" name="Model-Name" id="Model_name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Github Link</label>
                        <input type="text" name="Github-Link" id="Github_url" />
                    </div>
                    <div className="field half first">
                        <label htmlFor="name">Heroku URL</label>
                        <input type="text" name="Heroku URL" id="Heroku_url" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Model Predicts</label>
                        <input type="text" name="model Predicts?" id="Model_desc" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Describe your model in few words</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Request" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <img className="github" src={github}/>
                {/* <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">information@untitled.tld</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(000) 000-0000 x12387</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>1234 Somewhere Road #5432<br />
                        Nashville, TN 00000<br />
                        United States of America</span>
                    </div>
                </section> */}
            </section>
        </div>
    </section>
)

export default Contact
