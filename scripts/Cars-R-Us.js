
import { Interiors} from "./Interiors.js"
import { Technologies } from "./Technologies.js"
import { Orders } from "./Orders.js"
import { Colors } from "./PaintColors.js"
import { Wheels } from "./Wheels.js"
import { addCustomCarOrder } from "./database.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomCarOrder()
        }
    }
)


export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Paint Colors</h2>
                ${Colors()}
            </section>
            <section class="choices__sizes options">
                <h2>Interiors</h2>
                ${Interiors()}
            </section>
            <section class="choices__styles options">
                <h2>Wheel Options</h2>
                ${Wheels()}
            </section>
            <section class="choices__styles options">
                 <h2>Technology Options</h2>
                 ${Technologies()}
             </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}