import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectKey, addKey } from "../actions";
import Picker from "../components/Picker";

class KeyboxContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(nextDatadir) {
    const { selectKey } = this.props;
    selectKey(nextDatadir);
  }

  render() {
    const { keys, selectedKey, addKey } = this.props;

    let input;
    return (
      <div>
        <Picker
          value={selectedKey}
          onChange={this.handleChange}
          options={keys}
        />
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              addKey(input.value);
              input.value = "";
            }}
          >
            <input ref={node => (input = node)} />
            <button type="submit">Add Key</button>
          </form>
        </div>
      </div>
    );
  }
}

KeyboxContainer.propTypes = {
  keys: PropTypes.array.isRequired,
  selectedKey: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  const { keys, selectedKey } = state;
  return {
    keys,
    selectedKey
  };
}

export default connect(mapStateToProps, { addKey, selectKey })(KeyboxContainer);
