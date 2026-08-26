import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Pablopvsky";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Font
const fontPablopvsky = fetch(
  new URL("https://pablopvsky.com/fonts/Pablopvsky-Regular.woff")
).then((res) => res.arrayBuffer());

export default async function Image() {
  const fontData = await fontPablopvsky;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#ecebea", // gray-1
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Pablopvsky",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: 120,
              color: "#21201c", // gray-12
              margin: 0,
              lineHeight: 1,
            }}
          >
            Pablopvsky
          </h1>
          <p
            style={{
              fontSize: 48,
              color: "#0000b3", // accent-9
              marginTop: 30,
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            Advertiser & Head of Operations
            <br />
            at Somos Gente Digital
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Pablopvsky",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}

