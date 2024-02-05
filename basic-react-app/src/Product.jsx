import "./Product.css";
import Price from "./Price";
function Product({title, idx}){
    // let isDiscoutnt = price > 10000 ? "Discount of 5%" : "";
    //let isDiscoutnt = price > 30000;
    //let styles = {backgroundColor: isDiscoutnt ? "pink" : null};
    let oldPrices = ["12,495","11,990","1,599","599"];
    let newPrices = ["8,999","9,199","899","278"];
    let description = [["8,000 DPI", "5 Programmable Buttons"], ["Intutive touch surface", "Designed for ipad Pro"], ["Intutive touch surface", "Designed for ipad Pro"],["Wireless Mouse 2.4GHz", "Optical Orientation"]]
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
        // <div className="Product" style={styles}>
        //     <h1>{title}</h1>
        //     <h4>Price: {price}</h4>
        //     { isDiscoutnt && <p>Discount of 5%</p> }
        //     {/* {price > 10000 ? <p>Discount of 5%</p> : null} */}
        //     {/* <h4>{isDiscoutnt}</h4> */}
        // </div>
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