export const APP_HOST = Deno.env.get('APP_HOST') || '127.0.0.1'
export const APP_PORT = Deno.env.get('APP_PORT') || 4000
export const DB_HOST = Deno.env.get('DB_HOST') || 'localhost'
export const DB_PORT = Number(Deno.env.get('DB_HOST')) || 5432
export const DB_USER = Deno.env.get('DB_USER') || 'postgres'
export const DB_PASSWORD = Deno.env.get('DB_PASSWORD') || ''
export const DB_NAME = Deno.env.get('DB_NAME') || 'postgres'
