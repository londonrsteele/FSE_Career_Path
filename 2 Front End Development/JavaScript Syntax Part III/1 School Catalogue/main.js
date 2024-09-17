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

/*******************************************************************************
 * Testing Classes
 */
const substituteTeachers = ['Nancy', 'Claire', 'Clarissa', 'Jenny'];

console.log(School.pickSubstituteTeacher(substituteTeachers));

const School0 = new School('School0', 'Primary', 1);
console.log(School0);
console.log(School0.name);
console.log(School0.level);
console.log(School0.numberOfStudents);
School0.quickFacts();