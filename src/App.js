//import logo from './logo.svg';
import "./App.css";
import pic from "./lake.jpg";
import pic2 from "./green.jpg";

export default function App() {
 
  const massiveData =[

    { title: "Иркутск, Иркутская область", desc: "Средние температуры холодного периода года варьируют от -5 °C до -40 °C, а теплого от 10 °C до 35 °C" },
     {title: "Улан-Удэ, Респ. Бурятия", desc: "Средняя температура воздуха зимой в Улан-Удэ в дневные часы составляет -17 °C, в то время как вечером падает до -19 °C." },
    { title: "Чита, Забайкальский край", desc: "Зимой погода в Чите преимущественно холодная, средняя температура воздуха составляет -17,3°C." }
  ]
 
 
 
 
 
  const newsCard = ({ title, desc }) => {
    return (
      <div
      style={{
        boxSizing:'border-box',
        padding: '10px',
        border: '1px solid green',
        width:'30%',
        borderRadius:'10px',
       backgroundColor: '#a3e2f7',
        
        
    }} >
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    );
  };
  return (
    <body style={{
      backgroundImage: `url(${pic2})`
    }}>
    <div className="App">
      <img
        style={{maxWidth: '100%',
        }}
        src={pic}
        alt="текст"
      />

      <div
        style={{
          display: "flex",
          justifyContent: 'space-between',
          
        }}
      >
      {massiveData.map(props=> newsCard(props))}
      </div>
    </div>

    </body>
  );
}
