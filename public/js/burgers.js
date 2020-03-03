// click handler
$(document).ready(function () {
    $(document).on("click","button.add",addBurger); // add button handler
    $(document).on("click","button.devour",devourBurger); // devour button handler
    
    devourBurger = () => {
        let id = $(this).data("id");
        let newState = $(this).data("devour")

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(() => {location.reload();})
    }

    addBurger = () => {
        let id = $(this).data("id");
        
        $.ajax({
            type: "POST",
            data: 
        }).then(()=>{location.reload();})
    }

})