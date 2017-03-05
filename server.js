var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={ 

articleone : {
    title: 'Article One',
    heading :'This is Article One',
    date:'feb 5',
    content: `
            <p>The viewport is the user's visible area of a web page.The viewport varies with the device, and will be smaller on a              mobile phone than on a computer screen.
                Before tablets and mobile phones, web pages were designed only for computer screens, and it was common for web pages to have a static design and a fixed size.

                Then, when we started surfing the internet using tablets and mobile phones, fixed size web pages were too large to fit the viewport. To fix this, browsers on those devices scaled down the entire web page to fit the screen.

                This was not perfect!! But a quick fix.
                </p>`},
articletwo : {
     title: 'Article Two',
    heading :'This is Article 2',
    date:'feb 6',
    content: `
            <p>The viewport is the user's visible area of a web page.The viewport varies with the device, and will be smaller on a              mobile phone than on a computer screen.
                Before tablets and mobile phones, web pages were designed only for computer screens, and it was common for web pages to have a static design and a fixed size.

                Then, when we started surfing the internet using tablets and mobile phones, fixed size web pages were too large to fit the viewport. To fix this, browsers on those devices scaled down the entire web page to fit the screen.

                This was not perfect!! But a quick fix.
                </p>`}
                
};
    
function createTemp (data) {   
    
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
var htmlTemp = `
<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/ui/style.css" rel="stylesheet" />   
    
    </head>
    
    <body>
      <div class="cont">
        <div>
        <a href='/'>Home</a>
        </div>
        <hr/>
        <div>
            ${date}
        </div>
        <div>
            <h3>
          ${heading}
          </h3>
        </div>
       <div> 
            ${content}
       </div>
    </div>
    </body>        
</html>

`;
return htmlTemp;

}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

 app.get('/:articleName',function(req, res)
{  var articleName=req.params.articleName;
   res.send(createTemp(articles[articleName]));
});


app.get('/article1',function(req, res)
{   //res.sendFile(path.join(__dirname, 'ui', 'article1.html'));
  res.send(createTemp(articleone));
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
