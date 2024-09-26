
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value ;
    const inputNumber = parseFloat(inputValue);
    console.log(id , inputValue);
    return inputNumber;
    console.log(inputNumber);
}

function getTextFieldValueByID(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    document.getElementById('donation-m').classList.add('hidden');
    document.getElementById('transition-his').classList.add('hidden');
    document.getElementById('question').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');


}