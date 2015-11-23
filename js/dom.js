$(document).ready(function() {

// Event listener for submitting new task via the 'Enter' key

    $('#newTask').keydown(function(event) {
        if (event.keyCode == 13) {
            $('.btn-success').trigger('click');
        }
    });

// Event listener for submitting new task via 'Submit' button click

    $(".btn-success").on("click", function(e) {
        e.preventDefault();

        var taskInput = $("#newTask").val();

// Exit loop if blank entry is submitted

        if (taskInput === "") {
            return;
        }

// Appending new list items to columns

        var addListItem = '<li id="listItemAdd"><button class="btn btn-primary checked"><span class="glyphicon glyphicon-ok">' + '<button class="btn btn-danger remove"><span class="glyphicon glyphicon-remove"></span></button><p>' + taskInput + '</p></li>'
        $(".list-unstyled").append(addListItem);
        $(".btn-primary").on("click", function(e) {
            $(this).parent().addClass("strikethrough");
            // $(this).children().addClass("clicked");

        });

// Removing task from column

        $(".btn-danger").on("click", function(e) {
            $(this).parent().remove();
        });

    });

});


