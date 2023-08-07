import Nav from '../../Components/Nav/nav';
import CardsContainer from '../../Components/CardsContainer/cardscontainer';
import axios from "axios"
import { useEffect } from 'react';
import { useState } from 'react';
import MyMap from '../../Components/Map/map';

const HomePage = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/retrieve")
          .then((res) => {
            console.log(res.data.data);
            setContacts(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    return (
        <div>
            <Nav/>
            <CardsContainer cards={contacts}/>
            <MyMap locations={contacts}/>
            

        </div>
    );
}
export default HomePage;