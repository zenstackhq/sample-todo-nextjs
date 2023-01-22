import { withPresets } from '@zenstackhq/runtime';
import type { GetServerSidePropsContext } from 'next';
import { getServerAuthSession } from './auth';
import { prisma } from './db';

export async function getEnhancedPrisma(ctx: {
    req: GetServerSidePropsContext['req'];
    res: GetServerSidePropsContext['res'];
}) {
    const session = await getServerAuthSession(ctx);
    return withPresets(prisma, { user: session?.user });
}
