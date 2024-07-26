import { SignUp } from '@clerk/clerk-react';

export default function Signup() {
  return (
    <main
      style={{ backgroundImage: 'url(../public/FondoSignUp.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'Center' }}
      className='flex items-center justify-center w-full min-h-screen'
    >
      <div className='m'>
        <SignUp 
          routing="path" 
          path="/sign-up"
          signInUrl="/sign-in"
          forceRedirectUrl="/dashboard"
          FallbackRedirectUrl="/dashboard"
          signUpForceRedirectUrl="/dashboard"
          signUpFallbackRedirectUrl="/dashboard"
        />
      </div>
    </main>
  );
}
