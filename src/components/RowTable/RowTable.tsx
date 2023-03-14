import React from 'react';

import styles from './RowTable.module.scss';

type PropsRowTable = {
    id: number;
    title: string;
    body: string
}

const RowTable: React.FC<PropsRowTable> = ( {id, title, body} ) => {
  return (
    <table className={styles.rowContainer}>
        <tbody>
            <tr>
                <td className={styles.rowId}>
                    {id}
                </td>
                <td className={styles.rowTitle}>
                    {title}
                </td>
                <td className={styles.rowContent}>
                    {body}
                </td>
            </tr>
        </tbody>
    </table>
  );
};

export default RowTable;