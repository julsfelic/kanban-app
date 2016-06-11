import React from 'react';
import uuid from 'uuid';

import Notes from './Notes';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
  }

  addNote = () => {
    this.setState({
      notes: [...this.state.notes, { id: uuid.v4(), task: 'New task'}]
    });
  }

  deleteNote = (id, e) => {
    e.stopPropagation();

    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }

  editNotesState = (func) => {
    this.setState({
      notes: this.state.notes.map(note => func(note))
    });
  }

  activateNoteEdit = (id) => {
    this.editNotesState((note) => {
      if (note.id === id) { note.editing = true; }
      return note;
    });
  }

  editNote = (id, task) => {
    this.editNotesState((note) => {
      if (note.id === id) {
        note.editing = false;
        note.task = task;
      }

      return note;
    });
  };

  render() {
    const {notes} = this.state;

    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes
          notes={notes}
          onDelete={this.deleteNote}
          onEdit={this.editNote}
          onNoteClick={this.activateNoteEdit} />
      </div>
    )
  }
}

export default App;
