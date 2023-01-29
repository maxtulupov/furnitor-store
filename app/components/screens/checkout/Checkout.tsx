import Layout from "../../layout/Layout";
import Breadcrumbs from "../../ui/breadcrumbs/Breadcrumbs";
import styles from "../Checkout/Checkout.module.scss"
import cl from "classnames";
import Link from "next/link";
import { FC, useState, useEffect } from 'react';
import { CatListAside, FormInputsValue, NaviLinks, SliceCartItem, SliceState } from "../../../../types";
import { useDispatch, useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem";

import InputMask from 'react-input-mask';

import { Field, Form, Formik, FormikErrors, FormikValues } from 'formik';

import { useRouter } from "next/router";
import { setCookie } from 'cookies-next';
import { clearItems } from "../../../redux/cart/slice";

interface CheckoutProps {
  naviLinks: NaviLinks[],
  catList: CatListAside[]
}

const Checkout:FC<CheckoutProps> = (props) => {
  const storeItems = useSelector<SliceState, SliceCartItem[]>((state) => state.cart.items);
  const cartSumm = useSelector<SliceState>((state) => state.cart.totalPrice);

  const router = useRouter();

  const dispatch = useDispatch();


	const initialValues: FormInputsValue = {
		name: '',
    phone: '',
    email: '',
		deliveryMethod: 'delivery1',
		payMethod: 'card',
		houseNumber: '',
		textarea: ''
	}

	const validate = (values: FormikValues) => {
		const errors: FormikErrors<FormikValues> = {};

		if (!values.name) {
			errors.name = 'Это обязательное поле';
		}

		if (!values.phone) {
			errors.phone = 'Это обязательное поле';
		} else if (values.phone.length !== 17) {
			errors.phone = 'Неверный номер телефона';
		}
	
		if (!values.email) {
			errors.email = 'Укажите вашу почту';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Неверный email адрес';
		}
	
		return errors;
	};

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
            <Formik
							initialValues={initialValues}
							validate={validate}
							onSubmit={(values, actions) => {

                setCookie('orderValues', '');
                setCookie('orderValues', JSON.stringify({...values, storeItems, cartSumm}));

                dispatch(clearItems);
                console.log(dispatch(clearItems));

                // router.replace('/order');
							}}
						>
            {({ errors, touched, values }) => (
              <Form className={styles.checkout__content}>
                <div className={cl(styles.checkout__left, styles.leftCheckout)}>
                  <h1 className={styles.checkout__title}>Оформление заказа</h1>
                  <div className={cl(styles.leftCheckout__items, styles.itemsLeftCheckout)}>
                    <h2 className={styles.itemsLeftCheckout__title}>Данные получателя</h2>
                    <div className={styles.itemsLeftCheckout__two}>
                      <div className={styles.itemsLeftCheckoutInput}>
                        <Field autoComplete="off" type="text" name="name" placeholder="Имя" className={cl(styles.input, errors.name && touched.name ? styles.inputError : null)} required />
												{errors.name && touched.name ? (
												<div className={styles.inputErrorMessage}>{errors.name}</div>
											) : null}
                      </div>
                      <div className={styles.itemsLeftCheckoutInput}>
												<Field name="phone" required >
                          {({ field }) => (
														<InputMask
															{...field}
															mask="+7\(999)-999-99-99"
															placeholder="Номер телефона"
															type="tel"
															className={cl(styles.input, errors.phone && touched.phone ? styles.inputError : null)}
															required
														/>
													)}
                        </Field>
												{errors.phone && touched.phone ? (
												<div className={styles.inputErrorMessage}>{errors.phone}</div>
											) : null}
                      </div>
                    </div>
                    <div className={cl(styles.itemsLeftCheckoutInput, styles.itemsLeftCheckoutInput__email)}>
                      <Field type="email" name="email" id="" placeholder="Почта" className={cl(styles.input, { [styles.inputError]: errors.email && touched.email} )} required />
											{errors.email && touched.email ? (
												<div className={styles.inputErrorMessage}>{errors.email}</div>
											) : null}
                    </div>
                  </div>
                  <div className={cl(styles.leftCheckout__items, styles.itemsLeftCheckout)}>
                    <h2 className={styles.itemsLeftCheckout__title}>Способ доставки</h2>
                    <div className={styles.itemsLeftCheckout__content}>
                      <div className={cl(styles.itemsLeftCheckout__delivery, styles.deliveryMethod, styles.deliveryMethod__adres)}>
                        <Field type="radio" name="deliveryMethod" value="delivery1" id="delivery1" />
                        <label htmlFor="delivery1">
                          <span className={styles.deliveryMethod__title}>Доставка</span>
                          <span className={styles.deliveryMethod__text}>Наша служба доставки привезёт заказ в назначенное время</span>
                        </label>
                      </div>
                      <div className={cl(styles.itemsLeftCheckout__delivery, styles.deliveryMethod, styles.deliveryMethod__pickup)}>
                        <Field type="radio" name="deliveryMethod" value="pickUp" id="pickUp" />
                        <label htmlFor="pickUp">
                          <span className={styles.deliveryMethod__title}>Самовывоз</span>
                          <span className={styles.deliveryMethod__text}>Заберите заказ бесплатно из магазина</span>
                        </label>
                      </div>
                    </div>
                  </div>
									{
										values.deliveryMethod === 'delivery1' &&
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
													<Field autoComplete="off" type="text" name="houseNumber" id="" placeholder="Номер дома" className={styles.input} required />
													{errors.houseNumber && touched.houseNumber ? (
														<div className={styles.inputErrorMessage}>{errors.houseNumber}</div>
													) : null}
												</div>
												<div className={styles.itemsLeftCheckoutInput}>
													<Field autoComplete="off" type="text" name="entrance" id="" placeholder="Подъезд" className={styles.input} required />
													<div className={styles.inputErrorMessage}>Обязательное поле</div>
												</div>
												<div className={styles.itemsLeftCheckoutInput}>
													<Field autoComplete="off" type="text" name="floor" id="" placeholder="Этаж" className={styles.input} required />
													<div className={styles.inputErrorMessage}>Обязательное поле</div>
												</div>
												<div className={styles.itemsLeftCheckoutInput}>
													<Field autoComplete="off" type="text" name="flat" id="" placeholder="Квартира" className={styles.input} required />
													<div className={styles.inputErrorMessage}>Обязательное поле</div>
												</div>
											</div>
											<div className={styles.itemsLeftCheckoutText}>
											<Field name="textarea">
                        {({ field }) => (
                          <textarea {...field} id="" cols={20} rows={4} placeholder="Комментарий к доставке" className={styles.textarea}></textarea>
                        )}
                      </Field>
											</div>
										</div>
									}
									{
										values.deliveryMethod === 'delivery1' &&
										<div className={cl(styles.leftCheckout__items, styles.itemsLeftCheckout)}>
											<h2 className={styles.itemsLeftCheckout__title}>Дата доставки</h2>
											<div className={styles.itemsLeftCheckout__two}>
												<div className={styles.itemsLeftCheckoutInput}>
													<input autoComplete="off" type="date" name="dateDelivery" id="dateDelivery" placeholder="Дата" className={styles.input} required />
													<div className={styles.inputErrorMessage}>Обязательное поле</div>
												</div>
												{/* <div className={styles.itemsLeftCheckoutInput}>
													<input autoComplete="off" type="time" name="" id="" placeholder="Время" className={styles.input} required />
													<div className={styles.inputErrorMessage}>Обязательное поле</div>
												</div> */}
											</div>
										</div>
									}
                  <div className={cl(styles.leftCheckout__items, styles.itemsLeftCheckout)}>
                    <h2 className={styles.itemsLeftCheckout__title}>Способы оплаты</h2>
                    <div className={styles.itemsLeftCheckout__content}>
                      <div className={cl(styles.itemsLeftCheckout__pay, styles.payMethod, styles.payMethod__credit)}>
                        <Field type="radio" name="payMethod" value="card" id="card" />
                        <label htmlFor="card">
                          <span className={styles.payMethod__title}>Картой на сайте</span>
                          <span className={styles.payMethod__img}>
                          {/* <img src="img/checkout/logotips.svg" alt=""> */}
                          </span>
                        </label>
                      </div>
                      <div className={cl(styles.itemsLeftCheckout__pay, styles.payMethod, styles.payMethod__cash)}>
                        <Field type="radio" name="payMethod" value="cash" id="cash" />
                        <label htmlFor="cash">
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
              </Form>
            )}
            </Formik>
          </div>
        </section>
			</main>
		</Layout>
	)
};

export default Checkout;

