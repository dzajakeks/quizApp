import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useState, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css'
import Choose from './components/Choose';
import Final from './components/Final';
import Questions from './components/Questions';

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Container maxWidth="sm" >
          <Box textAlign="center" mt={5}>
            <Switch>
              <Route path="/" exact>
                <Typography variant='h3'>Quiz (Redux | Router | REST API)</Typography>
                <Choose />
              </Route>
              <Route path="/questions">
                <Questions />
              </Route>
              <Route path="/final">
                <Final />
              </Route>
            </Switch>
          </Box>
        </Container>
      </BrowserRouter>
      
    </Fragment>
  )
}

export default App
