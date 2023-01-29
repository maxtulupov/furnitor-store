import Layout from "../../layout/Layout";
import Breadcrumbs from "../../ui/breadcrumbs/Breadcrumbs";
import styles from "../order/Order.module.scss"
import cl from "classnames";
import { FC, useState, useEffect } from 'react';
import { CatListAside, FormInputsValue, NaviLinks } from "../../../../types";

import Cookies from "js-cookie"

interface OrderProps {
  naviLinks: NaviLinks[],
  catList: CatListAside[]
}

const Order:FC<OrderProps> = (props) => {

  const [orderValues, setOrderValues] = useState<FormInputsValue>({
    name: '',
    phone: '',
    email: '',
    deliveryMethod: 'delivery1',
    payMethod: 'card',
    houseNumber: '',
    textarea: '',
  });


  const initialValues: FormInputsValue = {
		name: '',
    phone: '',
    email: '',
		deliveryMethod: 'delivery1',
		payMethod: 'card',
		houseNumber: '',
		textarea: ''
	}

  useEffect(() => {
    const orderData = Cookies.getJSON('orderValues');
    console.log(orderData);
    setOrderValues(orderData);
  }, [])

	return (
		<Layout naviLinks={props.naviLinks} catList={props.catList}>
			<main className="main">
				<Breadcrumbs pageTitle="Заказ оформлен" />
        <section className={styles.order}>
          <div className="container">
            <h1 className={styles.order__title}>Заказ оформлен</h1>
            <div className={styles.order__content}>
              <div className={styles.order__left}>
                <div className={cl(styles.order__item, styles.itemOrder)}>
                  <div className={styles.itemOrder__name}>Имя</div>
                  <div className={styles.itemOrder__value}>{orderValues.name}</div>
                </div>
                <div className={cl(styles.order__item, styles.itemOrder)}>
                  <div className={styles.itemOrder__name}>Телефон</div>
                  <div className={styles.itemOrder__value}>{orderValues.phone}</div>
                </div>
                <div className={cl(styles.order__item, styles.itemOrder)}>
                  <div className={styles.itemOrder__name}>Почта</div>
                  <div className={styles.itemOrder__value}>{orderValues.email}</div>
                </div>
                <div className={cl(styles.order__item, styles.itemOrder)}>
                  <div className={styles.itemOrder__name}>Способ доставки</div>
                  <div className={styles.itemOrder__value}>{orderValues.deliveryMethod}</div>
                </div>

                {
                  orderValues.deliveryMethod === 'delivery1' && 
                  <>
                    <div className={cl(styles.order__item, styles.itemOrder)}>
                      <div className={styles.itemOrder__name}>Адрес доставки</div>
                      <div className={styles.itemOrder__value}>Макс</div>
                    </div>
                    <div className={cl(styles.order__item, styles.itemOrder)}>
                      <div className={styles.itemOrder__name}>Дата доставки</div>
                      <div className={styles.itemOrder__value}>Макс</div>
                    </div>
                  </>
                }
                {
                  orderValues.deliveryMethod === 'pickUp' && 
                  <div className={cl(styles.order__item, styles.itemOrder)}>
                    <div className={styles.itemOrder__name}>Адрес самовывоза</div>
                    <div className={styles.itemOrder__value}>г. Новосибирск, улица Каменская, д. 53</div>
                  </div>
                }

                <div className={cl(styles.order__item, styles.itemOrder)}>
                  <div className={styles.itemOrder__name}>Способ оплаты</div>
                  <div className={styles.itemOrder__value}>
                    {
                      orderValues.payMethod === 'card' ? 'Картой на сайте' : 'Наличными при получении'
                    }
                  </div>
                </div>
              </div>
              <div className={cl(styles.order__right, styles.rightOrder)}>
                <div className={cl(styles.order__products, styles.productsOrder)}>
                  {orderValues.storeItems && orderValues.storeItems.map(({id, title, price, count}) => (
                    <div key={id} className={cl(styles.productsOrder__item, styles.itemProductsOrder)}>
                      <div className={styles.itemProductsOrder__left}>
                        <div className={styles.itemProductsOrder__name}>{title}</div>
                        <div className={styles.itemProductsOrder__count}>{count} шт</div>
                      </div>
                      <div className={styles.itemProductsOrder__price}>{price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')} ₽</div>
                    </div>
                  ))}
                </div>
                <div className={cl(styles.order__total, styles.totalOrder)}>
                  <div className={styles.totalOrder__title}>Итого</div>
                  <div className={styles.totalOrder__summ}>
                    {
                      orderValues.cartSumm && orderValues.cartSumm.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
                    }
                    ₽
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
			</main>
		</Layout>
	)
};

export default Order;

