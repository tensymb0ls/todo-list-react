import React, { Component } from 'react';
import CheckBox from './CheckBox';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
        }
    }
    setStateEdit = () => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }
    render() {
        return (
            <li>
                <CheckBox title={this.props.title} delete={this.props.delete} edit={this.setStateEdit} />
                {this.state.isEdit ?
                    <input type='text' placegolder={this.props.title} /> :
                    <span>{this.props.title}</span>}
            </li>
        );
    }
};

export default Item;