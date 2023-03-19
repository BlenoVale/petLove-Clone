import { CachorroOption } from "../jsons/Options"
import { GatoOption } from "../jsons/Options"


export const getProductOptions = (option: string) => {
    if (option != '') {
        switch (option) {
            case CachorroOption.name:
                return CachorroOption;
                break;
            case GatoOption.name:
                return GatoOption;
                break;
            default:
                return CachorroOption;
                break;
        }
    }
}