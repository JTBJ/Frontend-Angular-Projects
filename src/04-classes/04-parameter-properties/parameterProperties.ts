export class ParameterProperties {
  constructor(private firstName: string, private lastName: string) {}

  // create setter and getter methods
  public set setFirstName(theFirst: string) {
    this.firstName = theFirst;
  }

  public get getFirstName(): string {
    return this.firstName;
  }

  public set setLastName(theLast: string) {
    this.lastName = theLast;
  }

  public get getLastName(): string {
    return this.lastName;
  }
}
