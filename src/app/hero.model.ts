export interface Hero {
    name: string;
    color: string;
    maxHP: number;
    hp: number;
    team?: string;
    skills: Array<{
        name?: string;
        damage?: string;
    }>;
}
