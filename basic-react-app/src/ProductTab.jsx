import Product from "./Product"

function ProductTab(){
    // let options = ["hitech", "durable", "fast"];
    // let options2 = { a: "hitech", b: "durable", c: "fast" };
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    };
    return (
        <div style={styles}>
        <Product title="Logitech MX Master" idx={0}/>
        <Product title="Apple Pencil (2nd Gen)" idx={1}/>
        <Product title="Zebronics Zeb-transformer" idx={2}/>
        <Product title="Petronics tod 23" idx={3}/>
        {/* <Product title="phone" price="30k" features={options} features2={options2}/> */}
        {/* <Product title="laptop" price={40000}  />
        <Product title="smart watch" price={1000} />
        <Product title="pen" /> */}
        </div>
    );
}

export default ProductTab;