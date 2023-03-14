import React from 'react';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '../../redux/store';

import PaginateTable from '../PaginateTable/PaginateTable';
import Search from '../Search/Search';
import Table from '../Table/Table';

import { fetchPosts } from '../../redux/Posts/asyncAction';
import { fetchPostsCount } from '../../redux/Paginate/asyncActions';

import styles from './App.module.scss';

const App: React.FC = () => {
  let { pageNumber } = useSelector((state: RootState) => state.paginateReducer);
  let dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchPosts(pageNumber));
  }, [pageNumber]);

  React.useEffect(() => {
    dispatch(fetchPostsCount())
  }, []);

  return (
    <div className={styles.container}>
      <Search />
      <Table />
      <PaginateTable />
    </div>
  );
};

export default App;

