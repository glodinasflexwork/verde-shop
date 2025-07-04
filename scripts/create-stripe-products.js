const Stripe = require('stripe');
require('dotenv').config({ path: '.env.local' });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const verdeProducts = [
  {
    name: 'Organic Cotton T-Shirt',
    description: 'Zachte biologische katoenen t-shirt, perfect voor dagelijks gebruik. Gemaakt van 100% gecertificeerd biologisch katoen.',
    price: 2999, // €29.99 in cents
    currency: 'eur',
    images: [
      'https://verde-shop.vercel.app/products/organic-cotton-tshirt-white-front.jpg'
    ],
    metadata: {
      category: 'tops',
      material: 'organic-cotton',
      sustainability_score: '9.2',
      co2_saved: '8.2kg',
      water_saved: '1200L'
    }
  },
  {
    name: 'Recycled Denim Jeans',
    description: 'Stijlvolle jeans gemaakt van gerecycled denim. Duurzaam en comfortabel voor elke gelegenheid.',
    price: 8999, // €89.99 in cents
    currency: 'eur',
    images: [
      'https://verde-shop.vercel.app/products/recycled-denim-jeans-blue-front.jpg'
    ],
    metadata: {
      category: 'bottoms',
      material: 'recycled-denim',
      sustainability_score: '8.8',
      co2_saved: '15.3kg',
      water_saved: '2800L'
    }
  },
  {
    name: 'Hemp Blend Hoodie',
    description: 'Comfortabele hoodie gemaakt van hennep en biologisch katoen. Natuurlijk antibacterieel en ademend.',
    price: 6999, // €69.99 in cents
    currency: 'eur',
    images: [
      'https://verde-shop.vercel.app/products/hemp-hoodie-green-front.jpg'
    ],
    metadata: {
      category: 'tops',
      material: 'hemp-blend',
      sustainability_score: '9.5',
      co2_saved: '12.1kg',
      water_saved: '1800L'
    }
  },
  {
    name: 'Bamboo Fiber Dress',
    description: 'Elegante jurk van bamboevezel. Zijdezacht, hypoallergeen en perfect voor zowel casual als formele gelegenheden.',
    price: 7999, // €79.99 in cents
    currency: 'eur',
    images: [
      'https://verde-shop.vercel.app/products/bamboo-dress-black-front.jpg'
    ],
    metadata: {
      category: 'dresses',
      material: 'bamboo-fiber',
      sustainability_score: '9.0',
      co2_saved: '10.5kg',
      water_saved: '1500L'
    }
  },
  {
    name: 'Organic Linen Shirt',
    description: 'Luchtige linnen blouse van biologisch vlas. Perfect voor warme dagen en een tijdloze toevoeging aan je garderobe.',
    price: 5999, // €59.99 in cents
    currency: 'eur',
    images: [
      'https://verde-shop.vercel.app/products/organic-linen-shirt-white-front.jpg'
    ],
    metadata: {
      category: 'tops',
      material: 'organic-linen',
      sustainability_score: '8.7',
      co2_saved: '7.8kg',
      water_saved: '1100L'
    }
  },
  {
    name: 'Recycled Wool Sweater',
    description: 'Warme trui van gerecyclede wol. Luxueus, duurzaam en perfect voor de koude maanden.',
    price: 9999, // €99.99 in cents
    currency: 'eur',
    images: [
      'https://verde-shop.vercel.app/products/recycled-wool-sweater-charcoal-front.jpg'
    ],
    metadata: {
      category: 'tops',
      material: 'recycled-wool',
      sustainability_score: '8.9',
      co2_saved: '18.2kg',
      water_saved: '3200L'
    }
  }
];

async function createStripeProducts() {
  console.log('🌱 Creating Verde Shop products in Stripe...\n');

  const createdProducts = [];

  for (const productData of verdeProducts) {
    try {
      console.log(`Creating product: ${productData.name}`);

      // Create the product
      const product = await stripe.products.create({
        name: productData.name,
        description: productData.description,
        images: productData.images,
        metadata: productData.metadata,
        shippable: true,
        tax_code: 'txcd_99999999', // General tax code for clothing
      });

      // Create the price
      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: productData.price,
        currency: productData.currency,
        tax_behavior: 'inclusive', // Include VAT in price for EU
      });

      createdProducts.push({
        product,
        price,
        originalData: productData
      });

      console.log(`✅ Created: ${product.name} (${product.id}) - €${(productData.price / 100).toFixed(2)}`);
      console.log(`   Price ID: ${price.id}\n`);

    } catch (error) {
      console.error(`❌ Error creating ${productData.name}:`, error.message);
    }
  }

  console.log(`\n🎉 Successfully created ${createdProducts.length} products in Stripe!`);
  
  // Generate environment variables for easy reference
  console.log('\n📋 Product IDs for your reference:');
  createdProducts.forEach((item, index) => {
    const envName = item.originalData.name.toUpperCase().replace(/[^A-Z0-9]/g, '_');
    console.log(`STRIPE_PRODUCT_${envName}_ID=${item.product.id}`);
    console.log(`STRIPE_PRICE_${envName}_ID=${item.price.id}`);
  });

  console.log('\n🔗 View your products in Stripe Dashboard:');
  console.log('https://dashboard.stripe.com/test/products');

  return createdProducts;
}

// Run the script
if (require.main === module) {
  createStripeProducts()
    .then(() => {
      console.log('\n✨ Stripe product setup complete!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Setup failed:', error);
      process.exit(1);
    });
}

module.exports = { createStripeProducts, verdeProducts };

