import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../style/Question.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  button: {
    margin: 'auto'
  }
}));


function Questions({history, ...props}) {
  const classes = useStyles();

  const [questionNum, setQuestion] = useState(0)
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty()
  });
  const [emojiColors, setEmojiColors] = useState(() => {
    return {
      happy: {color: "green"},
      satisfied: {color: "rgb(153, 212, 63)"},
      sad: {color: "orange"},
      verysad: {color: "red"}
    }
  })

  var originalStyle = {
    happy: {color: "green"},
    satisfied: {color: "rgb(153, 212, 63)"},
    sad: {color: "orange"},
    verysad: {color: "red"}
  }

  const onEditorStateChange = (editorState) => {
    console.log(editorState);
    setEditorState(editorState);
    changeAnswer(draftToHtml(convertToRaw(editorState.getCurrentContent())), 1); 
  };

  const [questionAnswers, setQuestionAnswers] = useState(() => {
    const questionAnswers = [{
      "question": "Who did you interact with?",
      "answer": ""  
    },{
      "question": "What was your favorite moment?",
      "answer": ""
    },{
      "question": "Overall, what mood did this interaction put you in?",
      "answer": ""
    }]
    return questionAnswers;
  })

  const changeForm = () => {
    switch (questionNum) {
      case 0:
        return (
          <div>
          <h3>Who did you interact with?</h3>
          <div>
            <Autocomplete
            inputValue={questionAnswers[0].answer}
            defaultValue="Class" 
            onInputChange={(_, newInputValue) => {
              changeAnswer(newInputValue, 0)}}
            id="Name"
            options={props.contacts}
            getOptionLabel={(option) => option.name}
            style={{ width: 1000 }}
            renderInput={(params) => <TextField {...params} label="Name" variant="outlined" />}
            />
          </div>
          </div>
        );
      case 1:
        return (
          <div>
          <h3>What was your favorite moment?</h3>
          <div className="text-area">
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={onEditorStateChange}
            />
          </div>
          </div>
        );
        case 2:
          return (
            <div>
            <h3>How would you rate your interaction?</h3>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <InsertEmoticonIcon className="emoticon happy" style={emojiColors.happy} onClick={(e) => changeColor(e, "happy")}/>
                <SentimentSatisfiedIcon className="emoticon satisfied" style={emojiColors.satisfied} onClick={(e) => changeColor(e, "satisfied")}/>
                <SentimentDissatisfiedIcon className="emoticon sad" style={emojiColors.sad} onClick={(e) => changeColor(e, "sad")}/>
                <SentimentVeryDissatisfiedIcon className="emoticon verysad" style={emojiColors.verysad} onClick={(e) => changeColor(e, "verysad")}/>
              </Grid>
            </div>
          );
      default:
        return null;
    }
  }

  const changeAnswer = (val, index) => {
    let questions = questionAnswers.map(question => ({...question}));
    questions[index].answer = val; 
    setQuestionAnswers(questions);
  } 

  const changeColor = (e, emoji) =>{
    changeAnswer(emoji, 2);
    let newColor = {}
    newColor[emoji] = {color: "blue"}
    setEmojiColors({...originalStyle, ...newColor})
    console.log(emojiColors);
  } 

  const onConfirm = () => {
    const entryDate = new Date();
    const result = {questionAnswers, entryDate}
    props.setEntries([...props.entries, result])
    history.push('/');
  }



  return (
    <div>
      <Container>    
    {changeForm()}
        <div className = "field">
        <div class="field">
            <Button
                className="button"
                variant="contained"
                color="primary"
                onClick={() => setQuestion(questionNum - 1)}
            >
                <ArrowBackIcon/>
            </Button>
            {questionNum < 2 ? 
            <Button
                className="button"
                variant="contained"
                color="primary"
                onClick={() => setQuestion(questionNum + 1)}
            >
                Next <ArrowForwardIcon/>
            </Button>
            :
            <Button
            className="button"
            variant="contained"
            color="primary"
            onClick={() => onConfirm()}
        >
            Submit Log
        </Button>
            } 
          </div>
        </div>
        </Container>
        </div>
        
  );
}

export default withRouter(Questions);
