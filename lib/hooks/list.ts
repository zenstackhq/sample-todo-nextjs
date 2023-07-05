/* eslint-disable */
import type { Prisma, List } from '@prisma/client';
import { useContext } from 'react';
import { RequestHandlerContext, type RequestOptions } from './_helper';
import * as request from './_helper';

export function useMutateList() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/list/find`,
        `${endpoint}/list/aggregate`,
        `${endpoint}/list/count`,
        `${endpoint}/list/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createList<T extends Prisma.ListCreateArgs>(args: Prisma.SelectSubset<T, Prisma.ListCreateArgs>) {
        try {
            return await request.post<Prisma.CheckSelect<T, List, Prisma.ListGetPayload<T>>>(
                `${endpoint}/list/create`,
                args,
                mutate,
                fetch,
            );
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function createManyList<T extends Prisma.ListCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.ListCreateManyArgs>,
    ) {
        try {
            return await request.post<Prisma.BatchPayload>(`${endpoint}/list/createMany`, args, mutate, fetch);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function updateList<T extends Prisma.ListUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.ListUpdateArgs>) {
        try {
            return await request.put<Prisma.ListGetPayload<T>>(`${endpoint}/list/update`, args, mutate, fetch);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function updateManyList<T extends Prisma.ListUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.ListUpdateManyArgs>,
    ) {
        try {
            return await request.put<Prisma.BatchPayload>(`${endpoint}/list/updateMany`, args, mutate, fetch);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function upsertList<T extends Prisma.ListUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.ListUpsertArgs>) {
        try {
            return await request.post<Prisma.ListGetPayload<T>>(`${endpoint}/list/upsert`, args, mutate, fetch);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function deleteList<T extends Prisma.ListDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.ListDeleteArgs>) {
        try {
            return await request.del<Prisma.ListGetPayload<T>>(`${endpoint}/list/delete`, args, mutate, fetch);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function deleteManyList<T extends Prisma.ListDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.ListDeleteManyArgs>,
    ) {
        try {
            return await request.del<Prisma.BatchPayload>(`${endpoint}/list/deleteMany`, args, mutate, fetch);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }
    return { createList, createManyList, updateList, updateManyList, upsertList, deleteList, deleteManyList };
}

export function useFindManyList<T extends Prisma.ListFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ListFindManyArgs>,
    options?: RequestOptions<Array<Prisma.ListGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.ListGetPayload<T>>>(`${endpoint}/list/findMany`, args, options, fetch);
}

export function useFindUniqueList<T extends Prisma.ListFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ListFindUniqueArgs>,
    options?: RequestOptions<Prisma.ListGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.ListGetPayload<T>>(`${endpoint}/list/findUnique`, args, options, fetch);
}

export function useFindFirstList<T extends Prisma.ListFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ListFindFirstArgs>,
    options?: RequestOptions<Prisma.ListGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.ListGetPayload<T>>(`${endpoint}/list/findFirst`, args, options, fetch);
}

export function useAggregateList<T extends Prisma.ListAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.ListAggregateArgs>,
    options?: RequestOptions<Prisma.GetListAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetListAggregateType<T>>(`${endpoint}/list/aggregate`, args, options, fetch);
}

export function useGroupByList<
    T extends Prisma.ListGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ListGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.ListGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.TupleToUnion<T['by']>,
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
    args?: Prisma.SubsetIntersection<T, Prisma.ListGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.ListGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.ListGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.ListGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.ListGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.ListGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.ListGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.ListGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.ListGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/list/groupBy`, args, options, fetch);
}

export function useCountList<T extends Prisma.ListCountArgs>(
    args?: Prisma.Subset<T, Prisma.ListCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ListCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ListCountAggregateOutputType>
            : number
    >(`${endpoint}/list/count`, args, options, fetch);
}
