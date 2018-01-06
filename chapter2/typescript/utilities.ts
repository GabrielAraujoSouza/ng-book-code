//---- Fat Arrow =>

//ES5 example
var data = ['Alice Green', 'Paul Pfifer', 'Louis Blakenship'];
data.forEach(function(line){ console.log(line); });

//Typescript example
var data: string[] = ['Alice Green', 'Paul Pfifer', 'Louis Blakenship'];
data.forEach( (line) => console.log(line) );

var evens = [2,4,6,8];
var odds = evens.map(v => v + 1);

data.forEach(line => {
	console.log(line.toUpperCase())
});

//this
var nate = {
	name: "Nate",
	guitars: ["Gibson", "Martin", "Tailor"],
	printGuitars: function(){
		var self = this;
		this.guitars.forEach(function(g){
			//this.name is undefined so we have to use self.name
			console.log(self.name + " play a "+ g);
		});
	}
};

var nate1 = {
	name: "Nate",
	guitars: ["Gibson", "Martin", "Tailor"],
	printGuitars: function(){
		this.guitars.forEach( (g) => {
			console.log(this.name + " play a " + g);
		});
	}
}

//--Template Strings
var firstName = "Nate";
var lastName = "Murray";

//interpolate a string
var greeting = `Hello ${firstName} ${lastName}`;
console.log(greeting);

//multiline strings
var template = `
<div>
	<h1>Hello</h1>
	<p>This is great website</p>
</div>
`;

