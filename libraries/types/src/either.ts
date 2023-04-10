import Only from './only';

type Either<T1, T2> = Only<T1, T2> | Only<T2, T1>;

export default Either;
