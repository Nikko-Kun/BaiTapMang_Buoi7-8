


var inputArray = [];

var inputArrayPositive = [];









function inputShowNum() {

    var soDuongNhapVao = +document.getElementById('inputNum').value;

    inputArray.push(soDuongNhapVao);

    document.getElementById('addNum').innerHTML = inputArray;

    if (soDuongNhapVao >= 0) {

        inputArrayPositive.push(soDuongNhapVao);

    }

    return inputArray, inputArrayPositive;


}








function sumInputArray() {

    var sum = 0;


    for (var i = 0; i < inputArrayPositive.length; i++) {

        sum += inputArrayPositive[i];

    }

    document.getElementById('resultSum').innerHTML = sum;

    return sum;

}







function countArrayNum() {

    var countNum = 0;

    countNum = inputArrayPositive.length;

    document.getElementById('resultCount').innerHTML = countNum;


}

function findMin() {

    var min = inputArray[0];

    var indexMin = 0;

    for (var i = 1; i < inputArray.length; i++) {

        if (min > inputArray[i]) {

            min = inputArray[i];

            indexMin = i;
        }
    }

    document.getElementById('resultMin').innerHTML = min;

}

function findMinPositive() {

    var min = inputArrayPositive[0];

    var indexMin = 0;

    for (var i = 1; i < inputArrayPositive.length; i++) {

        if (min > inputArrayPositive[i]) {

            min = inputArrayPositive[i];

            indexMin = i;
        }
    }

    document.getElementById('resultMinPositive').innerHTML = min;

}


function findLastEvenNum() {

    var lastEvenNum = inputArray[0];

    var indexEven = 0;

    for (var i = 1; i < inputArray.length; i++) {

        if (inputArray[i] % 2 == 0) {

            lastEvenNum = inputArray[i];

            indexEven = i;
        }
    }

    document.getElementById('resultEvenNum').innerHTML = lastEvenNum;

}


function changePos() {

    var inputPos1 = +document.getElementById('posNum1').value;
    var inputPos2 = +document.getElementById('posNum2').value;

    pos1 = inputArray[inputPos1];
    pos2 = inputArray[inputPos2];

    if (inputPos1 !== inputPos2) {

        inputArray[inputPos1] = pos2;
        inputArray[inputPos2] = pos1;

        document.getElementById('resultChange').innerHTML = inputArray;

    }

    else {
        alert('Hãy nhập lại 2 vị trí khác nhau cần thay đổi!')
    }

}


function numIncrease() {

    var newArray = inputArray;

    newArray.sort(function (a, b) { return a - b });

    document.getElementById('resultIncrease').innerHTML = newArray;

}







function findFirstPrime() {

    numPrime = 0;

    for (var i = 0; i < inputArray.length; i++) {

        if (inputArray[i] == 2) {

            numPrime = inputArray[i];

            document.getElementById('resultFirstPrime').innerHTML = numPrime;

            break;

        }


        else if (inputArray[i] > 2 && inputArray[i] % 2 !== 0) {

            numPrime = inputArray[i];

            document.getElementById('resultFirstPrime').innerHTML = numPrime;

            break;

        }

    }

}







var inputArray2 = [];

function inputShowNum2() {

    var soNhapVao2 = +document.getElementById('inputNum2').value;

    inputArray2.push(soNhapVao2);

    document.getElementById('addNum2').innerHTML = inputArray2;

    return inputArray2;

}












function countIntegerNum() {

    indexInteger = 0;


    for (var i = 0; i < inputArray2.length; i++) {

        if (Number.isInteger(inputArray2[i])) {

            indexInteger++;

        }
    }
    document.getElementById('resultInteger').innerHTML = indexInteger;

}









function compareInteger() {

    soAm = 0;
    soDuong = 0;

    for (var i = 0; i < inputArray.length; i++) {


        if (inputArray[i] >= 0) {

            soDuong++;

        }

        else {
            soAm++;
        }

    }

    if (soAm == soDuong) {
        document.getElementById('resultCompare').innerHTML = 'Số âm = Số dương';
    }
    else if (soAm > soDuong) {
        document.getElementById('resultCompare').innerHTML = 'Số âm > Số dương';
    }
    else {
        document.getElementById('resultCompare').innerHTML = 'Số âm < Số dương';
    }
}








document.getElementById('btnCalc1').onclick = inputShowNum;
document.getElementById('btnCalcSum').onclick = sumInputArray;
document.getElementById('btnCalcCount').onclick = countArrayNum;
document.getElementById('btnCalcMin').onclick = findMin;
document.getElementById('btnCalcMinPositive').onclick = findMinPositive;
document.getElementById('btnCalcEvenNum').onclick = findLastEvenNum;
document.getElementById('btnCalcChange').onclick = changePos;
document.getElementById('btnCalcIncrease').onclick = numIncrease;
document.getElementById('btnCalcFirstPrime').onclick = findFirstPrime;
document.getElementById('btnCalc2').onclick = inputShowNum2;
document.getElementById('btnCalcInteger').onclick = countIntegerNum;
document.getElementById('btnCalcCompare').onclick = compareInteger;










