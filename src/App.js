import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "./redux";


const Header = () => {
    return (
        <div>
            <header style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <h3>Our nice shop!</h3>
                <div style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <h3 style={{marginRight: '20px'}}>Cart: {0}</h3>
                    <h3 style={{marginRight: '20px'}}>Wish List: {0}</h3>
                </div>
            </header>
            <hr/>
        </div>
    );
}

const Products = () => {
    const dispatch = useDispatch();
    const {products, isProductLoading} = useSelector(({products}) => products)

    useEffect(() => {
        dispatch(fetchProducts({
            // field: 'price',
            // order: 'ASC'
        }));
    }, []);

    console.log(products);
    if (isProductLoading) {
        return <div style={{textAlign: 'center'}}>Loading!</div>;
    }

    return (
        <div>
            {
                products.map(product => (
                    <div key={product.id} style={{
                        width: '70%',
                        margin: '20px auto'
                    }}>
                        <h4>{product.title}</h4>
                        <p>{product.description}</p>
                        <img style={{
                            width: '80%',
                        }} src={product.image} alt={product.title}/>
                    </div>
                ))
            }
        </div>
    );
}


function App() {
    return (
        <div>
            <Header/>
            <Products/>
        </div>
    );
}

export default App;
