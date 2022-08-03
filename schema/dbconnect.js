const mongoose = require('mongoose');

function connect() {
    const url = 'mongodb://localhost:27017/board';
    console.log('board데이터베이스 연결 시도중 ... ');

    mongoose.Promise = global.Promise;//몽구스의 프로미스 객체를 global.Promise 객체로 사용
    mongoose.connect(url, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    database = mongoose.connection;//데이터베이스 연결 구간
    //데이터베이스의 연결상태에 대한 예외처리 설정
    database.on('error', console.error.bind(console, 'mongoose 연결실패'));
  
}
mongoose.connection.on('error', err => {
    console.error('몽고디비 연결 에러입니다.', err);
});

module.exports = connect;