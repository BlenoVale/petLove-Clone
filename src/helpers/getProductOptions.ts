import { CachorroOption, GatoOption, OutrosOption, PlanosOptions } from "../jsons/Options";

export const getProductOptions = (option: string) => {
    if (option != '') {
        switch (option) {
            case CachorroOption.name:
                return CachorroOption;
                break;
            case GatoOption.name:
                return GatoOption;
                break;
            case OutrosOption.name:
                return OutrosOption;
                break;
            case PlanosOptions.name:
                return PlanosOptions;
                break;
            default:
                return undefined;
                break;
        }
    }
}