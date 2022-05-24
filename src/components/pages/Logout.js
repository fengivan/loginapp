import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '374964577007-ut50gijsufr32nubf5duln4e7erl9r3e.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
