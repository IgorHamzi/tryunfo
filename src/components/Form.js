import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  hasCardTrunfo = () => {
    let result;
    const { hasTrunfo, cardTrunfo, onInputChange } = this.props;
    if (hasTrunfo === false) {
      result = (
        <label htmlFor="superTryunfo">
          Super Trunfo
          <input
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>);
    } else {
      result = (
        <span data-testid="trunfo-input">
          Você já tem um Super Trunfo em seu baralho
        </span>
      );
    }
    return result;
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      handleSubmit,
    } = this.props;

    return (
      <form onSubmit={ handleSubmit }>
        <label htmlFor="name">
          Nome :
          <input
            name="cardName"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição :
          <input
            name="cardDescription"
            type="textarea"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr01">
          Attr01 :
          <input
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr02">
          Attr02 :
          <input
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr03">
          Attr03 :
          <input
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image">
          Imagem :
          <input
            name="cardImage"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare">
          Raridade :
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {this.hasCardTrunfo()}
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;

// handleSubmit(event) {
//   const { addNewCard } = this.props;
//   event.preventDefault();
//   addNewCard(this.state);
// }

// // addNewCard(topic) {
// //   this.setState((prevState) => ({
// //     cards: [...prevState, topic],
// //   }));
// // }

//   this.onInputChange = this.onInputChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
// }
