$(document).ready(function () {

    var array_button = ["#collapse-one", "#collapse-two", "#collapse-three", "#collapse-four", "#collapse-five", "#collapse-six"];
    var array_text = ["#collapse-one-text", "#collapse-two-text", "#collapse-three-text", "#collapse-four-text", 
    "#collapse-five-text", "#collapse-six-text"];

    $(array_button[0]).click(function () {
        // console.log("Ok");
        $(array_text[0]).slideToggle("slow");
        for (var i = 1; i < array_text.length; i++)
            $(array_text[i]).slideUp("slow");
    });

    $(array_button[1]).click(function () {
        // console.log("Ok");
        $(array_text[1]).slideToggle("slow");
        for (var i = 0; i < array_text.length; i++) {
            if (i != 1) {
                $(array_text[i]).slideUp("slow");
            }
        }
    });

    $(array_button[2]).click(function () {
        // console.log("Ok");
        $(array_text[2]).slideToggle("slow");
        for (var i = 0; i < array_text.length; i++) {
            if (i != 2) {
                $(array_text[i]).slideUp("slow");
            }
        }
    });

    $(array_button[3]).click(function () {
        // console.log("Ok");
        $(array_text[3]).slideToggle("slow");
        for (var i = 0; i < array_text.length; i++) {
            if (i != 3) {
                $(array_text[i]).slideUp("slow");
            }
        }
    });

    $(array_button[4]).click(function () {
        // console.log("Ok");
        $(array_text[4]).slideToggle("slow");
        for (var i = 0; i < array_text.length; i++) {
            if (i != 4) {
                $(array_text[i]).slideUp("slow");
            }
        }
    });

    $(array_button[5]).click(function () {
        // console.log("Ok");
        $(array_text[5]).slideToggle("slow");
        for (var i = 0; i < array_text.length; i++) {
            if (i != 5) {
                $(array_text[i]).slideUp("slow");
            }
        }
    });

    $("#calculate").click(function () {

        var masa = parseFloat($("#masa").val());
        var visina = parseFloat($("#visina").val());
        // console.log(masa);
        // console.log(visina);
        var BMI;
        BMI = masa / (visina * visina) * 10000;
        BMI = BMI.toFixed(2);
        // console.log(BMI);
        $("#bmi").val(BMI);
    });
});