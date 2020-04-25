$(document).ready(function() {
    $.ajax({
        url: "http://127.0.0.1:5500/js/index.json",
        type: "get",
        dataType: "json",
        success: function(res) {
            console.log(res);
            $.each(res, function(index, value) {
                $(".mega-menu1").append("<a href='#'><div>" + value.asd + "</div></a>")
            })
        }
    })
})