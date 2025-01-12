export interface PlayerModel {
    id: number,
    name: string,
    nationality: string,
    position: string,
    club: string,
    statistics: {
        overall: number,
        pace: number,
        shooting: number,
        passing: number,
        dribbling: number,
        defending: number,
        physical: number
    }
}
