import React, { Fragment } from 'react';
import { Box } from '@mui/system';
import { Button, CircularProgress, Typography } from '@mui/material';
import SelectionField from './SelectionField';
import TextFieldComp from './TextFieldComp';
import useAxios from '../hook/useAxios';
import { useHistory } from 'react-router-dom';

const Choose = () => {
    const { response, error, loading } = useAxios({url: "/api_category.php"});
    const history = useHistory()

    if(loading) {
        return (
            <Box mt={15}><CircularProgress /></Box>
        )
    }

    if(error) {
        return (
            <Typography variant='h6' mt={20} color='red' >
                Something went wrong
            </Typography>
        )
    }

    const difficultyOptions = [
        {id: 'easy', name: 'Easy'},
        {id: 'medium', name: 'Medium'},
        {id: 'hard', name: 'Hard'},
    ]

    const typeOptions = [
        {id: 'multiple', name: 'Multiple Choice'},
        {id: 'boolean', name: 'True | False'}
    ]

    const handlePreventSubmit = e => {
        e.preventDefault();
        history.push('/questions')
    }

  return (
    <Fragment>
        <form onSubmit={handlePreventSubmit}>
            <SelectionField options={response.trivia_categories} label="Category" />
            <SelectionField options={difficultyOptions} label="Difficulty" />
            <SelectionField options={typeOptions} label="Type" />
            <TextFieldComp />
            <Box mt={3} width="100%">
                <Button style={{"background": "#272727"}} fullWidth variant="contained" type="submit">Start!</Button>
            </Box>
        </form>
    </Fragment>
  )
}

export default Choose