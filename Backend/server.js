import express from 'express'
import dietRouter from './Routes/PregDietRoute.js';

const app = express();

const port = 3000

// middlewares 

app.use(express.json());

// api endpoint

app.use('/api/diet',dietRouter)


app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
    
})

