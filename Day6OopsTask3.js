// Day-6 OOPS task-3
console.log('------------Day-6 OOPS task-3 given in Day-7 activities------------')
class person{
    constructor(firstName, lastName, mobileNumber, emailId, gender, nationality){
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.emailId = emailId;
        this.gender = gender;
        this.nationality = nationality;
    }
}

let personDetails = new person('Mahmmadsufiyan', 'Shaik', '9999999999', 'abc@gmail.com', 'M', 'Indian')
console.log(personDetails)