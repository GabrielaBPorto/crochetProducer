import './headers.scss'

export function Header() {

  return (
	  <div className="titulo" style={{
		  backgroundImage: 'radial-gradient(#56A49F,#2C3938)',
		  textAlign: 'center',
		  borderRadius: '3px',
		  padding: '0 0 10px 0 '
	  }}>
		  <h1 style={{padding: '5px 5px 0 5px',
				margin: '0 0 0 0'}}> Crochet producer </h1>
		  <h5>O objetivo desse site é fazer um CRUD inicial de receitas de crôche</h5>
	  </div>    
  )
}
