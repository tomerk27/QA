import { faker } from '@faker-js/faker';

class FakeDetails {
  constructor() {
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.phoneNumber = faker.string.numeric(10);
    this.email = faker.internet.email();
    this.username = faker.internet.username();
    this.password = faker.internet.password();
    this.gender = faker.helpers.arrayElement(['Male', 'Female', 'Other']);
    this.sentence = faker.lorem.sentence()
    //create date of bearth
    const dob = faker.date.between({from: '1900-01-01', to: '2025-07-27'});
    this.dateOfBirth = dob.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
    this.address = faker.location.streetAddress();
  }
}

export default FakeDetails;
