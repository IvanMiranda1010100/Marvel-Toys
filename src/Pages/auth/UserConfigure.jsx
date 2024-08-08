import { UserProfile } from "@clerk/clerk-react";
import { dark } from '@clerk/themes';
import {HeaderDashboard} from '@Components/Navegation/HeaderDashboard'
import {FooterPage } from '@Components/LowUse/Footer'

export const UserProfilePage = () => (
  <>
  <HeaderDashboard/>
  <main
  style={ {backgroundImage:'url(/fondoUserProfile.jpg)',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center'
    }}
   className='flex justify-center items-center p-4 w-full h-full'>
    <UserProfile
    appearance={{
      baseTheme: dark
    }}/>
  </main>
  <FooterPage/>
  </>
);

