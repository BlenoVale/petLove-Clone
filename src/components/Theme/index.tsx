import { ReactNode } from 'react';
import { Header } from '../Header';
import { OptionsBar } from '../OptionsBar';
import * as C from './styles';
import { CupomBanner } from '../CupomBanner';

type Props = {
    children: ReactNode;
}
export const Theme = ({ children }: Props) => {

    return (
        <C.Container>
            <C.Area>
                <Header />
                <OptionsBar />
                <CupomBanner />
                <C.Page>
                    {children}
                </C.Page>
            </C.Area>
        </C.Container>
    );
}