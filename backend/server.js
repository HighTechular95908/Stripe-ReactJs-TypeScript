// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const express = require('express');
const app = express();
const cors = require('cors')
// app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000/buy';
app.use(cors())
app.use(express.static("public"));
app.use(express.json());


app.post('/create-checkout-session', async (req, res) => {
    const blocks = req.body;
    console.log('blocks', blocks);
    const product = await stripe.products.create({
        name: 'Block',
    });
    
    const PRODUCT_ID = product.id;
    
    console.log('PRODUCT_ID', PRODUCT_ID);
    const price = await stripe.prices.create({
        unit_amount: 200,
        currency: 'gbp',
        product: product.id,
    });
    console.log('PRICE_ID', price.id);
    
    // const price = await stripe.prices.retrieve(PRICE_ID);
    const session = await stripe.checkout.sessions.create({
        line_items: [
        {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: price.id,
            quantity: 1,
        },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    })

    res.send({id:session.id});
    // res.redirect(303, session.url);
    // res.send({
    //     sessionId: session.id,
    // });
    
});

app.listen(4242, () => console.log('Running on port 4242'));