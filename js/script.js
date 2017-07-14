$(document).ready(function () {

    $(document).on("click",".ATC-select", function () {
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
    var $template = $("#defaultToggleATC").clone();
    $template.children(".ATC-toggle")
        .text(ATCname)
        .appendTo("#ATC-active-list")
        .addClass("col text-center");
    $("#ATCmodal").modal('hide');
}

function createATC() {
    switchModal("#ATCmodal","#ATCcreateModal");
    $("#newATC-btn").off('click').click(function () {
        var newATC = document.getElementById("newATC-text").value.trim().toUpperCase();
        document.getElementById("newATC-text").value = "";
        if( /^[a-zA-Z ]+$/.test(newATC)) {
            if (localStorage[newATC]) {
                alert("Name is already saved\nPlease enter a unique name");
            } else {
                localStorage.setItem(newATC,newATC);
                switchModal("#ATCcreateModal","#ATCmodal");
                    $("#defaultAddATC").clone()
                    .removeAttr("id")
                    .text(localStorage[newATC])
                    .appendTo("#ATC-list");
                alert("ADDED " + localStorage[newATC] + " TO LIST");
            }
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