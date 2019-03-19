//global variables and const
var ctx;
var axes;
var mode = 24; // hours
var divisions = 8; // partitions
var lanes = 10; // lanes
var laneThickness = 10;
var modifier = 3600;
var active = 1;
var inactive = 1;
var comp0 = 1;
var comp1 = 1;
var comp2 = 1;
var comp3 = 1;
var comp4 = 1;
var comp5 = 1;
var comp6 = 1;
var dataYellow = [
  [[10800, 36000, 61200, 72000, 93600, 129600, 144000], [10800, 18000, 7200, 14400, 21600, 10800, 21600], "rgb(253,209,42)", [1, 2, 3, 4, 5, 6, 7], [0, 1, 1, 0, 1, 1, 1], [[1, 0, 1, 0, 0, 0, 1], [1, 0, 0, 1, 0, 1, 1], [0, 1, 0, 0, 0, 1, 1], [1, 0, 1, 1, 1, 1, 1], [0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 1, 0, 1], [1, 1, 1, 1, 0, 1, 1]]],
  [[0, 43200, 79200, 136800], [36000, 32400, 18000, 25200], "rgb(253,209,42)", [8, 9, 10 , 11], [0, 0, 1, 1], [[1, 0, 0, 1, 0, 1, 1], [1, 0, 0, 1, 0, 1, 1], [0, 1, 1, 1, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1]]],
  [[18000, 50400, 68400, 90000, 165600], [18000, 10800, 7200, 43200, 18000], "rgb(253,209,42)", [12, 13, 14, 15, 16], [1, 1, 1, 0, 1], [[1, 0, 0, 1, 0, 1, 1], [0, 1, 0, 1, 0, 0, 1], [1, 0, 1, 0, 0, 1, 0], [1, 1, 1, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1]]],
  [[10800, 21600, 50400, 82800, 115200, 162000], [7200, 21600, 21600, 18000, 10800, 25200], "rgb(253,209,42)", [17, 18, 19, 20, 21, 22], [1, 1, 1, 1, 0, 1], [[0, 1, 0, 0, 0, 0, 1], [0, 1, 1, 1, 0, 0, 1], [1, 0, 1, 1, 0, 0, 1], [0, 0, 0, 1, 0, 1, 1], [0, 1, 0, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 0]]],
  [[0, 54000, 72000], [43200, 14400, 10800], "rgb(253,209,42)", [23, 24, 25], [1, 1, 1], [[1, 0, 0, 1, 0, 1, 1], [1, 0, 0, 1, 0, 1, 1], [1, 0, 0, 1, 0, 1, 1]]]
];
var dataRed = [
  [[3600, 36000, 68400, 100800, 115200], [25200, 18000, 25200, 10800, 36000], "rgb(255,78,80)", [26, 27, 28, 29, 30], [0, 1, 0, 0, 1], [[0, 0, 1, 0, 1, 0, 1], [1, 0, 1, 1, 1, 0, 1], [1, 1, 1, 0, 0, 0, 1], [1, 1, 0, 0, 0, 1, 1], [1, 0, 0, 1, 0, 1, 1]]],
  [[0, 43200, 68400, 90000, 104400, 126000, 144000], [10800, 18000, 7200, 10800, 18000, 10800, 18000], "rgb(255,78,80)", [31, 32, 33, 34, 35, 36, 37], [1, 1, 0, 1, 1, 0, 1], [[1, 0, 0, 1, 0, 1, 1], [1, 0, 0, 1, 1, 1, 1], [1, 0, 0, 1, 0, 1, 1], [1, 0, 0, 1, 0, 1, 1], [1, 0, 0, 1, 0, 1, 1], [1, 0, 1, 1, 0, 1, 1], [1, 0, 0, 1, 0, 1, 1]]],
  [[10800, 75600, 104400, 140400, 154800], [21600, 7200, 18000, 10800, 25200], "rgb(255,78,80)", [38, 39, 40, 41, 42], [1, 1, 1, 0, 0], [[1, 0, 0, 1, 0, 1, 1], [0, 1, 1, 1, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 0, 1, 0, 1, 1], [1, 1, 0, 1, 0, 1, 0]]],
  [[18000, 28800, 50400, 90000, 129600, 144000], [7200, 14400, 25200, 21600, 10800, 25200], "rgb(255,78,80)", [43, 44, 45, 46, 47, 48], [0, 1, 1, 0, 1, 1], [[0, 0, 0, 1, 1, 1, 1], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 1, 1], [1, 0, 0, 1, 0, 1, 1], [1, 1, 0, 1, 0, 1, 1], [0, 1, 1, 1, 1, 0, 1]]],
  [[0, 36000, 61200, 79200, 108000, 158400], [28800, 21600, 10800, 25200, 18000, 36000], "rgb(255,78,80)", [49, 50, 51, 52, 53, 54], [1, 1, 1, 1, 0, 0], [[0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 0, 1], [1, 1, 1, 1, 0, 0, 0], [1, 1, 0, 0, 1, 1, 0], [0, 1, 0, 1, 0, 1, 1], [0, 0, 1, 1, 0, 0, 1]]]
];
var locations = [

];
var minR = 80;
var currentR = minR;
var middleR = 0;
var font = "sans-serif";
var turbineName = "GE-1540-0417";
var X;
var Y;
// initialization
function draw() {
  var canvas = document.getElementById("canvas");
  if (null == canvas || !canvas.getContext) return;

  ctx = canvas.getContext("2d");

  X = (canvas.width - 250) / 2;
  Y = canvas.height / 2;

  addBackground();

  addInitalFunc();

}

// paint function and dots
function addFunc(i, data) {
  var r = currentR;

  ctx.lineWidth = laneThickness;
  ctx.strokeStyle = data[2];

  var newTime = ratioToPi(data[0], data[1]);
  var newStart = newTime[0];
  var newDuration = newTime[1];
  locations[i] = new Array();
  var startPi = - Math.PI / 2;
  newStart.forEach(function(s, j){
    if(active && data[4][j] || inactive && !data[4][j]){
      if((comp0 ** data[5][j][0]) && (comp1 ** data[5][j][1]) && (comp2 ** data[5][j][2]) && (comp3 ** data[5][j][3]) && (comp4 ** data[5][j][4]) && (comp5 ** data[5][j][5]) && (comp6 ** data[5][j][6])){
        ctx.beginPath();
        ctx.arc(X, Y, r, startPi + s, startPi + s + newDuration[j]);
        ctx.stroke();
        locations[i].push([startPi + s, startPi + s + newDuration[j]]);
      }
    }
  });
  currentR += (laneThickness + 2);
}

function addBackground() {
  var startPi = - Math.PI / 2;

  //inner ring
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgb(232,232,232)";
  ctx.arc(X, Y, minR - 0.5 * laneThickness, 0, 2 * Math.PI);
  ctx.stroke();

  // text
  ctx.lineWidth = 4;
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(X, Y - 60);
  ctx.lineTo(X - 10, Y - 40);
  ctx.lineTo(X + 10, Y - 40);
  ctx.closePath();
  ctx.stroke();

  ctx.font = "16px " + font;
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText(turbineName, X, Y + 15);

  for(i = 1; i <= divisions; i++){
    if(i % 2 == 0){
      ctx.strokeStyle = "rgb(208,208,208)";
    }else{
      ctx.strokeStyle = "rgb(234,234,234)";
    }

    // separators
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgb(232,232,232)";
    ctx.beginPath();
    theta = - Math.PI / 2 + 2 * Math.PI * i / divisions;
    ctx.font = "16px " + font;
    ctx.fillStyle = "rgb(128,128,128)";
    ctx.textAlign = "center";
    var num = Number(i * mode / divisions) // The Number() only visualizes the type and is not needed
    var roundedString = num.toFixed(2);
    var rounded = Number(roundedString);
    ctx.fillText(rounded + "h", X + (minR + (lanes + 3) * (laneThickness + 2)) * Math.cos(theta), Y + (minR + (lanes + 3) * (laneThickness + 2)) * Math.sin(theta) + 5);
    ctx.moveTo(X + (minR - 0.5 * laneThickness) * Math.cos(theta), Y + (minR - 0.5 * laneThickness) * Math.sin(theta));
    ctx.lineTo(X + (minR + (lanes + 1) * (laneThickness + 2)) * Math.cos(theta), Y + (minR + (lanes + 1) * (laneThickness + 2)) * Math.sin(theta));
    ctx.stroke();

  }
}

// links
canvas.addEventListener('click', function(event) {
    var viewportOffset = canvas.getBoundingClientRect();
    var x = event.pageX - viewportOffset.left, y = event.pageY - viewportOffset.top;
    var lane = getLaneNumber(x, y);
    var angle = getAngle(x, y);
    angle-= Math.PI / 2;
    var current = lane - 1;
    if(lane > middleR){
      current--;
    }
    if(lane != 0){
      locations[current].forEach(function(location, j){
        if(location[0] <= angle && location[1] >= angle){
          if(lane > dataYellow.length){
            lane-= dataYellow.length;
            alert("EventID = " + dataRed[lane - 2][3][j]);
          } else {
            alert("EventID = " + dataYellow[lane - 1][3][j]);
          }
        }
      });
    }
}, false);

// hover
canvas.addEventListener('mousemove', function(event) {
    var viewportOffset = canvas.getBoundingClientRect();
    var x = event.pageX - viewportOffset.left, y = event.pageY - viewportOffset.top;
    var lane = getLaneNumber(x, y);
    var angle = getAngle(x, y);
    angle-= Math.PI / 2;
    var current = lane - 1;
    if(lane > middleR){
      current--;
    }
    if(lane != 0){
      locations[current].some(function(location, j){
        if(location[0] <= angle && location[1] >= angle){
          document.getElementById('tooltip').style.left = (event.pageX + 10) + "px";
          document.getElementById('tooltip').style.top = (event.pageY + 10)  + "px";
          var text = "";
          locations[current].forEach(function(location, j){
            if(location[0] <= angle && location[1] >= angle){
              if(lane > dataYellow.length){
                lane-= dataYellow.length;
                text = "EventID = " + dataRed[lane - 2][3][j];
              } else {
                text = "EventID = " + dataYellow[lane - 1][3][j];
              }
            }
          });
          document.getElementById('tooltip').innerHTML = text;
          document.getElementById('tooltip').style.visibility = "visible";
          return document.getElementById('canvas').style.cursor = 'pointer';
        }
        document.getElementById('canvas').style.cursor = 'default';
        document.getElementById('tooltip').style.visibility = "hidden";
      });
    } else {
      document.getElementById('canvas').style.cursor = 'default';
      document.getElementById('tooltip').style.visibility = "hidden";
    }
}, false);

function getLaneNumber(x, y){
  var d = Math.sqrt((375 - x) ** 2 + (Y - y) ** 2);
  var laneNumber = Math.floor((d - minR + (laneThickness + 2) * 0.5) / (laneThickness + 2)) + 1;
  if(laneNumber < 1 || laneNumber > lanes + 1 || laneNumber == middleR){
    return 0;
  }
  return laneNumber;
}

function getAngle(x, y){
  var newX = x - X;
  var newY = y - Y;
  var angle = Math.asin(Math.abs(X - x) / Math.sqrt((X - x) ** 2 + (Y - y) ** 2));
  if(newX >= 0 && newY <= 0){
    return angle;
  }else if(newX <= 0 && newY <= 0){
    return 2 * Math.PI - angle;
  }else if(newX <= 0 && newY >= 0){
    return Math.PI + angle;
  }else{
    return Math.PI - angle;
  }
}

// add initial functions
function addInitalFunc() {
  var index = 0;
  dataYellow.forEach(function(d){
      addFunc(index, d);
      index++;
  });;
  middleRing();
  dataRed.forEach(function(d){
      addFunc(index, d);
      index++;
  });
  outerRing();
}

function middleRing() {
  var startPi = - Math.PI / 2;

  for(i = 1; i <= divisions; i++){

    if(i % 2 == 0){
      ctx.strokeStyle = "rgb(204,202,255)";
    }else{
      ctx.strokeStyle = "rgb(234,234,234)";
    }
    ctx.lineWidth = laneThickness * 0.7;
    ctx.beginPath();
    ctx.arc(X, Y, currentR, startPi, startPi + 2 * Math.PI / divisions);
    ctx.stroke();

    startPi+= 2 * Math.PI / divisions;
  }
  middleR = (currentR - minR) / lanes;
  currentR += (laneThickness + 2);
}

function outerRing() {
  var startPi = - Math.PI / 2;
  for(i = 1; i <= divisions; i++){
    if(i % 2 == 0){
      ctx.strokeStyle = "rgb(204,202,255)";
    }else{
      ctx.strokeStyle = "rgb(234,234,234)";
    }

    ctx.lineWidth = laneThickness * 0.7;
    ctx.beginPath();
    ctx.arc(X, Y, currentR, startPi, startPi + 2 * Math.PI / divisions);
    ctx.stroke();
    startPi+= 2 * Math.PI / divisions;
  }
}

function ratioToPi(start, duration){
  var newStart = Array(2);
  var newDuration = Array(2);

  start.forEach(function(s, i){
    newStart[i] = 2 * Math.PI * s / (mode * modifier);
    newDuration[i] = 2 * Math.PI * duration[i] / (mode * modifier);
    if(newStart[i] > Math.PI * 2){
      newStart[i] = null;
      newDuration[i] = null;
    }else if(newStart[i] + newDuration[i] > Math.PI * 2){
      newDuration[i] = Math.PI * 2 - newStart[i];
    }
  });

  return [
    newStart,
    newDuration
  ];
}

function arrayIsNull(A){
  for(i = 0; i < A.length; i++){
    if(A[i]){
      return false;
    }
  }
  return true;
}

function clearCtx(){
  currentR = minR;
  ctx.clearRect(0, 0, X * 2, Y * 2);
}
