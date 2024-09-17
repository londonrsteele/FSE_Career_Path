/***************************************
 * School class
 * parent to Primary, Middle, High
 * properties: name, level, numberOfStudents
 * getters: all
 * setters: numberOfStudents
 * methods: quickFacts
 * static methods: pickSubstituteTeacher
 */
class School {
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents(number) {
        if(typeof number === 'number') {
            this._numberOfStudents = number;
        } else {
            console.log(`Invalid input: numberOfStudents must be set to a Number.`);
        }
    }
    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} at the ${this.level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers){
        let randomTeacherIndex = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomTeacherIndex];
    }
}

/***************************************
 * Primary class
 * extends School
 * inherited properties: name, level, numberOfStudents
 * inherited getters: all
 * inherited setters: numberOfStudents
 * inherited methods: quickFacts
 * properties: pickupPolicy
 * getters: pickupPolicy
 * setters: pickupPolicy
 */
class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy){
        super(name, 'Primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
    set pickupPolicy(string) {
        this._pickupPolicy = string;
    }
}


/***************************************
 * Middle class
 * extends School
 * inherited properties: name, level, numberOfStudents
 * inherited getters: all
 * inherited setters: numberOfStudents
 * inherited methods: quickFacts
 */
class Middle extends School {
    constructor(name, numberOfStudents,){
        super(name, 'Middle', numberOfStudents);
    }
}


/***************************************
 * High class
 * extends School
 * inherited properties: name, level, numberOfStudents
 * inherited getters: all
 * inherited setters: numberOfStudents
 * inherited methods: quickFacts
 * properties: sportsTeams
 * getters: sportsTeams
 * setters: sportsTeams
 */
class High extends School {
    constructor(name, numberOfStudents, sportsTeams){
        super(name, 'Primary', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        return this._sportsTeams;
    }
    set sportsTeams(array) {
        this._sportsTeams = array;
    }
}

/*******************************************************************************
 * Testing Classes
 */
const substituteTeachers = ['Nancy', 'Claire', 'Clarissa', 'Jenny'];
const pickupPolicy = 'This is an example Pick Up Policy.';
const sportsTeams = ['These', 'are', 'example', 'sports', 'teams'];

// Testing static functions
console.log(`---------------------Testing Static Functions---------------------`);
console.log(School.pickSubstituteTeacher(substituteTeachers));
console.log(Primary.pickSubstituteTeacher(substituteTeachers));

// Testing School (parent) class
console.log(`---------------------Testing School Class---------------------`);
const School0 = new School('School0', 'Primary', 1);
console.log(School0);
console.log(School0.name);
console.log(School0.level);
console.log(School0.numberOfStudents);
School0.quickFacts();

// Testing Primary (child) class
console.log(`---------------------Testing Primary Class---------------------`);
const ACES = new Primary('Archer City Elementary School', 200, "Pick up out front at 2:50pm.");
console.log(ACES);
console.log(ACES.name);
console.log(ACES.level);
console.log(ACES.numberOfStudents);
console.log(ACES.pickupPolicy);
ACES.pickupPolicy = pickupPolicy;
console.log(ACES.pickupPolicy);
ACES.quickFacts();

// Testing Middle (child) class
console.log(`---------------------Testing Middle Class---------------------`);
const ACMS = new Middle('Archer City Middle School', 60, "Pick up out front at 3:15pm.");
console.log(ACMS);
console.log(ACMS.name);
console.log(ACMS.level);
console.log(ACMS.numberOfStudents);
ACMS.quickFacts();


// Testing Primary (child) class
console.log(`---------------------Testing High Class---------------------`);
const ACHS = new High('Archer City High School', 160, ['Football', 'Volleyball', 'Basketball', 'Track & Field']);
console.log(ACHS);
console.log(ACHS.name);
console.log(ACHS.level);
console.log(ACHS.numberOfStudents);
console.log(ACHS.sportsTeams);
ACHS.sportsTeams = sportsTeams;
console.log(ACHS.sportsTeams);
ACES.quickFacts();