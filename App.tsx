import React, {useState} from 'react';
import Routes from './Routes';

export const UserContext = React.createContext();
export const ProfileContext = React.createContext();
export const ServiceContext = React.createContext();

function App(): JSX.Element {
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();
  const [services, setServices] = useState([]);
  return (
    <UserContext.Provider value={{user, setUser}}>
      <ProfileContext.Provider value={{profile, setProfile}}>
        <ServiceContext.Provider value={{services, setServices}}>
          <Routes />
        </ServiceContext.Provider>
      </ProfileContext.Provider>
    </UserContext.Provider>
  );
}
export default App;
