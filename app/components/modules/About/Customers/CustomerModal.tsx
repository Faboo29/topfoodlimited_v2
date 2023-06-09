import { ICustomer, IProductsCollection } from '@/types';
import { useQuery } from '@apollo/client';
import { PRODUCTS_QUERY } from './query';
import styles from '../about.module.scss';
import Image from 'next/image';

type CustomerModalProps = {
  customer: ICustomer;
};

const CustomerModal = ({ customer }: CustomerModalProps) => {
  const { loading, error, data } = useQuery(PRODUCTS_QUERY, {
    variables: {
      id: customer.sys.id
    }
  });

  const productCollection: IProductsCollection = data?.productsCollection;

  if (!loading && !productCollection) {
    return null;
  }

  if (error) {
    return null;
  }

  return (
    <div className={styles['modal-outer']}>
      <div className="modal-background">
        <div className="circle" />
      </div>
      <div className={styles['modal-inner']}>
        <div className="customer-detail">
          <div className={styles.heading}>
            <img src={customer.customerLogo.url} alt={customer.name} />
          </div>
          {customer.customerDescription && (
            <div className={styles.description}>
              {customer.customerDescription.json.content.map((p: any, i: number) => (
                <p key={`customer-description_${i}`}>{p.content[0].value}</p>
              ))}
            </div>
          )}
          <div className={styles.products}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              productCollection.items.map((product) => {
                return (
                  <div className={styles['product-image']} key={product.sys.id}>
                    <Image
                      width={product.productImage.width}
                      height={product.productImage.height}
                      src={product.productImage.url}
                      alt={product.title}
                      key={product.sys.id}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerModal;
