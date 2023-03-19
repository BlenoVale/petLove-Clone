export const getMarginLeftMenuDD = (option: string) => {
    switch (option) {
        case 'Cachorro':
            return 15;
            break;
        case 'Gato':
            return 20;
            break;
        default:
            return 0;
            break;
    }
}