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
  hounds: [
    {
      name: 'Balto',
      age: 50,
      breed: 'Wolf',
      service: 'Grooming',
      Owner: 'G',
      Phone: '206-123-9876'
    },
    {
      name: 'Rex',
      age: 35,
      breed: 'Huskie',
      service: 'Grooming',
      Owner: 'L',
      Phone: '206-3425-7698'
    },
    {
      name: 'Hya',
      age: 50,
      breed: 'German Shepard',
      service: 'Grooming',
      Owner: 'J',
      Phone: '206-975-1256'
    },
    {
      name: 'Klaw',
      age: 35,
      breed: 'Dutch Shepard',
      service: 'Grooming',
      Owner: 'L',
      Phone: '206-3425-7698'
    }
  ]
}

alert(`There are ${den.hounds.length} hounds in the Den`)

let denList = document.getElementById('den')

den.hounds.forEach(hound => {
  console.log(hound.name)
  denList.innerHTML = `<li>Name: ${hound.name}</li>`
});