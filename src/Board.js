import React from 'react';
import Note from './Note';

import './Board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }

        this.eachNote = this.eachNote.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
    }

    nextId() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }

    add(text) {
        this.setState(prevState => ({
            notes: [
                ...prevState.notes,
                {
                    id: this.nextId(),
                    note: text
                }
            ]
        }));
    }

    update(newText, i) {
        console.log('updating item at index', i, newText);
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !== i) ? note : {...note, note: newText}
            )
        }));
    }

    remove(id)  {
        console.log('removing item at index', id);
        this.setState(prevState => ({
            notes: prevState.notes.filter(note => note.id !== id)
        }));
    }

    eachNote(note, i)  {
        return (
            <Note   key={i}
                    index={i} 
                    onChange={this.update}
                    onRemove={this.remove}>
                    {note.note}
            </Note>
        );
    }

    render() {
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
                <button id="add" onClick={this.add.bind(null, "")}>
                    +
                </button>
            </div>
        )
    }
}

export default Board;