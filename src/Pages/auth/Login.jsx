import { SignIn } from '@clerk/clerk-react';

export default function Login() {
  return (
    <main
      style={{ backgroundImage: 'url(/FondoLogin.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'Center' }}
      className='flex items-center justify-center w-full min-h-screen'
    >
      <div className='m'>
        <SignIn 
          routing="path" 
          path="/sign-in"
          signUpUrl="/sign-up"
          forceRedirectUrl="/dashboard"
          FallbackRedirectUrl="/dashboard"
        />
      </div>
    </main>
  );
}
