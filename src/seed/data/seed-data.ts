
interface SeedPlayer {
    name: string;
    lastName: string;
    age: number;
    height: number;
    weight: number;
    position: string;
    // team: string;
}

interface SeedTeam {
    name: string;
    conference: string;
    championships: number;
    // status: boolean;
}


interface SeedData {
    teams: SeedTeam[];
    players: SeedPlayer[];
}


export const initialData: SeedData = {

    teams: [
        {
            name: 'Philadelphia 76ers',
            conference: 'East',
            championships: 3
        },
        {
            name: 'New York Knicks',
            conference: 'East',
            championships: 2
        },
        {
            name: 'Los Angeles Lakers',
            conference: 'West',
            championships: 17
        },
        {
            name: 'Boston Celtics',
            conference: 'East',
            championships: 17
        },
        {
            name: 'Chicago Bulls',
            conference: 'East',
            championships: 6
        }
    ],

    players: [
        {
            name: 'LeBron',
            lastName: 'James',
            age: 38,
            height: 2.06,
            weight: 110,
            position: 'Small Forward', 
        },
        {
            name: 'Wilt',
            lastName: 'Chamberlain',
            age: 100,
            height: 2.16,
            weight: 130,
            position: 'Center', 
        },
        {
            name: 'Michael',
            lastName: 'Jordan',
            age: 100,
            height: 1.98,
            weight: 98,
            position: 'Shooting Guard', 
        },
        {
            name: 'Larry',
            lastName: 'Bird',
            age: 100,
            height: 2.03,
            weight: 100,
            position: 'Small Forward', 
        },
        {
            name: 'Patrick',
            lastName: 'Ewing',
            age: 100,
            height: 2.12,
            weight: 120,
            position: 'Center', 
        },
        {
            name: 'Allen',
            lastName: 'Iverson',
            age: 100,
            height: 1.81,
            weight: 80,
            position: 'Shooting Guard', 
        },
        {
            name: 'Jerry',
            lastName: 'West',
            age: 100,
            height: 2.03,
            weight: 108,
            position: 'Shooting Guard', 
        },
    ]

}