// click handler
$(document).ready(function () {
    $(document).on("click","button.add",addBurger); // add button handler
    $(document).on("click","button.devour",devourBurger); // devour button handler
    
    function devourBurger (event) {
        let id = $(this).data("id");
        let newState = $(this).data("devoured")

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(() => {
            // location.reload();
        })
    }

    function addBurger (event)  {
        let id = $(this).data("id");
        let input = $(".inputBurger")
        console.log(input.val())
        
        let newBurger = {
            burger_name: $(".inputBurger").val().trim(),
            devoured: $("[burger_name=devoured]:checked").val()
        }
        console.log(newBurger)
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(()=>{
            // location.reload();
        })
    }

})