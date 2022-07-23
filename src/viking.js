// Soldier
class Soldier {
    
    constructor(theHealthArg, theStrengthArg) {
        this.health = theHealthArg;
        this.strength = theStrengthArg;
        }
        attack = function(){
            return this.strength
        }
        receiveDamage = function(theDamageArg){
            this.health -= theDamageArg
        }
  }

// Viking
class Viking extends Soldier{

    constructor(theNameArg, theHealthArg, theStrengthArg){
        super (theHealthArg, theStrengthArg);
        this.name = theNameArg;
        }
        receiveDamage(theDamageArg){
            if (this.theDamageArg < 0){
            return `${this.name} has received ${this.theDamageArg} points of damage`;
            } else {
            return `${this.name} has died in act of combat`;
        }      
    }

        battleCry = function(){
            return 'Odin Owns You All!'
        }
}


// Saxon
class Saxon extends Soldier{

    receiveDamage(theDamageArg){
        if (this.health >= 0){
        return `A Saxon has received ${this.theDamageArg} points of damage`
        } else {
        return `A Saxon has died in combat`
    }      
}
}


// War
class War {

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){

        this.saxonArmy.forEach(saxon => {
            this.vikingArmy.forEach(viking => {
                saxon.receiveDamage(viking.attack());
            });
        }
        );
    
        this.saxonArmy = this.saxonArmy.filter(saxon => {
            return saxon.health > 0;
        }
        );
    }

    saxonAttack(){  

        this.vikingArmy.forEach(viking => {
            this.saxonArmy.forEach(saxon => {
                viking.receiveDamage(saxon.attack());
            });
        }
        );
           
            this.vikingArmy = this.vikingArmy.filter(viking => {
                return viking.health > 0;
            }
            );
        }

    showStatus(){

        if (this.vikingArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.saxonArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
