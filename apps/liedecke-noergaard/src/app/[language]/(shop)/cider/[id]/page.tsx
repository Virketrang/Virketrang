const Page = ({ params }: { params: { id: number } }) => {
    return <div>{params.id}</div>;
};

export default Page;
