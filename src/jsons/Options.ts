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
        }
    ]
}

export let GatoOption: OptionTypes = {
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
