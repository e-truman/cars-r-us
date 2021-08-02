import { getOrders, getWheels, getInteriors, getPaintColors, getTechnologies } from "./database.js"


const wheels = getWheels()
const interiors = getInteriors()
const colors = getPaintColors()
const technologies = getTechnologies()


const buildOrderListItem = (order) => {

    
    const foundColor = colors.find(
        (color) => {
            return color.id === order.colorId
        }
    )

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )


    const foundTech = technologies.find(
        (tech) => {
            return tech.id === order.techId
        }
    )



    const totalCost = foundTech.price + foundWheel.price + foundInterior.price + foundColor.price

     
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} costs ${costString} and was placed on ${order.timestamp}
    </li>`


}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
