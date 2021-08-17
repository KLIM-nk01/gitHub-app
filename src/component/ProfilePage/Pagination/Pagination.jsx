import React from 'react';
import Pagination_style from './Pagination.module.scss'

const Pagination = ({repoPerCount, totalRepositories, paginate}) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalRepositories / repoPerCount); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={Pagination_style.pagination_wrapper}>
            {
                pageNumbers.map(number => (
                    <a className={Pagination_style.ref} href={'#'} onClick={(e) => {
                        paginate(number)
                    }} key={number}>
                        {
                            number
                        }
                    </a>
                ))
            }

        </div>
    );
};

export default Pagination;