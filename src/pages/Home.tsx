import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div> 
                <h1> Bienvenue dans vocab </h1>
                <p> Apprends du vocabulaire facilement </p>
                <Link to="/review">Commencer la révision</Link>
            </div>
        </>
    )
}

export default Home;