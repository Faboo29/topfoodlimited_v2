import { IContact } from '@/types';
import styles from './contact.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import { renderNode } from '@/app/utils';
import { kumbh } from '@/app/utils/fonts';

type ContactProps = {
  content: IContact;
};

const Contact = ({ content }: ContactProps) => {
  return (
    <section id="contact" className={styles['contact-section']}>
      <div className={styles['contact-section-mask']}></div>
      <div className={clsx('container', styles['contact-section-inner'])}>
        <div className="logo">
          <Image src="/assets/topfood_logo.png" width={200} height={200} alt="contact topfood logo" />
        </div>
        <h2 className={kumbh.className}>{content.title}</h2>
        {content.address.json.content && (
          <div className={styles.address}>{renderNode(content.address.json.content[0])}</div>
        )}
      </div>
    </section>
  );
};

export default Contact;
