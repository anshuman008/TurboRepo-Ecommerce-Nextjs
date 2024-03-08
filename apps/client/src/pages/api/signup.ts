// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {Admin} from "db";
import jwt from "jsonwebtoken"
import { ensureDbConnecred } from "@/lib/dbConnected";
const SECRET = "SECRET";


type Data = {
  Token?: string;
  message?: string;
  name?: string
};

export default async function  handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) 
{

    console.log('ha aa gyo call vbe');
    await ensureDbConnecred();
    const { username, password } = req.body;
    const admin =   await  Admin.findOne({ username });

      if (admin) {
        res.status(403).json({ message: 'Admin already exists' });
      } else {
        const obj = { username: username, password: password };
        const newAdmin = new Admin(obj);
        newAdmin.save();

        const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
        res.json({ message: 'Admin created successfully', token });
      }
  
    

    res.status(200).json({ name: "AAnshuman singh" });
}
