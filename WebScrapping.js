const puppeteer = require('puppeteer');

(async function(){
    const buscador = await puppeteer.launch({headless : false});
    const pagina = await buscador.newPage();
    await pagina.goto('https://www.simple.com.es/tienda/');

    const data = await pagina.evaluate(function(){
        const event = document.querySelectorAll('.mkd-pl-main-holder');
        const array = [];

        for ( i = 0; i < event.length; i++) {
            array.push({
                //v1-card-brand svelte-7fa8b9
                title: event[i].querySelector('.mkd-product-list-title').innerHTML, 
                
                precio: event[i].querySelector('.woocommerce-Price-amount').innerHTML,
                
            })

        }
        return array;
    })

    console.log(data);
})();