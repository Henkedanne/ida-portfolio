import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <section id="contact" className="contact-section">
                <div className="section__container">
                    <h1 className="section__container--title">Contact</h1>
                    <form className="contact-form" action="">
                        <div>
                            <label>Namn</label>
                            <input className="contact-form__input--short" name="namn" tabindex="1" required type="text"/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input className="contact-form__input--short" name="email" tabindex="2" spellcheck="false" required type="email"/>
                        </div>
                        <div>
                            <label>Meddelande</label>
                            <textarea className="contact-form__input--long" name="message" tabindex="3" required cols="4" rows="10" type="message"/>
                        </div>
                        <div>
                            <button>Skicka</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact;