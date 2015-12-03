$(function(){
  console.log("main js loaded.");

var Player1;
var myShips= {
  AircraftCarrier:["O9", "P9", "Q9","R9","S9"],
  Battleship:["S2", "S3", "S4","S5"],
  Submarine:["L7", "L8", "L9"],
  Cruiser:["N2", "N3", "N4"],
  PatrolBoat:["K2", "K4"],
}
// var playerBoardSetUp = $('.shipClick').click(function(){
//   console.log ("Ship ID:" + this.id);
//   var shipSelected = this.id;
//   document.getElementById(shipSelected)
//   for (var i = 0; i< shipSelected.length; i++){
//     var classes = ships[i].getAttribute('class') || ' ';
//     classes = classes.replace('placing', '');
//     shipSelected[i].setAttribute('class', classes);
//     console.log ("ship length:" + length);
//     }
//   $('h3').html("Choose Location on the Board");
//   $('.Player1Board').click(function(){
//     console.log (this.id);
//     var shipLocation = this.id;
//     (function(){
//       shipLocation.removeClass('Player1Board').addClass('shipLocationClass');
//       //$('.shipLocationClass').css("background-color": "#666666");
//     })
//   })
// })

$('#viewToggle').click(function(){
  console.log("toggle clicked");
  $('#viewToggle').html("Hide my Board");
  document.getElementById('myShipLayout').style.display = "block";
  document.getElementById('viewToggle').id = "viewToggleOn";
  })

$('#viewToggleOn').click(function(){
  console.log("toggle off clicked");
  $('#viewToggle').html("Show my Board");
  document.getElementById('myShipLayout').style.display = "none";
  document.getElementById('viewToggleOn').id = "viewToggle";
  })

// dummy board

var ships= {
  AircraftCarrier:["C3", "C4", "C5","C6","C7"],
  Battleship:["E2", "F2", "G2","H2"],
  Submarine:["G5", "G6", "G7"],
  Cruiser:["A9", "B9", "C9"],
  PatrolBoat:["E9", "E10"],
}

var keys = Object.keys(ships);
//console.log ("Ships:" + ships);
console.log ("Keys:" + keys);

$('.Player1Board').click(function(){
  document.querySelector("h3").innerHTML= " ";
  document.getElementById("shotCounter").value-=1;
  console.log ("shot value:" + this.id);
  var shot= this.id;
  console.log (shot);
  var hit= false;
  for(i in keys){
    var key = keys [i];
    var buttons = ships[key];
    for (var j in buttons){
      var button = buttons[j];
      if(shot === button){
        hit = true;
        document.querySelector("h3").innerHTML= "HIT!";
        var att= document.createAttribute("class");
          att.value = "hitShipCell";
          document.getElementById(shot).className += "hitShipCell";
          document.getElementById(shot).value="X";
          document.getElementById(shot).disabled="disabled";
        }
      }
    }
  if (!hit) {
      document.querySelector("h3").innerHTML= "MISS";
      document.getElementById(shot).style.background="white";
      document.getElementById(shot).disabled="disabled";
  }
  var shipCount = 0;
  for (i in keys){
    var key = keys [i];
    var shipHitCount = 0;
    for (j in ships[key]){
      if ($('#' + ships[key][j]).hasClass('Player1BoardhitShipCell')) {
        shipHitCount += 1;
      }
    }
    if (ships[key].length === shipHitCount) {
        shipCount +=1;
        console.log ("Hit Count:" + shipHitCount);
        console.log('SUNK!');
        sunkShipId = key;
        console.log ("SunkShip:" + sunkShipId);
        document.querySelector("h3").innerHTML= key + " IS SUNK!";
        document.getElementById(sunkShipId).src = key + "_sunk.jpg";
        var attShip= document.createAttribute("class");
          attShip.value = "Sunk";
          document.getElementById(sunkShipId).className = "Sunk";
        }

    if (keys.length === shipCount){
      document.querySelector("h3").innerHTML= key + "PLAYER 1 WINS!";
      setTimeout(function () {
        location.reload();
      }, 3000)
      }
    }
  })
 });


//computer hit / miss
//computer ship sink & win
//shot count = o end game

//bugs H3 alerts
//






