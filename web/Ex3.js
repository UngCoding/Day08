// function plus() {
//     const n1 = parseFloat(document.getElementById("n1").value);
//     const n2 = parseFloat(document.getElementById("n2").value);
//     const result_output = document.getElementById("result");
//     const btn_plus = document.getElementById("plus");
//     const btn_minus = document.getElementById("minus");
//     const btn_multiply = document.getElementById("multiply");
//     const btn_divide = document.getElementById("divide");
//     const result = n1 + n2;
//     btn_plus.style.backgroundColor="red";
//     btn_minus.style.backgroundColor="cornflowerblue";
//     btn_multiply.style.backgroundColor="cornflowerblue";
//     btn_divide.style.backgroundColor="cornflowerblue";
//     result_output.innerText = "결과 : " + result;
// }
//
// function minus() {
//     const n1 = parseFloat(document.getElementById("n1").value);
//     const n2 = parseFloat(document.getElementById("n2").value);
//     const result_output = document.getElementById("result");
//     const btn_plus = document.getElementById("plus");
//     const btn_minus = document.getElementById("minus");
//     const btn_multiply = document.getElementById("multiply");
//     const btn_divide = document.getElementById("divide");
//     const result = n1 - n2;
//     btn_plus.style.backgroundColor="cornflowerblue";
//     btn_minus.style.backgroundColor="red";
//     btn_multiply.style.backgroundColor="cornflowerblue";
//     btn_divide.style.backgroundColor="cornflowerblue";
//     result_output.innerText = "결과 : " + result;
// }
//
// function multiply() {
//     const n1 = parseFloat(document.getElementById("n1").value);
//     const n2 = parseFloat(document.getElementById("n2").value);
//     const result_output = document.getElementById("result");
//     const btn_plus = document.getElementById("plus");
//     const btn_minus = document.getElementById("minus");
//     const btn_multiply = document.getElementById("multiply");
//     const btn_divide = document.getElementById("divide");
//     const result = n1 * n2;
//     btn_plus.style.backgroundColor="cornflowerblue";
//     btn_minus.style.backgroundColor="cornflowerblue";
//     btn_multiply.style.backgroundColor="red";
//     btn_divide.style.backgroundColor="cornflowerblue";
//     result_output.innerText = "결과 : " + result;
// }
//
// function divide() {
//     const n1 = parseFloat(document.getElementById("n1").value);
//     const n2 = parseFloat(document.getElementById("n2").value);
//     const result_output = document.getElementById("result");
//     const btn_plus = document.getElementById("plus");
//     const btn_minus = document.getElementById("minus");
//     const btn_multiply = document.getElementById("multiply");
//     const btn_divide = document.getElementById("divide");
//
//     if( n2 == 0){
//         alert("0으로 나눌 수 없습니다.")
//     } else {
//         const result = n1 / n2;
//         btn_plus.style.backgroundColor="cornflowerblue";
//         btn_minus.style.backgroundColor="cornflowerblue";
//         btn_multiply.style.backgroundColor="cornflowerblue";
//         btn_divide.style.backgroundColor="red";
//         result_output.innerText = "결과 : " + result;
//     }
// }

function cal (id) {
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const result_output = document.getElementById("result");
    const btn_plus = document.getElementById("plus");
    const btn_minus = document.getElementById("minus");
    const btn_multiply = document.getElementById("multiply");
    const btn_divide = document.getElementById("divide");
    let result = 0;

    btn_plus.style.backgroundColor="cornflowerblue";
    btn_minus.style.backgroundColor="cornflowerblue";
    btn_multiply.style.backgroundColor="cornflowerblue";
    btn_divide.style.backgroundColor="cornflowerblue";

    switch(id) {
        case "plus":
            btn_plus.style.backgroundColor="red";
            result = n1 + n2;
            break;

        case "minus":
            btn_minus.style.backgroundColor="red";
            result = n1 - n2;
            break;

        case "multiply":
            btn_multiply.style.backgroundColor="red";
            result = n1 * n2;
            break;

        case "divide":
            btn_divide.style.backgroundColor="red";
            if( n2 == 0 ){
                alert("0으로 나눌 수 없습니다.")
            }else {
                result = n1 / n2;
            }
            break;
    }
    result_output.innerText = "결과 : " + result;

}