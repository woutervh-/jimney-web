import * as React from 'react';

export class SideBar extends React.PureComponent<{}, never> {
    render() {
        return <React.Fragment>
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
        </React.Fragment>;
    }
}
