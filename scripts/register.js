let den = {
  name: 'The Houndry',
  address: {
    street: "Uni",
    number: 123,

  },
  hours: {
    open: '9:00 am',
    close: '9:00 pm'
  },
  hounds: []
}

// alert(`There are ${den.hounds.length} hounds in the Den`)

let denList = document.getElementById('den')

function Hound(name, age, gender, breed, service, owner, phone) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.owner = owner;
  this.phone = phone;
}

let balto = new Hound('Balto', 21, 'M', 'Tundra', 'Cleaning', 'Max', '206-789-6543')

let liger = new Hound('Liger', 5, 'F', 'Arctic', 'Day Care', 'TJ', '206-912-9876')

let lio = new Hound('Lio', 10, 'F', 'Steppe', 'Grooming', 'Sam', '206-327-5647')

den.hounds.push(balto, liger, lio);

let inputPet = document.getElementById('pet');
let inputAge = document.getElementById('age');
let inputGender = document.getElementById('gender');
let inputBreed = document.getElementById('breed');
let inputService = document.getElementById('service');
let inputOwner = document.getElementById('owner');
let inputPhone = document.getElementById('phone');

function register() {
  console.log(inputPet.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputOwner.value, inputPhone.value);
  let newHound = new Hound(inputPet.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputOwner.value, inputPhone.value)
  den.hounds.push(newHound)
  console.log(den.hounds)
  clear();
}

function clear() {
    inputPet.value = '';
    inputAge.value = '';
    inputGender.value = '';
    inputBreed.value = '';
    inputService.value = '';
    inputOwner.value = '';
    inputPhone.value = '';
}
