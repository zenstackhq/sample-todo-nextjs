import { useCurrentUser } from '@lib/context';
import WithNavBar from 'components/WithNavBar';
import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useList } from '@lib/hooks';
import TodoList from '../components/TodoList';
import { List, User } from '@prisma/client';
import { UserContext } from '@lib/context';
import { useContext, useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react';
import { toast } from 'react-toastify';
import { getEnhancedPrisma } from '../server/enhanced-db';
import { useRouter } from 'next/router';

function CreateDialog({ created }: { created: (list: List) => void }) {
    const user = useContext(UserContext);

    const [modalOpen, setModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [_private, setPrivate] = useState(false);

    const { create } = useList();

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (modalOpen) {
            inputRef.current?.focus();
        }
    }, [modalOpen]);

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const list = await create({
                data: {
                    title,
                    private: _private,
                    owner: { connect: { id: user!.id } },
                },
            });

            if (created && list) {
                created(list);
            }
        } catch (err: any) {
            toast.error(`Failed to create list: ${err.info?.message || err.message}`);
            return;
        }

        toast.success('List created successfully!');

        // reset states
        setTitle('');
        setPrivate(false);

        // close modal
        setModalOpen(false);
    };

    return (
        <>
            <input
                type="checkbox"
                id="create-list-modal"
                className="modal-toggle"
                checked={modalOpen}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setModalOpen(e.currentTarget.checked);
                }}
            />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl mb-8">Create a Todo list</h3>
                    <form onSubmit={onSubmit}>
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center">
                                <label htmlFor="title" className="text-lg inline-block w-20">
                                    Title
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    required
                                    placeholder="Title of your list"
                                    ref={inputRef}
                                    className="input input-bordered w-full max-w-xs mt-2"
                                    value={title}
                                    onChange={(e: FormEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)}
                                />
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="private" className="text-lg inline-block w-20">
                                    Private
                                </label>
                                <input
                                    id="private"
                                    type="checkbox"
                                    className="checkbox"
                                    onChange={(e: FormEvent<HTMLInputElement>) => setPrivate(e.currentTarget.checked)}
                                />
                            </div>
                        </div>
                        <div className="modal-action">
                            <input className="btn btn-primary" type="submit" value="Create" />
                            <label htmlFor="create-list-modal" className="btn btn-outline">
                                Cancel
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

type Props = {
    lists: (List & { owner: User })[];
};

export default function Home(props: Props) {
    const router = useRouter();
    const { findMany } = useList();

    const { data: lists, mutate: refetch } = findMany(
        {
            include: {
                owner: true,
            },
            orderBy: {
                updatedAt: 'desc',
            },
        },
        {
            initialData: props.lists,
        }
    );

    return (
        <WithNavBar>
            <div className="p-8">
                <div className="w-full flex flex-col md:flex-row mb-8 space-y-4 md:space-y-0 md:space-x-4">
                    <label htmlFor="create-list-modal" className="btn btn-primary btn-wide modal-button">
                        Create a list
                    </label>
                </div>

                <ul className="flex flex-wrap gap-6">
                    {lists?.map((list) => (
                        <li key={list.id}>
                            <TodoList value={list} deleted={() => refetch()} />
                        </li>
                    ))}
                </ul>

                <CreateDialog created={() => refetch()} />
            </div>
        </WithNavBar>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ req, res, params }) => {
    const db = await getEnhancedPrisma({ req, res });

    const lists = await db.list.findMany({
        include: {
            owner: true,
        },
        orderBy: {
            updatedAt: 'desc',
        },
    });

    return {
        props: { lists },
    };
};
