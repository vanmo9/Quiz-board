var total= function( Q1,Q2,Q3,Q4,Q5){
return(Q1+Q2+Q3+Q4+Q5)
}
$(document).ready(function() {
  $("button#totals").click(function() {


    var Q1 = parseInt($("input:radio[name=Q1]:checked").val());
    var Q2 = parseInt($("input:radio[name=Q2]:checked").val());
    var Q3 = parseInt($("input:radio[name=Q3]:checked").val());
    var Q4 = parseInt($("input:radio[name=Q4]:checked").val());
    var Q5 = parseInt($("input:radio[name=Q5]:checked").val());
    var result = total(Q1,Q2,Q3,Q4,Q5);

    alert(result);

    // $("#result").text(score + );
    // $("#display").text(percentage + " % ");
    // if (result >= 90) {
    //   alert("Excellent your score is +result")
    // } else if (percentage >= 50) {
    //   alert("Average your total score is +result")
    // } else {
    //   alert("Poor your total score is +result")
    // };
  });
});
