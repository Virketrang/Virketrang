export default function Padding(
    arg0: string | number,
    arg1?: string | number,
    arg2?: string | number,
    arg3?: string | number
) {
    if (arg0 && arg1 && arg2 && arg3) return `${arg0} ${arg1} ${arg2} ${arg3}`;
    if (arg0 && arg1 && arg2) return `${arg0} ${arg1} ${arg2}`;
    if (arg0 && arg1) return `${arg0} ${arg1}`;
    return `${arg0}`;
}
