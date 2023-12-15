/* eslint-disable */
import type { Prisma } from '@prisma/client';
import {
    type GetNextArgs,
    type QueryOptions,
    type InfiniteQueryOptions,
    type MutationOptions,
    type PickEnumerable,
    useHooksContext,
} from '@zenstackhq/swr/runtime';
import metadata from './__model_meta';
import * as request from '@zenstackhq/swr/runtime';

/** @deprecated Use mutation hooks (useCreateXXX, useUpdateXXX, etc.) instead. */
export function useMutateSpaceUser() {
    const { endpoint, fetch } = useHooksContext();
    const invalidate = request.useInvalidation('SpaceUser', metadata);

    /** @deprecated Use `useCreateSpaceUser` hook instead. */
    async function createSpaceUser<T extends Prisma.SpaceUserCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.SpaceUserCreateArgs>,
    ) {
        return await request.mutationRequest<Prisma.SpaceUserGetPayload<Prisma.SpaceUserCreateArgs> | undefined, true>(
            'POST',
            `${endpoint}/spaceUser/create`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useCreateManySpaceUser` hook instead. */
    async function createManySpaceUser<T extends Prisma.SpaceUserCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.SpaceUserCreateManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'POST',
            `${endpoint}/spaceUser/createMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }

    /** @deprecated Use `useUpdateSpaceUser` hook instead. */
    async function updateSpaceUser<T extends Prisma.SpaceUserUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.SpaceUserUpdateArgs>,
    ) {
        return await request.mutationRequest<Prisma.SpaceUserGetPayload<Prisma.SpaceUserUpdateArgs> | undefined, true>(
            'PUT',
            `${endpoint}/spaceUser/update`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useUpdateManySpaceUser` hook instead. */
    async function updateManySpaceUser<T extends Prisma.SpaceUserUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.SpaceUserUpdateManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'PUT',
            `${endpoint}/spaceUser/updateMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }

    /** @deprecated Use `useUpsertSpaceUser` hook instead. */
    async function upsertSpaceUser<T extends Prisma.SpaceUserUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.SpaceUserUpsertArgs>,
    ) {
        return await request.mutationRequest<Prisma.SpaceUserGetPayload<Prisma.SpaceUserUpsertArgs> | undefined, true>(
            'POST',
            `${endpoint}/spaceUser/upsert`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteSpaceUser` hook instead. */
    async function deleteSpaceUser<T extends Prisma.SpaceUserDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.SpaceUserDeleteArgs>,
    ) {
        return await request.mutationRequest<Prisma.SpaceUserGetPayload<Prisma.SpaceUserDeleteArgs> | undefined, true>(
            'DELETE',
            `${endpoint}/spaceUser/delete`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteManySpaceUser` hook instead. */
    async function deleteManySpaceUser<T extends Prisma.SpaceUserDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.SpaceUserDeleteManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'DELETE',
            `${endpoint}/spaceUser/deleteMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }
    return {
        createSpaceUser,
        createManySpaceUser,
        updateSpaceUser,
        updateManySpaceUser,
        upsertSpaceUser,
        deleteSpaceUser,
        deleteManySpaceUser,
    };
}

export function useCreateSpaceUser(
    options?: MutationOptions<
        Prisma.SpaceUserGetPayload<Prisma.SpaceUserCreateArgs> | undefined,
        unknown,
        Prisma.SpaceUserCreateArgs
    >,
) {
    const mutation = request.useModelMutation('SpaceUser', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.SpaceUserCreateArgs>(args: Prisma.SelectSubset<T, Prisma.SpaceUserCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.SpaceUserGetPayload<T> | undefined>;
        },
    };
}

export function useCreateManySpaceUser(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.SpaceUserCreateManyArgs>,
) {
    const mutation = request.useModelMutation('SpaceUser', 'POST', 'createMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.SpaceUserCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserCreateManyArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useFindManySpaceUser<T extends Prisma.SpaceUserFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceUserFindManyArgs>,
    options?: QueryOptions<Array<Prisma.SpaceUserGetPayload<T> & { $optimistic?: boolean }>>,
) {
    return request.useModelQuery('SpaceUser', 'findMany', args, options);
}

export function useInfiniteFindManySpaceUser<
    T extends Prisma.SpaceUserFindManyArgs,
    R extends Array<Prisma.SpaceUserGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.SpaceUserFindManyArgs> | undefined, R>,
    options?: InfiniteQueryOptions<Array<Prisma.SpaceUserGetPayload<T>>>,
) {
    return request.useInfiniteModelQuery('SpaceUser', 'findMany', getNextArgs, options);
}

export function useFindUniqueSpaceUser<T extends Prisma.SpaceUserFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceUserFindUniqueArgs>,
    options?: QueryOptions<Prisma.SpaceUserGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('SpaceUser', 'findUnique', args, options);
}

export function useFindFirstSpaceUser<T extends Prisma.SpaceUserFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceUserFindFirstArgs>,
    options?: QueryOptions<Prisma.SpaceUserGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('SpaceUser', 'findFirst', args, options);
}

export function useUpdateSpaceUser(
    options?: MutationOptions<
        Prisma.SpaceUserGetPayload<Prisma.SpaceUserUpdateArgs> | undefined,
        unknown,
        Prisma.SpaceUserUpdateArgs
    >,
) {
    const mutation = request.useModelMutation('SpaceUser', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.SpaceUserUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.SpaceUserUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.SpaceUserGetPayload<T> | undefined>;
        },
    };
}

export function useUpdateManySpaceUser(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.SpaceUserUpdateManyArgs>,
) {
    const mutation = request.useModelMutation('SpaceUser', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.SpaceUserUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserUpdateManyArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useUpsertSpaceUser(
    options?: MutationOptions<
        Prisma.SpaceUserGetPayload<Prisma.SpaceUserUpsertArgs> | undefined,
        unknown,
        Prisma.SpaceUserUpsertArgs
    >,
) {
    const mutation = request.useModelMutation('SpaceUser', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.SpaceUserUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.SpaceUserUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.SpaceUserGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteSpaceUser(
    options?: MutationOptions<
        Prisma.SpaceUserGetPayload<Prisma.SpaceUserDeleteArgs> | undefined,
        unknown,
        Prisma.SpaceUserDeleteArgs
    >,
) {
    const mutation = request.useModelMutation('SpaceUser', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.SpaceUserDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.SpaceUserDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.SpaceUserGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteManySpaceUser(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.SpaceUserDeleteManyArgs>,
) {
    const mutation = request.useModelMutation('SpaceUser', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.SpaceUserDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserDeleteManyArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useAggregateSpaceUser<T extends Prisma.SpaceUserAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.SpaceUserAggregateArgs>,
    options?: QueryOptions<Prisma.GetSpaceUserAggregateType<T>>,
) {
    return request.useModelQuery('SpaceUser', 'aggregate', args, options);
}

export function useGroupBySpaceUser<
    T extends Prisma.SpaceUserGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.SpaceUserGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.SpaceUserGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
          ? {
                [P in HavingFields]: P extends ByFields
                    ? never
                    : P extends string
                      ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                      : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
                ? ByValid extends Prisma.True
                    ? {}
                    : {
                          [P in OrderFields]: P extends ByFields
                              ? never
                              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                      }[OrderFields]
                : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
              ? 'orderBy' extends Prisma.Keys<T>
                  ? ByValid extends Prisma.True
                      ? {}
                      : {
                            [P in OrderFields]: P extends ByFields
                                ? never
                                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                        }[OrderFields]
                  : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
>(
    args?: Prisma.SubsetIntersection<T, Prisma.SpaceUserGroupByArgs, OrderByArg> & InputErrors,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.SpaceUserGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.SpaceUserGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.SpaceUserGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.SpaceUserGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    return request.useModelQuery('SpaceUser', 'groupBy', args, options);
}

export function useCountSpaceUser<T extends Prisma.SpaceUserCountArgs>(
    args?: Prisma.Subset<T, Prisma.SpaceUserCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SpaceUserCountAggregateOutputType>
            : number
    >,
) {
    return request.useModelQuery('SpaceUser', 'count', args, options);
}
