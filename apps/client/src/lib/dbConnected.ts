import mongoose from "mongoose";

let alreadyDone = false;



export async function ensureDbConnecred(){

    if(alreadyDone){
        return;
    }
 alreadyDone = true;

await mongoose.connect('mongodb+srv://anshuman:anshuman@cluster0.igvp1pg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

;
}

