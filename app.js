const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const router = express.Router();
const port = 3000;


const connect = require('./schema/dbconnect');
connect();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const boardRouter = require('./views/board/boardSet');
app.use('/api', boardRouter)

app.get('/', (req, res) => {
    res.render('./board/boardList');
})


app.get('/boardWrite', (req, res) => {
    res.render('./board/boardWrite');
})

app.get('/boardView', (req, res) => {
    let boardId = req.query.boardId;
    res.render('./board/boardView', { boardId });
})

app.get('/boardUpdate', (req, res) => {
    res.render('./board/boardUpdate');
})



app.listen(port,()=>{
    console.log(`${port}포트로 서버 동작중`)

})
