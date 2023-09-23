const Item = (props) => {
    const {img,price,itemname} = props.detail;

    return (
        <article className='item'>
            <img src={img} alt={itemname} />
            <h2>{price}</h2>
            <h4>{itemname}</h4>
        </article>
    );
};

export default Item;