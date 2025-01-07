import { NextResponse } from "next/server";

export async function GET() {
    const apiKey = process.env.XI_API_KEY;
    
    if (!apiKey) {
        console.error('API key not found');
        return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    try {
        const response = await fetch(
            'https://api.elevenlabs.io/v1/user/subscription',
            {
                method: 'GET',
                headers: {
                    'xi-api-key': apiKey,
                    'Content-Type': 'application/json',
                },
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error('ElevenLabs API error:', errorText);
            return NextResponse.json(
                { error: 'Failed to fetch credits from ElevenLabs' }, 
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json({
            remaining: data.character_count,
            total: data.character_limit
        });
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { error: 'Internal server error' }, 
            { status: 500 }
        );
    }
}
