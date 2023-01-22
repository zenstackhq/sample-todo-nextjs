import { Space } from '@prisma/client';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { createContext } from 'react';
import { useSpace } from './hooks';

export const UserContext = createContext<User | undefined>(undefined);

export function useCurrentUser() {
    const { data: session } = useSession();
    return session?.user;
}

export const SpaceContext = createContext<Space | undefined>(undefined);

export function useCurrentSpace() {
    const router = useRouter();
    const { findMany } = useSpace();
    const { data: spaces } = findMany(
        {
            where: {
                slug: router.query.slug as string,
            },
        },
        {
            disabled: !router.query.slug,
        }
    );

    return spaces?.[0];
}
