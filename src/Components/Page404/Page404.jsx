import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Page404.module.css';

const Page404 = () => (
    <div className={styles.page404}>
        <h1>404.</h1>
        <h3>Page is not found</h3>
        Try to get back to <Link to ="/">Main Page</Link>
    </div>
);

export default Page404;