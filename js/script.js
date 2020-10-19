console.log('js');

cardType = parseInt(prompt("Enter the type of playing card you want(Club-1, Diamond-2, Heart-3, Spade-4):"));
console.log(cardType);

// if (cardType == 1){
//     console.log("Clubs");
//
//   } else if (cardType == 2){
//     console.log("Diamonds");
//
//   } else if (cardType == 3){
//     console.log("Hearts");
//
//   } else if (cardType == 4){
//     console.log("Hearts");
//
//   } else {
//     alert("Please enter numbers between 1 and 4");
// }

// Control Statement
var i, j;
var cardType;
var cardArray = ['J','K','Q','A'];

  switch (cardType) {
    case 1: {
        console.log("Clubs");
        $('#playCardHeading').text('Clubs');
        for (i = 2; i <= 10; i++){
        $('#result').append('<img class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 m-4 p-4 img-thumbnail" src="images/' + i + 'c.png" alt="Clubs"/>');
        }
        for (j = 0; j < cardArray.length; j++){
          $('#result').append('<img class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 m-4 p-4 img-thumbnail" src="images/' + cardArray[j] + 'c.png" alt="Clubs"/>');
        }
        break; //break the flow of execution and go out of switch structure.
        }


    case 2: {
        console.log("Diamonds");
        for (i = 2; i <= 10; i++){
        $('#result').append('<img class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 m-4 p-4 img-thumbnail" src="images/' + i + 'd.png" alt="Diamonds"/>');
        }
        for (j = 0; j < cardArray.length; j++){
          $('#result').append('<img class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 m-4 p-4 img-thumbnail" src="images/' + cardArray[j] + 'd.png" alt="Diamonds"/>');
        }
        break;
      }

    case 3: {
        console.log("Hearts");
        for (i = 2; i <= 10; i++){
        $('#result').append('<img class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 m-4 p-4 img-thumbnail" src="images/' + i + 'h.png" alt="Hearts"/>');
        }
        for (j = 0; j < cardArray.length; j++){
          $('#result').append('<img class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 m-4 p-4 img-thumbnail" src="images/' + cardArray[j] + 'h.png" alt="Hearts"/>');
        }
        break;
      }

    case 4: {
        console.log("Spades");
        $('#playCardHeading').text('Spades');
        for (i = 2; i <= 10; i++){
        $('#result').append('<img class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 m-4 p-4 img-thumbnail" src="images/' + i + 's.png" alt="Spades"/>');
        }
        for (j = 0; j < cardArray.length; j++){
          $('#result').append('<img class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 m-4 p-4 img-thumbnail" src="images/' + cardArray[j] + 's.png" alt="Spades"/>');
        }
        break;
      }

    default : {
        alert("Please enter numbers between 1 and 4");
        break;
      }
  }
