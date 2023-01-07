import styles from "../quantity/Quantity.module.scss"
import cl from "classnames"
import { useState } from "react";

const Quantity = ({addStyle}) => {
	const [inputValue, setInputValue] = useState(1);

	return (
		<div className={cl(styles.quantity, addStyle ? addStyle : styles.productPage__quantity)}>
			<button type="button" onClick={() => inputValue === 1 ? setInputValue(1) : setInputValue(inputValue - 1)} className={cl(styles.quantity__button, styles.quantity__button_minus)}>
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.75 15.5L7.25 10L12.75 4.5" stroke="#A0A0A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</button>
			<div className={styles.quantity__input}>
				<input type="text" name="form[]" value={inputValue} readOnly />
			</div>
			<button type="button" onClick={() => setInputValue(inputValue + 1)} className={cl(styles.quantity__button, styles.quantity__button_plus)}>
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.75 15.5L7.25 10L12.75 4.5" stroke="#A0A0A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</button>
		</div>
	)
}

export default Quantity