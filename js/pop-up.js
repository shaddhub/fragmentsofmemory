function popupOpenClose(popup) {

    /* Add div inside popup for layout if one doesn't exist */
    if ($(".wrapper").length == 0) {
        $(popup).wrapInner("<div class='wrapper'></div>");
    }

    /* Open popup */
    $(popup).show();

    /* Close popup if user clicks on background */
    $(popup).click(function (e) {
        if (e.target == this) {
            if ($(popup).is(':visible')) {
                $(popup).hide();
                removeStyling($(popup));

            }
        }
    });

    /* Close popup and remove errors if user clicks on cancel or close buttons */
    $(popup).find("button[name=close]").on("click", function () {
        if ($(".formElementError").is(':visible')) {
            $(".formElementError").remove();
        }
        $(popup).hide();
        removeStyling($(popup));
    });
}

function removeStyling(popup) {
    $(popup).remove(".popup1")
    $(popup).remove(".popup2")
    $(popup).remove(".popup3")
    $(popup).remove(".popup1 > div")
    $(popup).remove(".popup2 > div")
    $(popup).remove(".popup3 > div")
}

function addStyling(popup) {
    $(popup).add("popup1")
    $(popup).add(".popup2")
    $(popup).add(".popup3")
    $(popup).add(".popup1 > div")
    $(popup).add(".popup2 > div")
    $(popup).add(".popup3 > div")
}


$(document).ready(function () {
    $("[data-js=open1]").on("click", function () {
        popupOpenClose($(".popup1"));
    });
    $("[data-js=open2]").on("click", function () {
        popupOpenClose($(".popup2"));
    });
    $("[data-js=open3]").on("click", function () {
        popupOpenClose($(".popup3"));
    });
});