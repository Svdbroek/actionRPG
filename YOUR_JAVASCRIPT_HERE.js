// Write your JS here
let hero = {
  name: "Gootsteen the Great",
  heroic: false,
  inventory: [],
  health: 10,
  weapon: {
    type: "pointy stick",
    damage: 2
  }
};

let dagger = {
  type: "dagger",
  damage: 2
};

let rest = person => {
  if (person.health < 10) {
    person.health = 10;
  } else {
    alert("You are already at full health");
  }
  return person;
  // test seems to time out on return-check when alert is triggered, hit that buttton fast :)
};

let pickUpItem = (person, weapon) => {
  person.inventory.push(weapon);
};

let equipWeapon = person => {
        if(person.inventory.length===0)
        //some type of type-coercion going on if only using one =  ...  not sure why?
        { 
        }else{
        person.weapon=person.inventory[0]
        }   
};
