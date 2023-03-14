import React from 'react';
import { useDispatch } from 'react-redux';
import { idSort, titleSort, bodySort } from '../../redux/Posts/slice';

import styles from './HeaderTable.module.scss';


const HeaderTable: React.FC = () => {
    let dispatch = useDispatch()
  return (
    <div className={styles.headerContainer}>
        <div className={styles.headerId}>
            <div onClick={() => dispatch(idSort())} className={styles.wrapperId}>
                <p>ID</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                    <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC"/>
                    <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white"/>
                </svg>
            </div>
        </div>
        <div className={styles.headerTitle}>
            <div onClick={() => dispatch(titleSort())} className={styles.wrapperTitle}>
                <p>Заголовок</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                    <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC"/>
                    <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white"/>
                </svg>
            </div>
        </div>
        <div className={styles.headerContent}>
            <div onClick={() => dispatch(bodySort())} className={styles.wrapperContent}>
                <p>Описание</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                    <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC"/>
                    <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white"/>
                </svg>
            </div>
        </div>
    </div>
  );
};

export default HeaderTable;