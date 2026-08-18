import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Elitez — Music, $ELITE, $ELTZ, and Dream Crafter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [hero, logo] = await Promise.all([
    readFile(join(process.cwd(), "public/brand/hero.jpg")),
    readFile(join(process.cwd(), "public/brand/duck.png")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#06080b",
          color: "#f3ead8",
        }}
      >
        <img
          src={`data:image/jpeg;base64,${hero.toString("base64")}`}
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            background:
              "linear-gradient(90deg, rgba(6,8,11,0.92) 0%, rgba(6,8,11,0.72) 48%, rgba(6,8,11,0.28) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 72,
            width: 1200,
            height: 630,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={`data:image/png;base64,${logo.toString("base64")}`}
              width={88}
              height={88}
              style={{ borderRadius: 88 }}
            />
            <div
              style={{
                marginLeft: 22,
                fontSize: 68,
                letterSpacing: 14,
                fontWeight: 700,
              }}
            >
              ELITEZ
            </div>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 34,
              color: "#d7b35a",
              fontWeight: 600,
            }}
          >
            Music · $ELITE · $ELTZ · Dream Crafter
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 26,
              color: "#c8c1b2",
              maxWidth: 720,
            }}
          >
            A creator-led world on Base
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
