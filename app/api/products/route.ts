import { NextRequest, NextResponse } from "next/server";
import { getProducts, searchProducts } from "@/lib/supabase/products";


const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const LIMIT = 10;
const WINDOW_MS =  60 * 1000; 

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");

  
  if (search?.trim()) {
    
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "127.0.0.1";
    const now = Date.now();
    
    const windowData = rateLimitMap.get(ip);
    
    if (!windowData || (now - windowData.lastReset > WINDOW_MS)) {
      
      rateLimitMap.set(ip, { count: 1, lastReset: now });
    } else {
      
      if (windowData.count >= LIMIT) {
        return NextResponse.json(
          { error: "Terlalu banyak permintaan. Silakan tunggu sebelum mencari lagi." },
          { status: 429 }
        );
      }
      
      windowData.count++;
    }
  }

  const products = search?.trim()
    ? await searchProducts(search.trim())
    : await getProducts();

  return NextResponse.json(products);
}
