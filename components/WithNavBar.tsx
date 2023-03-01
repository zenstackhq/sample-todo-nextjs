import { useCurrentUser } from '@lib/context';
import NavBar from './NavBar';

type Props = {
    children: JSX.Element | JSX.Element[] | undefined;
};

export default function WithNavBar({ children }: Props) {
    const user = useCurrentUser();

    return (
        <>
            <NavBar user={user} />
            {children}
        </>
    );
}
