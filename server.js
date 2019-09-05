const express = require('express');
const app = express(); // recebe o retorno da chamada de função

// usando metodo listen para depois receber o callback só quando servidor for chamado
app.listen(3000, function() {
    console.log('Servidor funfando na porta 3000')
});

// metodo get para atendermos a requisição do tipo get
app.get('/livros', function(req, resp) {
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Listagem de livros </h1>
                </body> 
            </html>
        `
    );
});

/* const http = require('http');

const servidor = http.createServer(function (req, resp) {

    let html = '';
    if (req.url == '/') {
        html = `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Casa do Código </h1>
                </body>
            </html>
        `;
    } else if (req.url == '/livros') {
        html = `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Listagem de livros </h1>
                </body>
            </html>
        `;
    }

    // outros else-if

    resp.end(html);
}); 
servidor.listen(3000); */