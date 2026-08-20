import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Card from './components/Card';

import ProfileCard from './components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'กรวิชญ์ ครุฑกษัตริย์ไทย', nickname: 'โอม',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  { id: 2, name: 'ศิวกร แซ่เจว', nickname: 'เจ๋ง',
    major: 'วิศวกรรมคอมพิวเตอร์', favorites: ['กาแฟ', 'หมา'] },
  { id: 3, name: 'ปราชญา', nickname: 'โอม',
    major: 'วิทยาการคอมพิวเตอร์', favorites: ['น้ำผลไม้', 'นก'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;