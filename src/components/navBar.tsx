import {Link} from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
const NavBar=()=>{
    const [searchParams] = useSearchParams();
    let todos̥Data = searchParams.get("todos");
    
    return(
    <nav>
        <Link to="/" className={todos̥Data === null ? "active" : ""} >All</Link>
        <Link to="/?todo=active" className={todos̥Data === 'active' ? "active" : ""} >Active</Link>
        <Link to="/?todo=completed"className={todos̥Data === 'completed' ? "active" : ""} >Completed</Link>
    </nav>
    )

}
export default NavBar;