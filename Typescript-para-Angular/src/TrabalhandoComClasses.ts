//classes

/*
    data modifiers
    private
    public
    protected

*/


class Character {
    private name?: string;
    public stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    
    attack() : void{
        console.log(`Attack with ${this.stregth} points`);

    }
}

//Character: superclass
//Magician: subclass
class Magician extends Character{
    
    magicPoints: number;
    constructor(name: string, stregth: number, skill: number, magicPoints: number){
        super(name, stregth, skill);
        this.magicPoints = magicPoints;

    }
}

const p1 = new Character("Ryu", 10, 98);
p1.attack
p1.skill = 12;

const p2 = new Magician("Mago", 5, 105, 25);
