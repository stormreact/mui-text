import React from "react";
import PropTypes from "prop-types";

import KeyContainer from "./../containers/KeyContainer";
import DataViewWrapper from "./../containers/DataViewWrapper";

const GetParamsFromMatch = match => {
  const url = match.url;
  let result = url.split("/");
  let ary = [result[1], result[2]];
  return ary;
};

const GetRepoFromPathname = pathname => {
  let result = pathname.split("/");
  return result[1];
};

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  // shouldComponentUpdate(nextProps,nextState) {
  shouldComponentUpdate(nextProps) {
    const p1 = nextProps.location.pathname;
    const p2 = this.props.location.pathname;

    const repo1 = GetRepoFromPathname(p1);
    const repo2 = GetRepoFromPathname(p2);

    const result = repo1.localeCompare(repo2);

    if (result) {
      return true;
    }

    return false;
  }

  render() {
    // leave next line here just to show what props
    // from the react-router are actually available
    // const { match, location, history } = this.props
    const { match } = this.props;

    const result = GetParamsFromMatch(match);

    return (
      <div>
        <div>
          <KeyContainer />
        </div>
        <div>
          <DataViewWrapper repo={result[0]} view={result[1]} />
        </div>
      </div>
    );
  }
}

export default ShowTheLocation;
