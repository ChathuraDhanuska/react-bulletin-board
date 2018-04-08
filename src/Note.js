import React from 'react';
import './Note.css';
import FaPencil from 'react-icons/lib/md/create';
import FaTrash from 'react-icons/lib/md/close';
import FaSave from 'react-icons/lib/md/save';

class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        }

        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
        this.renderFrom = this.renderFrom.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
    }
    
    edit() {
        this.setState({
            editing: true
        });
    }

    save(e) {
        e.preventDefault();
        this.props.onChange(this._newText.value, this.props.index);
        this.setState({
            editing: false
        });
    }

    remove() {
        this.props.onRemove(this.props.index);
    }

    renderFrom() {
        return (
            <div className="note">
                <form onSubmit={this.save}>
                    <textarea ref={input => this._newText = input} />
                    <button id="save"><FaSave/></button>
                </form>
            </div>
        )
    }

    renderDisplay() {
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit} id="edit"><FaPencil/></button>
                    <button onClick={this.remove} id="remove"><FaTrash/></button>
                </span>
            </div>
        )
    }

    render() {
        if(this.state.editing) {
            return this.renderFrom();
        } else {
            return this.renderDisplay();
        }
    }
}

export default Note