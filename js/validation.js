function validation() {
    var valueSelector = document.querySelector("select").value;
    var changedInput = document.getElementById("number_policy");
    var pattern = definePattern(valueSelector);
    changedInput.setAttribute("pattern", pattern);
}

function definePattern(type) {
    switch (type){
        case "КАСКО":
            return "^[0][0-4][0-9][aA][tT][-][0-2][0-9][/][0-9]{5}$";
        case "ОСАГО":
            return "^[aAbBcCeExX][aAbBcCeExX][aAbBcCeExX][0-9]{10}$";
        case "ДАГО":
            return "^[0][0-4][0-9][gG][oO][-][0-2][0-9][/][0-9]{5}$";
        default:
            return "";
    }
}