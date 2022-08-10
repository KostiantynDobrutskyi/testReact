import styles from "./app.module.css"

function NotFoundBlock() {
    return (
        <div className={styles.root}>
            <h1>Sorry, that page doesn’t exist!</h1>
            <p>The page you requested was not found, and we have a fine guess why.</p>
        </div>
    );
}

export default NotFoundBlock;
