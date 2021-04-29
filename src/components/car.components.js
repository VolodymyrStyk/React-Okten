import './car.style.css'

function CarComponents(props) {
    let {title,description,image} =props;
    return <div className={['car']}>
        <h2>{title}</h2>
        <img src={image} alt="" className={['car-img']}/>
        <p>{description}</p>
    </div>
}

export default CarComponents;