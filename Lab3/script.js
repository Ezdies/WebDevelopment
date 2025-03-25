// const display = document.getElementById('display');
// const buttons = document.querySelectorAll('.buttons button');

// let currentInput = '';

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const btnValue = button.textContent;

//         if(btnValue === 'C') {
//             currentInput = '';
//         } else if(btnValue === '←') {
//             currentInput = currentInput.slice(0, -1);
//         } else if(btnValue === '=') {
//             try {
//                 currentInput = eval(currentInput).toString();
//             } catch {
//                 currentInput = 'Błąd!';
//             }
//         } else {
//             currentInput += btnValue;
//         }

//         display.value = currentInput;
//     });
// });
