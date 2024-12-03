export interface Register{
    id: number,
    name: string,
    email: string,
    phone: string,
    cpf : string,
    password : string,
    Admin : boolean
}

export type Registers = Register