// import dataInfo from "../../folders_data/data.json/data.json";
import css from './data.module.css';
import PropTypes from 'prop-types';
import hexColorRandom from '../contains/hexcolorrandom.js';

export const Data = ({ title, items }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.stat_list}>
        {items.map(({ id, label, percentage }) => (
          <li
            className={css.item}
            key={id}
            style={{ backgroundColor: `${hexColorRandom()}` }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Data.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
  title: PropTypes.string,
};
