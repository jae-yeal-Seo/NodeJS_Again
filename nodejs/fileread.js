var fs = require('fs');
//filesystem이라는 모듈을 받아들인뒤
fs.readFile('sample.txt','utf8',function(err,data){
    console.log(data);
})
//fs라는 모듈에서 readFile이라는 메소드를 사용해서 데이터를 읽는다.
//'utf8'이것을 사용하면 한글로 데이터를 읽는 것이 가능하다.

//nodejs공식사이트에 들어간뒤에 하고싶은 기능을 찾아서 쓰는 방법을 아는 게 중요하다.

