export default function useOgpImage(title: string) {
  return `https://blp-og-image.vercel.app/${encodeURI(title)}?theme=dark`;
}
