import React, { useState } from 'react';
import Values from 'values.js';
import { Container, Colors } from './styles';
import './App.css';
import Color from './Color';

export default function App() {
  const [color, setColor] = useState('');
  const [list, setList] = useState(new Values('#f15025').all(10));
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }
  
  return (
    <>
    <Container>
      <form onSubmit={ handleSubmit }>
        <div className="form-control">
          <label htmlFor="color">Gerador de cores</label>
          <input
            onFocus={ () => setError(false) }
            value={ color }
            onChange={ (e) => setColor(e.target.value)}
            id="color"
            placeholder="#f15025"
            type="text"
            className={`${error ? 'error' : ''}`}
          />
          <button type="submit" className="btn">
            procurar
          </button>
        </div>
      </form>
    </Container>
    <Colors>
      <div className="list">
        {list && list.map((item, index) => <Color index={ index } key={ index } { ...item } />)}
      </div>
    </Colors>
    </>
  )
}
