import { ProgressiveSlot } from "./class/progressiveSlot";
import { ReelSlot } from "./class/reelSlot";
import { Casino } from "./class/casino";

let progressiveSlotBet= [1,2,5,10,15];
let reelSlotBet = [5,10,15,20];
let reelSlot1:ReelSlot=new ReelSlot(212,reelSlotBet,"Animal",9,20,4,5000);
let progressiveSlot1:ProgressiveSlot=new ProgressiveSlot(2323,progressiveSlotBet,"Egipcio",15,25,4,5,10000);

let reelSlotList:ReelSlot[]=[reelSlot1];
let progressiveSlotList:ProgressiveSlot[]=[progressiveSlot1];

let newCasino:Casino=new Casino('Atlanta',progressiveSlotList,reelSlotList,500000);
newCasino.subtractAmount(20000);
let consulta=newCasino.getTreasury();
console.log(consulta);
