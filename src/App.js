import React from 'react';
import './App.css';
import s from "./app.module.css";
import logo from "./img/logo.png";
import user from './img/User.png';
import email from './img/email.png';
import tel from './img/tel.png';
import pig from './img/pig.png';
import vector from './img/Vector.png';
import hand from './img/hand.png';
import one from './img/1.png';
import two from './img/2.png';
import three from './img/3.png';


function App() {
  return (
    <>
      <section className={s.section__one}>
        <nav className={s.nav}>
          <img src={logo} />
          <div className={s.navFlex}>
            <a href="#Авторы"><p>Авторы</p></a>
            <a href="#Окурсе"><p>О курсе </p></a>
            <a href="#Содержание"><p>Содержание</p></a>
            <a href="#Отзывы"><p>Отзывы</p></a>
          </div>
        </nav>
        <div className={s.line}></div>

        <div className={s.Section__oneText}>
          <h2>Start Trading <span>—</span> видео-курс из 7-и уроков</h2>
          <p>Поможет тебе понять как получить первую прибыль уже после просмотра первого видео</p>
        </div>
        <div className={s.allForm}>
          <div className={s.formDown}>
            <div>
              <img className={s.userImg} src={user}></img>
              <input type="text" placeholder="Введите имя" name="username" />
            </div>
            <div>
              <img className={s.emailImg} src={email}></img>
              <input type="text" placeholder="E-mail" name="email" />
            </div>
            <div>
              <img className={s.telImg} src={tel}></img>
              <input type="tel" placeholder="Телефон" name="tel" pattern="2[0-9]{3}-[0-9]{3}" maxlength="12" />
            </div>
          </div>
          <div className={s.buttonForm}><button>Получить курс</button></div>

        </div>
      </section>
      <section className={s.section__two}>
        <div className={s.section__twoLine}>
          <div className={s.lineSectionTwo}></div>
          <h2>Этот видео-курс для тебя, <span>если ты...</span></h2>
        </div>
        <div className={s.sectiionTwoRow}>
          <div>
            <img src={pig}/>
            <p>Тратишь всю зарплату и не умеешь откладывать</p>
          </div>
          <div>
            <img src={vector}/>
            <p>Хочешь поскорее накопить на машину, квартиру, дом</p>
          </div>
          <div>
            <img src={hand}/>
            <p>Планируешь обеспечить себе беззаботную старость</p>
            </div>
        </div>
      </section>
      <section className={s.section__three}>
      <div className={s.section__threeLine}>
          <div className={s.lineSectionThree}></div>
          <h2>Почему тебе нужно <span>пройти видео-курс</span></h2>
        </div>
        <div className={s.imgRow}>
          <img src={one}/>
          <img src={two}/>
          <img src={three}/>
        </div>
        <div className={s.numberRow}>
          <h3>1412</h3>
          <h3>368</h3>
          <h3>34</h3>
        </div>
        <div className={s.textRow}>
          <p>человек прошли обучение</p>
          <p>заработали свои первые $5 000 на бирже</p>
          <p>ученика зароботали $80 000 в год</p>
        </div>
      </section>
    </>
  );
}

export default App;
