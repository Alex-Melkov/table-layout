import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';

import { pageGoForward, pageGoBack } from '../../redux/Paginate/slice';

import styles from './PaginateTable.module.scss';

const PaginateTable: React.FC = () => {
  let { pageNumber, pageCount, status } = useSelector((state: RootState) => state.paginateReducer);
  let arrayPages = status === 'loading' ? [...new Array(5)] : [...new Array(pageCount)];
  let dispatch = useDispatch();

  if (window.innerWidth < 600 && window.innerHeight > 400) {
    return (
      <div className={styles.paginateContainer}>
          <button onClick={() => dispatch(pageGoBack())} disabled={pageNumber === 1 ? true : false} className={styles.btnBack}>Назад</button>
          <div className={styles.pageCount}>
            {
              status === 'error' ? ( <h5 style={{textAlign: "center"}}>Ошибка загрузки количества страниц</h5> ) : (
                status === 'loading' ? ( <h5 style={{textAlign: "center"}}>Загрузка...</h5> ) : (
                  <>
                    <div className={styles.pageItemActive}>{pageNumber}</div>
                    <div className={styles.pageItem}> - </div>
                    <div className={styles.pageItem}>{pageCount}</div>
                  </>
                )
              )
            }
          </div>
          <button onClick={() => dispatch(pageGoForward())} disabled={pageNumber === arrayPages.length ? true : false} className={styles.btnForward}>Далее</button>
      </div>
    );
  }

  return (
    <div className={styles.paginateContainer}>
        <button onClick={() => dispatch(pageGoBack())} disabled={pageNumber === 1 ? true : false} className={styles.btnBack}>Назад</button>
        <div className={styles.pageCount}>
          {
            status === 'error' ? ( <h3 style={{textAlign: "center"}}>Ошибка загрузки количества страниц</h3> ) : (
              arrayPages.map((item, index) => (
                <div key={index} className={pageNumber === index + 1 ? styles.pageItemActive : styles.pageItem}>{index + 1}</div>
              ))
            )
          }
        </div>
        <button onClick={() => dispatch(pageGoForward())} disabled={pageNumber === arrayPages.length ? true : false} className={styles.btnForward}>Далее</button>
    </div>
  );
};

export default PaginateTable;