import React from 'react'

//
// テキスト入力コンポーネント
//
type TextInputProp = {
    name: string;
}

const TextInput = (prop: TextInputProp) => {
    const { name } = prop

    return (
        <div>
            <label htmlFor={name}>{name}: </label>
            <input type="text" name={name} />
        </div>
    )
}

//
// 数値入力コンポーネント
//
type NumberInputProp = {
    name: string;
    minDigit: number;
    maxDigit: number;
}

const NumberInput = (prop: NumberInputProp) => {
    const { name, minDigit, maxDigit } = prop

    return (
        <div>
            <label htmlFor={name}>{name}: </label>
            <input type="number" name={name} />
        </div>
    )
}

//
// セレクトボックスコンポーネント
//
type SelectboxProp = {
    name: string;
    optionList: string[];
}

const Selectbox = (prop: SelectboxProp) => {
    const { name, optionList } = prop

    return (
        <div>
            <label htmlFor={name}>{name}: </label>
            <select name={name}>
                {optionList.map((value) => <option value={value} key={value}>{value}</option>)}
            </select>
        </div>
    )
}

//
// フォーム部分コンポーネント
//
export const Form = () => {
    const fiscalYearPrep: NumberInputProp = { name: '事業年度', minDigit: 4, maxDigit: 4 }
    const nameProp: TextInputProp = { name: '氏名' };
    const sportsProp: SelectboxProp = { name: '好きなスポーツ', optionList: ['boxing', 'baseball', 'basketball'] }

    return (
        <form action=''>
            <NumberInput name={fiscalYearPrep.name} minDigit={fiscalYearPrep.minDigit} maxDigit={fiscalYearPrep.maxDigit} />
            <TextInput name={nameProp.name} />
            <Selectbox name={sportsProp.name} optionList={sportsProp.optionList} />
            <button type="submit">送信</button>
        </form>
    )
}
