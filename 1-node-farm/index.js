const fs = require('fs')
const http = require('http');
const url = require('url');


const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTIONT%}/g, product.description);
    output = output.replace(/{%IMAGE%}/g, product.image);

    if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    return output;
}

const tempOverview = fs.readFileSync(`${__dirname}/starter/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/starter/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/starter/templates/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

/////////////////////////////////
// SERVER
const server = http.createServer((req, res) => {
    const pathName = req.url

    //overview page
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, { 'Content-type': 'text/html' })


        const cardsHtml = dataObj.map((el) => replaceTemplate(tempCard, el)).join('')
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml)

        res.end(output)

        // product page
    } else if (pathName === '/product') {
        res.end('this is the PRODUCT 🌮')

        // api page
    } else if (pathName === '/api') {

        res.writeHead('200', { 'Content-type': 'application/json' })
        res.end(data)

        // 404 page
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello test'
        })
        res.end(`<h1> Page not found! </h1>`)
    }
    res.end('Hello from the server🤑')
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000 🤘')
})