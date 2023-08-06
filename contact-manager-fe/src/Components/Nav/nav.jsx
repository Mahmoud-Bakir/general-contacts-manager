import './style.css';
import { useNavigate } from 'react-router-dom';
const Nav = () => {
    const navigator = useNavigate();
    const addNavigation = () => {
        navigator('/add');
    }
    return (
        <nav>
                <p>Welcome to the Contacts website</p>
                <button onClick={addNavigation}> Add a contact</button>

        </nav>
    );
}
export default Nav;