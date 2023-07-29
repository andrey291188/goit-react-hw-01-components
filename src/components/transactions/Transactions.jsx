import css from './transactions.module.css';
import PropTypes from 'prop-types';

export const Transactions = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th >Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody >
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.table_color}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
