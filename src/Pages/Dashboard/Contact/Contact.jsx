import {FormContact} from './Form'
import {FooterPage} from '@Components/LowUse/Footer'
import {HeaderDashboard} from '@Components/Navegation/HeaderDashboard'

export const ContactPage = () => {
  return(
    <>
    <HeaderDashboard/>
    <section
    style={ {backgroundImage:'url(/fondoContact.jpg)',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center'
    }}
     className='min-h-12 p-5 flex items-center justify-center'>
      <FormContact/>
    </section>
    <FooterPage/>
    </>
  )
}