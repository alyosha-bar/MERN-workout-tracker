import { Link } from "react-router-dom";

const Navabr = () => {
    return ( 
        <header>
            <div className="container">
                <Link to='/'>
                    <h1> Workout Buddy </h1>
                </Link>
                <Link to='/new'>
                    <h4> Add New Exercise </h4>
                </Link>
            </div>
        </header>
     );
}
 
export default Navabr;