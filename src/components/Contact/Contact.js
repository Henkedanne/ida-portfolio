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
                            <input className="contact-form__input--short" type="text" name="namn" id=""/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input className="contact-form__input--short" type="text"/>
                        </div>
                        <div>
                            <label>Meddelande</label>
                            <textarea className="contact-form__input--long" cols="5" rows="10" type="text"/>
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