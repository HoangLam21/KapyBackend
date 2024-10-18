
import { connectToDatabase } from "./mongoose"

export const test= async ()=>{
    await connectToDatabase();
    console.log("haha");
}