import "./Product.css";

function Product({title, price=100}){
    // let isDiscoutnt = price > 10000 ? "Discount of 5%" : "";
    let isDiscoutnt = price > 30000;
    let styles = {backgroundColor: isDiscoutnt ? "pink" : null};
    return(
        <div className="Product" style={styles}>
            <h1>{title}</h1>
            <h4>Price: {price}</h4>
            { isDiscoutnt && <p>Discount of 5%</p> }
            {/* {price > 10000 ? <p>Discount of 5%</p> : null} */}
            {/* <h4>{isDiscoutnt}</h4> */}
        </div>
    )
    // if(price>10000){
    //     return(
    //         <div className="Product">
    //             <h1> { title } </h1>
    //             <h4> Price: { price } </h4>
    //             <h4>Discount of 5%</h4>
    //         </div>
    //     );
    // }
    // else{
    //     return(
    //         <div className="Product">
    //             <h1> { title } </h1>
    //             <h4> Price: { price } </h4>
    //         </div>
    //     )
    // }
    //const list = features.map((feature) => ( <li>{feature}</li>));
    // return (
    //     <div className="Product">
    //         <h1> { title } </h1>
    //         <h4> Price: { price } </h4>
    //         {/* <p>{list}</p> */}
    //         {/* <p>
    //             {features.map((feature) => (
    //                 <li>{feature}</li>
    //             ))}
    //         </p> */}
    //         {/* we can't directly render object but we can render individual key  */}
    //         {/* <p>{features2 ? features2.a: ""}</p>
    //         <p>{features2 && features2.a}</p> */}
    //     </div>
    // );
}

export default Product;