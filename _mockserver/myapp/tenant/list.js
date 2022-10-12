var faker = require("@faker-js/faker");

function generateCustomers() {
    var customers = [];

    // 自動產生 50筆 假資料
    for (var id = 0; id < 10; id++) {
        var firstName = faker.faker.name.firstName();
        var lastName = faker.faker.name.firstName();
        var phoneNumber = faker.faker.phone.phoneNumberFormat();
        var address = faker.faker.address.city();

        customers.push({
            id: id,
            first_name: firstName || null,
            last_name: lastName || null,
            phone: phoneNumber || null,
            address: address || null,
        });
    }

    return customers;
}

// 如果你要用json-server的話，就需要export
module.exports = generateCustomers();
