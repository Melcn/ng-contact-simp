

export class ModelContact{
  
  id: number;
  name: string;
  firstName: string;
  email: string;
  customer: boolean;

  
  constructor(id: number, name: string, firstName: string, email: string,  customer: boolean) {
    this.id = id;
    this.name = name;
    this.firstName = firstName;
    this.email = email;
    this.customer = customer;
  }

}
