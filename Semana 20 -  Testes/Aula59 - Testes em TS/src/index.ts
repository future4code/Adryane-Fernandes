import { user } from "./interfaces";

function performPurchase(user: user, purchaseAmount: number): user | undefined {
  if (user.balance >= purchaseAmount) {
    const newBalance: number = user.balance - purchaseAmount

    const newUserBalance: user = {
      ...user,
      balance: newBalance
    };

    return newUserBalance
  }else{
    return undefined 
  }
}
