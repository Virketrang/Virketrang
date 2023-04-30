const isFluidSize = (string: string | number) => (typeof string === 'number' ? false : /size-fluid-[0-9]/.test(string));

export default isFluidSize;
