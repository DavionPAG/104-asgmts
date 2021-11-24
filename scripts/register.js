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

let id = 0;

function Hound(name, age, gender, breed, service, owner, phone, height) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.owner = owner;
  this.phone = phone;
  this.height = height;
  this.id = id++
}

let balto = new Hound('Balto', 21, 'M', 'Tundra', 'Cleaning', 'Max', '206-789-6543', '3ft')

let liger = new Hound('Liger', 5, 'F', 'Arctic', 'Day Care', 'TJ', '206-912-9876', '2ft')

let lio = new Hound('Lio', 10, 'F', 'Steppe', 'Grooming', 'Sam', '206-327-5647', '4ft')

den.hounds.push(balto, liger, lio);

let inputPet = document.getElementById('pet');
let inputAge = document.getElementById('age');
let inputGender = document.getElementById('gender');
let inputBreed = document.getElementById('breed');
let inputService = document.getElementById('service');
let inputOwner = document.getElementById('owner');
let inputPhone = document.getElementById('phone');
let inputHeight = document.getElementById('height');


function register() {
  let newHound = new Hound(inputPet.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputOwner.value, inputPhone.value, inputHeight.value)
  den.hounds.push(newHound)
  displayCards(newHound)
  clear();
}

displayCards(balto)
displayCards(liger)
displayCards(lio)

function clear() {
  inputPet.value = '';
  inputAge.value = '';
  inputGender.value = '';
  inputBreed.value = '';
  inputService.value = '';
  inputOwner.value = '';
  inputPhone.value = '';
  inputHeight.value = '';
}

function deletePet(id) {
  console.log('Byeeeeee! ' + id)
  let remove = '';

  den.hounds.forEach((hound, idx) => {
    if (id === hound.id) {
      remove = idx;
    }
  })

  document.getElementById(id).remove()
  den.hounds.splice(remove, 1)
}

function findHound() {
  let input = document.getElementById('search').value;
  console.log(input)

  let found = ''

  den.hounds.forEach((hound, idx) => {
    if (input === hound.name) {
      found = idx;
    }
    console.log('Found ' + found )
  })
  if(found !== '') {
  alert(`
  Name: ${den.hounds[found].name}\n
  Age: ${den.hounds[found].age}\n
  Gender: ${den.hounds[found].gender}\n
  Breed: ${den.hounds[found].breed}\n
  Height: ${den.hounds[found].height}\n
  Service: ${den.hounds[found].service}\n
  Owner: ${den.hounds[found].owner}\n
  Tel: ${den.hounds[found].phone}
  `)
  } else alert('Not in this Pack!')
}
