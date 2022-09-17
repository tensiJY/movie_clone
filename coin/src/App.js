import { useEffect, useState } from "react";

//  https://api.coinpaprika.com/v1/tickers
function App() {
  const [loding, setLoding] = useState(true);

  const [coins, setCoins] = useState([]);

  //  인풋 달러 금액
  const [money, setMoney] = useState(0);

  //  선택한 코인 머니
  const [amount, setAmount] = useState(0); 

  const onChange = (event) => {
    //console.log(event.target.value)
    setAmount(Number(event.target.value))
  }

  const onChangeMoney = (event) => { setMoney(Number(event.target.value))}
  

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
        <input type="number" value={money} onChange={onChangeMoney} />
      </div>

      <div>
        <input type="number" value={ money === 0 || money === "" ? 0 : amount === 0? 0 : money/amount} readOnly  />
      </div>
      <select onChange={onChange}>
          <option value="0">선택</option>
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
