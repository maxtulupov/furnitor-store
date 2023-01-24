import Layout from "../../layout/Layout";
import Breadcrumbs from "../../ui/breadcrumbs/Breadcrumbs";
import styles from "../Checkout/Checkout.module.scss"
import cl from "classnames";
import Link from "next/link";
import { FC, useState, useEffect } from 'react';
import { CatListAside, NaviLinks, SliceCartItem, SliceState } from "../../../../types";
import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem";

interface CheckoutProps {
  naviLinks: NaviLinks[],
  catList: CatListAside[]
}

const Checkout:FC<CheckoutProps> = (props) => {
  const storeItems = useSelector<SliceState, SliceCartItem[]>((state) => state.cart.items);
  const cartSumm = useSelector<SliceState>((state) => state.cart.totalPrice);

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    deliveryMethod: 'delivery1',
    adress: '',
    dateDelivery: '',
    timeDelivery: '',
    payMethod: ''
  });

  const handler = (e) => {
    // console.log(e.target.value);
    setFormState({...formState, [e.target.name]: e.target.value});
    // console.log(formState);
  }

  // name: 'Максим',
  //   phone: '+77777778778',
  //   email: 'sibir@sibir.ru',
  //   deliveryMethod: 'pickUp',
  //   adress: 'sdsd',
  //   dateDelivery: '',
  //   timeDelivery: '',
  //   payMethod: 'sitePay'

  // useEffect(() => {
  //   console.log(formState);
  // }, [formState])

	return (
		<Layout naviLinks={props.naviLinks} catList={props.catList}>
			<main className="main">
				<Breadcrumbs pageTitle="Оформление заказа" />
        <section className={styles.checkout}>
          <div className="container">
            <div className={styles.checkout__content}>
              <div className={cl(styles.checkout__left, styles.leftCheckout)}>
                <h1 className={styles.checkout__title}>Оформление заказа</h1>
                <div className={cl(styles.leftCheckout__items, styles.itemsLeftCheckout)}>
                  <h2 className={styles.itemsLeftCheckout__title}>Данные получателя</h2>
                  <div className={styles.itemsLeftCheckout__two}>
                    <div className={styles.itemsLeftCheckoutInput}>
                      <input onChange={handler} value={formState.name} autoComplete="off" type="text" name="name" placeholder="Имя" className={styles.input} required />
                      <div className={styles.inputErrorMessage}>Обязательное поле</div>
                    </div>
                    <div className={styles.itemsLeftCheckoutInput}>
                      <input onChange={handler} value={formState.phone} autoComplete="off" type="tel" name="phone" placeholder="Номер телефона" className={styles.input} required />
                      <div className={styles.inputErrorMessage}>Укажите номер телефона</div>
                    </div>
                  </div>
                  <div className={cl(styles.itemsLeftCheckoutInput, styles.itemsLeftCheckoutInput__email)}>
                    <input onChange={handler} value={formState.email} autoComplete="off" type="email" name="email" id="" placeholder="Почта" className={styles.input} required />
                    <div className={styles.inputErrorMessage}>Укажите вашу почту</div>
                  </div>
                </div>
                <div className={cl(styles.leftCheckout__items, styles.itemsLeftCheckout)}>
                  <h2 className={styles.itemsLeftCheckout__title}>Способ доставки</h2>
                  <div className={styles.itemsLeftCheckout__content}>
                    <div className={cl(styles.itemsLeftCheckout__delivery, styles.deliveryMethod, styles.deliveryMethod__adres)}>
                      <input type="radio" name="deliveryMethod" value="delivery1" id="delivery1" onClick={handler} defaultChecked={formState.deliveryMethod === 'delivery1' ? true : false} />
                      <label htmlFor="delivery1">
                        <span className={styles.deliveryMethod__title}>Доставка</span>
                        <span className={styles.deliveryMethod__text}>Наша служба доставки привезёт заказ в назначенное время</span>
                      </label>
                    </div>
                    <div className={cl(styles.itemsLeftCheckout__delivery, styles.deliveryMethod, styles.deliveryMethod__pickup)}>
                      <input type="radio" name="deliveryMethod" value="pickUp" id="pickUp" onClick={handler} defaultChecked={formState.deliveryMethod === 'pickUp' ? true : false} />
                      <label htmlFor="pickUp">
                        <span className={styles.deliveryMethod__title}>Самовывоз</span>
                        <span className={styles.deliveryMethod__text}>Заберите заказ бесплатно из магазина</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className={cl(styles.leftCheckout__items, styles.itemsLeftCheckout)}>
                  <h2 className={styles.itemsLeftCheckout__title}>Адрес доставки</h2>
                  <div className={cl(styles.itemsLeftCheckoutInput, styles.itemsLeftCheckoutInput__adress)}>
                    <input autoComplete="off" type="text" name="" id="" placeholder="Населённый пункт, улица" className={styles.input} required />
                    <div className={styles.inputErrorMessage}>Обязательное поле</div>
                  </div>
                  <div className={cl(styles.itemsLeftCheckout__check, styles.checkItems)}>
                    <input type="checkbox" id="privateHouse" value="" />
                    <label htmlFor="privateHouse">
                      Частный дом
                    </label>
                  </div>
                  <div className={styles.itemsLeftCheckout__four}>
                    <div className={styles.itemsLeftCheckoutInput}>
                      <input autoComplete="off" type="text" name="" id="" placeholder="Номер дома" className={styles.input} required />
                      <div className={styles.inputErrorMessage}>Обязательное поле</div>
                    </div>
                    <div className={styles.itemsLeftCheckoutInput}>
                      <input autoComplete="off" type="text" name="" id="" placeholder="Подъезд" className={styles.input} required />
                      <div className={styles.inputErrorMessage}>Обязательное поле</div>
                    </div>
                    <div className={styles.itemsLeftCheckoutInput}>
                      <input autoComplete="off" type="text" name="" id="" placeholder="Этаж" className={styles.input} required />
                      <div className={styles.inputErrorMessage}>Обязательное поле</div>
                    </div>
                    <div className={styles.itemsLeftCheckoutInput}>
                      <input autoComplete="off" type="text" name="" id="" placeholder="Квартира" className={styles.input} required />
                      <div className={styles.inputErrorMessage}>Обязательное поле</div>
                    </div>
                  </div>
                  <div className={styles.itemsLeftCheckoutText}>
                    <textarea name="" id="" cols={20} rows={4} placeholder="Комментарий к доставке" className={styles.textarea}></textarea>
                  </div>
                </div>
                <div className={cl(styles.leftCheckout__items, styles.itemsLeftCheckout)}>
                  <h2 className={styles.itemsLeftCheckout__title}>Время доставки</h2>
                  <div className={styles.itemsLeftCheckout__two}>
                    <div className={styles.itemsLeftCheckoutInput}>
                      <input autoComplete="off" type="date" name="" id="" placeholder="Дата" className={styles.input} required />
                      <div className={styles.inputErrorMessage}>Обязательное поле</div>
                    </div>
                    <div className={styles.itemsLeftCheckoutInput}>
                      <input autoComplete="off" type="time" name="" id="" placeholder="Время" className={styles.input} required />
                      <div className={styles.inputErrorMessage}>Обязательное поле</div>
                    </div>
                  </div>
                </div>
                <div className={cl(styles.leftCheckout__items, styles.itemsLeftCheckout)}>
                  <h2 className={styles.itemsLeftCheckout__title}>Способы оплаты</h2>
                  <div className={styles.itemsLeftCheckout__content}>
                    <div className={cl(styles.itemsLeftCheckout__pay, styles.payMethod, styles.payMethod__credit)}>
                      <input type="radio" name="pay-method" value="" id="pay-1" checked />
                      <label htmlFor="pay-1">
                        <span className={styles.payMethod__title}>Картой на сайте</span>
                        <span className={styles.payMethod__img}>
                        {/* <img src="img/checkout/logotips.svg" alt=""> */}
                        </span>
                      </label>
                    </div>
                    <div className={cl(styles.itemsLeftCheckout__pay, styles.payMethod, styles.payMethod__cash)}>
                      <input type="radio" name="pay-method" value="" id="pay-2" />
                      <label htmlFor="pay-2">
                        <span className={styles.payMethod__title}>Наличными курьеру</span>
                        <span className={styles.payMethod__img}>При получении заказа</span>
                      </label> 
                    </div>
                  </div>
                </div>
              </div>
              <div className={cl(styles.checkout__right, styles.rightCartPage, styles.checkoutRight)}>
                <div className={styles.rightCartPage__content}>
                  <div className={styles.rightCartPage__title}>
                    Ваш заказ
                    <div className={styles.rightCartPage__count}><span>{storeItems.length}</span> товара</div>
                  </div>
                  {storeItems && storeItems.map(({id, title, slug, img, price, count}) => (
                    <CheckoutItem key={id} id={id} title={title} price={price} count={count} />
                  ))}
                  <div className={cl(styles.rightCartPage__total, styles.totalRightCart)}>
                    <div className={styles.totalRightCart__title}>Итого</div>
                    <div className={styles.totalRightCart__number}><span>{cartSumm.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')}</span> ₽</div>
                  </div>
                  <button type="submit" className={styles.rightCartPage__submit}>
                    Подтвердить заказ
                  </button>
                  <div className={styles.rightCartPage__desc}>Нажимая кнопку, я даю согласие на <Link href="/">обработку персональных данных</Link></div>
                </div>
              </div>
            </div>
          </div>
        </section>
			</main>
		</Layout>
	)
};

export default Checkout;

