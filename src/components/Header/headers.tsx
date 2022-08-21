import './headers.scss'

export function Header() {

  return (
	  <div className="titulo" style={{
		  backgroundImage: 'radial-gradient(#56A49F,#2C3938)',
		  textAlign: 'center',
		  borderRadius: '3px',
		  padding: '20px 0 2px 0 '
	  }}>
		  <h1 style={{padding: 0,
				margin: 0}}> Crochet producer </h1>
		  <h5 style={{
			  padding: '0 0 5px 0'
		  }}>O objetivo desse site é fazer um CRUD inicial de receitas de crochê</h5>
	  </div>    
  )
}
