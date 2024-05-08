import { $Company } from '../../../stores'

const BusinessSelect = () => {
    const store = useStore($Company)
    const companies = useStore($Companies)
    const [open, setOpen] = createSignal(false)

    return (
        <>
            <div
                flex
                align-items:center
                cursor:pointer
                position:relative
                gap="0.5rem"
                font-size:medium
                color:secondary
                fill:secondary
                role="combobox"
                onClick={() => setOpen(!open())}
            >
                <Show when={!!store()} fallback={null}>
                    <span font-weight:bold>{(store() as Entity.Company).company_name}</span>
                </Show>
                <button>
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M480-371.923 267.692-584.231 296-612.539l184 184 184-184 28.308 28.308L480-371.923Z" />
                    </svg>
                </button>
                <Show when={open()} fallback={null}>
                    <div
                        elevated
                        fg-black
                        bg-white
                        position:absolute
                        border-radius="0.25rem"
                        top="2.75rem"
                        width="12rem"
                        padding="0.5rem 1rem"
                    >
                        <For each={companies()} fallback={<div>Indlæser...</div>}>
                            {(company) => (
                                <button
                                    flex
                                    gap="1rem"
                                    onClick={() => {
                                        $Company.set(company)
                                        console.log(company)
                                        document.cookie = `nexus_company=${company.id}; Path=/; SameSite=Lax;`
                                    }}
                                >
                                    <h4
                                        border-radius="0.25rem"
                                        grid
                                        place-items:center
                                        font-weight:regular
                                        fg-white
                                        size="2rem"
                                        style={{ background: Utils.stringToColour(company.company_name) }}
                                    >
                                        {company.company_name.charAt(0).toUpperCase()}
                                    </h4>
                                    <span>{company.company_name}</span>
                                </button>
                            )}
                        </For>
                    </div>
                </Show>
            </div>
        </>
    )
}

export default BusinessSelect
