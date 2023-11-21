/* eslint-disable @next/next/no-img-element */

export default function ImageComponent({ src, alt }) {
  return (
    <>
      <img src={src} alt={alt} style={{ marginBottom: "2em" }} />
    </>
  );
}
