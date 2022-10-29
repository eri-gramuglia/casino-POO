import { ProgressiveSlot } from "./class/progressiveSlot";
import { ReelSlot } from "./class/reelSlot";
import { Casino } from "./class/casino";

let progressiveSlotBet= [1,2,5,10,15];
let reelSlotBet = [5,10,15,20];
export let reelSlot1:ReelSlot=new ReelSlot(1001,reelSlotBet,"Animal",15,20,3,10000);
export let progressiveSlot1:ProgressiveSlot=new ProgressiveSlot(2001,progressiveSlotBet,"Egipcio",40,25,5,5,500000);

let reelSlotList:ReelSlot[]=[reelSlot1];
let progressiveSlotList:ProgressiveSlot[]=[progressiveSlot1];

export let newCasino:Casino=new Casino('Atlanta',progressiveSlotList,reelSlotList,500000);

