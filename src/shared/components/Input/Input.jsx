import PropTypes from 'prop-types';
// import styles from './Input.module.css';

const Input = props => {
  const { labelName, value, onChange, type, name, pattern, title } = props;

  return (
    <label>
      {labelName}
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        pattern={pattern}
        title={title}
      />
    </label>
  );
};
export default Input;

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  labelName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
};
