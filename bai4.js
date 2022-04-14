



const animals = [
    {
      name: "cat",
      size: "small",
      weight: 5
    },
    {
      name: "dog",
      size: "medium",
      weight: 10
    },
    {
      name: "elephant",
      size: "big",
      weight: 5000
    }
  ]

  function getAnimalHasNoMediumSize () {
      return animals.filter(animal => {
          return animal.size != 'medium'
      })
  }

  function convertAnimalHasNoMediumSizeToNewArr () {
      return getAnimalHasNoMediumSize().map(animal2 => {
          return `name:${animal2.name}-size:${animal2.size}-weight:${animal2.weight}`
      })
  }

  console.log(convertAnimalHasNoMediumSizeToNewArr())