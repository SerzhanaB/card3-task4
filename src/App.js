//import logo from './logo.svg';
import "./App.css";

export default function App() {
  const newsCard = ({title, desc}) => {
    return (
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    );
  };
  return (
    <div className="App">
      <img src="green.jpg" />
      {newsCard({ title: 'Новость 1', desc: 'ntrcn' })}
      {newsCard({ title: 'Новость 2', desc: 'ferfegerergege' })}
      {newsCard({ title: 'Новость 3', desc: 'ewfrwefwefewf' })}
    </div>
  );
}