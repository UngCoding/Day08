function plus() {
    const n1 = parseInt(document.getElementById("n1").value);
    const n2 = parseInt(document.getElementById("n2").value);
    const result_output = document.getElementById("result");
    const btn_plus = document.getElementById("plus");
    const btn_minus = document.getElementById("minus");
    const btn_multiply = document.getElementById("multiply");
    const btn_divide = document.getElementById("divide");
    const result = n1 + n2;
    btn_plus.style.backgroundColor="red";
    btn_minus.style.backgroundColor="cornflowerblue";
    btn_multiply.style.backgroundColor="cornflowerblue";
    btn_divide.style.backgroundColor="cornflowerblue";
    result_output.innerText = "결과 : " + result;
}

function minus() {
    const n1 = parseInt(document.getElementById("n1").value);
    const n2 = parseInt(document.getElementById("n2").value);
    const result_output = document.getElementById("result");
    const btn_plus = document.getElementById("plus");
    const btn_minus = document.getElementById("minus");
    const btn_multiply = document.getElementById("multiply");
    const btn_divide = document.getElementById("divide");
    const result = n1 - n2;
    btn_plus.style.backgroundColor="cornflowerblue";
    btn_minus.style.backgroundColor="red";
    btn_multiply.style.backgroundColor="cornflowerblue";
    btn_divide.style.backgroundColor="cornflowerblue";
    result_output.innerText = "결과 : " + result;
}

function multiply() {
    const n1 = parseInt(document.getElementById("n1").value);
    const n2 = parseInt(document.getElementById("n2").value);
    const result_output = document.getElementById("result");
    const btn_plus = document.getElementById("plus");
    const btn_minus = document.getElementById("minus");
    const btn_multiply = document.getElementById("multiply");
    const btn_divide = document.getElementById("divide");
    const result = n1 * n2;
    btn_plus.style.backgroundColor="cornflowerblue";
    btn_minus.style.backgroundColor="cornflowerblue";
    btn_multiply.style.backgroundColor="red";
    btn_divide.style.backgroundColor="cornflowerblue";
    result_output.innerText = "결과 : " + result;
}

function divide() {
    const n1 = parseInt(document.getElementById("n1").value);
    const n2 = parseInt(document.getElementById("n2").value);
    const result_output = document.getElementById("result");
    const btn_plus = document.getElementById("plus");
    const btn_minus = document.getElementById("minus");
    const btn_multiply = document.getElementById("multiply");
    const btn_divide = document.getElementById("divide");

    if( n2 == 0){
        alert("0으로 나눌 수 없습니다.")
    } else {
        const result = n1 / n2;
        btn_plus.style.backgroundColor="cornflowerblue";
        btn_minus.style.backgroundColor="cornflowerblue";
        btn_multiply.style.backgroundColor="cornflowerblue";
        btn_divide.style.backgroundColor="red";
        result_output.innerText = "결과 : " + result;
    }
}