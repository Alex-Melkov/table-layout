import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import HeaderTable from '../HeaderTable/HeaderTable';
import RowTable from '../RowTable/RowTable';
import Skeleton from '../RowTable/Skeleton';

import { IPost } from '../../redux/Posts/types';

import styles from './Table.module.scss';

const Table: React.FC = () => {
  let { items, status } = useSelector((state: RootState) => state.postReducer);
  let { search } = useSelector((state: RootState) => state.filterReducer);

  let skeletons = [...new Array(10)].map((item, index) => <Skeleton key={index} />);

  const filterPosts = () => {
    if (search) {
      let searchArr = items.filter((item: IPost, index) => String(item.id).includes(search.toLowerCase()) || item.title.includes(search.toLowerCase()) || item.body.includes(search.toLowerCase()));
      return searchArr.map((item: IPost, index) => (<RowTable key={index} {...item} />));
    }
    return items.map((item: IPost, index) => (<RowTable key={index} {...item} />));
  }

  return (
    <div className={styles.tableContainer}>
        <HeaderTable />
        {
          status === 'error' ? ( <h1 style={{textAlign: "center", marginTop: "200px", marginBottom: "200px"}}>Ошибка загрузки постов</h1> )
           : (
          status === 'loading' ? skeletons : filterPosts()
          )
        }
    </div>
  );
};

export default Table;