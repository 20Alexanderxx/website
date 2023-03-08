export default async function () {
    const res = await fetch('/service/products.json')
    const { data: productList } = await res.json()
    const productsnew = new Map<string, Record<string, any>>(
        productList.map((product: Record<string, any>) => [product.id, product])
    )

    /* function map(array: [], callback: Function) {
        const result = []
        for (let i = 0; i < array.length; i++) {
            result.push(callback(array[i], i, array))
        }
        return result
    } */

    /*productList.forEach((product: Record<string, any>) => {
        productsnew.set(product.id, product)
    })*/

    return productsnew
}