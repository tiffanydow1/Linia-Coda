import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

const BusinessList = (props) => {
  const {classes} = props;
  return (
        // className="business-list"
      <List className={classes.root} subheader={<li />} component="nav">
        <li className={classes.listSection}>
          <ul className={classes.ul}>
              <ListItem button>
                <ListItemText primary="business-1" />
              </ListItem>
          </ul>
        </li>
    </List>
  );
}

BusinessList.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(BusinessList);