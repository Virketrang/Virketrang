import { rolesResource } from './roles.table.component.api'
import styles from './roles-table.component.module.css'

const RolesTable = () => {
    return (
        <table class={styles.table}>
            <thead>
                <tr>
                    <th>Stillingsbetegnelse</th>
                    <th>Beskrivelse</th>
                    <th>Tilknyttede personer</th>
                    <th>Tilladelser</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <For
                    each={rolesResource()}
                    fallback={
                        <tr class="loading">
                            <td>Indlæser...</td>
                        </tr>
                    }
                >
                    {(role) => (
                        <tr>
                            <td class={styles.name}>{role.title}</td>
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
                    )}
                </For>
            </tbody>
        </table>
    )
}

export default RolesTable
