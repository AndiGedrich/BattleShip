$(function(){
  console.log("main js loaded.");


// dummy board

//shot counter
document.getElementById("shotCounter").value = "25";

var ships= {
  AircraftCarrier:["C3", "C4", "C5","C6","C7"],
  Battleship:["E2", "F2", "G2","H2"],
  Submarine:["G5", "G6", "G7"],
  Cruiser :["A9", "B9", "C9"],
  PatrolBoat:["E9", "E10"],
}

var keys = Object.keys(ships);
console.log (ships);

$('.Player1Board').click(function(){
  document.getElementById("shotCounter").value-=1;
  console.log ("shot value:" + this.id);
  var shot= this.id;
  console.log (shot);
  for(var i in keys){
    var key = keys [i];
    var buttons = ships[key];
    }
    for (var j in buttons){
      var button = buttons[j];
    }
      if(shot === button){
        document.querySelector("h3").innerHTML= "HIT!";
        document.getElementById(shot).value="X";
        document.getElementById(shot).style.background="red";
        document.getElementById(shot).disabled="disabled";
        }

    else{
        document.querySelector("h3").innerHTML= "MISS";
        document.getElementById(shot).style.background="white";
        document.getElementById(shot).disabled="disabled";
        }
    })
});



//   var CONST = {};
//   CONST.AVAILABLE_SHIPS = ['myAircraftCarrier', 'myBattleship','myCruiser', 'mySubmarine', 'myPatrolBoat'];

//   switch (this.type) {
//     case CONST.AVAILABLE_SHIPS[0]:
//       this.shipLength = 5;
//       break;
//     case CONST.AVAILABLE_SHIPS[1]:
//       this.shipLength = 4;
//       break;
//     case CONST.AVAILABLE_SHIPS[2]:
//       this.shipLength = 3;
//       break;
//     case CONST.AVAILABLE_SHIPS[3]:
//       this.shipLength = 3;
//       break;
//     case CONST.AVAILABLE_SHIPS[4]:
//       this.shipLength = 2;
//       break;
//     default:
//       this.shipLength = 3;
//       break;
//   }

// var ships = $('.shipClick');

// $('.shipClick').click(function(){
//     console.log ("Ship ID:" + this.id);
//     var shipSelected = this.id;
//     for (var i = 0; i< shipSelected.length; i++){
//       var classes = ships[i].getAttribute('class') || ' ';
//       classes = classes.replace('placing', '');
//       shipSelected[i].setAttribute('class', classes);
//       console.log ("ship length:" + length);
//       }
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





  // $('#myShipLayout').click(function(){
  //   $('#viewToggle').toggle();
  // }

