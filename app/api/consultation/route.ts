import Client from "@/models/client";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Get secure credentials from environment variables
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT; // Should be a number like 587
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SENDER_EMAIL = process.env.SENDER_EMAIL;

// 1. Create the Transporter
// This object handles the connection details to the email server.
const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: false, // true for 465, false for other ports (like 587)
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
});

export async function POST(request: NextRequest){
    try {
        const {name, email} = await request.json();
        
        if(!name){
            return NextResponse.json(
                { error: "Name is required" }, { status: 301 }
            )
        }

        if(!email){
            return NextResponse.json(
                { error: "Email is required" }, { status: 301 }
            )
        }

        const client = await Client.create({name, email});

        if(!client){
            return NextResponse.json(
                {erron: "Client could not be created"},
                {status: 501}
            )
        }

        // send a mail

        // 3. Define mail options
        const mailOptions = {
            from: SENDER_EMAIL, // Must be an authorized sender email
            to: email,    // The client's email address
            subject: "Your Free Real Estate Consultation is Confirmed!",
            text: `${name} Thank you for booking your complimentary real estate consultation! I'm looking forward to connecting with you to discuss your goals and how we can achieve them.`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully!" })

  
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json(
      { error: "Your free Consultation is rejucted" },
      { status: 400 }
    );
    }

    
}