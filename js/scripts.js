$(document).ready(function() {
  $("#blanks").submit(function(event) {
    event.preventDefault();
    var Q1 = parseInt($("input:radio[name=Q1]:checked").val());
    var Q2 = parseInt($("input:radio[name=Q2]:checked").val());
    var Q3 = parseInt($("input:radio[name=Q3]:checked").val());
    var Q4 = parseInt($("input:radio[name=Q4]:checked").val());
    var Q5 = parseInt($("input:radio[name=Q5]:checked").val());
    var result = (Q1 + Q2 + Q3 + Q4 + Q5);
    var percentage = (((score) / 20) * 100);

    $("#result").text(score + " marks");
    $("#display").text(percentage + " % ");
    if (percentage >= 90) {
      alert("Excellent")
    } else if (percentage >= 50) {
      alert("Fair")
    } else {
      alert("poor")
    };
  });
});
