// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('account-item')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1653272836951046~c5_100x100.jpeg?x-expires=1668654000&x-signature=%2B7rbRk%2BeMU16YYh40ILx%2FjL3AcM%3D"
        alt=""
      />

      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          <strong>davidbeckham</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>David Beckham</p>
      </div>
    </div>
  );
}

// AccountItem.propTypes = {};

export default AccountItem;
