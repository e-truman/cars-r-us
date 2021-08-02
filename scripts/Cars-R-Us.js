
import { Interiors } from "./Interiors.js"
import { Technologies } from "./Technologies.js"
import { Orders } from "./Orders.js"
import { Colors } from "./PaintColors.js"
import { Wheels } from "./Wheels.js"
import { Models } from "./Models.js"
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
        <h1 class="title" >CARS-R-US</h1>

        <article class="choices">
            <section class="choices__colors options">
                <h2 class= "choices__title">Paint Colors</h2>
                ${Colors()}
            </section>
            <section class="choices__interiors options">
                <h2 class="choices__title">Interiors</h2>
                ${Interiors()}
            </section>
            <section class="choices__wheels options">
                <h2 class="choices__title">Wheel Options</h2>
                ${Wheels()}
            </section>
            <section class="choices__technologies options">
                 <h2 class="choices__title">Technology Options</h2>
                 ${Technologies()}
             </section>
             <section class="choices__technologies options">
                <h2 class="choices__title">Models</h2>
                ${Models()}
                </section>
        </article>

        <article class="button">
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2 class="choices__title">Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}