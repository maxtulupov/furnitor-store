import Layout from "../../layout/Layout";
import Breadcrumbs from "../../ui/breadcrumbs/Breadcrumbs";
import styles from "../Checkout/Checkout.module.scss"
import cl from "classnames";
import Link from "next/link";
import { FC } from 'react';
import { CatListAside, NaviLinks } from "../../../../types";

interface CheckoutProps {
  naviLinks: NaviLinks[],
  catList: CatListAside[]
}

const Checkout:FC<CheckoutProps> = (props) => {
	return (
		<Layout naviLinks={props.naviLinks} catList={props.catList}>
			<main className="main">
				<Breadcrumbs pageTitle="Оформление заказа" />
        <section className={styles.checkout}>
          <div className="container">
            <form action="" className={styles.checkout__content} id="">
              <div className={cl(styles.checkout__left, styles.leftCheckout)}>
                <h1 className={styles.checkout__title}>Оформление заказа</h1>
                <div className={cl(styles.leftCheckout__items, styles.itemsLeftCheckout)}>
                  <h2 className={styles.itemsLeftCheckout__title}>Данные получателя</h2>
                  <div className={styles.itemsLeftCheckout__two}>
                    <div className={styles.itemsLeftCheckoutInput}>
                      <input autoComplete="off" type="text" name="" id="" placeholder="Имя" className={styles.input} required />
                      <div className={styles.inputErrorMessage}>Обязательное поле</div>
                    </div>
                    <div className={styles.itemsLeftCheckoutInput}>
                      <input autoComplete="off" type="tel" name="" id="" placeholder="Номер телефона" className={styles.input} required />
                      <div className={styles.inputErrorMessage}>Укажите номер телефона</div>
                    </div>
                  </div>
                  <div className={cl(styles.itemsLeftCheckoutInput, styles.itemsLeftCheckoutInput__email)}>
                    <input autoComplete="off" type="email" name="" id="" placeholder="Почта" className={styles.input} required />
                    <div className={styles.inputErrorMessage}>Укажите вашу почту</div>
                  </div>
                </div>
                <div className={cl(styles.leftCheckout__items, styles.itemsLeftCheckout)}>
                  <h2 className={styles.itemsLeftCheckout__title}>Способ доставки</h2>
                  <div className={styles.itemsLeftCheckout__content}>
                    <div className={cl(styles.itemsLeftCheckout__delivery, styles.deliveryMethod, styles.deliveryMethod__adres)}>
                      <input type="radio" name="delivery" value="" id="delivery-1" checked />
                      <label htmlFor="delivery-1">
                        <span className={styles.deliveryMethod__title}>Доставка</span>
                        <span className={styles.deliveryMethod__text}>Наша служба доставки привезёт заказ в назначенное время</span>
                      </label>
                    </div>
                    <div className={cl(styles.itemsLeftCheckout__delivery, styles.deliveryMethod, styles.deliveryMethod__pickup)}>
                      <input type="radio" name="delivery" value="" id="delivery-2" />
                      <label htmlFor="delivery-2">
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
                    <div className={styles.rightCartPage__count}><span>3</span> товара</div>
                  </div>
                  <div className={cl(styles.checkoutRight__item, styles.itemCheckoutRight)}>
                    <div className={styles.itemCheckoutRight__left}>
                      <div className={styles.itemCheckoutRight__title}>Модульная система «Ки-ки» СТД 1070.1 (ДСВ)</div>
                      <div className={styles.itemCheckoutRight__count}>
                        <span>2</span> шт
                      </div>
                    </div>
                    <div className={styles.itemCheckoutRight__right}>
                      <div className={styles.itemCheckoutRight__price}>
                        <span>19 200</span> ₽
                      </div>
                      <div className={styles.itemCheckoutRight__oldPrice}>
                        <span>20 200</span> ₽
                      </div>
                    </div>
                  </div>
                  <div className={cl(styles.rightCartPage__total, styles.totalRightCart)}>
                    <div className={styles.totalRightCart__title}>Итого</div>
                    <div className={styles.totalRightCart__number}><span>34 600</span> ₽</div>
                  </div>
                  <button type="submit" className={styles.rightCartPage__submit}>
                    Подтвердить заказ
                  </button>
                  <div className={styles.rightCartPage__desc}>Нажимая кнопку, я даю согласие на <Link href="/">обработку персональных данных</Link></div>
                </div>
              </div>
            </form>
          </div>
        </section>
			</main>
		</Layout>
	)
};

export default Checkout;

