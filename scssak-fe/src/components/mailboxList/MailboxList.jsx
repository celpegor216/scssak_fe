import {useNavigate} from 'react-router-dom';

import {mailboxRootRoute} from '../../router/Routes';

import {
  imgMailbox01,
  imgMailbox02,
  imgMailbox03,
  imgMailbox04,
  imgMailbox05,
  imgMailboxWithNotification01,
  imgMailboxWithNotification02,
  imgMailboxWithNotification03,
  imgMailboxWithNotification04,
  imgMailboxWithNotification05,
} from '../../assets/images/index';
import styles from '../../styles/components/mailboxList/MailboxList.module.css';

const mailboxImgList = [
  imgMailbox01,
  imgMailbox02,
  imgMailbox03,
  imgMailbox04,
  imgMailbox05,
];
const mailboxWithNotificationImgList = [
  imgMailboxWithNotification01,
  imgMailboxWithNotification02,
  imgMailboxWithNotification03,
  imgMailboxWithNotification04,
  imgMailboxWithNotification05,
];

export default function MailboxList({data}) {
  // page 이동
  const navigate = useNavigate();

  const handleClickMailBox = (user_id, e) => {
    e.preventDefault();
    navigate(mailboxRootRoute + '/' + user_id);
  };

  return (
    <div className={styles.container}>
      {data.map((user, idx) => {
        const imgIdx = idx % mailboxImgList.length;

        return (
          <div
            className={styles.containerMailbox}
            key={idx}
            onClick={e => {
              handleClickMailBox(user.user_id, e);
            }}>
            <img
              className={styles.imgMailbox}
              src={
                user.has_new_mail
                  ? mailboxWithNotificationImgList[imgIdx]
                  : mailboxImgList[imgIdx]
              }
              alt={`${user.user_name}의 우체통`}
            />

            <span className={styles.textMailbox}>{user.user_name}</span>
          </div>
        );
      })}
    </div>
  );
}
