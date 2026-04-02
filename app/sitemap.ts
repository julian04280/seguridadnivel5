import { MetadataRoute } from 'next'

// Solo debe haber UN "export default" en todo el archivo
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://seguridadnivel5ltda.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Agrega más rutas aquí si las tienes, ej: { url: 'https://.../nosotros', ... }
  ]
}