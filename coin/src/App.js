import { useEffect, useState } from "react";

//  https://api.coinpaprika.com/v1/tickers
function App() {
  const [loding, setLoding] = useState(true);

  const [coins, setCoins] = useState([]);

  const [money, setMoney] = useState(0);

  const [amount, setAmount] = useState(0); 

  const onChange = (event) => {
    console.log(event.target.value)
  }

  const onChangeMoney = () => {}

  useEffect( ()=>{
    console.log(`init`);
    //fetch("https://api.coinpaprika.com/v1/tickers")
    //  .then( (response)=> response.json())
    //  .then( (json) => console.log(json));

    
      fetch("https://api.coinpaprika.com/v1/tickers")
      .then( (response)=> response.json())
      .then( (json) => {
              setCoins(json);
              setLoding(false);
            });
  }, [])

  return (
    <div>
      <h1>The Coins! ({coins.length}) </h1>
      {loding ? <strong>Loding ...</strong> : null}

      <div>
        <input type="number" value={money} onChangeMoney={onChangeMoney} />
      </div>

      <div>
        <input type="number" readOnly  />
      </div>
      <select onChange={onChange}>
        {
          coins.map( (item, index)=>{
            return <option key={index} value={item.quotes.USD.price}>  {item.name} ({item.symbol}) : ${item.quotes.USD.price} USD  </option>
          } )
        }
      </select>


      <ul>
        {
          coins.map( (item, index) => 
              <li key={index}> {item.name} ({item.symbol}) : ${item.quotes.USD.price} USD </li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
