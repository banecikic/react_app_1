import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdorp from '../Backdrop/Backdrop'

class  Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentDidUpdate() {
        console.log('[Modal didUpdate]');
    }

    render(){
        return(
            <Aux>
                <Backdorp show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={classes.Modal}
                    style={{transform: this.props.show ? 'translateY(0)' : 'translate(-100vh)',
                        opacity: this.props.show ? '1' : '0'}}>
                    {this.props.children}
                </div>
            </Aux>
        );
    };
};

export default Modal;