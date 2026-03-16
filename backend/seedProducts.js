const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const dbURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ecommerce';

const products = [
  {
    title: 'iPhone 15 Pro Max',
    description: 'The latest flagship smartphone from Apple with an A17 Pro chip and a titanium design.',
    price: 1199.99,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Samsung Galaxy S24 Ultra',
    description: 'A powerful Android smartphone featuring a 200MP camera and built-in AI capabilities.',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'iPad Pro 12.9" (M2)',
    description: 'The ultimate professional tablet with a breathtaking Liquid Retina XDR display.',
    price: 1099.00,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Samsung Galaxy Tab S9 Ultra',
    description: 'A massive 14.6-inch AMOLED display perfect for productivity and entertainment.',
    price: 1199.99,
    image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Sony WH-1000XM5',
    description: 'Industry-leading noise canceling wireless headphones with up to 30 hours of battery life.',
    price: 398.00,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Apple Watch Series 9',
    description: 'The ultimate device for a healthy life, featuring Advanced health sensors and a brighter display.',
    price: 399.00,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02bbb13693?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'MacBook Pro 16" (M3 Max)',
    description: 'Supercharged by M3 Max. The ultimate pro laptop for extreme workflows.',
    price: 3499.00,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Dell XPS 15',
    description: 'Premium thin and light laptop with stunning 4K OLED display and powerful performance.',
    price: 1899.99,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Nintendo Switch OLED',
    description: 'Play at home or on the go with a vibrant 7-inch OLED screen.',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1617201944627-c1d4a0a4ed38?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'PlayStation 5 Console',
    description: 'Experience lightning-fast loading with an ultra-high speed SSD and immersive gaming.',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Xbox Series X',
    description: 'The fastest, most powerful Xbox ever. Explore rich new worlds and enjoy action like never before.',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'GoPro HERO12 Black',
    description: 'Incredible image quality, even better HyperSmooth video stabilization and a huge boost in battery life.',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'DJI Mini 4 Pro',
    description: 'The most advanced mini-camera drone to date featuring omnidirectional obstacle sensing.',
    price: 759.00,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Keychron Q1 Pro',
    description: 'A premium full-metal QMK/VIA wireless custom mechanical keyboard.',
    price: 199.00,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Logitech MX Master 3S',
    description: 'An iconic mouse remastered with an 8K DPI track-on-glass sensor and Quiet Clicks.',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'LG C3 Series 55" OLED TV',
    description: 'Experience self-lit OLED pixels that create infinite contrast and perfect black.',
    price: 1399.99,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Bose QuietComfort Earbuds II',
    description: 'The worlds best noise cancellation with personalized sound and fit.',
    price: 279.00,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Kindle Paperwhite Signature Edition',
    description: 'With auto-adjusting front light, wireless charging, and 32 GB of storage.',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1555208453-39fbfb4c1aa5?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Dyson V15 Detect',
    description: 'The most powerful, intelligent cordless vacuum with laser illumination.',
    price: 749.99,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Samsung 990 PRO SSD 2TB',
    description: 'Blazing fast PCIe 4.0 NVMe M.2 internal solid state drive for gaming and heavy workloads.',
    price: 169.99,
    image: 'https://images.unsplash.com/photo-1597849673943-3e0ae9779df5?q=80&w=800&auto=format&fit=crop'
  }
];

mongoose.connect(dbURI)
  .then(async () => {
    console.log('Connected to MongoDB. Seeding products...');
    await Product.deleteMany({}); // Optional: clear existing
    await Product.insertMany(products);
    console.log('Products seeded successfully.');
    process.exit(0);
  })
  .catch(err => {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);
  });
