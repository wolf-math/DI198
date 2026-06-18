interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

// Define a type Customer as an intersection type of BusinessPartner and Contact. Create an instance of the Customer type and initialize it with the appropriate properties.

type Customer = BusinessPartner & Contact;

const myCustomer: Customer = {
  name: 'Ronald',
  credit: 8,
  email: 'ronald@mcdonald.com',
  phone: '(555) 555-5555'
};
