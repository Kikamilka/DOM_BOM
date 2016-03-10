function fillTable() {
    var tableInfo = document.querySelector("table");
    for (var ind = 0; ind < localStorage.length; ind++) {
        var restoredInfo = JSON.parse(localStorage.getItem(ind.toString()));
        var row = tableInfo.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        cell1.innerHTML = (ind + 1).toString();
        cell2.innerHTML = restoredInfo.type;
        cell3.innerHTML = restoredInfo.number;
        cell4.innerHTML = restoredInfo.owner;
        cell5.innerHTML = restoredInfo.date;
        cell6.innerHTML = restoredInfo.premium;
        cell7.innerHTML = restoredInfo.reduction;
    }
}