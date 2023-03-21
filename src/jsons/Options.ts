import { OptionTypes } from "../types/OptionTypes"

export const CachorroOption: OptionTypes = {
    name: 'Cachorro',
    products: [
        {
            name: 'Rações',
            types: ['Ração Seca', 'Ração Úmida', 'Ração Medicamentosa', 'Ração Natural']
        },
        {
            name: 'Ossinhos e Petiscos',
            types: ['Bifinhos', 'Biscoitos', 'Chocolate', 'Molhos', 'Ossinhos', 'Bebidas']
        },
    ]
}

export const GatoOption: OptionTypes = {
    name: 'Gato',
    products: [
        {
            name: 'Rações',
            types: ['Ração Seca', 'Ração Úmida', 'Ração Medicamentosa', 'Ração Natural']
        },
        {
            name: 'Petiscos',
            types: ['Bifinhos', 'Biscoitos', 'Molhos']
        }
    ]
}

export const OutrosOption: OptionTypes = {
    name: 'Outros',
    products: [
        {
            name: 'Passáros',
            types: ['Acessórios', 'Alimentação', 'Medicina e Saúde', 'Acessórios para Alimentação', 'Limpeza']
        },
        {
            name: 'Petlovers',
            types: ['Produtos para o seu Carro', 'Geek', 'Roupas e Acessórios']
        }
    ]
}

export const PlanosOptions: OptionTypes = {
    name: 'Planos',
    products: [
        {
            name: 'Plano de Saúde',
            types: []
        },
        {
            name: 'Plano de Saúde - Empresa',
            types: []
        },
        {
            name: 'Petlove Prime',
            types: []
        },
        {
            name: 'Seja Credenciado',
            types: []
        },
        {
            name: 'Glossário de doenças',
            types: []
        },
    ]
}
