function registerPolicy() {
    var policyInfo = document.getElementById("number_policy");
    var type = document.getElementById("type_insurance").value;
    var number = policyInfo.value;
    var owner = document.getElementById("name").value;
    var date = document.getElementById("date_sale").value;
    var premium = document.getElementById("premium").value;
    var reduction = document.getElementById("reduction").value;
    var pattern = policyInfo.getAttribute("pattern");
    pattern = new RegExp(pattern);
    if (pattern.test(number)) {
        console.log(pattern);
        console.log(definePattern(type));
        var policy = new InsurancePolicy(type, number, owner, date, premium, reduction);
        localStorage.setItem(localStorage.length.toString(), JSON.stringify(policy));
    }
}

function deleteAllInformation() {
    localStorage.clear();
    var tableInfo = document.querySelector("table");
    for (var ind = 0; ind < tableInfo.rows.length; ind++) {
        tableInfo.deleteRow(ind);
    }
}

function deleteItem() {
    var row = prompt("Please enter number of row for delete", "");
    var countStorage = localStorage.length;
    if (row != null && row <= countStorage && row > 0) {
        if (row == countStorage) {
            localStorage.removeItem((countStorage - 1).toString());
        }
        else {
            localStorage.removeItem((row - 1).toString());
            for (var ind = row; ind < countStorage; ind++) {
                var curItem = localStorage.getItem(ind.toString());
                localStorage.setItem((ind - 1).toString(), curItem);
            }
            localStorage.removeItem((countStorage - 1).toString());
        }
        location.reload();
    }
    else {
        alert("Number of row is wrong!");
    }
}
