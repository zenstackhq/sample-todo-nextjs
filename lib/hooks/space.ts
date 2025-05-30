/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma } from "@zenstackhq/runtime/models";
import { type GetNextArgs, type QueryOptions, type InfiniteQueryOptions, type MutationOptions, type PickEnumerable } from '@zenstackhq/swr/runtime';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
import * as request from '@zenstackhq/swr/runtime';

export function useCreateSpace(options?: MutationOptions<Prisma.SpaceGetPayload<Prisma.SpaceCreateArgs> | undefined, unknown, Prisma.SpaceCreateArgs>) {
    const mutation = request.useModelMutation('Space', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.SpaceCreateArgs>(args: Prisma.SelectSubset<T, Prisma.SpaceCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.SpaceGetPayload<T> | undefined>;
        }
    };
}

export function useCreateManySpace(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.SpaceCreateManyArgs>) {
    const mutation = request.useModelMutation('Space', 'POST', 'createMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.SpaceCreateManyArgs>(args: Prisma.SelectSubset<T, Prisma.SpaceCreateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useFindManySpace<T extends Prisma.SpaceFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.SpaceFindManyArgs>, options?: QueryOptions<Array<Prisma.SpaceGetPayload<T> & { $optimistic?: boolean }>>) {
    return request.useModelQuery('Space', 'findMany', args, options);
}

export function useInfiniteFindManySpace<T extends Prisma.SpaceFindManyArgs, R extends Array<Prisma.SpaceGetPayload<T>>>(getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.SpaceFindManyArgs> | undefined, R>, options?: InfiniteQueryOptions<Array<Prisma.SpaceGetPayload<T>>>) {
    return request.useInfiniteModelQuery('Space', 'findMany', getNextArgs, options);
}

export function useFindUniqueSpace<T extends Prisma.SpaceFindUniqueArgs>(args?: Prisma.SelectSubset<T, Prisma.SpaceFindUniqueArgs>, options?: QueryOptions<Prisma.SpaceGetPayload<T> & { $optimistic?: boolean }>) {
    return request.useModelQuery('Space', 'findUnique', args, options);
}

export function useFindFirstSpace<T extends Prisma.SpaceFindFirstArgs>(args?: Prisma.SelectSubset<T, Prisma.SpaceFindFirstArgs>, options?: QueryOptions<Prisma.SpaceGetPayload<T> & { $optimistic?: boolean }>) {
    return request.useModelQuery('Space', 'findFirst', args, options);
}

export function useUpdateSpace(options?: MutationOptions<Prisma.SpaceGetPayload<Prisma.SpaceUpdateArgs> | undefined, unknown, Prisma.SpaceUpdateArgs>) {
    const mutation = request.useModelMutation('Space', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.SpaceUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.SpaceUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.SpaceGetPayload<T> | undefined>;
        }
    };
}

export function useUpdateManySpace(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.SpaceUpdateManyArgs>) {
    const mutation = request.useModelMutation('Space', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.SpaceUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.SpaceUpdateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useUpsertSpace(options?: MutationOptions<Prisma.SpaceGetPayload<Prisma.SpaceUpsertArgs> | undefined, unknown, Prisma.SpaceUpsertArgs>) {
    const mutation = request.useModelMutation('Space', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.SpaceUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.SpaceUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.SpaceGetPayload<T> | undefined>;
        }
    };
}

export function useDeleteSpace(options?: MutationOptions<Prisma.SpaceGetPayload<Prisma.SpaceDeleteArgs> | undefined, unknown, Prisma.SpaceDeleteArgs>) {
    const mutation = request.useModelMutation('Space', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.SpaceDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.SpaceDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.SpaceGetPayload<T> | undefined>;
        }
    };
}

export function useDeleteManySpace(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.SpaceDeleteManyArgs>) {
    const mutation = request.useModelMutation('Space', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.SpaceDeleteManyArgs>(args: Prisma.SelectSubset<T, Prisma.SpaceDeleteManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useAggregateSpace<T extends Prisma.SpaceAggregateArgs>(args?: Prisma.Subset<T, Prisma.SpaceAggregateArgs>, options?: QueryOptions<Prisma.GetSpaceAggregateType<T>>) {
    return request.useModelQuery('Space', 'aggregate', args, options);
}

export function useGroupBySpace<T extends Prisma.SpaceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.SpaceGroupByArgs['orderBy'] } : { orderBy?: Prisma.SpaceGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    }[OrderFields]>(args?: Prisma.SubsetIntersection<T, Prisma.SpaceGroupByArgs, OrderByArg> & InputErrors, options?: QueryOptions<{} extends InputErrors ?
        Array<PickEnumerable<Prisma.SpaceGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof Prisma.SpaceGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.SpaceGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.SpaceGroupByOutputType[P]>
            }
        > : InputErrors>) {
    return request.useModelQuery('Space', 'groupBy', args, options);
}

export function useCountSpace<T extends Prisma.SpaceCountArgs>(args?: Prisma.Subset<T, Prisma.SpaceCountArgs>, options?: QueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.SpaceCountAggregateOutputType> : number>) {
    return request.useModelQuery('Space', 'count', args, options);
}

export function useCheckSpace(args: { operation: PolicyCrudKind; where?: { id?: string; ownerId?: string; name?: string; slug?: string }; }, options?: QueryOptions<boolean>) {
    return request.useModelQuery('Space', 'check', args, options);
}
