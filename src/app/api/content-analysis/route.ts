// Fichier : src/app/api/analyze-transcript/route.ts
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

// L'initialisation du client OpenAI reste identique.
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Recommandation : Les appels aux API LLM sont parfaits pour l'Edge Runtime.
// Décommentez la ligne suivante pour des réponses potentiellement plus rapides.
// export const runtime = 'edge';

// On exporte une fonction POST, qui ne sera exécutée que pour ce type de requête.
export async function POST(request: Request) {
  try {
    // 1. Lire le corps de la requête JSON.
    const { transcript } = await request.json();

    // 2. Valider les données d'entrée.
    if (!transcript) {
      return NextResponse.json(
        { error: "No transcript provided" },
        { status: 400 }
      );
    }

    // 3. La construction du prompt ne change pas.
    const prompt = `Analyze this transcript and extract:
    1. Core values (4-5 key values)
    2. Interests mentioned
    3. Communication style
    4. Personality traits
    5. Social preferences
    6. Humor style
    
    Transcript: "${transcript}"
    
    Return as JSON with these exact keys:
    {
      "core_values": [],
      "interests": [],
      "communication_style": "",
      "emotional_patterns": "",
      "social_preferences": "",
      "humor_style": "",
      "energy_type": ""
    }`;

    // 4. L'appel à l'API OpenAI ne change pas non plus.
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are a personality analyst. Analyze transcripts to understand personality.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      // Pour forcer une réponse JSON de la part de GPT-4, on peut utiliser le "JSON Mode"
      // response_format: { type: "json_object" }, // Décommentez si vous utilisez gpt-4-turbo ou plus récent
    });

    // 5. On parse la réponse et on la renvoie avec NextResponse.
    const content = response.choices[0].message.content || "{}";
    const data = JSON.parse(content);

    return NextResponse.json(data);
  } catch (error: any) {
    // Gestion globale des erreurs (JSON malformé, erreur OpenAI, etc.)
    console.error("API error:", error);
    return NextResponse.json(
      {
        error: "Error processing your request",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
