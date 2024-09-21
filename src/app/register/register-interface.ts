export interface Register{
    id: number,
    name: string,
    email: string,
    cpf : string,
    password : string,
    admin : boolean
}

export type Registers = Register