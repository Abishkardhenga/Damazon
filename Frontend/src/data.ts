import { Product } from "./types/Product";

export const sampleProducts: Product[] = [
    {
        name: "Apple iPhone 13",
        price: 799,
        image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
        description: `The Apple iPhone 13 features a 6.1-inch Super Retina XDR display, providing an immersive viewing experience with vibrant colors and sharp details. 
                      Powered by the A15 Bionic chip, it offers exceptional performance and efficiency. 
                      Capture stunning photos with the dual-camera system, which includes a 12MP wide and 12MP ultra-wide lens. 
                      Enjoy longer battery life and 5G connectivity for faster internet speeds. 
                      With iOS 15, you get access to the latest features and security updates. 
                      The sleek design, combined with a durable Ceramic Shield front cover, makes the iPhone 13 both stylish and robust.`,
        category: "Electronics",
        brand: "Apple",
        rating: 4.8,
        numReviews: 1200,
        countInStock: 30,
        slug: "apple-iphone-13"
    },
    {
        name: "Sony WH-1000XM4 Wireless Headphones",
        price: 349.99,
        image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
        description: `Experience industry-leading noise cancellation with the Sony WH-1000XM4 Wireless Headphones. 
                      These over-ear headphones feature Dual Noise Sensor technology for superior sound isolation. 
                      The Adaptive Sound Control automatically adjusts ambient sound settings based on your activity. 
                      With up to 30 hours of battery life, enjoy uninterrupted listening for longer. 
                      The headphones also support touch sensor controls for easy playback, volume control, and hands-free calling. 
                      With a comfortable, ergonomic design, the WH-1000XM4 headphones are perfect for long listening sessions.`,
        category: "Electronics",
        brand: "Sony",
        rating: 4.7,
        numReviews: 850,
        countInStock: 50,
        slug: "sony-wh-1000xm4"
    },
    {
        name: "Nike Air Zoom Pegasus 38",
        price: 120,
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        description: `The Nike Air Zoom Pegasus 38 continues the legacy of providing a responsive and comfortable running experience. 
                      Featuring a breathable mesh upper, it offers support and ventilation where you need it most. 
                      The Zoom Air unit in the forefoot delivers responsive cushioning for a springy feel with every stride. 
                      A wider forefoot ensures a roomier fit, while the midfoot webbing secures your foot for a locked-in feel. 
                      The durable rubber outsole provides excellent traction on various surfaces, making the Pegasus 38 perfect for both daily runs and intense training sessions.`,
        category: "Footwear",
        brand: "Nike",
        rating: 4.6,
        numReviews: 600,
        countInStock: 40,
        slug: "nike-air-zoom-pegasus-38"
    },
    {
        name: "KitchenAid Artisan Stand Mixer",
        price: 379.99,
        image: "https://images.unsplash.com/photo-1718976142386-e9ebe34d3aee?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: `The KitchenAid Artisan Stand Mixer is a must-have for any home baker. 
                      With a powerful 325-watt motor, it can handle a variety of mixing tasks with ease. 
                      The 5-quart stainless steel bowl has enough capacity to mix large batches of dough or batter. 
                      Featuring 10-speed settings, you can achieve the perfect consistency for any recipe. 
                      The tilt-head design allows easy access to the bowl and beaters. 
                      With over 15 optional attachments available, the Artisan Stand Mixer can become a versatile kitchen tool, capable of making pasta, grinding meat, and more.`,
        category: "Home Appliances",
        brand: "KitchenAid",
        rating: 4.9,
        numReviews: 950,
        countInStock: 25,
        slug: "kitchenaid-artisan-stand-mixer"
    },
    {
        name: "The Great Gatsby by F. Scott Fitzgerald",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
        description: `The Great Gatsby, a novel by F. Scott Fitzgerald, is a classic of American literature. 
                      Set in the Roaring Twenties, it tells the story of Jay Gatsby, a wealthy but mysterious man who throws lavish parties in hopes of reuniting with his lost love, Daisy Buchanan. 
                      The novel explores themes of wealth, love, and the American Dream. 
                      Fitzgerald's beautiful prose and keen social commentary make The Great Gatsby a timeless read. 
                      This edition includes an introduction by a renowned literary scholar and a selection of critical essays.`,
        category: "Books",
        brand: "Scribner",
        rating: 4.5,
        numReviews: 5000,
        countInStock: 100,
        slug: "the-great-gatsby"
    }
];
