import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GhCard from "./../cards/GhCard";
import lightGreen from "@material-ui/core/colors/lightGreen";
import RepoView from "./../components/RepoView";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    height: 250,
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 600,
    backgroundColor: lightGreen[100]
  },
  gridListSingleLine: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    backgroundColor: lightGreen[100]
  },
  subheader: {
    width: "100%"
  }
});

function View2(props) {
  const { classes, tileData, repoName, viewName } = props;

  return (
    <div>
      <RepoView repoName={repoName} viewName={viewName} />
      <div className={classes.root}>
        <GridList
          cellHeight={250}
          className={classes.gridListSingleLine}
          cols={6}
        >
          {tileData.map(tile => (
            <GridListTile key={tile.avatar} cols={tile.cols || 1}>
              <GhCard tile={tile} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

View2.propTypes = {
  tileData: PropTypes.array.isRequired,
  repoName: PropTypes.string.isRequired,
  viewName: PropTypes.string.isRequired
};

export default withStyles(styles)(View2);
