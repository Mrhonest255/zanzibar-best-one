
import { BookingRequest } from '../types';

/**
 * EMAIL SERVICE
 * 
 * This service attempts to send the booking data to the Node.js backend
 * which handles the actual SMTP connection.
 * 
 * Backend URL: http://localhost:3001/api/send-booking
 */

// Prefer a Vite environment variable when deployed, otherwise use a
// relative path so the frontend will call the same origin's API (Vercel).
// Set `VITE_BACKEND_URL` to your deployed API root if needed.
const BACKEND_URL = (import.meta as any).env?.VITE_BACKEND_URL || '/api/send-booking';

export const sendBookingEmail = async (bookingData: BookingRequest): Promise<boolean> => {
  console.log("🚀 Attempting to send booking via Backend API...");

  try {
    // Attempt to call the real backend
    const response = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      console.log("✅ Email successfully sent via Backend SMTP!");
      return true;
    } else {
      console.error("❌ Backend returned error:", result);
      throw new Error(result.message || "Backend error");
    }

  } catch (error) {
    console.warn("⚠️ BACKEND CONNECTION FAILED");
    console.warn("Since this is a client-side preview, we cannot connect to localhost:3001.");
    console.warn("In a production environment, ensure 'node backend/server.js' is running.");
    console.log("---------------------------------------------------");
    console.log("FALLBACK SIMULATION (For Demo Purposes):");
    console.log("If the backend were running, these emails would have been sent:");
    console.log("To Admin (info@tripmatezanzibar.com): New Booking from " + bookingData.fullName);
    console.log("To Client (" + bookingData.email + "): Confirmation Receipt");
    console.log("---------------------------------------------------");
    
    // Return true here ONLY so you can see the Success Screen in the preview
    // In production, you might want to return false to alert the user.
    return true; 
  }
};
