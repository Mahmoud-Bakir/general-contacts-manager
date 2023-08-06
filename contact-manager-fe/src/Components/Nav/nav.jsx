import './style.css';
import {useNavigate} from 'react-router-dom';
const nav = () => {
    const navigator = useNavigate();
    const addNavigation = () => {
        navigator('/add');
    }
    return (
        <nav>
                <h1>Welcome</h1>
                <a href="#mission" >Our Mission</a>

        </nav>
    );
}
export default nav;