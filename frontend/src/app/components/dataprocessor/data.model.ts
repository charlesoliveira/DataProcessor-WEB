export interface Pessoa {
    nome: String
    cpf: String
    rg: String
    data_nasc: String
    sexo: String
    mae: String
    pai: String
    email: String
    cep: String
    endereco: String
    numero: number
    bairro: String
    cidade: String
    estado: String
    telefone_fixo: String
    celular: String
    altura: number
    peso: number
    tipo_sanguineo: String
}

export interface QtdUF {
    quantidade: number
    estado: String
}

export interface Imc {
    imcMedio: number
    faixaEtaria: String
}