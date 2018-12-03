var http = require('http');
var url = require('url');
var test = require('test');
var querystring = require('querystring');


var server = http.createServer(function (req, res) {
    var page = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);

    var content = '404';
    var test = 'NaN';
    var truc = 'NaN';

    res.writeHead(200, {"Content-Type": "text/html"});


    switch (page) {
        case '/':
            content = 'Vous êtes à l\'accueil, que puis - je pour vous ? ';
            break;
        case '/sous-sol':
            content = 'Vous êtes dans la cave à vins, ces bouteilles sont à moi !';
            break;
        case '/etage/1/chambre':
            content = 'Hé ho, c\'est privé ici!';
            break;
    }

    if ('test' in params && 'truc' in params) {
        test = params['test'];
        truc = params['truc'];
    }
    res.write('<!DOCTYPE html>'
            + '<html>'
                + '<head>'
                    + '<meta charset="utf-8" />'
                    + '<title>Ma page Node.js !</title>'
                + '</head>'
                + '<body>'
                    + '<p>' + content + '</p>'
                    + '<p>' + test + '</p >'
                    + '<p>' + truc + '</p >'
                + ' </body >'
            + '</html>');


    console.log(page);

    res.end();
});


server.listen(8080);

    test.direBonjour();
    test.direByeBye();