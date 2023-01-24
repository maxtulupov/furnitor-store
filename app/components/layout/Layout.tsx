import { useState, FC } from 'react';
import Aside from "../aside/Aside"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import ProductPopUp from "../ui/popups/ProductPopUp"
import { CatListAside, IsModal, NaviLinks } from '../../../types';

interface LayoutProps {
  children: JSX.Element,
  naviLinks: NaviLinks[],
  isModal?: IsModal,
  setModal?: (IsModal: IsModal) => void,
  catList: CatListAside[]
}

const Layout:FC<LayoutProps> = ({ children, naviLinks, isModal, setModal, catList }) => {

	const [isCatalogOpen, setIsCatalogOpen] = useState<Boolean>(false);

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
              id={isModal.id}
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