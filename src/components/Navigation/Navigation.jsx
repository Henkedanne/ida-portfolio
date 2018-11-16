import React from 'react';

class Navigation extends React.Component {
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

        const burgerClass = this.state.active ? "header__nav-burger header__nav-burger--active" : "header__nav-burger";
        const modalClass = this.state.active ? "header__nav-modal header__nav-modal--active" : "header__nav-modal";

        return (
            <div>
                <nav className="header__nav">
                    <div onClick={() => {this.handleClick()}} className={burgerClass}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={modalClass}>
                        <h1>Ida Löfholm</h1>
                        <ul>
                            <li>About</li>
                            <li>Pictures</li>
                            <li>Reel</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
};

export default Navigation;
