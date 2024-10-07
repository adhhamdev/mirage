import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
    width: 180,
    height: 180,
}
export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 140,
                    background: 'linear-gradient(to bottom right, #4F46E5, #7C3AED)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    borderRadius: '22%',
                }}
            >
                M
            </div>
        ),
        {
            ...size,
        }
    )
}