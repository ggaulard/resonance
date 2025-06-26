export const sampleProfiles = [
  
  {
    id: "profile_21",
    name: "Manon",
    age: 27,
    location: "Paris",
    voiceCharacteristics: {
      pitch: "medium-high",
      pace: "moderate with thoughtful pauses",
      energy: "calm but enthusiastic when discussing passions",
      patterns: {
        pauseFrequency: "high", // thinks before speaking
        laughterStyle: "quiet, genuine chuckles",
        fillerWords: ["hmm", "you know", "actually"],
        emotionalRange: 0.7,
      },
    },
    transcript: `
bot question : Salut ! J'espère que tu te sens bien aujourd'hui. Je suis curieux·se de savoir, quelles sont les valeurs qui te guident le plus dans la vie et pourquoi ?

user answer : Hello, alors oui aujourd'hui ça va très bien. Quelles sont les valeurs qui me guident le plus dans la vie ? Alors je dirais l'authenticité, parce que c'est quelque chose que j'essaye de m'appliquer et que je cherche beaucoup chez les gens. La curiosité, parce que je trouve que stay curious, il faut être curieux pour comprendre le monde qui nous entoure. Et je dirais la bienveillance, parce que c'est important d'être gentil dans ce monde de brutes.



bot question : Ton approche de l'authenticité et de la bienveillance est vraiment inspirante. Je me demande, dans tes relations, comment exprimes-tu tes émotions habituellement ? Est-ce que tu trouves facile de communiquer ce que tu ressens ?

user answer : Alors pour moi, oui, c'est très facile de communiquer ce que je ressens. J'exprime mes émotions assez ouvertement. Je dis tout ce que je pense, tout ce que je ressens, sans utiliser le tu qui tue, bien évidemment, toujours en parlant de ma perception et de ma personnalité, mais c'est assez facile pour moi d'être au clair avec mes émotions.



bot question : C'est génial que tu sois si ouvert·e et clair·e avec tes émotions, ça doit vraiment enrichir tes relations. En dehors de ça, qu'est-ce qui t'anime au quotidien ? As-tu des passe-temps ou des activités que tu trouves épanouissantes ?

user answer : Alors je dirais que je suis souvent en vadrouille et que je suis un couteau suisse. J'aime beaucoup les activités manuelles, j'adore bricoler, j'adore faire de la peinture, créer des choses de mes mains, mais en même temps j'adore lire, j'adore écrire, j'adore tout ce qui est divertissement, cinéma, télé, séries, j'adore voyager et passer du temps avec mes amis. Et je dirais en fait soit toutes les activités où je peux exprimer ma créativité ou alors toutes les activités où je retrouve un lien de communauté.



bot question : Tu as vraiment une palette d'intérêts très riche et variée, c'est inspirant ! Je suis curieux·se de savoir comment tes expériences passées ont façonné la personne que tu es aujourd'hui, notamment dans tes relations. Y-a-t-il eu une histoire marquante ou une leçon précieuse que tu as retenue de tes anciennes relations ?

user answer : Très bonne question, je dirais qu'il y a eu plusieurs histoires marquantes mais la plus grosse leçon que j'en ai retenue c'est qu'il faut être soi-même, qu'il faut pas s'effacer ou s'abîmer pour les autres. C'est pas évident à faire, il faut le faire, il faut trouver la force de le faire, mais je dirais que c'est important d'être authentique, d'être soi-même et de ne pas trahir ses valeurs de base pour une relation.
      `,
    personality: {
      core_values: ["authenticité", "curiosité", "bienveillance"],
      interests: [
        "activités manuelles",
        "lecture",
        "voyages",
        "relations communautaires",
      ],
      communication_style:
        "Expressive, sincère, et tournée vers les émotions. À l'aise avec les échanges authentiques.",
      emotional_patterns:
        "Exprime facilement ses émotions avec chaleur et vulnérabilité. Oriente ses relations vers l'écoute et la compréhension mutuelle.",
      social_preferences:
        "Cherche des connexions profondes et bienveillantes. Privilégie les échanges significatifs avec ses proches.",
      humor_style:
        "Tendre, bienveillant, souvent lié à l'observation du quotidien ou à des valeurs humaines.",
      energy_type:
        "Créative, chaleureuse, spontanée, avec une forte capacité à connecter émotionnellement avec les autres.",
    },
  },
  {
    id: "profile_22",
    name: "Romain",
    age: 38,
    location: "Conflans",
    voiceCharacteristics: {
      pitch: "medium-low",
      pace: "quick with animated bursts",
      energy: "high, contagious enthusiasm",
      patterns: {
        pauseFrequency: "low", // stream of consciousness
        laughterStyle: "frequent, hearty laughs",
        fillerWords: ["like", "right?", "I mean"],
        emotionalRange: 0.9,
      },
    },
    transcript: `
        bot question : Salut ! C'est toujours intéressant de découvrir comment les gens voient leur avenir. Si tu te projetais dans 10 ans, quelles valeurs ou quel rêve aimerais-tu voir se réaliser dans ta vie ?

user answer : Eh ben, dans dix ans, j'aimerais bien avoir fait un grand voyage en famille. On avait parlé de traverser l'Atlantique en bateau avec les enfants. Voilà, ce serait un truc hyper cool, et puis voilà.



bot question : Ça a l'air tellement palpitant, traverser l'Atlantique en bateau avec ta famille ! Et au quotidien, qu'est-ce qui te fait vibrer ou te ressource pour te préparer à un tel voyage ?

user answer : Eh bien écoute, j'aime bien m'occuper de ma maison, le jardinage, passer du temps avec mes enfants, partager des activités sportives, faire des balades en vélo, de la randonnée, du camping, voir des amis.



bot question : C'est génial de voir que tu profites de toutes ces activités en famille et entre amis. Et quand il s'agit de communiquer tes sentiments ou tes besoins à tes proches, comment préfères-tu t'y prendre ? Tu es plutôt du genre à partager tout de suite ce que tu ressens, ou tu prends le temps de te poser avant d'en parler ?

user answer : Alors en général, je partage pas grand-chose, je suis plutôt réservé. Et puis non, en général, je garde pour moi les choses. J'évite d'embêter les gens avec ça.



bot question : Je comprends, parfois c'est pas évident de tout partager. Par curiosité, est-ce que dans tes expériences passées, tu as eu une relation qui t'a particulièrement marqué ou qui t'a laissé une leçon importante sur l'amour et les relations ?

user answer : J'aime bien avoir confiance en la personne, que ce soit dans l'amitié ou en amour, et puis pas trop à me poser de questions. Que ce soit naturel, fluide, que la personne partage ses passions, que je puisse partager les miennes. Et même si c'est un sujet qui ne me plaît pas, découvrir, participer, expérimenter.



bot question : C'est super important de pouvoir partager des moments et des passions avec quelqu'un. En pensant à ça, y a-t-il un hobby ou une activité que tu as toujours voulu essayer mais que tu n'as pas encore eu l'occasion de tester avec tes proches ?

user answer : J'aimerais bien tester le saut en parachute, un truc que j'ai jamais fait.



bot question : Le saut en parachute, ça doit être une sacrée sensation ! En parlant de défis et d'émotions fortes, est-ce que tu te souviens d'un moment fort dans ta vie où tu as dû faire face à une situation émotionnellement chargée ? Comment as-tu géré ça ?

user answer : Non j'ai pas vraiment d'exemple là-dessus.
      `,
    personality: {
      core_values: ["family", "trust", "adventure", "discovery"],
      interests: ["travel", "family activities", "gardening", "cycling"],
      communication_style:
        "Sincere and reserved, avoids imposing emotions but values open and fluid exchanges when trust is built.",
      emotional_patterns:
        "Prefers managing emotions privately, shows warmth and openness when discussing passions or dreams.",
      social_preferences:
        "Seeks connection through shared activities with family and trusted companions. Enjoys bonding in familiar, meaningful contexts.",
      humor_style:
        "Likely subtle and self-effacing, expressed gently rather than overtly.",
      energy_type:
        "Calm and grounded with sparks of adventurous energy when inspired or excited by new ideas.",
    },
  },
];

// Voice feature extraction function
export function extractVoiceFeatures(profile: (typeof sampleProfiles)[0]) {
  const { voiceCharacteristics, transcript } = profile;

  // Analyze speaking patterns
  const sentences = transcript.split(/[.!?]+/);
  const avgSentenceLength =
    sentences.reduce((acc, s) => acc + s.split(" ").length, 0) /
    sentences.length;

  // Extract emotional indicators
  const emotionalWords = transcript.match(/\*(.*?)\*/g) || [];
  const questionCount = (transcript.match(/\?/g) || []).length;

  return {
    speakingRate: voiceCharacteristics.pace,
    pitchPattern: voiceCharacteristics.pitch,
    energyLevel: extractEnergyLevel(voiceCharacteristics.energy),
    pausePatterns: voiceCharacteristics.patterns.pauseFrequency,
    sentenceComplexity: avgSentenceLength > 15 ? "complex" : "simple",
    emotionalExpression: emotionalWords.length,
    questioningTendency: questionCount / sentences.length,
    laughterFrequency: voiceCharacteristics.patterns.laughterStyle,
    conversationDynamics: {
      fillerWords: voiceCharacteristics.patterns.fillerWords,
      emotionalRange: voiceCharacteristics.patterns.emotionalRange,
    },
  };
}

function extractEnergyLevel(energyDescription: string): number {
  const highEnergyWords = ["high", "enthusiastic", "animated", "contagious"];
  const lowEnergyWords = ["calm", "quiet", "measured", "grounded"];

  let score = 0.5; // neutral
  highEnergyWords.forEach((word) => {
    if (energyDescription.toLowerCase().includes(word)) score += 0.1;
  });
  lowEnergyWords.forEach((word) => {
    if (energyDescription.toLowerCase().includes(word)) score -= 0.1;
  });

  return Math.max(0, Math.min(1, score));
}
