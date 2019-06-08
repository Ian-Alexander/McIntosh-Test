$(document).ready(function() {
  $("form#privilege").submit(function(event) {
    var question1 = parseInt($("#question1").val());
    var question2 = parseInt($("#question2").val());
    var question3 = parseInt($("#question3").val());
    var question4 = parseInt($("#question4").val());
    var question5 = parseInt($("#question5").val());
    var question6 = parseInt($("#question6").val());
    var question7 = parseInt($("#question7").val());
    var question8 = parseInt($("#question8").val());
    var question9 = parseInt($("#question9").val());
    var question10 = parseInt($("#question10").val());

      if (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10 === 10) {
       alert("You ranked a 10/10");
     } else if (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10 === 9) {
      alert("You ");
    } else if (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10 === 8 {
     alert("You ");
   } else if (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10 ===7) {
    alert("You ");
  } else if (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10 ===6) {
   alert("You ");
 } else if (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10 ===5) {
     alert("4/10");
   } else if (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10 ===4) {
     alert("1/10");
   } else if (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10 ===3) {
    alert("You ");
  } else if (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10 ===2) {
   alert("You ");
 } else if (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10 ===1) {
  alert("You ");
    event.preventDefault();
  });
});
