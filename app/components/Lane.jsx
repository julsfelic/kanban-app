import React from 'react';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import Notes from './Notes';
import LaneActions from '../actions/LaneActions';
import LaneHeader from './LaneHeader';

function selectNotesByIds(allNotes, noteIds = []) {
  // 'reduce' is a powerful method that allows us to
  // fold data. You can implement 'filter' and 'map'
  // through it. Here we are using it to concatenate
  // notes matching to the ids.
  return noteIds.reduce((notes, id) =>
    // Concatenate possible matching ids to the result
    notes.concat(allNotes.filter(note => note.id === id))
  , []);
}

const Lane = ({
  lane, LaneActions, notes, NoteActions, ...props
}) => {
  const editNote = (id, task) => {
    NoteActions.update({id, task, editing: false});
  };

  const deleteNote = (noteId, e) => {
    e.stopPropagation();

    LaneActions.detachFromLane({
      laneId: lane.id,
      noteId
    });

    NoteActions.delete(noteId);
  };

  const activateNoteEdit = id => {
    NoteActions.update({id, editing: true});
  };

  return (
    <div {...props}>
      <LaneHeader lane={lane} />
      <Notes
        notes={selectNotesByIds(notes, lane.notes)}
        onNoteClick={activateNoteEdit}
        onEdit={editNote}
        onDelete={deleteNote} />
    </div>
  );
};

export default connect(
  ({notes}) => ({
    notes
  }), {
    NoteActions,
    LaneActions
  }
)(Lane);
