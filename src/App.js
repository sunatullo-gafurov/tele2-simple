import React from 'react';
import './App.css'
import Tariff from './Components/Tariff';

export default function App() {
  let nextId = 1;
  const tariffs = [
    {
      id: nextId++,
      title: 'Мой онлайн+',
      price: 700,
      type: 'безлимит на Tele2 России',
      minutes: 800,
      text: 'на остальные номера России',
      internet: '30 ГБ интернета'
    },
    {
      id: nextId++,
      title: 'Везде онлайн',
      price: 500,
      type: 'безлимит на Tele2 России',
      minutes: 500,
      text: 'на остальные номера России',
      internet: '40 ГБ интернета'
    },
    {
      id: nextId++,
      title: 'Мой онлайн',
      price: 400,
      type: 'безлимит на Tele2 России',
      minutes: 500,
      text: 'на другие мобилные номера домашнего региона',
      internet: '15 ГБ интернета'
    }
  ];
  return (
    <div className="App">
      {tariffs.map(tariff => <Tariff {...tariff} />)}
    </div>
  )
}