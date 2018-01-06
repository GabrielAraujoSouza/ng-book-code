//String
var fullName: string = 'Nate Murray';

//number
var age: number = 36;

//boolean
var married: boolean = true;

//array
var jobs: Array<string> = ['IBM', 'Microsoft', 'Google'];
var jobs: string[] = ['Apple', 'Dell', 'HP'];

var chickens: Array<number> = [1,2,3];
var chickens: number[] = [4,5,6];

//Enums
enum Role{Employee, Manager, Admin};
var role: Role = Role.Employee; // => role = 0

enum Role1{Employee = 3, Manager, Admin};
var role1: Role1 = Role1.Employee; // => role = 3; 'Manager = 4, Admin = 5'

enum Role2{Employee = 3, Manager = 5, Admin = 7};
var role2: Role2 = Role2.Employee; // => role = 3

enum Role3{Employee, Manager, Admin};
console.log('Roles: ',Role3[0],',',Role3[1],'and',Role3[2]); // => Employee, Manager and Admin

//Any
var something: any = 'as string';
something = 1;
something = [1,2,3];

//void
function setName(name: string): void{
	this.fullName = name;
}
