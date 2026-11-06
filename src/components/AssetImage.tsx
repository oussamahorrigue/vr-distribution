import Image, { type ImageProps } from 'next/image';

// Next's basePath applies to routes; public image sources need it explicitly.
export default function AssetImage({ src, ...props }: ImageProps) {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const resolved = typeof src === 'string' && src.startsWith('/') && !src.startsWith('//')
    ? `${prefix}${src}` : src;
  return <Image {...props} src={resolved} />;
}
