document.addEventListener("DOMContentLoaded", function(event) {
    alert("Hello JavaScript");


    let targetImage = document.querySelector("#smart-image");
    targetImage.addEventListener("click", function() {
        alert( targetImage.classList.remove("small"));
    

    });


});
