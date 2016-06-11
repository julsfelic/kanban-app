import React from 'react';

const Editable = ({editing, value, onEdit, ...props}) => {
  if (editing) {
    return <Editable.Edit value={value} onEdit={onEdit} {...props} />;
  }

  return <Editable.Value value={value} />;
};

Editable.Value = ({value, ...props}) => <span {...props}>{value}</span>;

class Edit extends React.Component {
  checkEnter = (e) => {
    if (e.key === 'Enter') { this.finishEdit(e); }
  }

  finishEdit = (e) => {
    const value = e.target.value;

    if (this.props.onEdit) {
      this.props.onEdit(value);
    }
  }

  render() {
    const {value, ...props} = this.props;

    return <input
      type="text"
      autoFocus={true}
      defaultValue={value}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter}
      {...props} />;
  }
}

Editable.Edit = Edit;

export default Editable;
