var faker = require("@faker-js/faker");

function generateCustomers() {
    var customers = [];

    // 自動產生 50筆 假資料
    for (var id = 0; id < 50; id++) {
        // 產生 firstName 假資料
        var firstName = faker.faker.name.firstName();

        // 產生 lastName 假資料
        var lastName = faker.faker.name.firstName();

        // 產生 phoneNumber 假資料
        var phoneNumber = faker.faker.phone.phoneNumberFormat();

        customers.push({
            id: id,
            first_name: firstName || null,
            last_name: lastName || null,
            phone: phoneNumber || null,
        });
    }

    return {
        data: customers,
    };
}

// 如果你要用json-server的話，就需要export
module.exports = generateCustomers();
