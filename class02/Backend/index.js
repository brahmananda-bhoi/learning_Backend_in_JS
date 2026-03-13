// const express=require('express');
import express from 'express';
const app=express();

app.get('/', (req, res)=>{
    res.send('Server is ready');
});

app.get('/api/jokes', (req, res)=>{
    const jokes=[
        {
            id:1,
            title:'joke 1',
            content:'This is joke 1'
        },
        {
            id:2,
            title:'joke 2',
            content:'This is joke 2'
        },
        {
            id:3,
            title:'joke 3',
            content:'This is joke 3'
        },
        {
            id:4,
            title:'joke 4',
            content:'This is joke 4'
        },
        {
            id:5,
            title:'joke 5',
            content:'This is joke 5'
        }
    ];
    res.send(jokes);
});

const port =process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log(`Server at http:/localhost:${port}`);
});