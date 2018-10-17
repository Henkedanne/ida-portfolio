import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false
        }

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState((prevState) => ({
            active: !prevState.active
        }));
        console.log('clicked', this.state.active)
    }

    render() {
        return (
            <div>
                <nav className="header__nav">
                    <span onClick={() => {this.handleClick()}} className="header__nav-burger">burger</span>
                    {this.state.active
                        ? 
                        <div className="header__nav-modal">
                            <h1>Ida Löfholm</h1>
                            <ul>
                                <li>About</li>
                                <li>Pictures</li>
                                <li>Reel</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        :
                        null
                    }
                </nav>
            </div>
        );
    }
};

export default Header;
