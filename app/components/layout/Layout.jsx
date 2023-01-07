import {React, useState} from "react"
import Aside from "../aside/Aside"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import ProductPopUp from "../ui/popups/ProductPopUp"

const Layout = ({ children, naviLinks, isModal, setModal, catList }) => {

	const [isCatalogOpen, setIsCatalogOpen] = useState(false);

	return (
		<div className="wrapper">
			<div className="wrapper__inner">
				<Aside isCatalogOpen={isCatalogOpen} setIsCatalogOpen={setIsCatalogOpen} catList={catList} />
				<div className="wrapper-main">
					<Header naviLinks={naviLinks} setIsCatalogOpen={setIsCatalogOpen} isCatalogOpen={isCatalogOpen} />
						{children}
					<Footer naviLinks={naviLinks} />
          {isModal &&
            <ProductPopUp
              isVisible={isModal.open}
              title={isModal.title}
              slug={isModal.slug}
              price={isModal.price}
              images={isModal.images}
              img={isModal.img}
              onClose={() => setModal({...isModal, open: false})}
            />
          }
				</div>
			</div>
		</div>
	)
}

export default Layout