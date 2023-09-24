export enum IrawGender {
    M = "Male",
    F = "Female",
    T = "Transgender"
}

export interface IRawUserInterface {
    first_name: string,
    last_name: string,
    mobile: number,
    email: number,
    gender: IrawGender
    birthplace: string
}