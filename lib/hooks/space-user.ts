/* eslint-disable */
import type { Prisma, SpaceUser } from '@prisma/client';
import { useContext } from 'react';
import {
    RequestHandlerContext,
    type RequestOptions,
    type PickEnumerable,
    type CheckSelect,
} from '@zenstackhq/swr/runtime';
import * as request from '@zenstackhq/swr/runtime';

export function useMutateSpaceUser() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/spaceUser/find`,
        `${endpoint}/spaceUser/aggregate`,
        `${endpoint}/spaceUser/count`,
        `${endpoint}/spaceUser/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createSpaceUser<T extends Prisma.SpaceUserCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.SpaceUserCreateArgs>,
    ) {
        return await request.post<CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>>, true>(
            `${endpoint}/spaceUser/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManySpaceUser<T extends Prisma.SpaceUserCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.SpaceUserCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/spaceUser/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updateSpaceUser<T extends Prisma.SpaceUserUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.SpaceUserUpdateArgs>,
    ) {
        return await request.put<Prisma.SpaceUserGetPayload<T>, true>(
            `${endpoint}/spaceUser/update`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function updateManySpaceUser<T extends Prisma.SpaceUserUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.SpaceUserUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(
            `${endpoint}/spaceUser/updateMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function upsertSpaceUser<T extends Prisma.SpaceUserUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.SpaceUserUpsertArgs>,
    ) {
        return await request.post<Prisma.SpaceUserGetPayload<T>, true>(
            `${endpoint}/spaceUser/upsert`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteSpaceUser<T extends Prisma.SpaceUserDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.SpaceUserDeleteArgs>,
    ) {
        return await request.del<Prisma.SpaceUserGetPayload<T>, true>(
            `${endpoint}/spaceUser/delete`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteManySpaceUser<T extends Prisma.SpaceUserDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.SpaceUserDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(
            `${endpoint}/spaceUser/deleteMany`,
            args,
            mutate,
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

export function useFindManySpaceUser<T extends Prisma.SpaceUserFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceUserFindManyArgs>,
    options?: RequestOptions<Array<Prisma.SpaceUserGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.SpaceUserGetPayload<T>>>(`${endpoint}/spaceUser/findMany`, args, options, fetch);
}

export function useFindUniqueSpaceUser<T extends Prisma.SpaceUserFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceUserFindUniqueArgs>,
    options?: RequestOptions<Prisma.SpaceUserGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.SpaceUserGetPayload<T>>(`${endpoint}/spaceUser/findUnique`, args, options, fetch);
}

export function useFindFirstSpaceUser<T extends Prisma.SpaceUserFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceUserFindFirstArgs>,
    options?: RequestOptions<Prisma.SpaceUserGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.SpaceUserGetPayload<T>>(`${endpoint}/spaceUser/findFirst`, args, options, fetch);
}

export function useAggregateSpaceUser<T extends Prisma.SpaceUserAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.SpaceUserAggregateArgs>,
    options?: RequestOptions<Prisma.GetSpaceUserAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetSpaceUserAggregateType<T>>(`${endpoint}/spaceUser/aggregate`, args, options, fetch);
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
    options?: RequestOptions<
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
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
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
    >(`${endpoint}/spaceUser/groupBy`, args, options, fetch);
}

export function useCountSpaceUser<T extends Prisma.SpaceUserCountArgs>(
    args?: Prisma.Subset<T, Prisma.SpaceUserCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SpaceUserCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SpaceUserCountAggregateOutputType>
            : number
    >(`${endpoint}/spaceUser/count`, args, options, fetch);
}
