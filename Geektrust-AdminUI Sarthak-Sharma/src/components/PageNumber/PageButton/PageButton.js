import styles from './PageButton.module.css';

const PageButton = ({ content, isDisabled, isSelected, onClick }) => {
    return (
        <>
            <button
                className={`${styles.actionBtn} ${
                    isSelected ? styles.selected : ''
                }`}
                disabled={isDisabled}
                onClick={onClick}
            >
                <span>{content}</span>
            </button>
        </>
    );
};

export default PageButton;
