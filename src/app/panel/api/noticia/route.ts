
import Noticia from '@/model/Noticia';
import { connectDB } from "@/lib/db";

import { NextRequest, NextResponse } from "next/server";


export async function POST(request) {
    await connectDB();
  
        try {
        const body = await request.json();
        const newNoticia = await Noticia.create(body);
          return NextResponse.json(newNoticia, { status: 201 });
      } catch (error) {
        return NextResponse.json({ message: "POST error (CREAR NOTICIA)" });
      }
    }
    export async function GET(request) {
        await connectDB();
          try {
          const noticias = await Noticia.find({})
            
              return NextResponse.json(noticias);
        } catch (error) {
          return NextResponse.json({ message: "GET error" },{status: 500, } );
        }
      }
          