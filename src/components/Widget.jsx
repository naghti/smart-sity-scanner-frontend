import React from 'react';
import styles from './styles/Widget.module.css'
import state from "../states/state";

const Widget = () => {
    console.log(state.widgetInfo)
    return (
        <div
            className={styles.widget__box}
            onClick={() => state.widget = !state.widget}
        >
            <div
                className={styles.widget}
                onClick={e => e.stopPropagation()}
            >
                <div
                    className={styles.widget__closeBox}
                >
                    <div
                        onClick={() => state.widget = !state.widget}
                        className={styles.widget__close}
                    >
                        <svg className="svg" width="20" height="20" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z"
                                fill-rule="nonzero" fill-opacity="1" fill="#000" stroke="none">
                            </path>
                        </svg>
                    </div>
                </div>
                {<div dangerouslySetInnerHTML={{ __html: state.widgetInfo.body.innerHTML   }} />}
                <div>


                </div>
            </div>
        </div>
    );
};

export default Widget;