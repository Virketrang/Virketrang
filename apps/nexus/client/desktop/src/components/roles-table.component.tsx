'use client'
import useSWR from 'swr'

const fetcher = (url: RequestInfo, init?: RequestInit): Promise<any> =>
    fetch(url, { ...init, credentials: 'include' }).then((res) => res.json())

const RolesTable = () => {
    const { data, error, isLoading } = useSWR<Http.Success<Entity.Role[]>>(
        'http://localhost:8080/api/v1/roles',
        fetcher
    )

    return (
        <table className="border-collapse my-4 w-full text-sm">
            <thead>
                <tr className="border-b border-opacity-10">
                    <th className="text-left font-bold py-3">Stillingsbetegnelse</th>
                    <th className="text-left font-bold py-3">Beskrivelse</th>
                    <th className="text-left font-bold py-3">Tilknyttede personer</th>
                    <th className="text-left font-bold py-3">Tilladelser</th>
                    <th className="text-left font-bold py-3"></th>
                </tr>
            </thead>
            <tbody>
                {!isLoading &&
                    !error &&
                    data?.body.map((role) => (
                        <tr className="border-b border-opacity-10 h-16">
                            <td className="py-3 font-semibold">{role.title}</td>
                            <td>{role.description}</td>
                            <td>0</td>
                            <td>0</td>
                            <td>
                                <button onClick={() => {}}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24"
                                        viewBox="0 -960 960 960"
                                        width="24"
                                    >
                                        <path d="M258.461-440q-16.5 0-28.25-11.75T218.461-480q0-16.5 11.75-28.25t28.25-11.75q16.501 0 28.251 11.75t11.75 28.25q0 16.5-11.75 28.25T258.461-440ZM480-440q-16.5 0-28.25-11.75T440-480q0-16.5 11.75-28.25T480-520q16.5 0 28.25 11.75T520-480q0 16.5-11.75 28.25T480-440Zm221.539 0q-16.501 0-28.251-11.75T661.538-480q0-16.5 11.75-28.25T701.539-520q16.5 0 28.25 11.75t11.75 28.25q0 16.5-11.75 28.25T701.539-440Z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                {isLoading && (
                    <tr>
                        <td colSpan={5}>Loading...</td>
                    </tr>
                )}
                {error && (
                    <tr>
                        <td colSpan={5}>Error...</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default RolesTable
