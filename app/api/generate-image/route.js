import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const runtime = "edge";

export async function POST(req) {
  try {
    const { prompt, width, height, mode } = await req.json();

    console.log('Generating image:', prompt, width, height, mode);

    const modelId =
      mode === 'fast'
        ? 'black-forest-labs/FLUX.1-schnell'
        : 'black-forest-labs/FLUX.1-dev';

    const response = await fetch(
      `https://api-inference.huggingface.co/models/${modelId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          'x-wait-for-model': true,
        },
        method: 'POST',
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            width: width,
            height: height,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to generate image');
    }

    const result = await response.blob();

    const { url } = await put('images/image.png', result, {
      access: 'public',
    });

    console.log('Image generated:', url);

    return NextResponse.json({ imageUrl: url });
  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    );
  }
}
