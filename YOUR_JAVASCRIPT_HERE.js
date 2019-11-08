// Write your JS here
let hero = {
    name : 'Gootsteen the Great',
    heroic :  false,
    inventory : [],
    health : 10,
    weapon : {
        type : 'great halbert',
        damage : 2,
    },
}



let rest =(person)=>{
    if (person.health != 10){
    person.health = 10
    return person
        }else{
        alert('You are already at full health')
    }

}

console.log(rest())
let pickUpItem =()=>{

}

let equipWeapon =()=>{

}