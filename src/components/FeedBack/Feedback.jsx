import PropTypes from 'prop-types';
import { ButtonFeedback, FieldFeedback } from 'components';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FieldFeedback>
      {options.map(item => {
        const nameItem = item.replace(item[0], item[0].toUpperCase());
        return (
          <ButtonFeedback
            onClick={() => onLeaveFeedback(item)}
            type="button"
            key={item}
            name={item}
          >
            {nameItem}
          </ButtonFeedback>
        );
      })}
    </FieldFeedback>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
