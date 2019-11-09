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

let cultist = {
  health: 12,
  damage: 2,
  lootOwned: true,
}

let muramasa = {
    type: 'muramasa',
    damage: 5,}
  



let displayStats = () => {
    document.getElementById("name").innerHTML = hero.name;
    if (hero.heroic) {
      document.getElementById("heroic").innerHTML = "TRUE HERO";
    } else {
      document.getElementById("heroic").innerHTML = "not yet";
    }
  
    let invList = ": ";
    for (let i = 0; i < hero.inventory.length; i++) {
      invList +=  hero.inventory[i].type+", " ;
    }
    document.getElementById("inventory").innerHTML = invList;
    document.getElementById("health").innerHTML = hero.health;
    document.getElementById("weapon").innerHTML = hero.weapon.type;
    document.getElementById("damage").innerHTML = hero.weapon.damage;
    
  }; // probably not elegant, but quick and dirty does the trick
  

let dagger = {
  type: "dagger",
  damage: 3 //this line purposfully breaks the test, changed it for gameplay reasons (now the cultist can only die if you had the dagger equiped)
};

let rest = person => {
  if (person.health < 10) {
    person.health = 10;
    displayStats();
  } else {
    alert("You are already at full health");
  }
  return person;
  // test seems to time out on return-check when alert is triggered, hit that buttton fast :)
};

let pickUpItem = (person, weapon, img) => {
  person.inventory.push(weapon);
  displayStats();
  img.style.visibility="hidden" //this line seems to break the testing, I assure you it still works

};

let equipWeapon = person => {
  if (person.inventory.length === 0) {
    //some type of type-coercion going on if only using one =  ...  not sure why?
  } else {
   person.inventory.push(person.weapon)
   person.weapon = person.inventory[0];
   person.inventory.shift()
  displayStats();

  }
};

let onStart = () => {
  hero.name = window.prompt("what's your name?", "Lonk");
  displayStats();
};

onStart();

let goTotheDungeon=()=>{  
  document.getElementById('town').style.visibility="hidden"
  document.getElementById('dungeon').style.visibility="visible"
  document.getElementById('cultist').style.visibility="visible"
  cultist.health = 12
  document.querySelector('#monster-health-bar').style.width = hpBarMax
  document.querySelector('#monster-health-bar').style.visibility="visible"
  document.querySelector('html').style.backgroundImage = "url('imgs/backgroundDungeon.jpg')";

// ohh god, what's happening here?

}

let backToTown =()=>{
  document.getElementById('dungeon').style.visibility="hidden"
  document.getElementById('town').style.visibility="visible"
  document.getElementById('loot').style.visibility="hidden"
  document.querySelector('#monster-health-bar').style.visibility="hidden"
  document.getElementById('cultist').style.visibility="hidden"
  document.querySelector('html').style.backgroundImage = "url('imgs/backgroundTown.jpg')";


}

let hpBarMax = parseInt(getComputedStyle( document.querySelector('#monster-health-bar')).width)


let fightTheMonster=(person,monster,monsterElement)=>{  
  person.health = person.health-monster.damage
  displayStats();

  if (person.health <= 0) {
    alert('you lose')
    location.reload(true)
  }

  monster.health = monster.health-hero.weapon.damage
  document.querySelector('#monster-health-bar').style.width = hpBarMax * monster.health/12
  if (monster.health <= 0){
    monsterElement.style.visibility="hidden"
    document.querySelector('#monster-health-bar').style.visibility="hidden"
    document.getElementById
    if(monster.lootOwned) {
      document.getElementById('loot').style.visibility="visible"
      monster.lootOwned = false
    }
  }

} 