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
 * NOTE: this function should CAN mutate the values of the passed array
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
 * pAequorFactory
 * parameter: unique number per object, array of 15 random DNA bases
 * property: specimenNum - a unique ID number
 * property: dna - an array of 15 random DNA bases
 * method: mutate() - responsible for randomly selecting a base in dna property 
 *          and changing it to a different base by calling helper function 
 *          changeBase(). returns object's dna property.
 * return: a pAequor object
 */
const pAequorFactory = (id, dnaArray) => {
    return {
        specimentNum: id,
        dna: dnaArray,
        mutate() {
            // pick a random base
            let baseIndex = Math.floor(Math.random() * 15);
            this.dna = changeBase(this.dna, baseIndex);
        }
    }
}

// Test pAequorFactory
const pAequor1 = pAequorFactory(1, mockUpStrand());
console.log(pAequor1);

// Test pAequorFactory.mutate()
pAequor1.mutate();