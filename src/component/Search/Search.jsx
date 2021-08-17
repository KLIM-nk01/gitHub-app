import React, {useState} from 'react';
import Search_style from './Search.module.scss'


const Search = ({getUserData}) => {
    const [value, setValue] = useState('')

    const cons = (e) => {
        if (e.charCode === 13) {
            e.preventDefault()
            getUserData(value)
            setValue('')

        }
    }

    return (

            <input
                className={Search_style.searchWrapper}
                placeholder={'Enter User Name'}
                onChange={event => setValue(event.target.value)}
                onKeyPress={cons}
                type={'text'}
                value={value}
            />


    );
};

export default Search;