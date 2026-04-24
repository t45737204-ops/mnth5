const ProductCard  = ({ product }) =>{
    const randomIndex = Math.floor(Math.random() * product.images.length);
    const image = product.images[randomIndex];

    const handleClick = () => {
        console.log(product.id, product.name);
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", width: "200px" }}>
            <img src={image} alt={product.name} width="100%" />
            <h3>{product.name}</h3>
            <button onClick={handleClick}>Buy now</button>
        </div>
    );
}
export default ProductCard;