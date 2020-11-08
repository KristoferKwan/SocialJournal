import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
}));


function Questions(props) {
  const classes = useStyles();

  const [questionNum, setQuestion] = useState(0)
  console.log(props.contacts);

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

  useEffect(() => {
    console.log(questionNum);
  }, [questionNum])

  const changeForm = () => {
    console.log("here!!!");
    switch (questionNum) {
      case 0:
        return (
          <div>
          <h3>Who did you interact with?</h3>
          <div className = "field">
            <Autocomplete
            inputValue={questionAnswers[0].answer}
            defaultValue="Class" 
            onInputChange={(_, newInputValue) => {
              changeAnswer(newInputValue)}}
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
            this works!
          </div>
        );
      default:
        return null;
    }
  }

  const changeAnswer = (val) => {
    let questions = questionAnswers.map(question => ({...question}));
    questions[questionNum].answer = val; 
    setQuestionAnswers(questions);
  } 

  const onConfirm = () => {
    props.setEntries([...props.entries, questionAnswers])
  }



  return (
    <div>    
    {changeForm()}
        {/* <div className = "field">
          <TextField value={this.state.resourceName} onChange={this.changeResourceName} label="Resource ID"  style={{ width: 300 }} variant="outlined" />
        </div> */}
        <div className = "field">
          {/* <InputLabel id="property-select-label">Property</InputLabel>
          <FormControl className="formControl">
          <Select
            labelId="property-select-label"
            id="propety-select"
            value={this.state.propertyType}
            onChange={this.handleChange}
            style={{ width: 300 }}
          >
            <MenuItem value={"label"}>rdfs:label</MenuItem>
            <MenuItem value={"description"}>skos:description</MenuItem>
          </Select>
        </FormControl> */}
        <div class="field">
            <Button
                className="create-resource"
                variant="contained"
                color="primary"
                onClick={() => setQuestion(questionNum - 1)}
            >
                Next <ArrowForwardIcon/>
            </Button>
            
            <Button
                className="create-resource"
                variant="contained"
                color="primary"
                onClick={() => setQuestion(questionNum + 1)}
            >
                Next <ArrowForwardIcon/>
            </Button>
          </div>
        </div>
        </div>
  );
}

export default Questions;
