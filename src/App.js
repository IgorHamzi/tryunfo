// Requisito 4 - Realizado com a ajuda do Ivan Mastrangelo - turma 16A
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };

    this.addNewCard = this.addNewCard.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.enableDisableBtn = this.enableDisableBtn.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addNewCard(this.state);
  }

  onSaveButtonClick(Event) {
    this.handleSubmit(Event);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    }, this.checkCardTrunfo);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value }, () => { this.enableDisableBtn(); });
  }

  checkCardTrunfo = () => {
    const { cards } = this.state;
    const trunfo = cards.some((element) => element.cardTrunfo === true);
    this.setState({ hasTrunfo: trunfo });
  }

  addNewCard(card) {
    this.setState((prevState) => ({
      cards: [...prevState.cards, card],
    }));
    const { cards } = this.state;
    console.log(cards);
  }

  enableDisableBtn() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const att1 = parseInt(cardAttr1, 10);
    const att2 = parseInt(cardAttr2, 10);
    const att3 = parseInt(cardAttr3, 10);
    const some = att1 + att2 + att3;
    const max = 210;
    const maxAtt = 90;
    if (
      cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || cardRare === ''
      || some > max
      || att1 > maxAtt || att1 < 0
      || att2 > maxAtt || att2 < 0
      || att3 > maxAtt || att3 < 0
    ) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  render() {
    const {
      state: {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        hasTrunfo,
        isSaveButtonDisabled,
        cards },
      onInputChange,
      handleSubmit,
      onSaveButtonClick,
    } = this;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onSaveButtonClick={ onSaveButtonClick }
          handleSubmit={ handleSubmit }
          onInputChange={ onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          onInputChange={ onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        {cards.map((element, index) => (
          <CardList
            key={ index }
            cardName={ element.cardName }
            cardDescription={ element.cardDescription }
            cardAttr1={ element.cardAttr1 }
            cardAttr2={ element.cardAttr2 }
            cardAttr3={ element.cardAttr3 }
            cardImage={ element.cardImage }
            cardRare={ element.cardRare }
            cardTrunfo={ element.cardTrunfo }
            hasTrunfo={ element.hasTrunfo }
            isSaveButtonDisabled={ element.isSaveButtonDisabled }
          />))}
      </div>
    );
  }
}

export default App;

// this.addNewCard = this.addNewCard.bind(this);
// this.onInputChange = this.onInputChange.bind(this);
// this.handleSubmit = this.handleSubmit.bind(this);

// App.propTypes = {
//   addNewCard: PropTypes.func.isRequired,
// };
