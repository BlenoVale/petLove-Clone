import { CachorroOption } from "../jsons/Options"
import { GatoOption } from "../jsons/Options"
import { OptioTypes } from "../types/OptionTypes"


export const getProductOptions = (option: string) => {
    console.log('rodou o getProductOptions');
    if (option !== '') {
        switch (option) {
            case CachorroOption.name:
                return CachorroOption.products;
                break;
            case GatoOption.name:
                return GatoOption.products;
                break;
        }
    }
}