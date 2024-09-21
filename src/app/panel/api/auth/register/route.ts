//http://localhost:3000/panel/api/auth/register

import User, { IUser, IUserSchema } from "@/model/User";
import bcrypt  from "bcryptjs";
import { connectDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { messages } from "@/utils/messages";
import { isValidEmail } from "@/utils/isValidEmail";
import jwt from 'jsonwebtoken';

export async function POST(request:NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const { email, password,confirmPassword  } =  body

   // validar que esten enviados todos los campos
    if(!email || !password || !confirmPassword){
        return NextResponse.json(
            {message: messages.error.needProps,},
            { status:400,}
        );
    }
    // validar que sea un email
    if(!isValidEmail(email)){
        return NextResponse.json(
            {message: messages.error.emailNotValid,},
            { status:400,}
        )
    }
    // confirmacion de contraseña
    if(password !== confirmPassword){
        return NextResponse.json(
            {message: messages.error.passwordsNotMatch,},
            { status:400,}
        )
    }
    // si ya existe el usuario
    const isExisting = await User.findOne({ email });
    if (isExisting) {
        return NextResponse.json(
            {message: messages.error.emailExist,},
            { status:200,}
        )
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser: IUserSchema  = new User ({
         email,
         password: hashedPassword });

    // @ts-ignore
    const {password: userPass, ...rest} = newUser._doc 
    await newUser.save()    
    const token = jwt.sign({data:rest}, 'secreto',{ expiresIn:86400,});
    const response = NextResponse.json({
        newUser: rest,
        message: messages.success.userCreated,
    },{
        status:200,
    });

    response.cookies.set("auth_cookie", token, {
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 86400,
        path: "/",
      });
  
      return response;
  } catch (error) {
    return NextResponse.json(
        { message: messages.error.default, error },
        { status: 500 }
      ); 
     }
}
