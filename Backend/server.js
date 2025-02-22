import express from 'express'
import dietRouter from './Routes/PregDietRoute.js';

const app = express();

const port = 3000

// middlewares 

app.use(express.json());

// api endpoint
app.get('/', (req,res)=>res.send('api is active'))
app.use('/api/diet',dietRouter)


app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
    
})

