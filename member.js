function skillsMember() {
    var member = {
        name: "John Doe",
        age: 30,
        job: "Web Developer",
        sayName: function() {
            console.log(this.name);
        }
    };
    member.sayName();
}