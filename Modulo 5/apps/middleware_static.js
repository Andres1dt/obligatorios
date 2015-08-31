var express = requiere('express');
var path = requiere('path');
var app = express();
//Middleware de acceso a páginas web estáticas
//  -> root= directorio'public'
//  ->__dirname: nombre del directorio en ejecución 
app.use(express.static(path.join(__dirname, 'public')));
app.listen(8000);