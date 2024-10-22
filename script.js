const mInput = document.querySelector("#mInput");
const nInput = document.querySelector("#nInput")
const detectButton = document.querySelector("#detectButton")
const output = document.querySelector("#output");
function getOrder(element, group) {
    element = element % group;
    if(element == 0)
        return 1;
    let sum = element;
    let order = 1;
    while(sum != 0) {
        sum = (sum + element) % group;
        order++;
    }
    return order;
}
function getCommonDivisors(left, right) {
    let commonDivisorArray = [];
    let i;
    for(i = 1; i <= Math.floor(Math.min(left, right) / 2); i++)
        if(left % i == 0 && right % i == 0)
            commonDivisorArray.push(i);
    return commonDivisorArray;
}
function detect() {
    let m = mInput.value;
    let n = nInput.value;
    outputString = "";
    let commonDivisorArray = getCommonDivisors(m, n);
    let i, j, order;
    let flag;
    for(i = 0; i < n; i++) {
        order = getOrder(i, n);
        flag = false;
        for(j = 0; j < commonDivisorArray.length; j++)
            if(commonDivisorArray[j] == order)
                flag = true;
        if(flag)
            outputString += "1 can be mapped on to " + i + ".\n"
    }
    output.innerText = outputString;
}
detectButton.onclick = detect;