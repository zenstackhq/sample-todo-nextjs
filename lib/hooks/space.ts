/* eslint-disable */
import type { Prisma, Space } from '@prisma/client';
import { useContext } from 'react';
import { RequestHandlerContext, type RequestOptions, type PickEnumerable } from '@zenstackhq/swr/runtime';
import * as request from '@zenstackhq/swr/runtime';

export function useMutateSpace() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/space/find`,
        `${endpoint}/space/aggregate`,
        `${endpoint}/space/count`,
        `${endpoint}/space/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createSpace<T extends Prisma.SpaceCreateArgs>(args: Prisma.SelectSubset<T, Prisma.SpaceCreateArgs>) {
        return await request.post<Prisma.CheckSelect<T, Space, Prisma.SpaceGetPayload<T>>, true>(
            `${endpoint}/space/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManySpace<T extends Prisma.SpaceCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.SpaceCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/space/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updateSpace<T extends Prisma.SpaceUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.SpaceUpdateArgs>) {
        return await request.put<Prisma.SpaceGetPayload<T>, true>(
            `${endpoint}/space/update`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function updateManySpace<T extends Prisma.SpaceUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.SpaceUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(
            `${endpoint}/space/updateMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function upsertSpace<T extends Prisma.SpaceUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.SpaceUpsertArgs>) {
        return await request.post<Prisma.SpaceGetPayload<T>, true>(
            `${endpoint}/space/upsert`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteSpace<T extends Prisma.SpaceDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.SpaceDeleteArgs>) {
        return await request.del<Prisma.SpaceGetPayload<T>, true>(
            `${endpoint}/space/delete`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteManySpace<T extends Prisma.SpaceDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.SpaceDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(
            `${endpoint}/space/deleteMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }
    return { createSpace, createManySpace, updateSpace, updateManySpace, upsertSpace, deleteSpace, deleteManySpace };
}

export function useFindManySpace<T extends Prisma.SpaceFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceFindManyArgs>,
    options?: RequestOptions<Array<Prisma.SpaceGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.SpaceGetPayload<T>>>(`${endpoint}/space/findMany`, args, options, fetch);
}

export function useFindUniqueSpace<T extends Prisma.SpaceFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceFindUniqueArgs>,
    options?: RequestOptions<Prisma.SpaceGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.SpaceGetPayload<T>>(`${endpoint}/space/findUnique`, args, options, fetch);
}

export function useFindFirstSpace<T extends Prisma.SpaceFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceFindFirstArgs>,
    options?: RequestOptions<Prisma.SpaceGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.SpaceGetPayload<T>>(`${endpoint}/space/findFirst`, args, options, fetch);
}

export function useAggregateSpace<T extends Prisma.SpaceAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.SpaceAggregateArgs>,
    options?: RequestOptions<Prisma.GetSpaceAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetSpaceAggregateType<T>>(`${endpoint}/space/aggregate`, args, options, fetch);
}

export function useGroupBySpace<
    T extends Prisma.SpaceGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.SpaceGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.SpaceGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.SpaceGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.SpaceGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.SpaceGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.SpaceGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.SpaceGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.SpaceGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.SpaceGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.SpaceGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.SpaceGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/space/groupBy`, args, options, fetch);
}

export function useCountSpace<T extends Prisma.SpaceCountArgs>(
    args?: Prisma.Subset<T, Prisma.SpaceCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SpaceCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SpaceCountAggregateOutputType>
            : number
    >(`${endpoint}/space/count`, args, options, fetch);
}
