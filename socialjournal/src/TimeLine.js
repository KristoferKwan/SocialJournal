import {Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextTruncate from 'react-text-truncate'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
}));


function TimeLine() {
  const classes = useStyles();

  return (
    <div>
    <Typography variant="h4"> 
    Hi Covenant,
    </Typography>

    <Typography variant="body1"> 
    Here are your most recent entries:
    </Typography>
    <Paper className={classes.paper}>
        <Grid container wrap= "nowrap" spacing = {5}>
          <Grid container item direction= 'column' spacing = {3} flexGrow={1} xs = {3} wrap= "nowrap">
            <Grid item zeroMinWidth style={{ wordWrap: "break-word" }}>
              <Typography> Covenant Faluyi </Typography>
            </Grid>
            <Grid item>
              <Typography>Nov 8, 2020</Typography>
            </Grid>
          </Grid>
          <Grid item flexGrow= {2} xs = {9}>
            <b>What was your favorite part of your conversation?</b>
            <br></br>
            <TextTruncate
              line={3}
              element="span"
              truncateText="…"
              text="What the **** did you just fucking say about me, you little *****? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo."
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default TimeLine;
