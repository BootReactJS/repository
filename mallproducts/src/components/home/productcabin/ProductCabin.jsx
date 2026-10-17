import Product  from "../product/Product"
import "./ProductCabin.css"
export function ProductCabin() {
    return(
        <div className="ProductCabin">
            <h3>Productrow</h3>
            <section className="Productrow">
                <Product parameter={"./headsets.jpg"} />
                <Product parameter={"./tablet.jpg"} />
                <Product parameter={"./VRhset.jpg"} />
                <Product parameter={"./neoncables.jpg"} />
            </section>
        </div>
    );
}
export default ProductCabin;