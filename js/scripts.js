var name = prompt("Please enter your name:")

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
        alert(name +", you scored a 10/10. You are in a unique positon to use your social privilges to help those around you in an extremely meaningful way! Having white privilege does not mean that you are racist or bad, it means that you have a duty. Use all of the tools in your toolbox to help those with less.");
      } else if (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10 >7) {
        alert(name + ", you scored in the top teir of the social strata. People in this category hold an immense amount of power to help uplift those with less privileges around them. Consider those who check off more boxes than you did, and also know its okay to demand more from those who checked even less boxes than you.");
      } else if (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10 >4) {
        alert(name + ", you placed around the middle. You may feel like you are stuck between having a challenging existance, and having a privileged one, which can be tricky to navigate. It's important to remember that in every oppression, there is room for resistance, and in every resistance, there is room for oppression to live as well. Nothing is either/or, but instead, both/and. Use what tools you have to help uplift others, but do not feel bad when you need to call on others to help you too.");
      } else if (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10 >=0) {
      alert(name +", your results show that you experience an immense amount of negative ramifications of the capitalist-imperialist-white supremecist-patriarchy. With that experience comes a deeper understanding of power and privilege than I or Peggy McIntosh could ever understand. Remeber that you do not owe anybody anything, and you are valid in all of your responses to the oppression you face.");
    }
    event.preventDefault();
  });
});
