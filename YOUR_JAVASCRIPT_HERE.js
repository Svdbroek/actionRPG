// Write your JS here
let hero = {
  name: "Gootsteen the Great",
  heroic: false,
  inventory: [],
  health: 10,
  weapon: {
    type: "Pointy stick",
    damage: 2
  }
};


let updateParameters = () => {
    document.getElementById("name").innerHTML = hero.name;
    if (hero.heroic) {
      document.getElementById("heroic").innerHTML = "TRUE HERO";
    } else {
      document.getElementById("heroic").innerHTML = "not yet";
    }
  
    let invList = "";
    for (let i = 0; i < hero.inventory.length; i++) {
      invList += ", " + hero.inventory[i].type;
      console.log(invList);
    }
    document.getElementById("inventory").innerHTML = invList;
    document.getElementById("health").innerHTML = hero.health;
    document.getElementById("weapon").innerHTML = hero.weapon.type;
    document.getElementById("damage").innerHTML = hero.weapon.damage;
  }; // probably not elegant, but quick and dirty does the trick
  

let dagger = {
  type: "dagger",
  damage: 2
};

let rest = person => {
  if (person.health < 10) {
    person.health = 10;
    updateParameters();
  } else {
    alert("You are already at full health");
  }
  return person;
  // test seems to time out on return-check when alert is triggered, hit that buttton fast :)
};

let pickUpItem = (person, weapon) => {
  person.inventory.push(weapon);
  updateParameters();

};

let equipWeapon = person => {
  if (person.inventory.length === 0) {
    //some type of type-coercion going on if only using one =  ...  not sure why?
  } else {
    person.weapon = person.inventory[0];
    
  updateParameters();

  }
};

let onStart = () => {
  hero.name = window.prompt("what's your name?", "Lonk");
  UIName = hero.name;
};

onStart();
