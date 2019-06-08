$(document).ready(function() {
  $("form#privilege").submit(function(event) {
    alert("1");
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

      if (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10 === 9) {
       alert("you did it");
     };
     // } else if (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10 >= 7 && < 10) {
     //      alert("you did it again");
     //    } else if (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10 >= 4){
     //      $("#quote3").show;
     //    } else if (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10 >= 2){
     //      $("#quote4").show;
     //    } else if (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10 === 1){
     //      $("#quote5").show;
     //    };
    event.preventDefault();
     alert("end");
  });
});
