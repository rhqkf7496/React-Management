import React, { Component } from "react";
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'http://placeimg.com/64/64/1',
    'name': '고범석',
    'birthday': '971013',
    'gender': '남자',
    'job': '직장인'
  },
  {
    'id': 2,
    'image': 'http://placeimg.com/64/64/2',
    'name': '고범석2',
    'birthday': '971111',
    'gender': '여자',
    'job': '학생'
  },
  {
    'id': 3,
    'image': 'http://placeimg.com/64/64/3',
    'name': '고범석3',
    'birthday': '970101',
    'gender': '남자',
    'job': '주부'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
            );
          })
        }
      </div>
    );
  }
}

export default App;
