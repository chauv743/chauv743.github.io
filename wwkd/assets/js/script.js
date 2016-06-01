$(document).ready(function(){

  var crownsOnLoad = getParameterByName('crowns');
  crownsOnLoad = parseInt(crownsOnLoad);
  console.log(crownsOnLoad);
  var crownElement = "<img src='assets/img/kanyecrown.png' width='20'>&nbsp; &nbsp; &nbsp; &nbsp;";
  var crownElement2 = "<img src='assets/img/empty_kanyecrown.png' width='20'>&nbsp; &nbsp; &nbsp; &nbsp;";
  var questionNumber = $('body').data('question');

  if(crownsOnLoad == 0) {
    $('.crowns').html(crownElement + crownElement + crownElement);
  } else if (crownsOnLoad == 1){
    $('.crowns').html(crownElement + crownElement + crownElement2);
  } else if (crownsOnLoad == 2) {
    $('.crowns').html(crownElement + crownElement2 + crownElement2);
  // } else if (crownsOnLoad == 3) {
  //   $('.crowns').html(crownElement2 + crownElement2 + crownElement2);
} else if (crownsOnLoad > 2) {
    window.location = 'gameover.html';
  } else {
    $('.crowns').html(crownElement + crownElement + crownElement);
    crownsOnLoad = 0;
  }


  //DIV BOX slideDown AFTER fadeIn
  //only for success and fail———others are written from inline script
  if ($('#success').length){

    $('#wrapper').fadeIn(1000, function() {
        $("#success").slideDown(300);
        $("#successAudio").get(0).play();
    });

    //volume increased + decreased
      successAudio.volume = 1.0;  //100%
      selection.volume = 0.1;
  }

  else if ($('#fail').length){

    $('#wrapper').fadeIn(1000, function() {
        $("#fail").slideDown(300);
        $("#failAudio").get(0).play();

    });
      failAudio.volume = 0.5;
      selection.volume = 0.1;
  }

  $('.answer').on('click', function(){

    var isCorrect = $(this).find('a').data('success');
    console.log(isCorrect);

    if (isCorrect == true && questionNumber == 1) {
      window.location = 'success-Q1.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == true && questionNumber == 2) {
      window.location = 'success-Q2.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == true && questionNumber == 3) {
      window.location = 'success-Q3.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == true && questionNumber == 4) {
      window.location = 'success-Q4.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == true && questionNumber == 5) {
      window.location = 'success-Q5.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == true && questionNumber == 6) {
      window.location = 'success-Q6.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == true && questionNumber == 7) {
      window.location = 'success-Q7.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == true && questionNumber == 8) {
      window.location = 'success-Q8.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == false && questionNumber == 1) {
      crownsOnLoad += 1
      window.location = 'fail-Q1.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == false && questionNumber == 2) {
      crownsOnLoad += 1
      window.location = 'fail-Q2.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == false && questionNumber == 3) {
      crownsOnLoad += 1
      window.location = 'fail-Q3.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == false && questionNumber == 4) {
      crownsOnLoad += 1
      window.location = 'fail-Q4.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == false && questionNumber == 5) {
      crownsOnLoad += 1
      window.location = 'fail-Q5.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == false && questionNumber == 6) {
      crownsOnLoad += 1
      window.location = 'fail-Q6.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == false && questionNumber == 7) {
      crownsOnLoad += 1
      window.location = 'fail-Q7.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == false && questionNumber == 8) {
      crownsOnLoad += 1
      window.location = 'fail-Q8.html?crowns=' + crownsOnLoad;
    }

  })

  $('#continue').on('click', function(){

    var isCorrect = $(this).find('a').data('success');

    if (isCorrect == true && questionNumber == 1) {
      window.location = 'q2.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == true && questionNumber == 2) {
      window.location = 'q3.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == true && questionNumber == 3) {
      window.location = 'q4.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == true && questionNumber == 4) {
      window.location = 'q5.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == true && questionNumber == 5) {
      window.location = 'q6.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == true && questionNumber == 6) {
      window.location = 'q7.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == true && questionNumber == 7) {
      window.location = 'q8.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == true && questionNumber == 8) {
      window.location = 'win.html';
    } else if (isCorrect == false && questionNumber == 1) {
      window.location = 'q2.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == false && questionNumber == 2) {
      window.location = 'q3.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == false && questionNumber == 3) {
      window.location = 'q4.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == false && questionNumber == 4) {
      window.location = 'q5.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == false && questionNumber == 5) {
      window.location = 'q6.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == false && questionNumber == 6) {
      window.location = 'q7.html?crowns=' + crownsOnLoad;
    } else if (isCorrect == false && questionNumber == 7) {
      window.location = 'q8.html?crowns=' + crownsOnLoad;
    }

  });





// //JQuery SlideUp + SlideDown
//   var isUpS = false;
//   var isUpF = false;
//   var isUp1 = false;
//   var isUp2 = false;
//
//   //success
//   $(".maze").click(function(){
//     if(isUpS == false) {
//         $("#success").slideUp();
//         isUpS = true;
//     } else {
//       $("#success").slideDown();
//       isUpS = false;
//     }
//     });
//
//   //fail
//     $(".maze").click(function(){
//       if(isUpF == false) {
//           $("#fail").slideUp();
//           isUpF = true;
//       } else {
//         $("#fail").slideDown();
//         isUpF = false;
//       }
//       });
//
//
//
//   //question one
//   $(".maze").click(function(){
//     if(isUp1 == false) {
//         $("#question_one").slideUp();
//         isUp1 = true;
//     } else {
//       $("#question_one").slideDown();
//       isUp1 = false;
//     }
//     });
//
//     //question two
//     $(".maze").click(function(){
//       if(isUp2 == false) {
//           $("#question_two").slideUp();
//           isUp2 = true;
//       } else {
//         $("#question_two").slideDown();
//         isUp2 = false;
//       }
//       });
//

//SELECTION AUDIO
  var audio = $("#selection")[0];
    $("#continue").mouseenter(function() {
      audio.play();
    });

    audio.volume = 0.1;

    $("#taylor_two_p").mouseenter(function() {
      audio.play();
    });
    $("#taylor_three_p").mouseenter(function() {
      audio.play();
    });

    $("#sway_two_p").mouseenter(function() {
      audio.play();
    });
    $("#sway_three_p").mouseenter(function() {
      audio.play();
    });

    $("#nike_two_p").mouseenter(function() {
      audio.play();
    });
    $("#nike_three_p").mouseenter(function() {
      audio.play();
    });

    $("#amber_two_p").mouseenter(function() {
      audio.play();
    });
    $("#amber_three_p").mouseenter(function() {
      audio.play();
    });

    $("#wiz_two_p").mouseenter(function() {
      audio.play();
    });
    $("#wiz_three_p").mouseenter(function() {
      audio.play();
    });

    $("#publicist_two_p").mouseenter(function() {
      audio.play();
    });
    $("#publicist_three_p").mouseenter(function() {
      audio.play();
    });

    $("#money_two_p").mouseenter(function() {
      audio.play();
    });
    $("#money_three_p").mouseenter(function() {
      audio.play();
    });

    $("#deadmau5_two_p").mouseenter(function() {
      audio.play();
    });
    $("#deadmau5_three_p").mouseenter(function() {
      audio.play();
    });


    $("#start_game").mouseenter(function() {
      audio.play();
    });

    $("#play-again").mouseenter(function() {
      audio.play();
    });


// SUCESS audio
// $("#successAudio").get(0).play();
  // should be played when question one slides down; after fade in






});


function getParameterByName(name) {
    url = window.location.href;
    url = url.toLowerCase();
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
