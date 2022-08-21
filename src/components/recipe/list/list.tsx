import './list.scss'
import { Filters } from './filters/filters';
import { Card } from './../card/card';

export function List() {
	const items = ['Tartaruga','Porta copos']

  return (
	  <div style={{
		  width: '100vh',
		  padding: '25px 5px'
	  }}>
		  <Filters />
		  <div>
		  { items.map( ()=> {
			return <Card />
			})
		  }
		  </div>
	  </div>
  )
}
