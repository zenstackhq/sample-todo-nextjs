import { User } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { createContext } from 'react';

export const UserContext = createContext<User | undefined>(undefined);

export function useCurrentUser() {
    const { data: session } = useSession();
    return session?.user;
}
