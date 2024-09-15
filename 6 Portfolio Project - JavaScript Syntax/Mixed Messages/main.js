/**********************************************************************
 * JokeFactory()
 * parameter: setup - the beginning of the knock knock joke.
 * parameter: delivery - the word we play with for the joke.
 * parameter: punchline - the funny part of the joke!
 * return: a Joke object
 */
const JokeFactory = (setup, delivery, punchline) => {
    /* Joke object:
     * properties: setup, delivery, punchline
     * methods: getters for setup, delivery, and punchline.
     * methods: setters for setup, delivery, and punchline.
     * method: tellJoke - prints the joke!
     */
    return {
        _setup: setup,
        _delivery: delivery,
        _punchline: punchline,
        get setup() {
            return this._setup;
        },
        get delivery() {
            return this._delivery;
        },
        get punchline() {
            return this._punchline;
        },
        set setup(string){
            this._setup = string;
        },
        set delivery(string){
            this._delivery = string;
        },
        set punchline(string){
            this._punchline = string;
        },
        tellJoke(){
            console.log(this.setup);
            console.log(`Who's there?`);
            console.log(this.delivery);
            console.log(this.delivery + ' who?');
            console.log(this.punchline);
        }
    }
}

// Create some Joke Objects
const Joke1 = JokeFactory(`Knock, knock!`, `Cash`, `No thanks, I prefer almonds.`);
const Joke2 = JokeFactory(`Knock, knock!`, `Repeat`, `Okay... who, who, who.`);
const Joke3 = JokeFactory(`Knock, knock!`, `Yeah`, `Yahoo! I'm excited, too!`);
const Joke4 = JokeFactory(`Knock, knock!`, `Kanga`, `Actually, it's kanga-roo.`);
const Joke5 = JokeFactory(`Knock, knock!`, `Luke`, `Luke through the peephole and find out.`);

// Test tellJoke
Joke1.tellJoke();
Joke2.tellJoke();
Joke3.tellJoke();
Joke4.tellJoke();
Joke5.tellJoke();
