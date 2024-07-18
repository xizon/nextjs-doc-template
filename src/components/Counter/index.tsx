import { useState } from 'react'
import styles from './index.module.css'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)} className={styles.counter}>Clicked {count} times</button>
        </div>
    );
};

export default Counter;
