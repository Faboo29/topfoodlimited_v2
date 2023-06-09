'use client';

import React, { useContext, useRef, useState } from 'react';
import { ICustomer, ICustomerSection } from '@/types';
import Slider from 'react-slick';
import sliderSettings from './sliderConfig';
// import ProductModal from '../../../Utils/Products/ProductModal';
import styles from '../about.module.scss';
import Circle from '@/app/components/common/icons/Circle';
import { useAppContext } from '@/app/providers/AppContext';
import Modal from '@/app/components/common/modal';
import CustomerModal from './CustomerModal';

interface ICustomerSectionProps {
  customers: ICustomer[];
  customerSection: ICustomerSection;
}

const CustomerSection = ({ customers, customerSection }: ICustomerSectionProps) => {
  const appContext = useAppContext();
  const handleCustomerClick = (customer: ICustomer) => {
    // setSelectedCustomer(customer);
    if (!appContext) {
      return;
    }

    const { setSelectedCustomer, setModalActive, selectedCustomer } = appContext;
    setSelectedCustomer(customer);
    setModalActive(true);
    console.log('selectedCustomer: ', selectedCustomer);
  };

  const [dragging, setDragging] = useState<boolean>(false);
  const titleRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.customerSection}>
      <div className={styles['title-col']}>
        <div className={styles.title} ref={titleRef}>
          <Circle classNames={[styles.tfCircle]} />
          <h2>{customerSection.title}</h2>
        </div>
      </div>
      <div className={styles['customers-col']}>
        <div className={styles['customers-slider']}>
          <Slider {...sliderSettings} beforeChange={() => setDragging(true)} afterChange={() => setDragging(false)}>
            {customers.map((customer) => (
              <div key={customer.sys.id} className={styles.customerSlider__item}>
                <img
                  onClick={() => !dragging && handleCustomerClick(customer)}
                  src={customer.customerLogo.url}
                  alt={customer.customerLogo.title}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {appContext?.modalActive && appContext.selectedCustomer && (
        <Modal handleClose={() => appContext.setModalActive(false)}>
          <CustomerModal customer={appContext.selectedCustomer} />
        </Modal>
      )}
    </div>
  );
};

export default CustomerSection;
