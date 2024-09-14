const team = {
    _players: [
      {firstName: 'Fernando', lastName: 'Alonso', age: 42},
      {firstName: 'Lewis', lastName: 'Hamilton', age: 39},
      {firstName: 'Nico', lastName: 'Hulkenberg', age: 36},
      {firstName: 'Sergio', lastName: 'Perez', age: 34},
      {firstName: 'Daniel', lastName: 'Ricciardo', age: 34},
      {firstName: 'Valtteri', lastName: 'Bottas', age: 34},
      {firstName: 'Kevin', lastName: 'Magnussen', age: 31},
      {firstName: 'Carlos', lastName: 'Sainz', age: 29},
      {firstName: 'Alex', lastName: 'Albon', age: 27},
      {firstName: 'Pierre', lastName: 'Gasly', age: 27},
      {firstName: 'Esteban', lastName: 'Ocon', age: 27},
      {firstName: 'Max', lastName: 'Verstappen', age: 26},
      {firstName: 'Charles', lastName: 'Leclerc', age: 26},
      {firstName: 'George', lastName: 'Russell', age: 25},
      {firstName: 'Lance', lastName: 'Stroll', age: 25},
      {firstName: 'Lando', lastName: 'Norris', age: 24},
      {firstName: 'Guanyu', lastName: 'Zhao', age: 24},
      {firstName: 'Logan', lastName: 'Sargeant', age: 23},
      {firstName: 'Yuki', lastName: 'Tsonada', age: 23},
      {firstName: 'Oscar', lastName: 'Piastri', age: 22}
    ],
    _races: [
      {country: 'Bahrain', track: 'Bahrain', winner: 'Max Verstappen'},
      {country: 'Saudi Arabia', track: 'Jeddah', winner: 'Max Verstappen'},
      {country: 'Australia', track: 'Melbourne', winner: 'Carlos Sainz'},
      {country: 'Japan', track: 'Suzuka', winner: 'Max Verstappen'},
      {country: 'China', track: 'Shanghai', winner: 'Max Verstappen'},
      {country: 'Miami', track: 'Miami', winner: 'Lando Norris'},
      {country: 'Emilia Romagna GP', track: 'Autodromo Enzo e Dino Ferrari', winner: 'Max Verstappen'},
      {country: 'Monaco', track: 'Monaco', winner: 'Charles Leclerc'},
      {country: 'Canada', track: 'Circuit Gilles Villeneuve', winner: 'Max Verstappen'},
      {country: 'Spain', track: 'Barcelona', winner: 'Max Verstappen'},
      {country: 'Austria', track: 'Red Bull Ring', winner: 'George Russell'},
      {country: 'Great Britain', track: 'Silverstone', winner: 'Lewis Hamilton'},
      {country: 'Hungary', track: 'Hungaroring', winner: 'Oscar Piastri'},
      {country: 'Belgium', track: 'Spa', winner: 'Lewis Hamilton'},
      {country: 'Netherlands', track: 'Zandvoort', winner: 'Lando Norris'},
      {country: 'Italy', track: 'Monza', winner: 'Charles Leclerc'}
    ],
    get players() {
      return this._players;
    }, 
    get races() {
      return this._races;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      }
      this._players.push(player);
    },
    addRace(country, track, winner) {
      race = {
        country, 
        track, 
        winner
      }
      this._races.push(race);
    }
  }
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players)
  
  team.addRace('USA', 'COTA', 'Bugs Bunny');
  console.log(team.races);