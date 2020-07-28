let screen = document.getElementById('screen');
let allbutton = document.querySelectorAll('.digit');
let screenValue = '';
for (let allbuttonElement of allbutton) {
    allbuttonElement.addEventListener('click', function (e) {
        let buttontext = e.target.innerText;
        if (buttontext === '=') {
            if (screenValue.length < 1) {
                alert('plzz enter number');
            } else {
                screen.value = eval(screenValue);
                screenValue = eval(screenValue);
            }

        } else if (buttontext === 'AC') {
            screenValue = "";
            screen.value = screenValue;

        } else {
            screenValue += buttontext;
            screen.value = screenValue;
        }
    })
}
// function dot_count(str, letter)
// {
//     let letter_Count = 0;
//     for (let position = 0; position < str.length; position++)
//     {
//         if (str.charAt(position) === letter)
//         {
//             letter_Count += 1;
//         }
//     }
//     return letter_Count;
// }

