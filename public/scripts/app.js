$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
      $("<div>").text(user.price).appendTo($("body"));
    }
  });
  // .done( (bill) => {
  //   $("<div>").text(bill).appendTo($("body"));
  // })
});
