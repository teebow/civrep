import React, { Children } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// The `withStyles()` higher-order component is injecting a `classes`
// property that is used by the `Button` component.
const GradientButton = withStyles({
  root: {
    background: 'linear-gradient(to right top, #d16b7d, #d16d93, #cb73aa, #be7bc0, #ab85d3, #9992e3, #839ff0, #69abf8, #54bcff, #48cbff, #4cdaff, #5fe7fb)',
    borderRadius: 20,
    border: 0,
    color: 'white',
    width: '100%',
    height: 52,
    padding: '0 30px',
    //boxShadow: '10px 10px 14px 1px rgba(209, 107, 125, .3)',
    boxShadow: '3px 7px 14px 1px rgba(0, 0, 0, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const GradientButton2 = withStyles({
  root: {
    background: '-webkit-linear-gradient(left top, #d16b7d, #d16d93, #cb73aa, #be7bc0, #ab85d3, #9992e3, #839ff0, #69abf8, #54bcff, #48cbff, #4cdaff, #5fe7fb)',
    color:'transparent',
    WebkitBackgroundClip: 'text',
    BackgroundClip: 'text',
    height: 52,
    fontSize: 24,
    padding: '0 30px',
  },  
})(Button);

export default function ClassesShorthand(props) {
  return <GradientButton2>{props.children}</GradientButton2>;
}