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

var bar = new ProgressBar.Circle(container, {
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 6,
  from: {color: '#FFEA82', a:0},
  to: {color: '#ED6A5A', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar.animate(0.5); 