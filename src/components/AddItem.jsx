import React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/itemActions";
import { FormControl, InputLabel, Input, InputAdornment, IconButton } from '@material-ui/core';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddItem = () => {
    this.props.addItem(this.state.input);
    this.setState({ input: "" });
  };
  
  render() {
    return (
      <div className="add-item">
          <FormControl className="textInput">
            <InputLabel htmlFor="add-item"></InputLabel>
            <Input
              id="add-item"
              value={this.state.input}
              onChange={e => this.updateInput(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton type="submit" onClick={this.handleAddItem}>
                    <PlaylistAddIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
      </div>
    );
  }
}

export default connect(
  null,
  { addItem }
)(AddItem);
// export default AddItem;
