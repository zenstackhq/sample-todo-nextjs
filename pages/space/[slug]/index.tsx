import { SpaceContext, UserContext } from "@lib/context";
import { Space, User } from "@prisma/client";
import BreadCrumb from "components/BreadCrumb";
import SpaceMembers from "components/SpaceMembers";
import WithNavBar from "components/WithNavBar";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { getEnhancedPrisma } from "server/enhanced-db";

type Props = {
    space: Space;
};

export default function SpaceHome(props: Props) {
    const router = useRouter();

    return (
        <WithNavBar>
            <div className="px-8 py-2">
                <BreadCrumb space={props.space} />
            </div>
            <div className="p-8">
                <div className="w-full flex flex-col md:flex-row mb-8 space-y-4 md:space-y-0 md:space-x-4">
                    <SpaceMembers />
                </div>
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

    return {
        props: { space },
    };
};
