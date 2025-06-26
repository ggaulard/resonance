// Fichier: src/app/api/votre-route/route.ts
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

// 1. L'initialisation du client OpenAI ne change pas.
// C'est une bonne pratique de l'instancier en dehors de la fonction handler
// pour qu'il soit réutilisé entre les requêtes (meilleure performance).
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Optionnel mais recommandé : Exécuter cette route sur l'Edge Runtime pour plus de rapidité
// export const runtime = 'edge';

// 2. On exporte une fonction nommée POST au lieu d'un handler par défaut.
// Elle ne sera déclenchée que pour les requêtes POST.
export async function POST(request: Request) {
  try {
    // 3. On lit le corps de la requête avec `await request.json()`.
    // C'est l'équivalent de l'ancien `req.body`.
    const { prompt, systemMessage } = await request.json();

    // La validation reste la même.
    if (!prompt) {
      return NextResponse.json(
        { error: "No prompt provided" },
        { status: 400 }
      );
    }

    // 4. L'appel à l'API OpenAI ne change pas.
    const response = await openai.chat.completions.create({
      model: "gpt-4o-2024-11-20",
      messages: [
        {
          role: "system",
          content: systemMessage || "You are a helpful assistant.",
        }, // Il est bon d'avoir un system message par défaut
        { role: "user", content: prompt },
      ],
      temperature: 0.8,
      max_tokens: 150,
    });

    // 5. On renvoie la réponse avec `NextResponse.json()`.
    // Le statut 200 est implicite, mais on peut l'ajouter pour plus de clarté.
    return NextResponse.json({
      message: response.choices[0].message.content,
    });
  } catch (error: any) {
    // On gère les erreurs (problème de parsing JSON, erreur de l'API OpenAI, etc.)
    console.error("API error:", error);
    return NextResponse.json(
      {
        error: "Error processing your request",
        // On peut inclure le message d'erreur en développement, mais attention en production
        details: error.message,
      },
      { status: 500 }
    );
  }
}
