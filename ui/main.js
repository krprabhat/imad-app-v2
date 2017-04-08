/*console.log('Loaded!');
var element = document.getElementById('main');
element.innerHTMl = 'New Value';

var img = document.getElementById('madi');
var marginLeft =0;
function moveRight()
{
    marginLeft = marginLeft +5;
    img.style.marginLeft =marginLeft +'px';
}
img.onclick = function()
{
    var interval = setInterval(moveRight,50);
};*/

var button = document.getElementById('counter');
var counter =0;


button.onclick = function() {
    
    var request = new XMLHttpRequests();
    if(request.onreadyState== XMLHttpRequest.DONE)
    {
        if(request.status==200)
        {
            var counter= request.responseText;
              var span= document.getElementById('count');
              span.innerHTML =counter.toString();
        }
    }
    //counter = counter +1;
    request.open('GET','http://krprabhat.imad.hasura-app.io/counter',true);
    request.send(null);
    
};

function move() {
  var elem = document.getElementById("myBar");   
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 70) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
      
      
      
    }
  }
} 

function move1() {
  var elem = document.getElementById("myBar1");   
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 80) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function move2() {
  var elem = document.getElementById("myBar2");   
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 60) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}
function move3() {
  var elem = document.getElementById("myBar3");   
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 90) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function move4() {
  var elem = document.getElementById("myBar4");   
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 60) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}


var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2500);    
}
