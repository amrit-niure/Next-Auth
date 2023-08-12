import connectionDB from "@/lib/database"
import User from "@/modal/user"
import { NextResponse } from "next/server"

export async function POST (req){
    const {name,email} = await req.json()
    // connect to database
    connectionDB()
    await User.create({name,email})
    return NextResponse.json({message : "User Registered"}, { status : 201})
}