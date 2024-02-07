import { useState } from 'react';
import style from './AdvancedLevel.module.scss';
import InputCheckbox from '../../components/Inputs/InputCheckbox/InputCheckbox';
import InputRadio from '../../components/Inputs/InputRadio/InputRadio';
import InputSwitch from '../../components/Inputs/InputSwitch/InputSwitch';
import InputRange from '../../components/Inputs/InputRange/InputRange';
import Basket from '../../components/Basket/Basket';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

interface CheckboxProps {
  checkbox1: boolean | null;
  checkbox2: boolean | null;
  checkbox3: boolean | null;
}

interface InputSwitchProps {
  switch1: boolean | null;
  switch2: boolean | null;
  switch3: boolean | null;
}

export default function AdvancedLevel() {
  const [inputCheckbox, setInputCheckbox] = useState<CheckboxProps>(Object);
  const [inputRadio, setInputRadio] = useState('Radio2');
  const [inputSwitch, setInputSwitch] = useState<InputSwitchProps>(Object);
  const [inputRange, setInputRange] = useState('70');
  const [basket, setBasket] = useState(1);

  return (
    <>
      <SectionHeader title='Advanced Level' />
      <div className='wrapper-global'>
        <form className={style.wrapper}>
          <div className={style.container}>
            <InputCheckbox
              id='checkbox1'
              name='checkbox1'
              checkboxState={inputCheckbox}
              isChecked={inputCheckbox.checkbox1 || false}
              isDisabled={!inputCheckbox.checkbox3}
              onChange={setInputCheckbox}
            >
              Checkbox1
            </InputCheckbox>
            <div className={style.container}>
              <InputCheckbox
                id='checkbox1'
                name='checkbox2'
                checkboxState={inputCheckbox}
                isChecked={inputCheckbox.checkbox2 || false}
                isDisabled={!inputCheckbox.checkbox3}
                onChange={setInputCheckbox}
              >
                Checkbox2
              </InputCheckbox>
            </div>
            <div className={style.container}>
              <InputCheckbox
                id='checkbox1'
                name='checkbox3'
                checkboxState={inputCheckbox}
                isChecked={inputCheckbox.checkbox3 || false}
                onChange={setInputCheckbox}
              >
                Checkbox3
              </InputCheckbox>
            </div>
          </div>
          <div className={style.container}>
            <InputRadio
              id='Radio1'
              name='radio'
              value='Radio1'
              isChecked={inputRadio}
              isDisabled={!inputCheckbox.checkbox3}
              onChange={setInputRadio}
            >
              Radio1
            </InputRadio>
            <InputRadio
              id='Radio2'
              name='radio'
              value='Radio2'
              isChecked={inputRadio}
              onChange={setInputRadio}
            >
              Radio2
            </InputRadio>
            <InputRadio
              id='Radio3'
              name='radio'
              value='Radio3'
              isChecked={inputRadio}
              onChange={setInputRadio}
            >
              Radio3
            </InputRadio>
          </div>
          <div className={style.container}>
            <InputSwitch
              id='Switch1'
              name='switch1'
              switchState={inputSwitch}
              isChecked={inputSwitch.switch1 || false}
              isDisabled={!inputSwitch.switch3}
              onChange={setInputSwitch}
            >
              Switch1
            </InputSwitch>
            <InputSwitch
              id='Switch2'
              name='switch2'
              switchState={inputSwitch}
              isChecked={inputSwitch.switch2 || false}
              isDisabled={!inputSwitch.switch3}
              onChange={setInputSwitch}
            >
              Switch2
            </InputSwitch>
            <InputSwitch
              id='Switch3'
              name='switch3'
              switchState={inputSwitch}
              isChecked={inputSwitch.switch3 || false}
              onChange={setInputSwitch}
            >
              Switch3
            </InputSwitch>
          </div>
          <div className={style.container}>
            <InputRange
              id='Range'
              min='0'
              max='100'
              value={inputRange}
              step='10'
              onChange={setInputRange}
            >
              {`Range: ${inputRange}`}
            </InputRange>
          </div>
          <div className={style.container}>
            <Basket onClick={setBasket}>{basket}</Basket>
          </div>
        </form>
      </div>
    </>
  );
}
