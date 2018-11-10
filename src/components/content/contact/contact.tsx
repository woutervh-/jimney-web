import * as React from 'react';
import './style.scss';

export class Contact extends React.PureComponent<{}, never> {
    render() {
        return <React.Fragment>
            <h3>Contact</h3>
            <form action="https://formspree.io/jasminmgelinck@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="Contact from website" />
                <input type="hidden" name="_next" value="https://jasmingelinck.com/contact-thanks" />
                <div>
                    <label>
                        <div>Name:</div>
                        <input type="text" name="name" />
                    </label>
                </div>
                <div>
                    <label>
                        <div>Email address:</div>
                        <input type="email" name="_replyto" />
                    </label>
                </div>
                <div>
                    <label>
                        <div>Message:</div>
                        <textarea name="message" className="contact-text"></textarea>
                    </label>
                </div>
                <div>
                    <input type="submit" value="Send" />
                </div>
            </form>
        </React.Fragment>;
    }
}
