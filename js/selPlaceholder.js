$(document).ready(function() {
    
    $("select").each(function() {
        if ($(this).val() === null) {
            $(this).css("color", "#757575");
        }
    });
    $("select option").not($("select option").first()).css("color", "#000");
    $("select option").first().hide();

    $("select").on("change", function() {
        $(this).css("color", "#000");
    });

});
