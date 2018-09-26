// Creating object for more fun.
const inputer = {
    displayNumber: '',
    updateNumber() {
        const display = document.querySelectorAll('.inputer-out');
        display.forEach(element => {
            if (element.tagName == "INPUT") {
                element.value = inputer.displayNumber;
            }
            else {
                element.textContent = inputer.displayNumber;
            }
        });
        this.setToStorage() 
    },
    setToStorage () {
        localStorage.setItem('displayNumber', this.displayNumber);
    },
    loadFromStorage () {
        this.displayNumber = localStorage.getItem('displayNumber');
        this.updateNumber();
    }
};
inputer.loadFromStorage();

// Create buttons.
let digits = document.querySelector('#digits');
for (var i = 0; i < 10; i++) {
    let element = document.createElement("button");
    element.value = i;
    element.textContent = i;
    digits.appendChild(element);
}

// Add one listener.
digits.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }
    inputer.displayNumber = event.target.value;
    inputer.updateNumber();
});


// Task 5.
console.log('Task 5:');
let outputCarWithDefault = (car) => console.log(`Make: ${car.make}, wheels: ${car.wheels || 4}`);
outputCarWithDefault({ make: 'Ford' });
outputCarWithDefault({ make: 'Ford', wheels: 6 });

// Task 10.
console.log('--------');
console.log('Task 10:');
var userJohn = {name: 'John', age: 30};
var userMike = {...userJohn};
userMike.name = 'Mike';
console.log(userMike.name) // Mike - correct behavior
console.log(userJohn.name) // Mike - wrong behavior, 'John' expected