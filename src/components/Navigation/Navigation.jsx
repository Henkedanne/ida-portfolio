import React from 'react';

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        
        this.navRef = React.createRef();
        this.state = {
            active: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }
    
    toggleModal() {
        this.setState((prevState) => ({
            active: !prevState.active
        }));
    }

    handleClick(e) {
        if (!this.state.active) {
            return;
        }

        if (this.navRef.current.contains(e.target)) {
            return;
        }
        
        this.toggleModal();
    }

    render() {
        // Sätter --active när state.active är true.
        const burgerClass = this.state.active ? "header__nav-burger header__nav-burger--active" : "header__nav-burger";
        const modalClass = this.state.active ? "header__nav-modal header__nav-modal--active" : "header__nav-modal";

        return (
            <div>
                <nav ref={this.navRef} className="header__nav">
                    <div onClick={() => {this.toggleModal()}} className={burgerClass}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={modalClass}>
                        <h1 className="header__nav-modal__title">Ida Löfholm</h1>
                        <ul onClick={() => {this.toggleModal()}} className="header__nav-modal__list">
                            <a href="#"><li className="header__nav-modal__list-item">About</li></a>
                            <a href="#"><li className="header__nav-modal__list-item">Reel</li></a>
                            <a href="#images"><li className="header__nav-modal__list-item">Pictures</li></a>
                            <a href="#"><li className="header__nav-modal__list-item">Contact</li></a>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
};

export default Navigation;
