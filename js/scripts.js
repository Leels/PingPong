// back-end javascript
function pingPong(number) {
        var input = [];
        for (var index = 1; index <= number; index++) {
            if (index % 15 === 0) {
                input.push("pingpong")
            } else if (index % 5 === 0) {
                input.push("pong")
            } else if (index % 3 === 0) {
                input.push("ping")
            } else {
                input.push(index);
            }

        };
        return input;
    };

// front-end javascript
$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());
    var result = pingPong(number);

    $(".number").text(result);
    $("#result").show();
     });
   });
