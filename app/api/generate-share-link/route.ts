import { NextResponse } from "next/server";
import { API_ENDPOINTS } from "@/misc/apiEndpoints";
import { server } from "@/misc/axios";
import { AxiosError } from "axios";

const username = "rest-user";
const password = "Dnp8 zMtX JdLH B3Lb a27d CJEv";

const token = `${username}:${password}`;
const encodedToken = Buffer.from(token).toString("base64");

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.data || typeof body.data !== "string") {
      return NextResponse.json(
        {
          error:
            'Invalid input. "data" field is required and must be a string.',
        },
        { status: 400 }
      );
    }

    const response = await server.post(API_ENDPOINTS.share, body, {
      headers: {
        Authorization: `Basic ${encodedToken}`,
      },
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    if (error instanceof AxiosError) {
      return NextResponse.json(
        { error: error.response?.data || "Internal Server Error." },
        { status: error.response?.status || 500 }
      );
    }
  }
}
