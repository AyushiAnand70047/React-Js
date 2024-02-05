import Card from "./Card";
import './CardTab.css';

function CardTab(){
    let prodFeature1 = {p1: "8,000 DPI", p2: "Intutive touch surface", p3: "Intuitive touch surface", p4: "Wireless Mouse 2.4GHz"}
    let prodFeature2 = {p1: "5 Programmable Buttons", p2: "Designed for ipad Pro", p3: "Designed for ipad Pro", p4: "Optical Orientation"}
    return(
        <>
        <div className="CardTab">
        <h4 className="heading">Blockbuster Deals on Computer Accessories | Shop Now</h4>
        <Card productName="Logitech MX Master 3S" price="12,495" discount="8,999" prodFeature1={prodFeature1.p1} prodFeature2={prodFeature2.p1}/>
        <Card productName="Apple Pencil (2nd Gen)" price="11,990" discount="9,199" prodFeature1={prodFeature1.p2} prodFeature2={prodFeature2.p2}/>
        <Card productName="Zebronics Zeb-transformer" price="1,599" discount="899" prodFeature1={prodFeature1.p3} prodFeature2={prodFeature2.p3}/>
        <Card productName="Portonics Toad 23 Wireless Mouse" price="599" discount="278" prodFeature1={prodFeature1.p4} prodFeature2={prodFeature2.p4}/>
        </div>
        </>
    );
}

export default CardTab;