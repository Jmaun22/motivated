
import Debug "mo:base/Debug";

actor DBank {

  var currentValue = 300;

  currentValue := 100;

  let id = 1321342;

  Debug.print(debug_show(currentValue));

  public func topUp(amount: Nat) {

    let tempValue: Int = currentValue - amount;

    if (tempValue >= 0) {
      currentValue -= amount;

    Debug.print(debug_show(currentValue));
    } 
    else {
      Debug.print(" Amount too large, currentValues less than zero");
    }
  }

  public func withdrawl(amount: Nat) {
    let tempValue: Int = currentValue - amount;

    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    } else {
      Debug.print("Amount too large, currentValue less than zero");
    }
  };

  public query func checkBalance(): async Nat{


    return currentValue;


  };

  topUp();
  

}
