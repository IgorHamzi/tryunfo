import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome :
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Descrição :
          <input type="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="attr01">
          Attr01 :
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr02">
          Attr02 :
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr03">
          Attr03 :
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Imagem :
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rare">
          Raridade :
          <select data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="superTryunfo">
          Super Trunfo
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
