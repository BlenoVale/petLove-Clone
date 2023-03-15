import { ReactNode } from 'react';
import { Header } from '../Header';
import { OptionsBar } from '../OptionsBar';
import * as C from './styles';

type Props = {
    children: ReactNode;
}
export const Theme = ({ children }: Props) => {
    return (
        <C.Container>
            <C.Area>
                <Header />
                <OptionsBar />
                <C.Page>
                    {children}
                </C.Page>
            </C.Area>
        </C.Container>
    );
}