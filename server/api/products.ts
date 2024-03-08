import { faker } from '@faker-js/faker';

export default defineEventHandler((event) => {
    const products: any = []

    function generateUser() {
        return {
            avatar: faker.image.avatar()
        }
    }

    function generateRandomNumber() {
        // max 10
        return Math.floor(Math.random() * 50);
    }

    function generateStatus() {
        const statuses = ['Customers', 'Churned'];
        return statuses[Math.floor(Math.random() * statuses.length)];
    }

    for (let i = 0; i < 10; i++) {
        const productName = faker.commerce.productName();
        const product = {
            id: i,
            brand: faker.company.name(),
            departement: faker.commerce.department(),
            name: productName,
            status: generateStatus(),
            usage: generateRandomNumber(),
            imageURL: faker.image.urlPicsumPhotos({ width: 900, height: 600 }),
            user: generateUser(),
            adjective: faker.commerce.productAdjective(),
            description: faker.commerce.productDescription()

        }
        products.push(product);
    }
    return products;
});
