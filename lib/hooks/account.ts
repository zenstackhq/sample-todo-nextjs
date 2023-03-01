/* eslint-disable */
import type { Prisma, Account } from "@prisma/client";
import { useContext } from 'react';
import { RequestHandlerContext, type RequestOptions } from '@zenstackhq/react/runtime';
import * as request from '@zenstackhq/react/runtime';

export function useAccount() {
    const { endpoint } = useContext(RequestHandlerContext);
    const prefixesToMutate = [`${endpoint}/account/find`, `${endpoint}/account/aggregate`, `${endpoint}/account/count`, `${endpoint}/account/groupBy`];
    const mutate = request.getMutate(prefixesToMutate);

    async function create<T extends Prisma.AccountCreateArgs>(args: Prisma.SelectSubset<T, Prisma.AccountCreateArgs>) {
        try {
            return await request.post<Prisma.SelectSubset<T, Prisma.AccountCreateArgs>, Prisma.CheckSelect<T, Account, Prisma.AccountGetPayload<T>>>(`${endpoint}/account/create`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.extra === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    function findMany<T extends Prisma.AccountFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>, options?: RequestOptions<Array<Prisma.AccountGetPayload<T>>>) {
        return request.get<Array<Prisma.AccountGetPayload<T>>>(`${endpoint}/account/findMany`, args, options);
    }

    function findUnique<T extends Prisma.AccountFindUniqueArgs>(args: Prisma.SelectSubset<T, Prisma.AccountFindUniqueArgs>, options?: RequestOptions<Prisma.AccountGetPayload<T>>) {
        return request.get<Prisma.AccountGetPayload<T>>(`${endpoint}/account/findUnique`, args, options);
    }

    function findFirst<T extends Prisma.AccountFindFirstArgs>(args: Prisma.SelectSubset<T, Prisma.AccountFindFirstArgs>, options?: RequestOptions<Prisma.AccountGetPayload<T>>) {
        return request.get<Prisma.AccountGetPayload<T>>(`${endpoint}/account/findFirst`, args, options);
    }

    async function update<T extends Prisma.AccountUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.AccountUpdateArgs>) {
        try {
            return await request.put<Prisma.SelectSubset<T, Prisma.AccountUpdateArgs>, Prisma.AccountGetPayload<T>>(`${endpoint}/account/update`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.extra === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function updateMany<T extends Prisma.AccountUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.AccountUpdateManyArgs>) {
        return await request.put<Prisma.SelectSubset<T, Prisma.AccountUpdateManyArgs>, Prisma.BatchPayload>(`${endpoint}/account/updateMany`, args, mutate);
    }

    async function upsert<T extends Prisma.AccountUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.AccountUpsertArgs>) {
        try {
            return await request.post<Prisma.SelectSubset<T, Prisma.AccountUpsertArgs>, Prisma.AccountGetPayload<T>>(`${endpoint}/account/upsert`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.extra === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function del<T extends Prisma.AccountDeleteArgs>(args?: Prisma.SelectSubset<T, Prisma.AccountDeleteArgs>) {
        try {
            return await request.del<Prisma.AccountGetPayload<T>>(`${endpoint}/account/delete`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.extra === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function deleteMany<T extends Prisma.AccountDeleteManyArgs>(args?: Prisma.SelectSubset<T, Prisma.AccountDeleteManyArgs>) {
        return await request.del<Prisma.BatchPayload>(`${endpoint}/account/deleteMany`, args, mutate);
    }

    function aggregate<T extends Prisma.AccountAggregateArgs>(args: Prisma.Subset<T, Prisma.AccountAggregateArgs>, options?: RequestOptions<Prisma.GetAccountAggregateType<T>>) {
        return request.get<Prisma.GetAccountAggregateType<T>>(`${endpoint}/account/aggregate`, args, options);
    }

    function groupBy<T extends Prisma.AccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.TupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
        }[OrderFields]>(args: Prisma.SubsetIntersection<T, Prisma.AccountGroupByArgs, OrderByArg> & InputErrors, options?: RequestOptions<{} extends InputErrors ? Prisma.GetAccountGroupByPayload<T> : InputErrors>) {
        return request.get<{} extends InputErrors ? Prisma.GetAccountGroupByPayload<T> : InputErrors>(`${endpoint}/account/groupBy`, args, options);
    }
    return { create, findMany, findUnique, findFirst, update, updateMany, upsert, del, deleteMany, aggregate, groupBy };
}
