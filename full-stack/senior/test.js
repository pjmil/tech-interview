const util = require('util')

const petIds = ['2','3','5'];

const people = [
  {
    id: '1',
    name: 'Jill',
    sex: 'female',
    age: 32,
    pets: [
      { id: '1', name: 'Kitty'},
      { id: '2', name: 'Rolf'}
    ]
  },
  {
    id: '2',
    name: 'Sam',
    sex: 'male',
    age: 16,
    pets: [
      { id: '3', name: 'Pretty boy'}
    ]
  },
  {
    id: '4',
    name: 'Pete',
    sex: 'male',
    age: 33,
    pets: [
      { id: '4', name: 'Misty'},
      { id: '5', name: 'Milo'}
    ]
  },
  {
    id: '5',
    name: 'Jess',
    sex: 'female',
    age: 21,
    pets: []
  }  
]

function insertCatSpecies(people, petIds)
{
  people.forEach(person => { 
    person.pets.find((pet) => {
      if (petIds.includes(pet.id)) {
        pet.species = 'cat'
      }
    })
  })

  console.log(util.inspect(people, false, null, true));
}


insertCatSpecies(people, petIds);