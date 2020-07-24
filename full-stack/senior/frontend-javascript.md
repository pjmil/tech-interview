Below are senior level frontend javascript developer Q&As.

-------------------------

### 1. ES6 functional javascript code

*Below is an array of people and their pets, along with an array of pet IDs. Write some code that takes two inputs: `people` and `petIds` and returns the original `people` array and for each matching pet id insert a property `{ species: 'cat' }` into matching pet object.*

*e.g.* `{ id: '2', name: 'Rolf', species: 'cat' }`

*Demonstrate your most expressive, clean, testable and ES6 compatible code*

```javascript
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
```

```javascript
function insertCatSpecies(people, petIds)
{
  return people.forEach(person => { 
    person.pets.find((pet) => {
      if (petIds.includes(pet.id)) {
        pet.species = 'cat'
      }
    })
  })
}
```

-------------------------

### 2. Dependencies

*Define NPM, Yarn and the difference between the two.*

NPM and Yarn are both package managers that implement NPM's repository of packages. They are essentially two different implementations of the same thing. Yarn is, in my experience, a lot faster and less error-prone.

-------------------------

### 3. Variable scope

*What is the purpose of `let` keyword in javascript?*

`let` is a more strict method of variable assignment. It is block-scoped rather than function-scoped and does not exist on the global object.

-------------------------

### 4. Stateless components

*Explain the reasoning behind a stateless component along with a small code example. Use React or Vue.*

In Vue, a stateless component is a component that does not invoke Vue's component lifecycle e.g. created(), mounted() or destroyed() and does not contain its own internal state. The benefit to this is reducing memory used by an application and making code more DRY/re-usable. 

e.g. You could use a stateless component for common elements (like button, image) where you want to inherit a common set of markup+styles to the element, or a wrapper/parent element that contains slots for additional components (like an accordion).

```javascript

# Button.vue

<template functional>
  <div>
    <a :href="props.href">{{ props.text }}</a>
  </div>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      href: {
        required: true,
        type: String
      },
      text: {
        required: true,
        type: String
      }
    }
  }
</script>

# app.vue

<template>
  <div>
    <Button href="https://bing.com" text="Bing it" />
  </div>
</template>

```
