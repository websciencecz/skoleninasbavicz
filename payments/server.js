const stripe = require('stripe')('sk_test_51HdBCNGg1BhZ64vx19DdBMaZq7J7IgzYfRfTs8GNVHdfTWWsHplBPl87oBpa55sb2cspxlV62iU7cPd8x13AHbsk003vq9NLwL');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.static('.'));
const YOUR_DOMAIN = 'http://payments.skoleninasbavi.cz.test';
app.post('/create-session', async (req, res) => {
	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],
		line_items: [
			{
				price_data: {
					currency: 'czk',
					product_data: {
						name: 'Stubborn Attachments',
						images: ['https://i.imgur.com/EHyR2nP.png'],
					},
					unit_amount: 20000,
				},
				quantity: 1,
			},
		],
		mode: 'payment',
		success_url: `${YOUR_DOMAIN}/success.html`,
		cancel_url: `${YOUR_DOMAIN}/cancel.html`,
	});
	res.json({ id: session.id });
});
app.listen(4242, () => console.log('Running on port 4242'));
