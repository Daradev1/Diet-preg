import express from 'express'
import dietRouter from './Routes/PregDietRoute.js';
import cors from 'cors'
const app = express();

const port = 3000

// middlewares 

app.use(express.json());
app.use(cors({ origin: "*" }));
// api endpoint
app.get('/', (req,res)=>res.send('api is active'))
app.use('/api/diet',dietRouter)


app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
    
})

