import * as React from 'react';

export class SideBar extends React.PureComponent<{}, never> {
    render() {
        return <React.Fragment>
            <div>
                Buy me a coffee!
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
                    <input type="hidden" name="business"
                        value="eatorion@gmail.com" />
                    <input type="hidden" name="cmd" value="_donations" />
                    <input type="hidden" name="item_name" value="Friends of WriteBot" />
                    <input type="hidden" name="item_number" value="Buy me a coffee" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" name="submit"
                        src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                        alt="Donate" />
                    <img alt="" width="1" height="1"
                        src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" />
                </form>
            </div>
            <div id="mc_embed_signup">
                <form
                    action="https://jasmingelinck.us14.list-manage.com/subscribe/post?u=a8c9b88db9ffc1f70ec6ac413&amp;id=5fd6713355"
                    method="post" id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    noValidate
                >
                    <div id="mc_embed_signup_scroll">
                        <h2>Join my Mailing List!</h2>
                        <div className="indicates-required">
                            <span className="asterisk">*</span>
                            indicates required
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">
                                Email Address
                                <span className="asterisk">*</span>
                            </label>
                            <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-FNAME">First Name </label>
                            <input type="text" value="" name="FNAME" className="" id="mce-FNAME" />
                        </div>
                        <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                        </div>
                        <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
                            <input type="text" name="b_a8c9b88db9ffc1f70ec6ac413_5fd6713355" tabIndex={-1} value="" />
                        </div>
                        <div className="optionalParent">
                            <div className="clear">
                                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                                <p className="brandingLogo">
                                    <a href="http://eepurl.com/h1yLo9" title="Mailchimp - email marketing made easy and fun">
                                        <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>;
    }
}
