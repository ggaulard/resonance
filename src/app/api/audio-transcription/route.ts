// Fichier: src/app/api/audio-transcription/route.ts
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

// 1. L'initialisation du client OpenAI reste la même.
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 2. On exporte une fonction POST. La configuration `bodyParser: false` n'est plus nécessaire.
// L'App Router gère les flux de données (streams) par défaut.
export async function POST(request: Request) {
  try {
    // 3. On récupère les données du formulaire avec `request.formData()`.
    // C'est l'équivalent moderne de `formidable`.
    const formData = await request.formData();

    // 4. On récupère le fichier à partir des données du formulaire.
    // La clé 'file' doit correspondre au nom du champ dans votre formulaire HTML.
    const file = formData.get("file") as File | null;

    // Validation : on vérifie si un fichier a bien été envoyé.
    if (!file) {
      return NextResponse.json(
        { error: "No audio file provided" },
        { status: 400 }
      );
    }

    // 5. L'appel à l'API OpenAI est simplifié !
    // Le SDK d'OpenAI peut accepter un objet `File` directement.
    // Plus besoin de `fs.createReadStream`.
    const response = await openai.audio.transcriptions.create({
      file: file, // On passe l'objet File directement
      model: "whisper-1",
      response_format: "verbose_json",
      timestamp_granularities: ["word", "segment"],
    });

    // 6. On renvoie la réponse avec NextResponse.json.
    return NextResponse.json(response);
  } catch (error: any) {
    console.error("OpenAI Audio API error:", error);
    return NextResponse.json(
      {
        error: "Error processing your request",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
