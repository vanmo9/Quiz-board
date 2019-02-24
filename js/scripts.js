$(document).ready(function() {
      $("#blanks").submit(function(event) {
            event.preventDefault();
            var Q1 = parseInt($("input:radio[Q1]:checked").val());
            var Q2 = parseInt($("input:radio[Q2]:checked").val());
            var Q3 = parseInt($("input:radio[Q3]:checked").val());
            var Q4 = parseInt($("input:radio[Q4]:checked").val());
            var Q5 = parseInt($("input:radio[Q5]:checked").val());
            var result = (Q1 + Q2 + Q3 + Q4 + Q5);
            var perc = (((result) / 20) * 100);
