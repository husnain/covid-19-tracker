import React from 'react';
import { Card, Typography, CardContent, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    dividerFullWidth: {
      margin: `5px 0 0 ${theme.spacing(2)}px`,
    },
    dividerInset: {
      margin: `5px 0 0 ${theme.spacing(9)}px`,
    },
  }));
  
const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate}}) => {
    const classes = useStyles();
    if(!confirmed){
        return 'Loading...';
    }
    console.log(recovered)
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" className={classes.dividerFullWidth}>
                            <CountUp start={0} end={confirmed.value} duration={3.75} separator="," />
                            <Divider />
                        </Typography>
                        <Typography color="textSecondary" className={classes.dividerFullWidth}>
                            {new Date(lastUpdate).toDateString()}
                            <Divider />
                        </Typography>
                        <Typography variant="body2">Number of active cases if COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recoverd)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recoved</Typography>
                        <Typography variant="h5" className={classes.dividerFullWidth}>
                            <CountUp start={0} end={recovered.value} duration={3.75}  separator=","/>
                            <Divider />
                        </Typography>
                        <Typography color="textSecondary" className={classes.dividerFullWidth}>
                            {new Date(lastUpdate).toDateString()}
                            <Divider />
                        </Typography>
                        <Typography variant="body2">Number of Recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" className={classes.dividerFullWidth}>
                            <CountUp start={0} end={deaths.value} duration={3.75}  separator=","/>
                            <Divider />
                        </Typography>
                        <Typography color="textSecondary" className={classes.dividerFullWidth}>
                            {new Date(lastUpdate).toDateString()}
                            <Divider />
                        </Typography>
                        <Typography variant="body2">Number of Deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;