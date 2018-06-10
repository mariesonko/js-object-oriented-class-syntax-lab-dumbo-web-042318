// build an ES2015 `BoardMember` class with the following properties set by the constructor: `name`, `homeState`, and `training`.
  class BoardMember{
    constructor(name, homeState, training){
      this.name = name;
      this.homeState = homeState;
      this.training = training;
    }
    // Add following methods to the prototype using the class syntax:
    // + `veto` — returns `No, I must disagree`
      veto(){
      return 'No, I must disagree';
    }
    // + `approve` — returns `You can do that!`
      approve(){
        return 'You can do that!';
      }

    // + `doCharity` — returns `I like to help people.`
      doCharity(){
        return 'I like to help people.';
      }
    // + `releasePressStatement` — returns `You will see great things from Scuber.`
      releasePressStatement(){
        return 'You will see great things from Scuber.';
      }
    // + `sayHi` — returns `"Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.`
    sayHi(){
      return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
    }

  }

  // build an ES2015 `Ceo` class with the following properties: `name`, `training`, and `homeState`.  Use inheritance to accomplish this.  A `Ceo` should have all of the methods that a `boardMember` has.
  //
    class Ceo extends BoardMember{
      // Add a new method giving the `Ceo` the ability to hire new employees.  This functionality should not be available to a board member.  So the `Ceo` would have one new method:
      // + `hireEmployee` — returns `Welcome aboard!`
      hireEmployee(){
        return 'Welcome aboard!'
      }
    }
