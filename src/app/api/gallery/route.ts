import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get('folder');

  if (!folder) {
    return NextResponse.json({ error: 'Folder is required' }, { status: 400 });
  }

  const dir = path.join(process.cwd(), 'public/assets/proyects_thumbnails', folder);
  try {
    const files = fs.readdirSync(dir).filter(file => file.match(/\.(png|jpe?g|gif|webp)$/i));
    return NextResponse.json({ files });
  } catch (error) {
    return NextResponse.json({ error: 'Folder not found' }, { status: 404 });
  }
}
