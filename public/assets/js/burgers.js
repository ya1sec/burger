// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newdevoured = $(this).data("newdevoured");

    var newdevouredState = {
      devoured: newdevoured,
    };

    // Send the PUT request.
    $.ajax("/api/cats/" + id, {
      type: "PUT",
      data: newdevouredState,
    }).then(function () {
      console.log("changed devoured to", newdevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCat = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: newCat,
    }).then(function () {
      console.log("created new cat");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
