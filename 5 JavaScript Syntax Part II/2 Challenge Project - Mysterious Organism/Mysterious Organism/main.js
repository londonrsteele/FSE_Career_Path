// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}


/***************************************************************************
 * changeBase
 * parameter: dna array to change, index of base to change
 * return: a pAequor object
 * NOTE: this function CAN mutate the values of the passed array
 */
const changeBase = (dna, baseIndex) => {
    let bases = [];
    if(dna[baseIndex] === 'A') {
        bases = ['T', 'C', 'G'];
        dna[baseIndex] = bases[Math.floor(Math.random()*3)];
        console.log(`MUTATION! A -> ${dna[baseIndex]}`);
    } else if(dna[baseIndex] === 'T') {
        bases = ['A', 'C', 'G'];
        dna[baseIndex] = bases[Math.floor(Math.random()*3)];
        console.log(`MUTATION! T -> ${dna[baseIndex]}`);
    } else if(dna[baseIndex] === 'C') {
        bases = ['A', 'T', 'G'];
        dna[baseIndex] = bases[Math.floor(Math.random()*3)];
        console.log(`MUTATION! C -> ${dna[baseIndex]}`);
    } else if(dna[baseIndex] === 'G') {
        bases = ['A', 'T', 'C'];
        dna[baseIndex] = bases[Math.floor(Math.random()*3)];
        console.log(`MUTATION! G -> ${dna[baseIndex]}`);
    } else {
        console.log('Error swapping bases: invalid base at index ' + baseIndex);
    }
    return dna;
}

/***************************************************************************
 * printMatches
 * parameter: 2 dna arrays to compare
 * return: % match, prints visualization of matches
 * NOTE: this function should NOT mutate the values of the passed arrays
 */
const printMatches = (dna1, dna2) => {
    let count = 0;
    for(let base in dna1){
        process.stdout.write(dna1[base]);
    }
    process.stdout.write('\n');
    for(let base in dna1){
        if(dna1[base] === dna2[base]){
            process.stdout.write('|');
            count++;
        } else {
            process.stdout.write(' ');
        }
    }
    process.stdout.write('\n');
    for(let base in dna2){
        process.stdout.write(dna2[base]);
    }
    process.stdout.write('\n');
    return Math.round(count / 15 * 100);
}


/***************************************************************************
 * cgCount
 * parameter: dna array
 * return: % bases are C or G
 * NOTE: this function should NOT mutate the values of the passed array
 */
const cgCount = (dna) => {
    let CGs = 0;
    for(let base in dna) {
        if(dna[base] === 'C' || dna[base] === 'G'){
            CGs++;
        }
    }
    return Math.round(CGs/15*100);
}

/***************************************************************************
 * pAequorFactory
 * parameter: unique number per object, array of 15 random DNA bases
 * property: specimenNum - a unique ID number
 * property: dna - an array of 15 random DNA bases
 * method: mutate() - responsible for randomly selecting a base in dna property 
 *          and changing it to a different base by calling helper function 
 *          changeBase(). returns object's dna property.
 * method: compareDNA() - compare current obj's dna with passed obj's dna and
 *          compute how many bases are identical and in same locations. returns
 *          nothing, but prints a message of % of DNA that match (helper function
 *          printMatches)
 * method: willLikelySurvive() - calls helper function cgCount to determine how
 *          many bases of this.dna are C or G. if > 60%, return true, else false
 * return: a pAequor object
 */
const pAequorFactory = (id, dnaArray) => {
    return {
        _specimenNum: id,
        _dna: dnaArray,
        get specimenNum() {
            return this._specimenNum;
        },
        get dna() {
            return this._dna;
        },
        set specimenNum(num) {
            this._specimenNum = num;
        },
        set dna(array) {
            this._dna = [...array];
        },
        mutate() {
            // pick a random base
            let baseIndex = Math.floor(Math.random() * 15);
            this.dna = changeBase(this.dna, baseIndex);
        },
        compareDNA(obj2) {
            let percentMatch = printMatches(this.dna, obj2._dna);
            console.log(`p.Aequor ${this.specimenNum} matches p.Aequor ${obj2.specimenNum} by ${percentMatch}%`);
        },
        willLikelySurvive() {
            let CGcount = cgCount(this.dna);
            console.log(`p.Aequor ${this.specimenNum}'s CG count: ${CGcount}`);
            if(CGcount >= 60){
                return true;
            } else {
                return false;
            }
        },
        info() {
            let survival = '';
            if(this.willLikelySurvive()){
                survival = 'will survive';
            } else {
                survival = 'will NOT survive';
            }
            console.log(`p.Aequor ${this.specimenNum} (${this.dna}) ${survival}`);
        }
    }
}

// Test pAequorFactory
const pAequor1 = pAequorFactory(1, mockUpStrand());
console.log(pAequor1);

// Test pAequorFactory.mutate()
pAequor1.mutate();

// Test pAequorFactory.compareDNA()
const pAequor2 = pAequorFactory(2, mockUpStrand());
pAequor1.compareDNA(pAequor2);

// Test pAequorFactory.willLikelySurvive()
console.log(pAequor1.willLikelySurvive());
console.log(pAequor2.willLikelySurvive());

// Test info()
pAequor1.info();
pAequor2.info();

// Create 30 pAequors that will survive in their environment
let pAequors = [];
for(let i = 1; i <= 30; i++){
    let newpAequor = pAequorFactory(i, mockUpStrand());
    while(!newpAequor.willLikelySurvive()){
        newpAequor.mutate();
    }
    pAequors.push(newpAequor);
}

// Check to make sure all will survive in pAequors array
for(let pAequor in pAequors){
    pAequors[pAequor].info();
}
