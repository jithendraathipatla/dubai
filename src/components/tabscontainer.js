import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    letterSpacing: "0.9px !important",
    color:"back",
    fontFamily: "inherit !important",
  },
}));

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="black"
          fontFamily="inherit"
          letterSpacing="0.9px"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
        {props.labelone ?   <Tab label={props.labelone} {...a11yProps(0)} /> : null}
        {props.labeltwo ?  <Tab label={props.labeltwo} {...a11yProps(1)} /> : null}
        {props.labelthree ? <Tab label={props.labelthree} {...a11yProps(2)} /> : null}
        {props.labelfour ?   <Tab label={props.labelfour} {...a11yProps(3)} /> : null}
        {props.labelfive ?  <Tab label={props.labelfive} {...a11yProps(4)} /> : null}
        {props.labelsix ?  <Tab label={props.labelsix} {...a11yProps(5)} /> : null}
        {props.labelseven ? <Tab label={props.labelseven} {...a11yProps(6)} /> : null}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {props.contentone}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {props.contenttwo}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {props.contentthree}
      </TabPanel>
      <TabPanel value={value} index={3}>
       {props.contentfour}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {props.contentfive}
      </TabPanel>
      <TabPanel value={value} index={5}>
        {props.contentsix}
      </TabPanel>
      <TabPanel value={value} index={6}>
       {props.contentseven}
      </TabPanel>
    </div>
  );
}
