import { Button, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useAxios from '../hook/useAxios';
import {decode} from 'html-entities';
import { handleScoreChange } from "../redux/actions";

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
}

const Questions = () => {

 const {
    question_category,
    question_difficulty,
    question_type,
    question_amount,
    score,
  } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  let apiUrl = `/api.php?amount=${question_amount}`

  if(question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`)
  }
  if(question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
  }
  if(question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`)
  }


  const { response, loading } = useAxios({url: apiUrl})
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if(response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers]
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      )
      setOptions(answers)
    }
  }, [response, questionIndex])

  if(loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if(e.target.textContent  === question.correct_answer) {
      dispatch(handleScoreChange(score+1))
    }

    if(questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1)
    } else {
      history.push("/final")
    }
  }

  return (
    <Fragment>
      <Box>
        <Typography variant='h4'>Question {questionIndex + 1}</Typography>
        <Typography mt={5}>{decode(response.results[questionIndex].question)}</Typography>
        {options.map((data, id) => (
          <Box mt={2} key={id}>
            <Button style={{"background": "#272727"}} onClick={handleClickAnswer} variant="contained">{decode(data)}</Button>
          </Box>
          
        ))}
        <Box mt={5}>
          <p>Score: {score} / {response.results.length}</p>
        </Box>

      </Box>
    </Fragment>
  )
}

export default Questions