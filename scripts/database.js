const database = {
    orderBuilder: {},
    paintColors: [
        { id: 1, color: "Silver", price: 200 },
        { id: 2, color: "Midnight Blue", price: 1110 },
        { id: 3, color: "Firebrick Red", price: 1165 },
        { id: 4, color: "Spring Green", price: 1165 }
    ],
    interiors: [
        { id: 1, meterial: "Beige Fabric", price: 1405 },
        { id: 2, meterial: "Charcoal Fabric", price: 1182 },
        { id: 3, meterial: "White Leather", price: 1470 },
        { id: 4, meterial: "Black Leather", price: 1990 }
    ],
    technologies: [
        { id: 1, tech: "Basic Package", price: 1200.42 },
        { id: 2, tech: "Navigation Package", price: 1736.4 },
        { id: 3, tech: "Visibility Package", price: 1258.9 },
        { id: 4, tech: "Ultra Package", price: 1795.45 }
       
    ],
    wheels: [
        { id: 1, wheel: "17-inch Pair Radial", price: 1000.42 },
        { id: 2, wheel: "17-inch Pair Radial Black", price: 1036.4 },
        { id: 3, wheel: "18-inch Pair Radial Spoke Silver", price: 1258.9 },
        { id: 4, wheel: "18-inch Pair Radial Spoke Black", price: 1295.45 }
       
    ],
    carOrders: [
        {
            id: 1,
            paintId: 3,
            sinteriorId: 2,
            techId: 3,
            wheelId: 4
        }
    ]
}


export const getPaintColors = () => {
    return database.paintColors.map(paintColor => ({...paintColor}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getCarOrders = () => {
    return database.carOrders.map(order => ({...order}))
}