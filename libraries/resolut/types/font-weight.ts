import { GlobalValues } from '.';

type KeywordValues = 'normal' | 'bold' | 'lighter' | 'bolder';
type NumericKeywordValues = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type FontWeight = KeywordValues & NumericKeywordValues & GlobalValues;

export default FontWeight;
