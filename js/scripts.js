// Business Logic
function Ticket(movie, time, age){
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = this.calculate();
  this.isMatinee = this.matinee();
  this.isChildSenior =
}

Ticket.prototype.calculate = function() {
  var total = 12;
  if(this.isSecondRun === true){
    total -= 4;
  }
  if(this.isMatinee === true){
    total -= 2;
  }
  if(this.isChildSenior === true){
    total -= 2;
  }
  return total;
}

Ticket.prototype.matinee = function() {
  if (this.time  === "AM") {
    return true;
  }
  else {
    return false;
  }
}

Ticket.prototype.matinee = function() {
  if (this.time  === "AM") {
    return true;
  }
  else {
    return false;
  }
}

// User Interface Logic
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var movie = $("input:radio[name=movie]:checked").val();
    var time = $("input:radio[name=time]:checked").val();
    var age = $("input:radio[name=age]:checked").val();
    var newTicket = new Ticket(movie, time, age);
    var ticketPrice = newTicket.calculate();
    console.log(newTicket);

    $("#print-ticket").show();
    $("#print-ticket").append("<div class='ticket'><h4>" + movie + "</h4><br><p>Show Time:" + time + "<br>Type:" + age + "<br>Total: $" + newTicket.price + "</p></div>");

  });
});
