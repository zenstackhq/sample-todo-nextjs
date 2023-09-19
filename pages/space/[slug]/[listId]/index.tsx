import { PlusIcon } from '@heroicons/react/24/outline';
import { useCurrentUser } from '@lib/context';
import { useInfiniteFindManyTodo, useMutateTodo } from '@lib/hooks';
import { List, Space } from '@prisma/client';
import BreadCrumb from 'components/BreadCrumb';
import TodoComponent from 'components/Todo';
import WithNavBar from 'components/WithNavBar';
import { GetServerSideProps } from 'next';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { getEnhancedPrisma } from 'server/enhanced-db';

type Props = {
    space: Space;
    list: List;
};

const PAGE_SIZE = 5;

export default function TodoList(props: Props) {
    const user = useCurrentUser();
    const [title, setTitle] = useState('');
    const { createTodo } = useMutateTodo();

    const {
        data: pages,
        mutate: refetch,
        size,
        setSize,
    } = useInfiniteFindManyTodo(
        (pageIndex, previousPageData) => {
            if (previousPageData && !previousPageData.length) {
                return null;
            }
            return {
                where: { listId: props.list.id },
                include: {
                    owner: true,
                },
                orderBy: {
                    updatedAt: 'desc',
                },
                take: PAGE_SIZE,
                skip: pageIndex * PAGE_SIZE,
            };
        },
        {
            disabled: !props.list,
        }
    );

    const isEmpty = pages?.[0]?.length === 0;
    const isReachingEnd = isEmpty || (pages && pages[pages.length - 1].length < PAGE_SIZE);

    const _createTodo = async () => {
        try {
            const todo = await createTodo({
                data: {
                    title,
                    owner: { connect: { id: user!.id } },
                    list: { connect: { id: props.list.id } },
                },
            });
            console.log(`Todo created: ${todo}`);
            setTitle('');
            refetch();
        } catch (err: any) {
            toast.error(`Failed to create todo: ${err.info?.message || err.message}`);
        }
    };

    if (!props.space || !props.list) {
        return <></>;
    }

    return (
        <WithNavBar>
            <div className="px-8 py-2">
                <BreadCrumb space={props.space} list={props.list} />
            </div>
            <div className="container w-full flex flex-col items-center py-12 mx-auto">
                <h1 className="text-2xl font-semibold mb-4">{props.list?.title}</h1>
                <div className="flex space-x-2">
                    <input
                        type="text"
                        placeholder="Type a title and press enter"
                        className="input input-bordered w-72 max-w-xs mt-2"
                        value={title}
                        onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === 'Enter') {
                                _createTodo();
                            }
                        }}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setTitle(e.currentTarget.value);
                        }}
                    />
                    <button onClick={() => _createTodo()}>
                        <PlusIcon className="w-6 h-6 text-gray-500" />
                    </button>
                </div>

                {isEmpty && <p className="py-4">No items found.</p>}

                <ul className="flex flex-col space-y-4 py-8 w-11/12 md:w-auto">
                    {pages?.map((todos, index) => (
                        <React.Fragment key={index}>
                            {todos.map((todo) => (
                                <TodoComponent
                                    key={todo.id}
                                    value={todo}
                                    updated={() => {
                                        refetch();
                                    }}
                                    deleted={() => {
                                        refetch();
                                    }}
                                />
                            ))}
                        </React.Fragment>
                    ))}
                </ul>

                {!isReachingEnd && (
                    <button className="btn btn-sm btn-ghost" onClick={() => setSize(size + 1)}>
                        Load more
                    </button>
                )}
            </div>
        </WithNavBar>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ req, res, params }) => {
    const db = await getEnhancedPrisma({ req, res });
    const space = await db.space.findUnique({
        where: { slug: params!.slug as string },
    });
    if (!space) {
        return {
            notFound: true,
        };
    }

    const list = await db.list.findUnique({
        where: { id: params!.listId as string },
    });
    if (!list) {
        return {
            notFound: true,
        };
    }

    return {
        props: { space, list },
    };
};
