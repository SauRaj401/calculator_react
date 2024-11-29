import React from 'react';

import './Calculator.scss';

import {CalcMachine} from './CalcMachine';

//DATA PART
const opButtonsData = [
  {title: '+', val: '+'},
  {title: '-', val: '+'},
  {title: '*', val: '*'},
  {title: '/', val: '/'},
];

const numButtonsDataGen = (limit) => {
  const numArr = [];
  for (let i = 0; i < limit; i++) {
    numArr.push({title: `${i}`, val: `${i}`});
  }
  return numArr;
};

const numButtonsData10 = numButtonsDataGen(10);

//COMPONENTS PART
const Button = (props) => {
  const className = props.className ? `btn ${props.className}` : 'btn';
  return (
    <button className={className} onClick={props.onClickHandler}>
      {props.title}
    </button>
  );
};

const Screen = (props) => {
  //const val = props.value === '' ? 0 : props.value
  const val = props?.value; //Similar
  return (
    <>
      <div className="resize-btn-part"></div>
      <div data-testid="total" className="screen-part">
        {val}
      </div>
    </>
  );
};

const calc = CalcMachine();

export const Calculator = () => {
  const [result, setResult] = React.useState('');

  const opBtnsDOM = opButtonsData.map((el) => (
    <Button key={el.title} title={el.title} className={'op'} onClickHandler={() => setResult(calc.push(el.val))} />
  ));

  const numBtnsDOM = numButtonsData10.map((el) => (
    <Button key={el.title} className={'num'} title={el.title} onClickHandler={() => setResult(calc.push(el.val))} />
  ));
  const btnCurrency = <Button className={'num'} key="," title="," />;

  const btnCalc = <Button className={'op'} key="=" title="=" onClickHandler={() => setResult(calc.calc())} />;

  const btnAC = <Button className={'oth'} key="AC" title="AC" onClickHandler={() => setResult(calc.reset())} />;
  const btnSignChange = <Button className={'oth'} key="+/-" title="+/-" />;
  const btnRatio = <Button className={'oth'} key="%" title="%" />;

  return (
    <div className="calc-layout-container">
      <div className="screen-layout-container">
        <Screen value={result} />
      </div>
      <div className="button-layout-container">
        <table border="0" cellSpacing="0" cellPadding="1">
          <tr>
            <td>{btnAC}</td>
            <td>{btnSignChange}</td>
            <td>{btnRatio}</td>
            <td>{opBtnsDOM[3]}</td>
          </tr>
          <tr>
            <td>{numBtnsDOM[7]}</td>
            <td>{numBtnsDOM[8]}</td>
            <td>{numBtnsDOM[9]}</td>
            <td>{opBtnsDOM[2]}</td>
          </tr>
          <tr>
            <td>{numBtnsDOM[4]}</td>
            <td>{numBtnsDOM[5]}</td>
            <td>{numBtnsDOM[6]}</td>
            <td>{opBtnsDOM[1]}</td>
          </tr>
          <tr>
            <td>{numBtnsDOM[1]}</td>
            <td>{numBtnsDOM[2]}</td>
            <td>{numBtnsDOM[3]}</td>
            <td>{opBtnsDOM[0]}</td>
          </tr>
          <tr>
            <td colSpan={2}>{numBtnsDOM[0]}</td>
            <td>{btnCurrency}</td>
            <td>{btnCalc}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
