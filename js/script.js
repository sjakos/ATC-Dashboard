$(document).ready(function () {
    $(".ATC-header").click(function() {
        activateATC();
    });
})
var ATCname = "bob";

function activateATC() {
    var $template = $("#defaultATC").clone();
    $template.attr("id", ATCname)
    .children(".ATC-toggle").text(ATCname)
    .appendTo("#ATC-active-list")
    .addClass("col text-center");
}