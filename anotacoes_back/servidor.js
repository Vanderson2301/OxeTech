//Ver depois essa questão com o Chat, não entendi muito bem;
//Aqui se tem a ideia de servidor básico. Acho que entendi o básico.
//Esse servidor ele é feito com JS, mas da pra simplificar com Express.
import http from 'http';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if (req.method !== 'GET') {
        res.statusCode = 405;
        res.end('Permissão negada!\n');
        return;
    }

    if (req.url === "/"){
        res.end('Hello, World!\n');
    }else if (req.url === "/sobre"){
    res.end('Quer saber o que?\n');
    }else {
    res.end('Página não encontrada! Erro: 404\n');
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});