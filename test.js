animalsArray = [{
    animal: 'bear', 
    id: 1235
    }, 
    {
        animal:'koala', 
        id: 2353
    },
    {
        animal:'penguine', 
        id: 3355
    }
]

myarray = animalsArray.filter(animal => animal.id === 3355)[0]

console.log(myarray)