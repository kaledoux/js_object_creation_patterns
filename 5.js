"use strict";

const Account = (function() {
  
  let accountEmail;
  let accountPassword;
  let accountFirstName;
  let accountLastName;

  function randomizer(length) {
    let display = '';
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 1; i <= length; i++) {
      display += chars.charAt(Math.floor((Math.random() * chars.length)));
    }
    return display;
  };

  return {
    init(email, password, firstName, lastName) {
      this.accountEmail = email;
      this.accountPassword = password;
      this.accountFirstName = firstName;
      this.accountLastName = lastName;
      this.displayName = randomizer(16);
      return this;
    },


    reanonymize(password) {
      if (password === this.accountPassword) {
        this.displayName = randomizer(16);
        return true;
      } else {
        console.log('Invalid Password');
      }
    },

    resetPassword(password, newPass) {
      if (password === this.accountPassword) {
        this.accountPassword = newPass; 
        return true;
      } else {
        console.log('Invalid Password');
      }
    },

    firstName(password) {
      if (password === this.accountPassword) {
        console.log(this.accountFirstName);
      } else {
        console.log('Invalid Password');
      }
    },

    lastName(password) {
      if (password === this.accountPassword) {
        console.log(this.accountLastName);
      } else {
        console.log('Invalid Password');
      }
    },

    email(password) {
      if (password === this.accountPassword) {
        console.log(this.accountEmail);
      } else {
        console.log('Invalid Password');
      }
    },
  }
})();

// const Account = {
// 
//   init(email, password, firstName, lastName) {
//     this.accountEmail = email;
//     this.accountPassword = password;
//     this.accountFirstName = firstName;
//     this.accountLastName = lastName;
//     this.displayName = function(length) {
//       let display = '';
//       let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//       for (let i = 1; i <= length; i++) {
//         display += chars.charAt(Math.floor((Math.random() * chars.length)));
//       }
//       return display;
//     }(16);
//     return this;
//   },
// 
// 
//   reanonymize(password) {
//     if (password === this.accountPassword) {
//       let length = 16;
//       let display = '';
//       let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//       for (let i = 1; i <= length; i++) {
//         display += chars.charAt(Math.floor((Math.random() * chars.length)));
//       }
//       this.displayName =  display;
//       return true;
//     } else {
//       console.log('Invalid Password');
//     }
//   },
// 
//   resetPassword(password, newPass) {
//     if (password === this.accountPassword) {
//       this.accountPassword = newPass; 
//       return true;
//     } else {
//       console.log('Invalid Password');
//     }
//   },
// 
//   firstName(password) {
//     if (password === this.accountPassword) {
//       console.log(this.accountFirstName);
//     } else {
//       console.log('Invalid Password');
//     }
//   },
// 
//   lastName(password) {
//     if (password === this.accountPassword) {
//       console.log(this.accountLastName);
//     } else {
//       console.log('Invalid Password');
//     }
//   },
// 
//   email(password) {
//     if (password === this.accountPassword) {
//       console.log(this.accountEmail);
//     } else {
//       console.log('Invalid Password');
//     }
//   },
// };
// 
// let acct1 = Object.create(Account).init('email', 'secret', 'kyle', 'l');

const fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

const displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
