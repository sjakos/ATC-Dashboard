$(document).ready(function () {

    $(".ATC-select").click(function () {
        activateATC($(this).text());
    });

    $(document).on("click", ".ATC-toggle", function() {
        $(this).remove();
    });

    $("#deleteATC").click(function () {
        deleteATC();
    });

    $("#createATC").click(function () {
        createATC();
    });
})

function activateATC(ATCname) {
    var $template = $("#defaultATC").clone();
    $template.children(".ATC-toggle")
        .text(ATCname)
        .appendTo("#ATC-active-list")
        .addClass("col text-center");
    $("#ATCmodal").modal('hide');
}

function createATC() {
    switchModal("#ATCmodal","#ATCcreateModal");
    $("#newATC-btn").click(function () {
        var newATC = document.getElementById("newATC-text").value;
        document.getElementById("newATC-text").value = "";
        if( /^[a-zA-Z ]+$/.test(newATC)) {
            switchModal("#ATCcreateModal","#ATCmodal");
            alert(newATC); 
        } else {
            alert("Please input a name\n(Names may only contain letters)");
        }
    });
}

function deleteATC() {
    switchModal("#ATCmodal","#ATCdeleteModal");
}

function switchModal(hideModalID,showModalID) {
        $(hideModalID).modal('hide');
        $(showModalID).modal('show');
}