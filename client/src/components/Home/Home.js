import React from 'react';
import {useEffect,useState} from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from "react-redux";
import { getPosts } from '../../actions/Posts';
import {CustomGrid} from './Style';
import { useLocation } from 'react-router-dom';

const Home = () => {

const dispatch=useDispatch();
const [currentId, setCurrentId] = useState(null);


  useEffect(() => {
    dispatch(getPosts());
  }, [currentId,dispatch]);

  return (
    <Grow in>
        <CustomGrid container justifyContent="space-between" alignItems="stretch" spacing={3}>
        <Grid xs={12} sm={7}>
            <Posts currentId={currentId} setCurrentId={setCurrentId}/>
        </Grid>
        <Grid xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
        </Grid>
        </CustomGrid>
    </Grow>
  )
}

export default Home;
