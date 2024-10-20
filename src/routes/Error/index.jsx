import './Error.css'
import { Helmet } from 'react-helmet';

const index = () => {
  return (
    <div className='Error'>
      <Helmet>
        <meta name="description" content="Página não encontrada, 404." />
        <meta name="keywords" content="erro 404, página não encontrada, erro, 404" />
        <meta name="author" content="Arthur Gabriel Sant" />
        <title>Página não encotrada</title>
      </Helmet>

      <h1>404</h1>
    </div>
  )
}

export default index