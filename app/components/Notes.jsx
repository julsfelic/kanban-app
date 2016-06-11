import React from 'react';

import Note from './Note';

const Notes = ({notes, onDelete = () => {}}) => (
  <ul>{notes.map(({id, task}) =>
    <li key={id}>
      <Note task={task} onDelete={onDelete.bind(null, id)} />
    </li>
  )}</ul>
);

export default Notes;
