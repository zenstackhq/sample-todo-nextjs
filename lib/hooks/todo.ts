/* eslint-disable */
import type { Prisma, Todo } from '@prisma/client';
import { useContext } from 'react';
import { RequestHandlerContext, type RequestOptions, type PickEnumerable } from '@zenstackhq/swr/runtime';
import * as request from '@zenstackhq/swr/runtime';

export function useMutateTodo() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/todo/find`,
        `${endpoint}/todo/aggregate`,
        `${endpoint}/todo/count`,
        `${endpoint}/todo/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createTodo<T extends Prisma.TodoCreateArgs>(args: Prisma.SelectSubset<T, Prisma.TodoCreateArgs>) {
        return await request.post<Prisma.CheckSelect<T, Todo, Prisma.TodoGetPayload<T>>, true>(
            `${endpoint}/todo/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManyTodo<T extends Prisma.TodoCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.TodoCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/todo/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updateTodo<T extends Prisma.TodoUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.TodoUpdateArgs>) {
        return await request.put<Prisma.TodoGetPayload<T>, true>(`${endpoint}/todo/update`, args, mutate, fetch, true);
    }

    async function updateManyTodo<T extends Prisma.TodoUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.TodoUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(`${endpoint}/todo/updateMany`, args, mutate, fetch, false);
    }

    async function upsertTodo<T extends Prisma.TodoUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.TodoUpsertArgs>) {
        return await request.post<Prisma.TodoGetPayload<T>, true>(`${endpoint}/todo/upsert`, args, mutate, fetch, true);
    }

    async function deleteTodo<T extends Prisma.TodoDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.TodoDeleteArgs>) {
        return await request.del<Prisma.TodoGetPayload<T>, true>(`${endpoint}/todo/delete`, args, mutate, fetch, true);
    }

    async function deleteManyTodo<T extends Prisma.TodoDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.TodoDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(`${endpoint}/todo/deleteMany`, args, mutate, fetch, false);
    }
    return { createTodo, createManyTodo, updateTodo, updateManyTodo, upsertTodo, deleteTodo, deleteManyTodo };
}

export function useFindManyTodo<T extends Prisma.TodoFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TodoFindManyArgs>,
    options?: RequestOptions<Array<Prisma.TodoGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.TodoGetPayload<T>>>(`${endpoint}/todo/findMany`, args, options, fetch);
}

export function useFindUniqueTodo<T extends Prisma.TodoFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TodoFindUniqueArgs>,
    options?: RequestOptions<Prisma.TodoGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.TodoGetPayload<T>>(`${endpoint}/todo/findUnique`, args, options, fetch);
}

export function useFindFirstTodo<T extends Prisma.TodoFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TodoFindFirstArgs>,
    options?: RequestOptions<Prisma.TodoGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.TodoGetPayload<T>>(`${endpoint}/todo/findFirst`, args, options, fetch);
}

export function useAggregateTodo<T extends Prisma.TodoAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.TodoAggregateArgs>,
    options?: RequestOptions<Prisma.GetTodoAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetTodoAggregateType<T>>(`${endpoint}/todo/aggregate`, args, options, fetch);
}

export function useGroupByTodo<
    T extends Prisma.TodoGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.TodoGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.TodoGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.TodoGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.TodoGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.TodoGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.TodoGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.TodoGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/todo/groupBy`, args, options, fetch);
}

export function useCountTodo<T extends Prisma.TodoCountArgs>(
    args?: Prisma.Subset<T, Prisma.TodoCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TodoCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TodoCountAggregateOutputType>
            : number
    >(`${endpoint}/todo/count`, args, options, fetch);
}
