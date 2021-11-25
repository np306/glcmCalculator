// Get all elements with class="tabcontent" and hide them
function angle45(angle, distance, element, randomColor) {
    var colm = (event.target.cellIndex).toString();
    var rowVal = (event.target.parentNode.rowIndex).toString();
    var randomMatTable = document.getElementById("randomMatTable");
    var rowArr = randomMatTable.rows;
    for (var itr = 1; itr < rowArr.length; itr++) {
        var cellArr = rowArr[itr].cells
        for (var j = distance; j < cellArr.length; j++) {
            var rowCell = cellArr[j];
            if (rowCell.innerHTML === rowVal && itr > distance) {
                console.log(itr, j);
                var newCell = rowArr[itr - distance].cells[j + distance];
                if (newCell.innerHTML === colm && (j + distance) < cellArr.length) {
                    newCell.style.backgroundColor = randomColor;
                    rowCell.style.backgroundColor = randomColor;
                    if (distance == 1) {
                        break;
                    }
                    var dist = distance;
                    while (dist >= 1) {
                        itrCell = rowArr[itr + dist].cells[j + dist];
                        itrCell.style.backgroundColor = randomColor;
                        console.log(newCell, itr, j, colm)
                        dist--;
                    }
                }


            }
        }
    }

}

function angleZero(angle, distance, element, randomColor) {
    var colm = (event.target.cellIndex).toString();
    var rowVal = (event.target.parentNode.rowIndex).toString();
    var randomMatTable = document.getElementById("randomMatTable");
    var rowArr = randomMatTable.rows;
    for (var itr = 1; itr < rowArr.length; itr++) {
        var cellArr = rowArr[itr].cells
        for (var j = 1; j < cellArr.length; j++) {
            var rowCell = cellArr[j];
            if (rowCell.innerHTML === rowVal && (j+distance) < cellArr.length) {
                console.log(itr, j);
                var newCell = cellArr[j+distance];
                if (newCell.innerHTML === colm ) {
                    newCell.style.backgroundColor = randomColor;
                    rowCell.style.backgroundColor = randomColor;
                    var dist = distance;
                    if (distance == 1) {
                        break;
                    }
                    while (dist >=1) {
                        itrCell = rowArr[itr].cells[j + dist];
                        itrCell.style.backgroundColor = randomColor;
                        dist--;
                    }
                }


            }
        }
    }

}

function angle135(angle, distance, element, randomColor) {
    var colm = (event.target.cellIndex).toString();
    var rowVal = (event.target.parentNode.rowIndex).toString();
    var randomMatTable = document.getElementById("randomMatTable");
    var rowArr = randomMatTable.rows;
    for (var itr = 1; itr < rowArr.length; itr++) {
        var cellArr = rowArr[itr].cells
        for (var j = distance; j < cellArr.length; j++) {
            var rowCell = cellArr[j];
            if (rowCell.innerHTML === rowVal && itr > distance) {
                console.log(itr, j);
                var newCell = rowArr[itr - distance].cells[j - distance];
                if (newCell.innerHTML === colm && (j - distance) > 0) {
                    newCell.style.backgroundColor = randomColor;
                    rowCell.style.backgroundColor = randomColor;
                    if (distance == 1) {
                        break;
                    }
                    var dist = distance;
                    while (dist >= 1) {
                        itrCell = rowArr[itr -dist].cells[j - dist];
                        itrCell.style.backgroundColor = randomColor;
                        console.log(newCell, itr, j, colm)
                        dist--;
                    }
                }


            }
        }
    }

}

function angle90(angle, distance, element, randomColor) {
    var colm = (event.target.cellIndex).toString();
    var rowVal = (event.target.parentNode.rowIndex).toString();
    var table2 = document.getElementById("randomMatTable");
    var cells2 = table2.getElementsByTagName('td');
    var rowArr = document.getElementById("randomMatTable").rows;
    for (var itr = 1; itr < rowArr.length; itr++) {
        var cellArr = rowArr[itr].cells
        for (var j = 1; j < cellArr.length; j++) {
            var rowCell = cellArr[j];
            if (rowCell.innerHTML === rowVal && itr>distance) {
                console.log(colm, rowVal);
                var newCell = rowArr[itr - distance].cells[j];
                if ((itr - distance) > 0 && newCell.innerHTML === colm) {
                    newCell.style.backgroundColor = randomColor;
                    rowCell.style.backgroundColor = randomColor;
                    if (distance == 1) {
                        break;
                    }
                    var dist = 1;
                    while (dist <= distance) {
                        itrCell = rowArr[itr - dist].cells[j];
                        itrCell.style.backgroundColor = randomColor;
                        console.log(newCell, itr, j, colm)
                        dist++;
                    }
                }


            }
        }
    }

}
