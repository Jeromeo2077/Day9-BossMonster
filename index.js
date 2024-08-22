const heroes = [
  {
    name: 'Slate Slabrock',
    type: 'dwarf',
    damage: 5,
    health: 100
  },
  {
    name: 'Swift Ironstag',
    type: 'elf',
    damage: 10,
    health: 50
  }
]

const boss = {
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1
}

function drawHeroes() {
  heroes.forEach((hero) => {
    let heroElm = document.getElementById(hero.name)

    //Drawing Hero Name
    let nameElm = heroElm.querySelector('.name')
    //console.log(nameElm); //Debug Code
    nameElm.innerHTML = `<span>Hero Name: ${hero.name}</span>`
    // console.log(hero.name); //Debug Code

    //Drawing Hero Health
    let levelElm = heroElm.querySelector('.health')
    levelElm.innerHTML = `<span>Health: ${hero.health}</span>`

    //Drawing Hero Damage
    let damageElm = heroElm.querySelector('.damage')
    damageElm.innerHTML = `<span>Damage: ${hero.damage}</span>`

  })

}

