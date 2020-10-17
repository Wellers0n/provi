const URL = 'http://www.mocky.io/v2/5c923b0932000029056bce39'

export default async function getData() {
    const response = await fetch(URL)

    const result = await response.json()
    
    return result
}