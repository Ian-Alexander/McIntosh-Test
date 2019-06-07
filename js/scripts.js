
$(document).ready(function() {
  $("form#privilege").submit(function(event) {
    alert('got to begining of doc!');
    var question1 = parseInt($("input[type=radio][name=question1]:checked").val());
    var question2 = parseInt($("input[type=radio][name=question2]:checked").val());
    var question3 = parseInt($("input[type=radio][name=question3]:checked").val());

    if ("question1 + question2 + question3 === 3"){
      $("#quote").show();
    };
      event.preventDefault();
    alert("end of doc")
  });
});
