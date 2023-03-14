import React from "react";
import ContentLoader from "react-content-loader";

import styles from './RowTable.module.scss';

const Skeleton = () => (
  <ContentLoader
    className={styles.rowContainer}
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 1076 54"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="10" y="5" rx="10" ry="10" width="90" height="45" /> 
    <rect x="118" y="5" rx="10" ry="10" width="510" height="45" /> 
    <rect x="644" y="5" rx="10" ry="10" width="420" height="45" />
  </ContentLoader>
)

export default Skeleton