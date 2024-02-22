import {Alert} from 'react-bootstrap'

const ConfirmarFormulario = ({errorMessage, successMessage}) =>{
    return(
        <>
         {errorMessage && <Alert className='centradoAlerta' variant='danger'>{errorMessage}</Alert>}
         {successMessage && <Alert className='centradoAlerta' variant="success">{successMessage}</Alert>}
        </>
    )
}

export default ConfirmarFormulario