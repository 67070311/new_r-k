import {
  getFallbackVisitorStats,
  incrementVisitorStats,
  readVisitorStats,
} from "@/lib/visitor-counter";

export const dynamic = "force-dynamic";

const responseHeaders = {
  "Cache-Control": "no-store, max-age=0",
};

export async function GET() {
  try {
    return Response.json(await readVisitorStats(), {
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("Failed to read visitor counter", error);

    return Response.json(getFallbackVisitorStats(), {
      headers: responseHeaders,
      status: 200,
    });
  }
}

export async function POST() {
  try {
    if (!shouldIncrementVisitorCounter()) {
      return Response.json(await readVisitorStats(), {
        headers: responseHeaders,
      });
    }

    return Response.json(await incrementVisitorStats(), {
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("Failed to increment visitor counter", error);

    return Response.json(getFallbackVisitorStats(), {
      headers: responseHeaders,
      status: 200,
    });
  }
}

function shouldIncrementVisitorCounter() {
  if (process.env.NODE_ENV !== "production") {
    return false;
  }

  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
    return false;
  }

  return true;
}
