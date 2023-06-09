'use client';

import { useState } from 'react';
import styles from './staff.module.scss';
import { IStaff, IStaffSection } from '@/types';
import clsx from 'clsx';
import { kumbh } from '@/app/utils/fonts';

type StaffProps = {
  content: IStaffSection;
  staffs: IStaff[];
};

const Staff = ({ content, staffs }: StaffProps) => {
  const sortedStaffList = [...staffs].sort((a, b) => a.order - b.order);
  const [selectedStaff, setSelectedStaff] = useState(sortedStaffList[0]);

  return (
    <section id="team" className={styles.staffSection}>
      <div className="container">
        <h2 className={kumbh.className}>{content.title}</h2>
        <div className={styles['staff-list-container']}>
          <div className={styles['staff-list']}>
            {sortedStaffList.map((staff) => {
              const active = staff.sys.id === selectedStaff.sys.id;
              return (
                <div
                  className={clsx(styles['staff-list__item'], active && styles.active)}
                  onClick={() => setSelectedStaff(staff)}
                  key={staff.sys.id}
                >
                  <div className={styles.image}>
                    <img src="/assets/profile.png" alt={staff.name} />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.name}>
                      {staff.title} {staff.firstName} <span>{staff.name.toUpperCase()}</span>
                    </div>
                    <div className="job-title">{staff.jobTitle}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles['staff-description']}>
            <div className="selected-staff-content">
              <div className={styles.name}>
                {selectedStaff.title} {selectedStaff.firstName} {selectedStaff.name.toUpperCase()}
              </div>
              <div className={styles.content}>
                {selectedStaff.description.json.content.map((p: any, i: any) => (
                  <p key={i}>{p.content[0].value}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;
