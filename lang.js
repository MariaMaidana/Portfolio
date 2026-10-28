const translations = {
  en: {
    // NAV
    "nav-home": "Home",
    "nav-projects": "Projects",
    "nav-contact": "Contact",
    "nav-back": "← Back to portfolio",

    // HOME HERO
    "hero-name": "Hi, I’m Maria.",
    "hero-tag": "PORTO ALEGRE, BRAZIL",
    "hero-location": "⌖ Porto Alegre, Brazil",
    "hero-status": "✦ Apple Developer Academy",
    "hero-cta": "↗ Get in touch",
    "hero-work": "Explore my work ↓",
    "hero-follow": "Find me online",
    "hero-role": "Software Developer",
    "hero-desc": "I build iOS apps with Swift and SwiftUI. I'm a Computer Science student and part of the Apple Developer Academy.",

    // HOME PROJECTS
    "projects-label": "My Projects",

    // CONTACT
    "contact-label": "Contact",

    // PROJECT PAGE — shared
    "section-about": "About the project",
    "section-gallery": "Gallery",
    "section-gallery-title": "Screenshots",
    "section-team": "Team",
    "section-team-title": "The people behind it",
    "section-team-desc": "This project was developed as part of a collaborative effort, combining design and development.",
    "section-team-desc-sardine": "This project was developed as part of a collaborative effort, combining design, development, and sound.",
    "footer-back": "back to portfolio",
    "store-link-appstore": "↗ App Store",
    "store-link-github": "↗ GitHub",

    // ROTTA
    "rotta-tag": "Swift • UIKit • CloudKit • Core Data",
    "rotta-subtitle": "Rotta is an iOS app designed to make Formula racing more accessible, providing information about categories like Formula 2, Formula 3, and F1 Academy, along with race calendars, standings, and detailed insights into drivers, teams, and car components.",
    "rotta-about-title": "What is Rotta?",
    "rotta-desc1": "Rotta was created to simplify how fans follow the development categories of Formula racing, which are often harder to track than Formula 1. By centralizing key information in one place, the app makes it easier to stay updated on races, drivers, and team performance without needing multiple sources.",
    "rotta-desc2": "In addition to competition data, Rotta provides educational content about the sport, including explanations of car components, team structures, and driver profiles. Built with UIKit, the app emphasizes structured navigation, data organization, and performance, using Core Data and CloudKit to manage and sync information efficiently.",

    // CERNE
    "cerne-tag": "Swift • SwiftUI • MapKit • ARKit",
    "cerne-subtitle": "Cerne is an iOS application focused on environmental awareness, allowing users to identify trees, measure their dimensions using augmented reality, and estimate their carbon capture. Built with Apple-native technologies, the app transforms ecological data into an interactive and educational experience.",
    "cerne-about-title": "What is Cerne?",
    "cerne-desc1": "Cerne is an app designed to make environmental data more accessible and engaging. By simply taking a photo of a tree, users can identify its species using AI, measure its dimensions with augmented reality, and calculate the amount of carbon it captures. The goal is to promote environmental awareness through intuitive and interactive technology.",
    "cerne-desc2": "The development focused on combining accuracy with usability, integrating tools like ARKit for real-world measurements and MapKit for location-based context. One of the main challenges was ensuring reliable calculations from user-captured data, which was addressed through careful calibration and mathematical modeling.",

    // WANDERFEEL
    "wanderfeel-tag": "Swift • SwiftUI",
    "wanderfeel-subtitle": "WanderFeel is a travel journal app that helps users document their journeys while tracking their emotions, combining memories, photos, and personal reflections into a meaningful experience.",
    "wanderfeel-about-title": "What is WanderFeel?",
    "wanderfeel-desc1": "Unlike traditional travel apps that focus only on locations, WanderFeel centers on how each moment feels. Users can log emotions throughout their journey, turning simple trips into rich, personal stories that evolve over time.",
    "wanderfeel-desc2": "The core of the app is the emotional journey: users can log how they feel throughout their travels, building a deeper connection to their experiences over time. Designed and developed entirely by me using SwiftUI, the app focuses on simplicity, clarity, and a calm visual identity that enhances storytelling.",
    "wanderfeel-team-desc": "This project was developed as part of a collaborative effort, combining design and development.",
    "wanderfeel-role": "Designer and iOS Developer",

    // OH MY GRILL
    "omg-tag": "SwiftUI • SpriteKit • GameplayKit • Multipeer Connectivity • CoreMotion",
    "omg-subtitle": "Oh My Grill! is a fast-paced multiplayer cooking game where players must prepare and serve orders under pressure. Combining chaotic gameplay with real-time connectivity, the experience challenges coordination, timing, and teamwork in a fun and dynamic kitchen environment.",
    "omg-about-title": "What is Oh My Grill?",
    "omg-desc1": "Oh My Grill! is an interactive cooking game where players take on the role of chefs working together to fulfill orders as quickly as possible. Each player is responsible for different tasks, such as grilling, assembling, or delivering dishes, creating a fast-paced and collaborative experience.",
    "omg-desc2": "The project focuses on real-time multiplayer interaction using Multipeer Connectivity, allowing nearby players to seamlessly connect and play together. Built with SpriteKit, the game emphasizes responsive controls, smooth animations, and a playful visual style, while CloudKit is used to support data persistence and player progression.",

    // SARDINE
    "sardine-tag": "Swift • SwiftUI • SpriteKit • GameKit • CoreMotion",
    "sardine-subtitle": "Sardine Escape is a fast-paced ocean adventure where you control a small sardine swimming for survival, dodging obstacles, collecting coins, and unlocking unique fish as you chase the highest score.",
    "sardine-about-title": "What is Sardine Escape?",
    "sardine-desc1": "Sardine Escape is an arcade-style mobile game where players swim through an endless ocean, avoiding obstacles and surviving for as long as possible. Using tilt or touch controls, the goal is simple: go as far as you can and beat your best distance.",
    "sardine-desc2": "As players progress, they can collect coins to unlock a variety of fish skins with different rarities. Through a vending machine system, each “tin” reveals a new surprise, adding a layer of progression and excitement. The game also integrates Game Center for global leaderboards and iCloud sync, ensuring a connected and competitive experience.",
    "purrchase-subtitle": "Purrchase is a home management application focused on reducing food waste. It allows users to catalog their pantry, track expiration dates with smart notifications, and seamlessly integrate inventory with shopping lists and recipe creation.",
    "purrchase-about-title": "What is Purrchase?",
    "purrchase-desc1": "Purrchase was born from the need to transform kitchen management into a simple and visual task. By centralizing your home inventory in one place, the app provides a clear view of what you own and what needs to be consumed first.",
    "purrchase-desc2": "The app serves as a vital companion for grocery shopping by bridging the gap between your kitchen and the market. Users can store their favorite recipes within the app, making it easy to check exactly which ingredients are required while shopping.",
    "tower-subtitle": "Wakes is a tower defense game for Apple Vision Pro where you protect the base by throwing darts with your hands.",
    "tower-about-title": "How it works",
    "tower-desc1": "Enemies follow a path toward the village. You stop them by aiming and throwing darts with hand gestures. Each wave brings a new challenge.",
    "tower-desc2": "Defeated enemies earn you money for upgrades between waves. The game uses hand tracking for input and RealityKit for the immersive world.",
    "flyready-subtitle": "Practice cabin crew interviews out loud, with questions that respond to what you say.",
    "flyready-about-title": "Interview practice that talks back",
    "flyready-desc1": "FlyReady runs a spoken interview on your iPhone. A recruiter asks a question, listens to your answer, and follows up based on your response.",
    "flyready-desc2": "Sessions cover motivation, customer conflict, teamwork, safety, adaptability, and behavioral questions. After each answer, you get feedback you can use for the next round. Speech and feedback run on the device.",
    "entrelinhas-name": "Otterlines",
    "entrelinhas-subtitle": "An interactive reading experience for families, made for Apple TV.",
    "entrelinhas-about-title": "Reading together on the big screen",
    "entrelinhas-desc1": "Otterlines brings stories and activities to the TV, with the otters Sagu and Pudim guiding children through each adventure.",
    "entrelinhas-desc2": "The experience invites families to read together and explore questions and creative activities along the way. It was built as a team project for Apple TV.",
  },

  pt: {
    // NAV
    "nav-home": "Início",
    "nav-projects": "Projetos",
    "nav-contact": "Contato",
    "nav-back": "← Voltar ao portfólio",

    // HOME HERO
    "hero-name": "Oi, eu sou a Maria.",
    "hero-tag": "PORTO ALEGRE, BRASIL",
    "hero-location": "⌖ Porto Alegre, Brasil",
    "hero-status": "✦ Apple Developer Academy",
    "hero-cta": "↗ Vamos conversar",
    "hero-work": "Conheça meus projetos ↓",
    "hero-follow": "Me encontre online",
    "hero-role": "Desenvolvedora de software",
    "hero-desc": "Desenvolvo aplicativos iOS com Swift e SwiftUI. Sou estudante de Ciência da Computação e faço parte da Apple Developer Academy.",

    // HOME PROJECTS
    "projects-label": "Meus Projetos",

    // CONTACT
    "contact-label": "Contato",

    // PROJECT PAGE — shared
    "section-about": "Sobre o projeto",
    "section-gallery": "Galeria",
    "section-gallery-title": "Capturas de tela",
    "section-team": "Equipe",
    "section-team-title": "As pessoas por trás",
    "section-team-desc": "Este projeto foi desenvolvido de forma colaborativa, unindo design e desenvolvimento.",
    "section-team-desc-sardine": "Este projeto foi desenvolvido de forma colaborativa, unindo design, desenvolvimento e som.",
    "footer-back": "voltar ao portfólio",
    "store-link-appstore": "↗ App Store",
    "store-link-github": "↗ GitHub",

    // ROTTA
    "rotta-tag": "Swift • UIKit • CloudKit • Core Data",
    "rotta-subtitle": "Rotta é um aplicativo iOS criado para tornar o automobilismo de Fórmula mais acessível, oferecendo informações sobre categorias como Fórmula 2, Fórmula 3 e F1 Academy, com calendários de corridas, classificações e detalhes sobre pilotos, equipes e componentes dos carros.",
    "rotta-about-title": "O que é o Rotta?",
    "rotta-desc1": "O Rotta foi criado para simplificar o acompanhamento das categorias de base da Fórmula, que costumam ser mais difíceis de acompanhar do que a Fórmula 1. Ao centralizar as principais informações em um só lugar, o app facilita o acompanhamento de corridas, pilotos e desempenho das equipes sem precisar recorrer a diversas fontes.",
    "rotta-desc2": "Além dos dados de competição, o Rotta oferece conteúdo educativo sobre o esporte, com explicações sobre componentes do carro, estrutura das equipes e perfis de pilotos. Desenvolvido com UIKit, o app prioriza navegação estruturada, organização de dados e desempenho, utilizando Core Data e CloudKit para gerenciar e sincronizar as informações.",

    // CERNE
    "cerne-tag": "Swift • SwiftUI • MapKit • ARKit",
    "cerne-subtitle": "Cerne é um aplicativo iOS focado em conscientização ambiental, que permite aos usuários identificar árvores, medir suas dimensões com realidade aumentada e estimar a captura de carbono. Desenvolvido com tecnologias nativas da Apple, o app transforma dados ecológicos em uma experiência interativa e educativa.",
    "cerne-about-title": "O que é o Cerne?",
    "cerne-desc1": "O Cerne é um app criado para tornar os dados ambientais mais acessíveis e envolventes. Com apenas uma foto de uma árvore, os usuários podem identificar a espécie por meio de IA, medir suas dimensões com realidade aumentada e calcular a quantidade de carbono que ela captura. O objetivo é promover a consciência ambiental por meio de tecnologia intuitiva e interativa.",
    "cerne-desc2": "O desenvolvimento focou em combinar precisão com usabilidade, integrando ferramentas como ARKit para medições no mundo real e MapKit para contexto baseado em localização. Um dos principais desafios foi garantir cálculos confiáveis a partir dos dados capturados pelos usuários, o que foi resolvido por meio de calibração cuidadosa e modelagem matemática.",

    // WANDERFEEL
    "wanderfeel-tag": "Swift • SwiftUI",
    "wanderfeel-subtitle": "WanderFeel é um diário de viagem que ajuda os usuários a documentar suas jornadas enquanto registram suas emoções, combinando memórias, fotos e reflexões pessoais em uma experiência significativa.",
    "wanderfeel-about-title": "O que é o WanderFeel?",
    "wanderfeel-desc1": "Ao contrário dos aplicativos de viagem tradicionais, que focam apenas em destinos, o WanderFeel coloca em primeiro lugar como cada momento foi sentido. Os usuários podem registrar suas emoções ao longo da viagem, transformando simples passeios em histórias pessoais ricas que evoluem com o tempo.",
    "wanderfeel-desc2": "O centro do app é a jornada emocional: os usuários podem registrar como se sentem ao longo das viagens, construindo uma conexão mais profunda com suas experiências. Totalmente projetado e desenvolvido por mim com SwiftUI, o app prioriza simplicidade, clareza e uma identidade visual tranquila que potencializa a narrativa.",
    "wanderfeel-team-desc": "Este projeto foi totalmente projetado e desenvolvido por mim.",
    "wanderfeel-role": "Design e desenvolvimento iOS",

    // OH MY GRILL
    "omg-tag": "SwiftUI • SpriteKit • GameplayKit • Multipeer Connectivity • CoreMotion",
    "omg-subtitle": "Oh My Grill! é um jogo multiplayer de culinária frenético onde os jogadores precisam preparar e servir pedidos sob pressão. Combinando uma jogabilidade caótica com conectividade em tempo real, a experiência desafia coordenação, timing e trabalho em equipe em um ambiente de cozinha dinâmico e divertido.",
    "omg-about-title": "O que é Oh My Grill?",
    "omg-desc1": "Oh My Grill! é um jogo de culinária interativo onde os jogadores assumem o papel de chefs trabalhando juntos para cumprir pedidos o mais rápido possível. Cada jogador é responsável por tarefas diferentes, como grelhar, montar ou entregar pratos, criando uma experiência colaborativa e acelerada.",
    "omg-desc2": "O projeto foca na interação multiplayer em tempo real usando Multipeer Connectivity, permitindo que jogadores próximos se conectem e joguem juntos sem complicações. Desenvolvido com SpriteKit, o jogo prioriza controles responsivos, animações fluidas e um estilo visual divertido, enquanto o CloudKit é usado para persistência de dados e progressão do jogador.",

    // SARDINE
    "sardine-tag": "Swift • SwiftUI • SpriteKit • GameKit • CoreMotion",
    "sardine-subtitle": "Sardine Escape é uma aventura oceânica frenética onde você controla uma sardininha nadando pela sobrevivência, desviando de obstáculos, coletando moedas e desbloqueando peixes únicos enquanto busca a maior pontuação.",
    "sardine-about-title": "O que é Sardine Escape?",
    "sardine-desc1": "Sardine Escape é um jogo mobile estilo arcade onde os jogadores nadam por um oceano infinito, desviando de obstáculos e sobrevivendo pelo maior tempo possível. Com controles de inclinação ou toque, o objetivo é simples: vá o mais longe que puder e bata seu recorde.",
    "sardine-desc2": "Conforme avançam, os jogadores podem coletar moedas para desbloquear uma variedade de skins de peixes com diferentes raridades. Por meio de um sistema de máquina de venda automática, cada \"lata\" revela uma nova surpresa, adicionando uma camada de progressão e emoção. O jogo também integra o Game Center para rankings globais e sincronização via iCloud.",
    "purrchase-subtitle": "Purrchase é um aplicativo de organização da cozinha voltado à redução do desperdício de alimentos. Ele permite catalogar a despensa, acompanhar datas de validade com notificações e integrar o inventário a listas de compras e receitas.",
    "purrchase-about-title": "O que é Purrchase?",
    "purrchase-desc1": "O Purrchase surgiu da necessidade de tornar a organização da cozinha uma tarefa simples e visual. Ao reunir os alimentos da casa em um só lugar, o app mostra o que você tem e o que precisa ser consumido primeiro.",
    "purrchase-desc2": "O app também ajuda nas compras: as receitas salvas permitem conferir os ingredientes necessários e comparar com o que já existe na despensa.",
    "tower-subtitle": "Wakes é um jogo de defesa para Apple Vision Pro em que você protege a base lançando dardos com as mãos.",
    "tower-about-title": "Como funciona",
    "tower-desc1": "Os inimigos seguem um caminho até a vila. Para detê-los, você mira e lança dardos com gestos das mãos. Cada onda traz um novo desafio.",
    "tower-desc2": "Os inimigos derrotados rendem dinheiro para melhorias entre as ondas. O jogo usa rastreamento das mãos nos controles e RealityKit no cenário imersivo.",
    "flyready-subtitle": "Treine entrevistas para comissário de bordo em voz alta, com perguntas que acompanham suas respostas.",
    "flyready-about-title": "Uma entrevista para praticar de verdade",
    "flyready-desc1": "No FlyReady, você conversa com um recrutador pelo iPhone. Ele faz uma pergunta, ouve sua resposta e continua a entrevista a partir do que você disse.",
    "flyready-desc2": "Os treinos passam por motivação, conflitos com clientes, trabalho em equipe, segurança, adaptação e perguntas comportamentais. Depois de cada resposta, você recebe orientações para melhorar. Tudo funciona no próprio aparelho.",
    "entrelinhas-name": "Entrelinhas",
    "entrelinhas-subtitle": "Uma experiência de leitura para a família, criada para Apple TV.",
    "entrelinhas-about-title": "Histórias para ler junto",
    "entrelinhas-desc1": "O Entrelinhas leva livros e atividades para a TV. As lontras Sagu e Pudim acompanham as crianças pelas histórias.",
    "entrelinhas-desc2": "A proposta é reunir a família para ler, conversar sobre o que aconteceu e explorar atividades criativas. O app foi desenvolvido em equipe para Apple TV.",
  }
};

let currentLang = "en";
try {
  currentLang = localStorage.getItem("lang") || "en";
} catch (_) {
  // The language toggle still works when browser storage is unavailable.
}

function getLang() {
  return currentLang;
}

function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem("lang", lang); } catch (_) {}
  applyTranslations(lang);
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.querySelectorAll(".lang-toggle").forEach(btn => {
    btn.textContent = lang === "pt" ? "EN" : "PT";
    btn.setAttribute("aria-label", lang === "pt" ? "Switch to English" : "Mudar para Português");
  });
}

function t(key) {
  const lang = getLang();
  return (translations[lang] && translations[lang][key]) || translations["en"][key] || key;
}

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = (translations[lang] && translations[lang][key]) || translations["en"][key];
    if (val !== undefined) el.textContent = val;
  });
}

function toggleLang() {
  const current = getLang();
  setLang(current === "en" ? "pt" : "en");
}

document.addEventListener("DOMContentLoaded", () => {
  setLang(getLang());
});
