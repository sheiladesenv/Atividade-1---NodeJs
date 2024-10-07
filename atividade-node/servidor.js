const http = require('http');
const fs = require('fs');
 
const server = http.createServer((req, res) => {
console.log(req.url, req.method);
 
res.setHeader('Tipo-Conteudo', 'texto/html');

let caminho = './views/';

switch(req.url){
    case '/':  // a barra representa o index/home
       caminho += 'index.html'
       res.statusCode = 200;
       break;
  
    case '/familia':
       caminho += 'familia.html';
       res.statusCode = 200;
       break;

       case '/cadastro':
       caminho += 'cadastro.html';
       res.statusCode = 200;
       break;

       case '/login':
       caminho += 'login.html';
       res.statusCode = 200;
       break;

       case '/redefinicao-senha':
       caminho += 'redefinicao-senha.html';
       res.statusCode = 200;
       break;

       case '/historico-atividade':
       caminho += 'historico-atividade.html';
       res.statusCode = 200;
       break;

       case '/jogos':
       caminho += 'jogos.html';
       res.statusCode = 200;
       break;

       case '/videos':
       caminho += 'videos.html';
       res.statusCode = 200;
       break;

       case '/material-didatico':
       caminho += 'material-didatico.html';
       res.statusCode = 200;
       break;

       case '/favoritos':
       caminho += 'favoritos.html';
       res.statusCode = 200;
       break;

       
    default:
       caminho += '404.html';
       res.statusCode = 404;
       break;
 }
 
fs.readFile(caminho, (err, data) =>{
    if(err){
        console.log(err);
        res.end();
    } else {
        res.end(data);
    }
});

});
 
 
 
server.listen(3000, 'localhost', () => {
console.log("Ouvindo requisição na porta 3000");
});