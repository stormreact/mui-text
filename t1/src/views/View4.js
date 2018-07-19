import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GhCardNoImage from "./../cards/GhCardNoImage";
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

function View4(props) {
  const { classes, tileData, repoName, viewName } = props;

  return (
    <div>
      <RepoView repoName={repoName} viewName={viewName} />
      <div className={classes.root}>
        <GridList cellHeight={250} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.avatar} cols={tile.cols || 1}>
              <GhCardNoImage tile={tile} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

View4.propTypes = {
  tileData: PropTypes.array.isRequired,
  repoName: PropTypes.string.isRequired,
  viewName: PropTypes.string.isRequired
};

export default withStyles(styles)(View4);
