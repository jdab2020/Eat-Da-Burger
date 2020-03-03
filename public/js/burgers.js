// click handler
$(document).ready(function () {
    $(document).on("click","button.add",addBurger); // add button handler
    $(document).on("click","button.devour",devourBurger); // devour button handler
    
    devourBurger = () => {
        let id = $(this).data("id");
        let newState = $(this).data("devoured")

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(() => {location.reload();})
    }

    addBurger = () => {
        let id = $(this).data("id");
        let newBurger = {
            burger_name: $("input").val().trim(),
            devoured: $("[burger_name=devoured]:checked").val().trim()
        }
        $.ajax({
            type: "POST",
            data: newBurger
        }).then(()=>{location.reload();})
    }

})