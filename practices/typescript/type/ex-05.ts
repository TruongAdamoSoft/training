class FootballPlayer{
    private _name: string;
    private _position: string;
    private _goalsScored: number;

    constructor(name: string, position: string, goalsScored: number){
        this._name = name;
        this._position = position;
        this._goalsScored = goalsScored;
    }
    addScore(){
        this._goalsScored++
    }

    public goalsScored(): number{
        return this._goalsScored;
    }
}

class FootballTeam{
    private _nameTeam: string;
    players: FootballPlayer[];
    constructor(name: string){
        this._nameTeam = name;
        this.players = []   
    }
    
    addPlayer(player: FootballPlayer){
        this.players.push(player)
    }

    getAllScored(): number{
        let totalScored: number = 0;
        // console.log(this.players)
        for(const player of this.players){
            // console.log(player.goalsScored())
            totalScored = this.players.reduce((total, player) => total + player.goalsScored(), 0)
            // total += player.goalsScored()
        }
        return totalScored
    }
}

const cdm = new FootballPlayer(`adudu`, `cdm`, 4)
const ss = new FootballPlayer(`mam`, `ss`, 5)
const rw = new FootballPlayer(`du`, `rw`, 2)

const champion = new FootballTeam(`Bayern`)

champion.addPlayer(cdm)
champion.addPlayer(ss)
champion.addPlayer(rw)

console.log(champion.getAllScored())
