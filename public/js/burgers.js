// click handler
$(document).ready(function () {
    $(document).on("click","button.add",addBurger); // add button handler
    $(document).on("click","button.devour",devourBurger); // devour button handler
    
    function devourBurger (event) {
        console.log(this)
        let id = $(this).data("id");
        let newState = $(this).data("devoured")
        console.log(newState,"newstate")

        $.ajax("/api/burgers/" + id, {
            method: "PUT",
            data: {devour: newState}
        }).then(() => {
            location.reload();
        })
    }

    function addBurger (event)  {
        let id = $(this).data("id");
        let input = $(".inputBurger")
        
        
        let newBurger = {
            burger_name: input.val().trim(),
        }
        // console.log(newBurger)
        $.ajax("/api/burgers", {
            method: "POST",
            data: newBurger
        }).then(()=>{
            location.reload();
        })
    }

})