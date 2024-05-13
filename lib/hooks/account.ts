/* eslint-disable */
import type { Prisma } from "@zenstackhq/runtime/models";
import { type GetNextArgs, type QueryOptions, type InfiniteQueryOptions, type MutationOptions, type PickEnumerable } from '@zenstackhq/swr/runtime';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
import * as request from '@zenstackhq/swr/runtime';

export function useCreateAccount(options?: MutationOptions<Prisma.AccountGetPayload<Prisma.AccountCreateArgs> | undefined, unknown, Prisma.AccountCreateArgs>) {
    const mutation = request.useModelMutation('Account', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.AccountCreateArgs>(args: Prisma.SelectSubset<T, Prisma.AccountCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.AccountGetPayload<T> | undefined>;
        }
    };
}

export function useCreateManyAccount(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.AccountCreateManyArgs>) {
    const mutation = request.useModelMutation('Account', 'POST', 'createMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.AccountCreateManyArgs>(args: Prisma.SelectSubset<T, Prisma.AccountCreateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useFindManyAccount<T extends Prisma.AccountFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>, options?: QueryOptions<Array<Prisma.AccountGetPayload<T> & { $optimistic?: boolean }>>) {
    return request.useModelQuery('Account', 'findMany', args, options);
}

export function useInfiniteFindManyAccount<T extends Prisma.AccountFindManyArgs, R extends Array<Prisma.AccountGetPayload<T>>>(getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.AccountFindManyArgs> | undefined, R>, options?: InfiniteQueryOptions<Array<Prisma.AccountGetPayload<T>>>) {
    return request.useInfiniteModelQuery('Account', 'findMany', getNextArgs, options);
}

export function useFindUniqueAccount<T extends Prisma.AccountFindUniqueArgs>(args?: Prisma.SelectSubset<T, Prisma.AccountFindUniqueArgs>, options?: QueryOptions<Prisma.AccountGetPayload<T> & { $optimistic?: boolean }>) {
    return request.useModelQuery('Account', 'findUnique', args, options);
}

export function useFindFirstAccount<T extends Prisma.AccountFindFirstArgs>(args?: Prisma.SelectSubset<T, Prisma.AccountFindFirstArgs>, options?: QueryOptions<Prisma.AccountGetPayload<T> & { $optimistic?: boolean }>) {
    return request.useModelQuery('Account', 'findFirst', args, options);
}

export function useUpdateAccount(options?: MutationOptions<Prisma.AccountGetPayload<Prisma.AccountUpdateArgs> | undefined, unknown, Prisma.AccountUpdateArgs>) {
    const mutation = request.useModelMutation('Account', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.AccountUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.AccountUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.AccountGetPayload<T> | undefined>;
        }
    };
}

export function useUpdateManyAccount(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.AccountUpdateManyArgs>) {
    const mutation = request.useModelMutation('Account', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.AccountUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.AccountUpdateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useUpsertAccount(options?: MutationOptions<Prisma.AccountGetPayload<Prisma.AccountUpsertArgs> | undefined, unknown, Prisma.AccountUpsertArgs>) {
    const mutation = request.useModelMutation('Account', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.AccountUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.AccountUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.AccountGetPayload<T> | undefined>;
        }
    };
}

export function useDeleteAccount(options?: MutationOptions<Prisma.AccountGetPayload<Prisma.AccountDeleteArgs> | undefined, unknown, Prisma.AccountDeleteArgs>) {
    const mutation = request.useModelMutation('Account', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.AccountDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.AccountDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.AccountGetPayload<T> | undefined>;
        }
    };
}

export function useDeleteManyAccount(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.AccountDeleteManyArgs>) {
    const mutation = request.useModelMutation('Account', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.AccountDeleteManyArgs>(args: Prisma.SelectSubset<T, Prisma.AccountDeleteManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useAggregateAccount<T extends Prisma.AccountAggregateArgs>(args?: Prisma.Subset<T, Prisma.AccountAggregateArgs>, options?: QueryOptions<Prisma.GetAccountAggregateType<T>>) {
    return request.useModelQuery('Account', 'aggregate', args, options);
}

export function useGroupByAccount<T extends Prisma.AccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.AccountGroupByArgs['orderBy'] } : { orderBy?: Prisma.AccountGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]>(args?: Prisma.SubsetIntersection<T, Prisma.AccountGroupByArgs, OrderByArg> & InputErrors, options?: QueryOptions<{} extends InputErrors ?
        Array<PickEnumerable<Prisma.AccountGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof Prisma.AccountGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.AccountGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.AccountGroupByOutputType[P]>
            }
        > : InputErrors>) {
    return request.useModelQuery('Account', 'groupBy', args, options);
}

export function useCountAccount<T extends Prisma.AccountCountArgs>(args?: Prisma.Subset<T, Prisma.AccountCountArgs>, options?: QueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.AccountCountAggregateOutputType> : number>) {
    return request.useModelQuery('Account', 'count', args, options);
}

export function useCheckAccount(args: { operation: PolicyCrudKind; where?: { id?: string; userId?: string; type?: string; provider?: string; providerAccountId?: string; refresh_token?: string; refresh_token_expires_in?: number; access_token?: string; expires_at?: number; token_type?: string; scope?: string; id_token?: string; session_state?: string }; }, options?: QueryOptions<boolean>) {
    return request.useModelQuery('Account', 'check', args, options);
}
