import React from 'react';
import {
  withStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'grey',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'grey',
    },
    '& .MuiInput-underline:hover': {
      borderBottomColor: '#e9e9e9',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: '2px solid #e6e6e6',
    },
    '& .MuiInput-underline:before': {
      borderBottom: '2px solid #e9e9e9',
    },
  },
})(TextField);

export default function CustomizedInputs({ ...props }) {

  return (
    <CssTextField id="custom-css-standard-input" label="Custom CSS" {...props} />
  );
}
