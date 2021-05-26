import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToWishList, fetchProducts, removeFromWishlist} from "./redux";


const Header = () => {
    const {wishList} = useSelector(({products}) => products);
    const wishListTotalPrice = wishList.reduce((acc, el) => {
        return (acc += el.price);
    }, 0);
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
                    <h3 title={wishListTotalPrice} style={{marginRight: '20px'}}>Wish
                                                                                 List: {wishList.length}</h3>
                </div>
            </header>
            <hr/>
        </div>
    );
}

const isInWishList = (wishlist, id) => wishlist.find(el => el.id === id);

const Products = () => {
    const {wishList} = useSelector(({products}) => products);
    const dispatch = useDispatch();
    const {products, isProductLoading} = useSelector(({products}) => products)

    useEffect(() => {
        dispatch(fetchProducts({
            // field: 'price',
            // order: 'ASC'
        }));
    }, []);

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
                        <button onClick={() => {
                            isInWishList(wishList, product.id) ?
                                dispatch(removeFromWishlist(product.id)) :
                                dispatch(addToWishList(product.id));
                        }
                        }>{isInWishList(wishList, product.id) ?
                            'remove from wish List' :
                            'add to wish list'}
                        </button>

                        <h4>
                            {product.title} <br/>
                            Price: {product.price}
                        </h4>
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
