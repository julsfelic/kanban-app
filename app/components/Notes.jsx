import React from 'react';

const Notes = ({notes}) => (
  <ul>{notes.map(note =>
    <li key={note.id}>{note.task}</li>
  )}</ul>
);

export default Notes;
