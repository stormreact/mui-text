import React from "react";
import PropTypes from "prop-types";
import DataView from "./DataView";

const repoMap = {
  repo1: "material-ui.json",
  repo2: "graphql-js.json",
  repo3: "html5-node-diagram.json",
  repo4: "ivy.json",
  repo5: "nodejs-sandboxed-fs.json"
};

const template =
  "https://raw.githubusercontent.com/stormasm/ghdata/master/data1/";

class DataViewWrapper extends React.Component {
  constructor(props) {
    super(props);

    const { repo, view } = props;

    this.state = {
      data: {},
      isLoading: false,
      error: null,
      repoName: repoMap[repo],
      viewName: view
    };
  }

  componentWillReceiveProps(nextProps) {
    /*
    Do NOT Delete for awhile --- helpful for debugging...

    const locationChanged = nextProps.location !== this.props.location;
    console.log("componentWillUpdate");
    console.log("locationChanged: ", locationChanged);
    console.log(nextProps.location);
    console.log(nextProps.match.params.repo);
    console.log(nextProps.match.params.view);
    console.log(repoMap[nextProps.match.params.repo]);
*/
    const url = template + repoMap[nextProps.repo];

    this.setState({ isLoading: true });
    this.setState({ repoName: repoMap[nextProps.repo] });
    this.setState({ viewName: nextProps.view });

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            "Sorry, but something went wrong in the CardWrapper..."
          );
        }
      })
      .then(data => this.setState({ data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.setState({ repoName: repoMap[this.props.repo] });
    this.setState({ viewName: this.props.view });

    const url = template + this.state.repoName;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            "Sorry, but something went wrong in the CardWrapper..."
          );
        }
      })
      .then(data => this.setState({ data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const hits = this.state.data.hits || [];

    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }

    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        <DataView
          tileData={hits}
          repoName={this.state.repoName}
          viewName={this.state.viewName}
        />
      </div>
    );
  }
}

DataViewWrapper.propTypes = {
  repo: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired
};

export default DataViewWrapper;
