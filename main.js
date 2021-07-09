var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    //url에서 query부분을 딴다.
    var title = queryData.id;
    //query부분에서 id의 파라미터를 title이라는 변수에 저장한다.
    if(_url == '/'){
      _url = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`,'utf8',function(err,description){
      //★queryData에서 id라는 파라미터의 value값을 불러와 "data/해당value값"파일을 description이라는 변수를 통해 사용할 수 있게 된다. 
      var template = `
    <!doctype html>
<html>
<head>
  <title>WEB1 - ${title}</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="index.html">WEB</a></h1>
  <ol>
    <li><a href="?id=HTML">HTML</a></li>
    <li><a href="?id=CSS">CSS</a></li>
    <li><a href="?id=JavaScript">JavaScript</a></li>
  </ol>
  <h2>${title}</h2>
  <p>${description}</p>
</body>
</html>
    `
    response.end(template);
    });
    
    //해당 파일을 읽음
    //response.end가 최종적으로 화면에 보여짐<==이걸 까먹어서 한참 다른파일만 뒤졌다...
  
});
app.listen(3000);
