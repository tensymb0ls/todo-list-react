import React, { Component } from 'react'
import DeleteIcon from './icons/DeleteIcon';
import EditIcon from './icons/EditIcon';

export default class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    handleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }
    handleClick = () => {
        this.props.delete(this.props.title)
    }
    handleEdit = () => {
        this.props.edit()
    }
    render() {
        return (
            <div className='checkbox'>
                {this.state.isChecked ?
                    <span onClick={this.handleClick}><DeleteIcon /></span> :
                    <span onClick={this.handleEdit}><EditIcon /></span>
                }
                <input onChange={this.handleChange} value='this.state.isChecked' type='checkbox' />

            </div>
        )
    }
}
