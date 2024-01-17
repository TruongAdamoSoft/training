class FootballPlayer {
    name: string;
    position: string;
    goalsScored: number;
  
    constructor(name: string, position: string, goalsScored: number) {
        this.name = name;
        this.position = position;
        this.goalsScored = goalsScored;
    }
}
  
class FootballTeam {
    players: FootballPlayer[];
  
    constructor(players: FootballPlayer[]) {
        this.players = players;
    }
  
    calculateTotalGoals(): number {
        return this.players.reduce((totalGoals, player) => totalGoals + player.goalsScored, 0);
    }
}

const player1 = new FootballPlayer("Messi", "ST", 30);
const player2 = new FootballPlayer("Ronaldo", "ST", 25);
const player3 = new FootballPlayer("Neymar", "ST", 20);

const footballTeam = new FootballTeam([player1, player2, player3]);

const totalGoals = footballTeam.calculateTotalGoals();
console.log("Total Goals Scored by the Team:", totalGoals);