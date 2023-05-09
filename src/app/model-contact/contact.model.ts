

export class ModelContact{
  
  id: number;
  name: string;
  firstName: string;
  phoneNumber: string;
  email: string;
  customer: boolean;

  
  constructor(id: number, name: string, firstName: string, phoneNumber: string, email: string,  customer: boolean) {
    this.id = id;
    this.name = name;
    this.firstName = firstName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.customer = customer;
  }

}
