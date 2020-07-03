import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';

export const Header = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
          },
        },
      }));
      const classes = useStyles();
    return (
        <div>
            <title>Covid-19 Tracker App</title>
            
            
            <div className={classes.root}>
                <Paper elevation={3} />
                <Paper elevation={3} />
                <Paper elevation={3} />
            </div>
        </div>
    )
}