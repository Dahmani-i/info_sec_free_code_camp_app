const express = require('express');
const app = express();




const helmet = require('helmet');
/*app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());

const timeInSeconds = 90 * 24 * 60 * 60;
app.use(helmet.hsts({ maxAge: timeInSeconds, force: true }));//it protect against man i the midle attaque

app.use(helmet.dnsPrefetchControl());

app.use(helmet.noCache()); //cache is not good for app updates

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", 'trusted-cdn.com']
  }
}
)
);//CSP works by defining an allowed list of content sources which are trusted.
*/

// !!!!!! Note : all the commented staff up are for learning perpesees so ,it is not practical ,it all can be replaced by the litle code down this comment

// it start hier
app.use(helmet({

  contentSecurityPolicy: {    // enable and configure
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'style.com'],
    }
  },
  noCache: true
//Note: only nocache and csp are the ones that they can't be replaced,this is why you see nocache:true and csp configration
}));//it end hier


































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});