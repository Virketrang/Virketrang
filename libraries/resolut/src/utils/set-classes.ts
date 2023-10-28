const setClasses = (...args: (string | undefined)[]) => args.filter((arg) => arg !== undefined && arg !== '').join(' ')

export default setClasses
