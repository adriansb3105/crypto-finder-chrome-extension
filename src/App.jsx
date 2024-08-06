import { Suspense } from 'react'
import { fetchData } from './utils/fetchData'
import './App.css'

const apiData = fetchData('https://jsonplaceholder.typicode.com/users')

function App() {
  const data = apiData.read()
  
  return (
    <section className='box-border m-0 p-0'>
      {/*https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyTrendingGainerslosers*/}
      {/*https://graphql.org/blog/2016-05-02-rest-api-graphql-wrapper/#building-the-graphql-schema*/}

      <header>
        <main className='tickers-scroll font'>
          <ul>
            <li className='minus'>
              <span className='company'>AAPL</span>
              <span className='price'>181.16</span>
              <span className='change'>-1.36 (-0.75%) </span>
            </li>

            <li className='plus'>
              <span className='company'>TSLA</span>
              <span className='price'>199.40</span>
              <span className='change'>+7.43 (+3.87%) </span>
            </li>

            <li className='plus'>
              <span className='company'>NFLX</span>
              <span className='price'>587.65</span>
              <span className='change'>+4.09 (+0.70%) </span>
            </li>

            <li className='minus'>
              <span className='company'>GOOG</span>
              <span className='price'>138.75</span>
              <span className='change'> -6.54 (-4.50%) </span>
            </li>

            <li className='plus'>
              <span className='company'>NVDA</span>
              <span className='price'>790.92</span>
              <span className='change'> +2.75 (+0.35%) </span>
            </li>

            <li className='minus'>
              <span className='company'>MSFT</span>
              <span className='price'>407.54</span>
              <span className='change'> -2.80 (-0.68%) </span>
            </li>

            <li className='plus'>
              <span className='company'>META</span>
              <span className='price'>487.05</span>
              <span className='change'> +5.31 (+1.10%) </span>
            </li>

            <li className='minus'>
              <span className='company'>KO</span>
              <span className='price'>60.34</span>
              <span className='change'> -0.37 (-0.61%) </span>
            </li>
          </ul>

          <ul aria-hidden="true">
            <li className='minus'>
              <span className='company'>AAPL</span>
              <span className='price'>181.16</span>
              <span className='change'>-1.36 (-0.75%) </span>
            </li>

            <li className='plus'>
              <span className='company'>TSLA</span>
              <span className='price'>199.40</span>
              <span className='change'>+7.43 (+3.87%) </span>
            </li>

            <li className='plus'>
              <span className='company'>NFLX</span>
              <span className='price'>587.65</span>
              <span className='change'>+4.09 (+0.70%) </span>
            </li>

            <li className='minus'>
              <span className='company'>GOOG</span>
              <span className='price'>138.75</span>
              <span className='change'> -6.54 (-4.50%) </span>
            </li>

            <li className='plus'>
              <span className='company'>NVDA</span>
              <span className='price'>790.92</span>
              <span className='change'> +2.75 (+0.35%) </span>
            </li>

            <li className='minus'>
              <span className='company'>MSFT</span>
              <span className='price'>407.54</span>
              <span className='change'> -2.80 (-0.68%) </span>
            </li>

            <li className='plus'>
              <span className='company'>META</span>
              <span className='price'>487.05</span>
              <span className='change'> +5.31 (+1.10%) </span>
            </li>

            <li className='minus'>
              <span className='company'>KO</span>
              <span className='price'>60.34</span>
              <span className='change'> -0.37 (-0.61%) </span>
            </li>
          </ul>
        </main>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <ul>
            {data?.map((user) => <li key={user.id}>{user.name}</li>)}
          </ul>
        </Suspense>
      </main>

      <footer>
        <small>
          <a href="https://www.flaticon.com/free-icon/cryptocurrency_9648617?term=crypto&related_id=9648617" title="crypto icons" target='_blank'>Crypto icons created by GOWI - Flaticon</a>
        </small>
      </footer>
    </section>
  )
}

export default App
