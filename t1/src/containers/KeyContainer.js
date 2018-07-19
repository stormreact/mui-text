import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectKey } from "../actions";
import Picker from "../components/Picker";
import { push } from "./../rrr/actions";

class KeyContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(chapter) {
    const { router, push, selectKey } = this.props;

    selectKey(chapter);

    const pathname = router.location.pathname;
    const section = pathname.split("/");
    const urlpath = "/" + chapter + "/" + section[2];
    push(urlpath);
  }

  render() {
    const { keys, selectedKey } = this.props;
    return (
      <div>
        <Picker
          value={selectedKey}
          onChange={this.handleChange}
          options={keys}
        />
      </div>
    );
  }
}

KeyContainer.propTypes = {
  router: PropTypes.object.isRequired,
  keys: PropTypes.array.isRequired,
  selectedKey: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  const { router, keys, selectedKey } = state;
  return {
    router,
    keys,
    selectedKey
  };
}

export default connect(mapStateToProps, { push, selectKey })(KeyContainer);
