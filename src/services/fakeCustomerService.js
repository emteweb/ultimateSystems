
const customers = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: 'John',
    surname: 'Smith',
    email: 'johnsmith@gmail.com',
    birth_date: '01-01-2001',
    isActive: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: 'Mary',
    surname: 'Hawkins',
    email: 'maryhawkins@gmail.com',
    birth_date: '02-02-2002',
    isActive: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: 'Tom',
    surname: 'Stevenson',
    email: 'tomstevenson@gmail.com',
    birth_date: '03-03-2003',
    isActive: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: 'Kate',
    surname: 'Bush',
    email: 'katebush@gmail.com',
    birth_date: '04-04-2004',
    isActive: true
  },
  {
    _id: "55555555555",
    name: '55555',
    surname: '55555',
    email: '55555@gmail.com',
    birth_date: '55555',
    isActive: false
  },
  {
    _id: "6666666666",
    name: '66666',
    surname: '66666',
    email: '66666@gmail.com',
    birth_date: '66666',
    isActive: false
  },
  {
    _id: "7777777777777",
    name: '77777',
    surname: '77777',
    email: '77777@gmail.com',
    birth_date: '77777',
    isActive: false
  }
];

export function getCustomers() {
  return customers;
}

export function getCustomer(id) {
  return customers.find(c => c._id === id);
}

export function saveCustomer(customer) {
  let customerInDb = customers.find(c => c._id === customer._id) || {};
  customerInDb.name = customer.name;
  customerInDb.surname = customer.surname;
  customerInDb.email = customer.email;
  customerInDb.birth_date = customer.birth_date;

  if (!customerInDb._id) {
    customerInDb._id = Date.now();
    customers.push(customerInDb);
  }

  return customerInDb;
}

export function deleteCustomer(id) {
  let customerInDb = customers.find(m => m._id === id);
  customers.splice(customers.indexOf(customerInDb), 1);
  return customerInDb;
}
