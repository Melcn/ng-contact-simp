

export class ModelContact{
  
  id: string;
  picture: string;
  name: string;
  firstName: string;
  phoneNumber: string;
  email: string;
  customer: boolean;

  
  constructor(id: string, picture: string, name: string, firstName: string, phoneNumber: string, email: string,  customer: boolean) {
    this.id = id;
    this.picture = picture;
    this.name = name;
    this.firstName = firstName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.customer = customer;
  }

}
