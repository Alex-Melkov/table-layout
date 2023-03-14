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
    const url = new URL(window.location.href);
    if (url.searchParams.has('pageNumber')) {
      url.searchParams.delete('pageNumber')
    }
    url.searchParams.append("pageNumber", `${pageNumber}`);
    window.history.replaceState(null, '', url)
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

