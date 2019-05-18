import React, { Children } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export default function ClassesShorthand(props) {
  return <TextField>{props.children}</TextField>;
}