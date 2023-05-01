import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return { title: 'Liedecke & Noergaard' };
}

const Page = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    // const product = await HttpClient.get(`/products/${id}`, { errorMessage: 'Kunne ikke indlæse produktet' });

    return <div>{id}</div>;
};

export default Page;
