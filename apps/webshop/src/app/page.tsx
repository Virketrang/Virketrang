import { __server__ } from '@constants';
import HttpClient from '@virketrang/http';

HttpClient.baseURL = __server__;

export const metadata = {
    title: 'Liedecke & Noergaard | Forside',
    description: 'Forside',
};

export const revalidate = 86400;

export default function Page() {
    return <div></div>;
}
