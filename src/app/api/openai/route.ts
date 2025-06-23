// Fichier : src/app/api/chat/route.ts
import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

// L'initialisation du client OpenAI ne change pas.
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Cette route est parfaite pour l'Edge Runtime pour des réponses rapides.
export const runtime = "edge";

// La fonction est nommée POST, elle ne s'exécutera que pour les requêtes POST.
export async function POST(request: Request) {
  try {
    // 1. Lire le corps de la requête JSON.
    const { model, messages, temperature, max_tokens } = await request.json();

    // 2. Valider les paramètres requis.
    // On peut utiliser un type pour plus de sécurité.
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      );
    }

    // 3. L'appel à l'API OpenAI utilise les paramètres reçus.
    // Les valeurs par défaut sont gérées directement ici.
    const response = await openai.chat.completions.create({
      model: model || "gpt-4",
      messages: messages as ChatCompletionMessageParam[], // On s'assure que le type est correct
      temperature: temperature || 0.8,
      max_tokens: max_tokens || 500,
    });

    // 4. On renvoie la réponse complète d'OpenAI avec NextResponse.
    return NextResponse.json(response);
  } catch (error: any) {
    // Gestion des erreurs
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
