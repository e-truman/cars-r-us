import { getModels, setModel} from "./database.js"

const models = getModels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "model") {
            setModel(parseInt(event.target.value))
        }
    }
)

export const Models = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = models.map(model => {
        return `<li>
            <input type="radio" name="model" value="${model.id}" /> ${model.model}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
