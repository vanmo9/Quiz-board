var total= function( Q1,Q2,Q3,Q4,Q5){
return(Q1+Q2+Q3+Q4+Q5)
}
$(document).ready(function() {
  $("button#totals").click(function(event) {

    event.preventDefault();
    var Q1 = parseInt($("input:radio[name=Q1]:checked").val());
    var Q2 = parseInt($("input:radio[name=Q2]:checked").val());
    var Q3 = parseInt($("input:radio[name=Q3]:checked").val());
    var Q4 = parseInt($("input:radio[name=Q4]:checked").val());
    var Q5 = parseInt($("input:radio[name=Q5]:checked").val());
    var result = total(Q1,Q2,Q3,Q4,Q5);

    document.getElementById('results').innerHTML= "you have scored " + result;


    var percentage = (result / 50) * 100

    if (percentage <= 100 && percentage >= 90) {
      alert("Excellent");
    } else if (percentage <= 89 && percentage >= 50) {
      alert("Average");
    } else {
      alert("Poor");
    };
  });
});
