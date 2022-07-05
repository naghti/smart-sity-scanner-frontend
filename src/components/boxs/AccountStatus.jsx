import React from 'react';
import styles from './styles/AccountStatus.module.css'

const AccountStatus = ({status}) => {
    return (
        <div className={styles.accountStatus}>
            <p className={styles.accountStatus__text + ' ' + styles.accountStatus__text_bold}>
                Статус аккаунта:
            </p>
            <p className={styles.accountStatus__text}>
                {status}
            </p>
        </div>
    );
};

export default AccountStatus;