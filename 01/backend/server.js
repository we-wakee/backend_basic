import express from 'express'

const app= express()

app.get('/',(req,res)=>{

    res.send('Server is ready')

});

app.get('/api/jokes',(req,res)=>{

    const jokes=[
        {
            id:1,
            title: 'A joke',
            content: 'This is First Joke'
        },

        {
            id:2,
            title: 'Another joke',
            content: 'This is another Joke'
        },
        {
            id:3,
            title: 'Third joke',
            content: 'THis is third Joke'
        },
        {
            id:4,
            title: 'Fourth joke',
            content: 'This is fourth Joke'
        },
        {
            id:5,
            title: 'Last joke',
            content: 'This is last Joke'
        },
    ]

    res.send(jokes);

});

const port = process.env.port || 3000;

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`)
})

