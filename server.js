var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var aricleOne = {
  title :'Article one',
  heading :'article1',
  date:'feb 7 2017',
  conte:`<p>Hello, this is article one</p>
        <p>The viewport is the user's visible area of a web page.The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.
            Before tablets and mobile phones, web pages were designed only for computer screens, and it was common for web pages to have a static design and a fixed size.

             Then, when we started surfing the internet using tablets and mobile phones, fixed size web pages were too large to fit the viewport. To fix this, browsers on those devices scaled down the entire web page to fit the screen.

              This was not perfect!! But a quick fix.</p>'`
  };

function createTemp(data) {
    var title =data.title;
    var heading=data.heading;
    var date=data.heading;
    var conte=data.conte;
    
var temp =`
    <html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href = '/ui/style.css'>
    </head>
    
    <body>
      <div class="cont">
        <div>
        <a href='/'>Home</a>
        </div>
        <hr/>
        <h1>Feb 28 2017</h1>
        <p>${heading}</p>
        <p>${content}</p>
    </div>
    </body>        
</html>`
;
return temp;

}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article1',function(req, res)
{
   res.send(createTemp(articleOne));
});
app.get('/article2',function(req, res)
{
   res.send('aticle two');
});

app.get('/article3',function(req, res)
{
   res.send('aticle three');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
