const translations = {
  en: {
    // NAV
    "nav-home": "Home",
    "nav-projects": "Projects",
    "nav-experience": "Experience",
    "nav-contact": "Contact",
    "nav-back": "← Back to portfolio",

    // HOME HERO
    "home-marquee": "Curious by nature  ·  Built with care  ·  Made to be useful",
    "hero-name": "Hi, I’m Maria.",
    "hero-tag": "PORTO ALEGRE, BRAZIL",
    "hero-cta": "↗ Get in touch",
    "hero-work": "View projects ↓",
    "hero-follow": "Find me online",
    "hero-role": "iOS Developer",
    "hero-desc": "I study Computer Science and I'm part of the Apple Developer Academy. In my projects, I build apps and games with Swift and SwiftUI.",

    // HOME PROJECTS
    "projects-label": "My Projects",
    "home-desc-otterlines": "Shared reading for children and adults, with books and activities that encourage a reading habit on Apple TV and iPad.",
    "home-desc-cerne": "Identify trees, measure them with augmented reality, and explore their environmental impact.",
    "home-desc-sardine": "Guide a sardine through the ocean, dodge obstacles, and see how far you can go.",
    "home-desc-rotta": "Follow junior formula racing with calendars, standings, and driver profiles.",
    "home-desc-wanderfeel": "Collect places, photos, and feelings in a travel journal that helps you remember each trip.",
    "home-desc-omg": "Split the kitchen tasks, get orders out, and keep the team going through the chaos.",
    "home-desc-purrchase": "Organize your pantry, track expiration dates, and plan shopping and recipes around what you already have.",
    "home-desc-wakes": "Defend the village in a gesture-controlled tower defense game for Apple Vision Pro.",
    "home-desc-flyready": "Practice flight attendant interviews out loud with a recruiter who responds to your answers.",

    // EXPERIENCE
    "experience-label": "Experience & education",
    "experience-title": "Technology, research, and operations.",
    "experience-intro": "My background spans app development, research, and airport service.",
    "experience-current": "CURRENT",
    "experience-academy-period": "Feb 2025 – present · expected completion Dec 2026",
    "experience-academy-role": "App Development Scholar",
    "experience-academy-description": "Developing and testing apps for Apple platforms in multidisciplinary teams, helping plan activities with Scrum, and presenting solutions in Portuguese and English.",
    "experience-pet-period": "Sep 2024 – Feb 2025",
    "experience-pet-organization": "PET Informatics — PUCRS",
    "experience-pet-role": "Research Scholar",
    "experience-pet-description": "Created virtual environments in Blender and ran crowd simulations for research focused on artificial intelligence.",
    "experience-azul-period": "Aug 2023 – Aug 2024",
    "experience-azul-organization": "Azul Linhas Aéreas",
    "experience-azul-role": "Apprentice / Airport Agent",
    "experience-azul-description": "Assisted and guided passengers, supporting airport procedures and day-to-day operational issues.",
    "education-label": "EDUCATION",
    "education-title": "BSc in Computer Science",
    "education-institution": "Anhanguera",
    "education-description": "In progress · expected graduation in 2028.",
    "education-languages-label": "Languages studied",
    "skills-title": "Technical skills",
    "skills-aria": "Technical skills",
    "skills-languages": "Languages",
    "skills-frameworks": "Frameworks & architecture",
    "skills-testing": "Software testing",
    "skills-tools": "Tools & methods",

    // CONTACT
    "contact-label": "Contact",

    // PROJECT PAGE — shared
    "section-about": "About the project",
    "section-gallery": "Gallery",
    "section-gallery-title": "Screenshots",
    "section-team": "Team",
    "section-team-title": "The people behind it",
    "section-team-desc": "This project was developed as part of a collaborative effort, combining design and development.",
    "section-team-desc-sardine": "Developed as a team, with contributions across design, development, and sound.",
    "rotta-team-desc": "Developed as a team, with contributions across design and development.",
    "rotta-gallery-label": "Inside the season",
    "rotta-gallery-title": "Calendars, rankings, and driver profiles",
    "rotta-logo-alt": "Rotta logo.",
    "rotta-screen1-alt": "Formula 2 information screen with a link to the motorsport glossary.",
    "rotta-screen2-alt": "Formula 2 standings for drivers and teams.",
    "rotta-screen3-alt": "Formula 2 calendar with the Lusail round and its session schedule.",
    "rotta-screen4-alt": "Leonardo Fornaroli's driver profile with team, country, and results.",
    "rotta-screen5-alt": "List of Formula 2 drivers.",
    "wanderfeel-gallery-label": "Inside WanderFeel",
    "wanderfeel-gallery-title": "Places, feelings, and memories",
    "wanderfeel-creator-label": "My work",
    "wanderfeel-creator-title": "From idea to implementation",
    "wanderfeel-creator-desc": "I created WanderFeel from design through implementation in SwiftUI.",
    "wanderfeel-logo-alt": "WanderFeel logo.",
    "wanderfeel-screen1-alt": "Travel check-in with location, date, emotion choices, and a field for the day's plans.",
    "wanderfeel-screen2-alt": "List of trips, including Rio de Janeiro and London.",
    "wanderfeel-screen3-alt": "Travel statistics showing recorded emotions and trip highlights.",
    "wanderfeel-screen4-alt": "Map with travel entries, photos, and notes.",
    "omg-logo-alt": "Oh My Grill! logo.",
    "omg-screen1-alt": "Instruction to cut and prepare ingredients quickly.",
    "omg-screen2-alt": "Fries cooking with an instruction to get the timing right without burning them.",
    "omg-screen3-alt": "Patties on the grill, with ingredients set aside for assembling orders.",
    "omg-screen4-alt": "Burger and fries orders with ingredients ready on the counter.",
    "purrchase-logo-alt": "Purrchase logo.",
    "purrchase-screen1-alt": "Shopping lists screen with an option to create a list.",
    "purrchase-screen2-alt": "The list “Rancho da Gigi” with grapes and apples.",
    "purrchase-screen4-alt": "Pantry organized into all products, items nearing expiration, and expired items.",
    "purrchase-screen5-alt": "Recipe inspiration tab with search and a cookie recipe.",
    "tower-icon-alt": "Wakes icon: a geometric skull with glowing green eyes on a purple background.",
    "flyready-icon-alt": "FlyReady icon: an aviation professional in a navy uniform and coral scarf.",
    "flyready-screen1-alt": "FlyReady promotional image showing its home screen and an interview practice card.",
    "flyready-screen2-alt": "Spoken interview practice: the recruiter asks about safety, the user answers, and the recruiter follows up.",
    "sardine-gallery-label": "Out in the ocean",
    "sardine-gallery-title": "An ocean in motion",
    "sardine-logo-alt": "Sardine Escape logo.",
    "sardine-screen1-alt": "Sardine Escape title screen, with a sardine inside a can and buttons to play, visit the store, or view fish skins.",
    "sardine-screen2-alt": "A sardine swims among sea creatures and obstacles during a game.",
    "sardine-screen3-alt": "A sardine tin with instructions to open it and discover a new fish.",
    "sardine-screen4-alt": "In-game store showing sardine tins, coin prices, and a purchase button.",
    "footer-back": "back to portfolio",
    "store-link-appstore": "↗ App Store",
    "store-link-github": "↗ GitHub",

    // ROTTA
    "rotta-tag": "Swift • UIKit • CloudKit • Core Data",
    "rotta-subtitle": "Follow junior Formula racing in one place, from the next session to each driver's profile.",
    "rotta-about-title": "Beyond the F1 grid",
    "rotta-desc1": "Rotta brings together calendars, standings, teams, and drivers from junior motorsport categories. Check each round's sessions and follow the season without piecing information together from different sources.",
    "rotta-desc2": "To help make the sport easier to explore, the app also includes driver profiles and a glossary of motorsport terms and car components. It offers a way into categories that often receive less attention than Formula 1.",

    // CERNE
    "cerne-tag": "Swift • SwiftUI • MapKit • ARKit",
    "cerne-subtitle": "Identify tree species, measure trees with augmented reality, and explore estimated CO₂ capture through a collaborative map.",
    "cerne-about-title": "From measurements to a collaborative map",
    "cerne-desc1": "Cerne identifies tree species from photos and uses augmented reality to measure a tree's trunk and height. With this information, it estimates carbon capture.",
    "cerne-desc2": "Each entry contributes to a collaborative biodiversity map, bringing information about trees and green spaces together.",
    "cerne-team-desc": "Cerne was developed by a team working across design and iOS development.",
    "cerne-gallery-label": "Cerne in use",
    "cerne-gallery-title": "From a tree to the map",
    "cerne-logo-alt": "Cerne visual identity, with lime-green lines on a blue background.",
    "cerne-screen1-alt": "Cerne uses augmented reality to measure a tree trunk and height.",
    "cerne-screen2-alt": "A tree profile with an estimate of its CO₂ capture.",
    "cerne-screen3-alt": "Collaborative Cerne map showing tree entries and green spaces.",
    "cerne-screen4-alt": "Community summary of registered trees, species, and CO₂ totals.",
    "cerne-screen5-alt": "Cerne user dashboard with a CO₂ goal and personal tree contributions.",

    // WANDERFEEL
    "wanderfeel-tag": "Swift • SwiftUI",
    "wanderfeel-subtitle": "Every trip holds places to remember and feelings worth keeping, too.",
    "wanderfeel-about-title": "Travel memories, inside and out",
    "wanderfeel-desc1": "WanderFeel is a travel journal for keeping track of where you went and how you felt. At each check-in, choose an emotion and jot down plans for the day.",
    "wanderfeel-desc2": "Each trip brings together places, photos, and notes. Stats show which emotions came up most, and the map lets you revisit your entries. I created the app from design through development in SwiftUI.",
    "wanderfeel-team-desc": "I created WanderFeel from design through implementation in SwiftUI.",
    "wanderfeel-role": "Designer and iOS Developer",

    // OH MY GRILL
    "omg-tag": "SwiftUI • SpriteKit • GameplayKit • Multipeer Connectivity • CoreMotion",
    "omg-subtitle": "Orders keep coming, fries are cooking, and the team is trying to keep the kitchen under control.",
    "omg-about-title": "The rush starts at the grill",
    "omg-desc1": "Oh My Grill! is a cooperative cooking game where each player takes on a task: preparing ingredients, grilling, or assembling orders. The team has to coordinate and get every dish out before time runs out.",
    "omg-desc2": "With a Wild West feel and multiplayer matches, the game turns a burger joint into a shared kitchen rush. It was developed by a team, with nearby-device connectivity.",
    "omg-gallery-label": "A shift at the saloon",
    "omg-gallery-title": "The kitchen in full swing",
    "omg-team-label": "Made as a team",
    "omg-team-title": "Everyone on the line",
    "omg-team-desc": "Developed as a team, combining design and development.",

    // SARDINE
    "sardine-tag": "Swift • SwiftUI • SpriteKit • GameKit • CoreMotion",
    "sardine-subtitle": "One sardine, an ocean full of danger, and one question: how far can you swim?",
    "sardine-about-title": "One swim at a time",
    "sardine-desc1": "Sardine Escape is an arcade game where you guide a sardine through an endless ocean. Dodge jellyfish and other obstacles, using tilt or touch controls to steer, and try to beat your longest swim.",
    "sardine-desc2": "Each run earns coins to spend on tins in the store and discover new sardines. Game Center keeps track of the high scores, while iCloud syncs your progress.",
    "purrchase-subtitle": "One cat, three tabs, and fewer things forgotten at the back of the pantry.",
    "purrchase-about-title": "What’s at home before you shop?",
    "purrchase-desc1": "Purrchase brings shopping lists and pantry tracking together. Add what you have at home, keep an eye on items nearing or past their expiration date, and decide what to buy—or use up first.",
    "purrchase-desc2": "The inspiration tab keeps recipes close at hand, helping you plan what to cook with the ingredients available. The idea is to make it easier to see what’s already in the kitchen and reduce food waste.",
    "purrchase-gallery-label": "From the store to the kitchen",
    "purrchase-gallery-title": "Lists, pantry, and recipes",
    "purrchase-team-title": "From idea to app",
    "purrchase-team-desc": "Developed as a team, bringing together design and iOS development.",
    "tower-subtitle": "Your hands are the weapon. The village is under attack.",
    "tower-about-title": "The village is under attack",
    "tower-desc1": "In Wakes, enemies follow a path toward the village. Throw bombs with your hands to stop each wave—and get ready for the next.",
    "tower-desc2": "Defeated enemies earn coins you can spend on upgrades between waves. Made for Apple Vision Pro, Wakes combines hand tracking and RealityKit to bring the battlefield into your space.",
    "flyready-subtitle": "The recruiter asks. You answer. The conversation follows what you said.",
    "flyready-about-title": "An interview without a fixed script",
    "flyready-desc1": "FlyReady simulates a flight attendant interview on your iPhone. You answer out loud, and the recruiter follows up based on your answers.",
    "flyready-desc2": "Practice topics like motivation, customer conflicts, teamwork, safety, and adaptability. After each answer, get feedback to help shape your next attempt. The conversation and feedback are processed on the device.",
    "entrelinhas-name": "Otterlines",
    "entrelinhas-subtitle": "Books, optional narration, and activities help children and adults build a reading habit together on Apple TV and iPad.",
    "entrelinhas-about-title": "Reading together, on and off screen",
    "entrelinhas-desc1": "Designed for children ages 6 to 8, Otterlines brings children and adults together around reading. Guided by Sagu and Pudim, children explore a story map with optional narration and literary activities.",
    "entrelinhas-desc2": "Activities include story questions, sentence completion, spelling, and drawing. The Reading Corner pairs physical books with sounds and a timer, carrying the experience beyond the screen.",
    "entrelinhas-contribution": "I’m one of the developers on Otterlines, built with the Apple Developer Academy team and presented at Tecnopuc Experience 2026. The project aims to support reading comprehension, creativity, and vocabulary.",
    "entrelinhas-gallery-label": "Inside the app",
    "entrelinhas-gallery-title": "Stories, books, and activities",
    "entrelinhas-icon-alt": "Otterlines app icon showing an otter reading a book.",
    "entrelinhas-ipad-map-alt": "Entrelinhas map showing the Lighthouse Library, Reading Nook, Word Playground, and Little Otters’ Atelier.",
    "entrelinhas-question-alt": "A Peter Pan comprehension question in the Characters activity.",
    "entrelinhas-sentence-alt": "An Alice in Wonderland sentence completion activity.",
    "entrelinhas-reading-corner-alt": "The Reading Corner timer with an adult otter reading with a child.",
    "entrelinhas-art-alt": "The Atelier screen inviting children to create a new drawing.",
    "tower-gallery-label": "From the App Store",
    "tower-gallery-title": "Step into the battlefield",
    "tower-video-alt": "Wakes App Store preview video",
    "tower-shot-1-alt": "Wakes App Store image showing the player defending the village in a winter battlefield.",
    "tower-shot-2-alt": "Wakes App Store image about attacking enemies from different angles.",
    "tower-shot-3-alt": "Wakes App Store image showing the upgrade shop between waves.",
    "tower-shot-4-alt": "Wakes App Store image presenting different enemy types.",
    "tower-shot-5-alt": "Wakes App Store image showing a giant enemy approaching the village.",
    "tower-shot-6-alt": "Wakes App Store image showing the final challenge across its waves.",
  },

  pt: {
    // NAV
    "nav-home": "Início",
    "nav-projects": "Projetos",
    "nav-experience": "Experiência",
    "nav-contact": "Contato",
    "nav-back": "← Voltar ao portfólio",

    // HOME HERO
    "home-marquee": "Curiosa por natureza  ·  Feito com cuidado  ·  Criado para ser útil",
    "hero-name": "Oi, eu sou a Maria.",
    "hero-tag": "PORTO ALEGRE, BRASIL",
    "hero-cta": "↗ Fale comigo",
    "hero-work": "Ver projetos ↓",
    "hero-follow": "Me encontre online",
    "hero-role": "Desenvolvedora iOS",
    "hero-desc": "Estudo Ciência da Computação e faço parte da Apple Developer Academy. Nos projetos, desenvolvo apps e jogos com Swift e SwiftUI.",

    // HOME PROJECTS
    "projects-label": "Meus Projetos",
    "home-desc-otterlines": "Leitura compartilhada para crianças e adultos, com livros e atividades que incentivam o hábito de ler no Apple TV e iPad.",
    "home-desc-cerne": "Identifique árvores, faça medições em realidade aumentada e explore seu impacto ambiental.",
    "home-desc-sardine": "Guie uma sardinha pelo oceano, desvie dos obstáculos e tente chegar cada vez mais longe.",
    "home-desc-rotta": "Acompanhe categorias de base do automobilismo com calendários, classificações e perfis de pilotos.",
    "home-desc-wanderfeel": "Registre lugares, fotos e emoções em um diário de viagem feito para guardar cada jornada.",
    "home-desc-omg": "Divida tarefas na cozinha, prepare pedidos e tente manter a equipe funcionando no meio do caos.",
    "home-desc-purrchase": "Organize a despensa, acompanhe validades e planeje compras a partir do que você já tem em casa.",
    "home-desc-wakes": "Defenda a vila em um jogo de tower defense controlado por gestos no Apple Vision Pro.",
    "home-desc-flyready": "Treine entrevistas para comissário de voo conversando com um recrutador que reage às suas respostas.",

    // EXPERIENCE
    "experience-label": "Experiência e formação",
    "experience-title": "Tecnologia, pesquisa e operações.",
    "experience-intro": "Minha trajetória passa pelo desenvolvimento de apps, pesquisa e atendimento aeroportuário.",
    "experience-current": "ATUAL",
    "experience-academy-period": "Fev 2025 – atual · conclusão prevista dez 2026",
    "experience-academy-role": "Bolsista em Desenvolvimento de Aplicativos",
    "experience-academy-description": "Desenvolvo e testo apps para plataformas Apple em equipes multidisciplinares, ajudo a planejar atividades com Scrum e apresento soluções em português e inglês.",
    "experience-pet-period": "Set 2024 – fev 2025",
    "experience-pet-organization": "PET Informática — PUCRS",
    "experience-pet-role": "Bolsista de Pesquisa",
    "experience-pet-description": "Criei ambientes virtuais no Blender e executei simulações de multidões para uma pesquisa voltada à inteligência artificial.",
    "experience-azul-period": "Ago 2023 – ago 2024",
    "experience-azul-organization": "Azul Linhas Aéreas",
    "experience-azul-role": "Jovem Aprendiz / Agente de Aeroporto",
    "experience-azul-description": "Atendi e orientei passageiros, oferecendo suporte em procedimentos aeroportuários e em situações de irregularidade operacional.",
    "education-label": "FORMAÇÃO",
    "education-title": "Bacharelado em Ciência da Computação",
    "education-institution": "Anhanguera",
    "education-description": "Em andamento · conclusão prevista em 2028.",
    "education-languages-label": "Linguagens estudadas",
    "skills-title": "Competências técnicas",
    "skills-aria": "Competências técnicas",
    "skills-languages": "Linguagens",
    "skills-frameworks": "Frameworks e arquitetura",
    "skills-testing": "Testes de software",
    "skills-tools": "Ferramentas e metodologias",

    // CONTACT
    "contact-label": "Contato",

    // PROJECT PAGE — shared
    "section-about": "Sobre o projeto",
    "section-gallery": "Galeria",
    "section-gallery-title": "Capturas de tela",
    "section-team": "Equipe",
    "section-team-title": "As pessoas por trás",
    "section-team-desc": "Este projeto foi desenvolvido de forma colaborativa, unindo design e desenvolvimento.",
    "section-team-desc-sardine": "Este projeto foi desenvolvido em equipe, com contribuições em design, desenvolvimento e som.",
    "rotta-team-desc": "Desenvolvido em equipe, com contribuições em design e desenvolvimento.",
    "rotta-gallery-label": "Por dentro da temporada",
    "rotta-gallery-title": "Calendários, rankings e perfis",
    "rotta-logo-alt": "Logo do Rotta.",
    "rotta-screen1-alt": "Tela de informações da Fórmula 2 com acesso ao glossário do automobilismo.",
    "rotta-screen2-alt": "Classificação de pilotos e escuderias da Fórmula 2.",
    "rotta-screen3-alt": "Calendário da Fórmula 2 com a etapa de Lusail e os horários das sessões.",
    "rotta-screen4-alt": "Perfil do piloto Leonardo Fornaroli com equipe, país e resultados.",
    "rotta-screen5-alt": "Lista de pilotos da Fórmula 2.",
    "wanderfeel-gallery-label": "Por dentro do WanderFeel",
    "wanderfeel-gallery-title": "Lugares, emoções e registros",
    "wanderfeel-creator-label": "Criação individual",
    "wanderfeel-creator-title": "Da ideia à implementação",
    "wanderfeel-creator-desc": "Criei o WanderFeel do design à implementação em SwiftUI.",
    "wanderfeel-logo-alt": "Logo do WanderFeel.",
    "wanderfeel-screen1-alt": "Check-in da viagem com localização, data, opções de emoção e campo para anotar os planos do dia.",
    "wanderfeel-screen2-alt": "Lista de viagens, incluindo Rio de Janeiro e Londres.",
    "wanderfeel-screen3-alt": "Estatísticas das viagens com emoções registradas e destaques.",
    "wanderfeel-screen4-alt": "Mapa com registros de viagem, fotos e anotações.",
    "omg-logo-alt": "Logo de Oh My Grill!.",
    "omg-screen1-alt": "Instrução para cortar e preparar os ingredientes rapidamente.",
    "omg-screen2-alt": "Batatas fritando, com a instrução para acertar o tempo sem queimá-las.",
    "omg-screen3-alt": "Hambúrgueres na chapa e ingredientes separados para montar os pedidos.",
    "omg-screen4-alt": "Pedidos de hambúrguer e batata, com ingredientes disponíveis na bancada.",
    "purrchase-logo-alt": "Logo do Purrchase.",
    "purrchase-screen1-alt": "Tela de listas de compras, com opção para criar uma lista.",
    "purrchase-screen2-alt": "Lista “Rancho da Gigi” com uvas e maçãs.",
    "purrchase-screen4-alt": "Despensa organizada em todos os produtos, itens perto do vencimento e itens vencidos.",
    "purrchase-screen5-alt": "Aba de receitas com busca e uma receita de cookies.",
    "tower-icon-alt": "Ícone do Wakes: caveira geométrica com olhos verdes brilhantes em fundo roxo.",
    "flyready-icon-alt": "Ícone do FlyReady: profissional da aviação com uniforme azul-marinho e lenço coral.",
    "flyready-screen1-alt": "Arte de apresentação do FlyReady mostrando a tela inicial e um cartão de treino para entrevista.",
    "flyready-screen2-alt": "Treino de entrevista por voz: recrutador pergunta sobre segurança, a pessoa responde e recebe uma pergunta de acompanhamento.",
    "purrchase-gallery-label": "Do mercado à cozinha",
    "purrchase-gallery-title": "Listas, despensa e receitas",
    "purrchase-team-title": "Da ideia ao app",
    "purrchase-team-desc": "Desenvolvido em equipe, reunindo design e desenvolvimento iOS.",
    "sardine-gallery-label": "Pelo oceano",
    "sardine-gallery-title": "Um oceano em movimento",
    "sardine-logo-alt": "Logo de Sardine Escape.",
    "sardine-screen1-alt": "Tela inicial de Sardine Escape, com uma sardinha dentro de uma lata e opções para jogar, acessar a loja e ver as skins.",
    "sardine-screen2-alt": "Sardinha nadando entre criaturas marinhas e obstáculos durante uma partida.",
    "sardine-screen3-alt": "Lata de sardinha com instruções para abrir e descobrir um novo peixe.",
    "sardine-screen4-alt": "Loja do jogo com latas de sardinha, preços em moedas e botão de compra.",
    "footer-back": "voltar ao portfólio",
    "store-link-appstore": "↗ App Store",
    "store-link-github": "↗ GitHub",

    // ROTTA
    "rotta-tag": "Swift • UIKit • CloudKit • Core Data",
    "rotta-subtitle": "Acompanhe as categorias de base da Fórmula em um só lugar — da próxima sessão ao perfil de cada piloto.",
    "rotta-about-title": "Além do grid da F1",
    "rotta-desc1": "O Rotta reúne calendários, classificações, equipes e pilotos das categorias de base do automobilismo. Veja as sessões de cada etapa e acompanhe a temporada sem juntar informações de várias fontes.",
    "rotta-desc2": "Para conhecer melhor o esporte, o app também traz perfis de pilotos e um glossário de termos e componentes. Assim, fica mais fácil acompanhar categorias que costumam receber menos atenção do que a Fórmula 1.",

    // CERNE
    "cerne-tag": "Swift • SwiftUI • MapKit • ARKit",
    "cerne-subtitle": "Identifique espécies, meça árvores com realidade aumentada e acompanhe estimativas de captura de CO₂ em um mapa colaborativo.",
    "cerne-about-title": "Da medição ao mapa colaborativo",
    "cerne-desc1": "O Cerne identifica espécies a partir de fotos e usa realidade aumentada para medir o tronco e a altura das árvores. Com essas informações, apresenta uma estimativa da captura de CO₂.",
    "cerne-desc2": "Os registros ajudam a compor um mapa colaborativo de biodiversidade, reunindo informações sobre árvores e áreas verdes.",
    "cerne-team-desc": "O Cerne foi desenvolvido em equipe, com trabalho de design e desenvolvimento.",
    "cerne-gallery-label": "Cerne em uso",
    "cerne-gallery-title": "Da árvore ao mapa",
    "cerne-logo-alt": "Identidade visual do Cerne: linhas verde-limão em fundo azul.",
    "cerne-screen1-alt": "O Cerne usa realidade aumentada para medir o tronco e a altura de uma árvore.",
    "cerne-screen2-alt": "Ficha de uma árvore com estimativa de captura de CO₂.",
    "cerne-screen3-alt": "Mapa colaborativo do Cerne com registros de árvores e áreas verdes.",
    "cerne-screen4-alt": "Resumo coletivo com número de árvores, espécies e valores de CO₂ registrados.",
    "cerne-screen5-alt": "Painel do Cerne com meta de CO₂ e contribuições pessoais.",

    // WANDERFEEL
    "wanderfeel-tag": "Swift • SwiftUI",
    "wanderfeel-subtitle": "Cada viagem tem lugares para lembrar e emoções que também merecem espaço.",
    "wanderfeel-about-title": "Lembranças de viagem, por dentro e por fora",
    "wanderfeel-desc1": "O WanderFeel é um diário de viagem para registrar onde você esteve e como se sentiu. No check-in, você marca a emoção do momento e pode anotar os planos do dia.",
    "wanderfeel-desc2": "Depois, cada viagem reúne lugares, fotos e relatos. As estatísticas mostram as emoções que mais apareceram, e o mapa ajuda a revisitar os registros. Criei o app do design ao desenvolvimento, com SwiftUI.",
    "wanderfeel-team-desc": "Criei o WanderFeel do design à implementação em SwiftUI.",
    "wanderfeel-role": "Design e desenvolvimento iOS",

    // OH MY GRILL
    "omg-tag": "SwiftUI • SpriteKit • GameplayKit • Multipeer Connectivity • CoreMotion",
    "omg-subtitle": "Pedidos chegando, batatas fritando e uma equipe tentando manter a cozinha sob controle.",
    "omg-about-title": "A correria começa na chapa",
    "omg-desc1": "Oh My Grill! é um jogo cooperativo de cozinha em que cada pessoa assume uma tarefa: preparar ingredientes, grelhar ou montar pedidos. A equipe precisa se coordenar para servir tudo antes que o tempo acabe.",
    "omg-desc2": "Com clima de Velho Oeste e partidas multiplayer, o jogo transforma uma lanchonete em uma correria compartilhada. Foi desenvolvido em equipe, com conexão entre dispositivos próximos.",

    // SARDINE
    "sardine-tag": "Swift • SwiftUI • SpriteKit • GameKit • CoreMotion",
    "sardine-subtitle": "Uma sardinha, um oceano cheio de perigos e uma pergunta: até onde você consegue nadar?",
    "sardine-about-title": "Um mergulho de cada vez",
    "sardine-desc1": "Sardine Escape é um jogo arcade em que você guia uma sardinha por um oceano sem fim. Desvie de águas-vivas e outros obstáculos, usando inclinação ou toque para controlar o nado, e tente superar sua maior distância.",
    "sardine-desc2": "Cada partida rende moedas para escolher latas na loja e descobrir novas sardinhas. O Game Center reúne os recordes, e o iCloud sincroniza o progresso.",
    "purrchase-subtitle": "Um gato, três abas e menos coisas esquecidas no fundo da despensa.",
    "purrchase-about-title": "O que tem em casa, antes de ir às compras",
    "purrchase-desc1": "O Purrchase junta listas de compras e despensa. Cadastre o que tem em casa, acompanhe os produtos perto do vencimento ou já vencidos e decida o que levar — ou consumir primeiro.",
    "purrchase-desc2": "Na aba de inspirações, receitas ficam à mão para planejar o que cozinhar com os ingredientes disponíveis. A ideia é dar mais visibilidade ao que já está na cozinha e ajudar a evitar desperdício.",
    "tower-subtitle": "Suas mãos são sua arma. A vila está sob ataque.",
    "tower-about-title": "A vila está sob ataque",
    "tower-desc1": "No Wakes, inimigos avançam por uma trilha em direção à vila. Lance bombas com as mãos para deter cada onda — e prepare-se para a próxima.",
    "tower-desc2": "Ao derrotar inimigos, você ganha moedas para aprimorar a defesa entre as ondas. Feito para Apple Vision Pro, Wakes combina rastreamento das mãos e RealityKit para levar o campo de batalha ao seu espaço.",
    "flyready-subtitle": "O recrutador pergunta. Você responde. A conversa continua a partir do que você disse.",
    "flyready-about-title": "Uma entrevista que não segue um roteiro fixo",
    "flyready-desc1": "O FlyReady simula uma entrevista para comissário de voo, direto no iPhone. Você responde falando, e o recrutador faz perguntas de acompanhamento com base no que ouviu.",
    "flyready-desc2": "Treine temas como motivação, conflitos com clientes, trabalho em equipe, segurança e adaptação. Depois de cada resposta, receba feedback para preparar a próxima tentativa. A conversa por voz e o feedback são processados no próprio aparelho.",
    "entrelinhas-name": "Entrelinhas",
    "entrelinhas-subtitle": "Livros, narração opcional e atividades aproximam crianças e adultos e incentivam o hábito da leitura no Apple TV e iPad.",
    "entrelinhas-about-title": "Leitura compartilhada, dentro e fora das telas",
    "entrelinhas-desc1": "Pensado para crianças de 6 a 8 anos, o Entrelinhas aproxima crianças e adultos pela leitura. Com Sagu e Pudim, elas exploram um mapa de histórias com narração opcional e atividades literárias.",
    "entrelinhas-desc2": "As atividades incluem perguntas sobre as histórias, completar frases, soletração e desenho. O Recanto de Leitura combina livros físicos, sons e um cronômetro, levando a experiência também para fora da tela.",
    "entrelinhas-contribution": "Sou uma das desenvolvedoras do Entrelinhas, desenvolvido em equipe na Apple Developer Academy e apresentado no Tecnopuc Experience 2026. O projeto busca estimular a compreensão leitora, a criatividade e o vocabulário.",
    "entrelinhas-gallery-label": "Por dentro do app",
    "entrelinhas-gallery-title": "Histórias, livros e atividades",
    "entrelinhas-icon-alt": "Ícone do Entrelinhas com uma lontra lendo um livro.",
    "entrelinhas-ipad-map-alt": "Mapa do Entrelinhas com a Biblioteca do Farol, o Recanto de Leitura, o Parque das Palavras e o Ateliê das Lontrinhas.",
    "entrelinhas-question-alt": "Pergunta de compreensão sobre Peter Pan na atividade Personagens.",
    "entrelinhas-sentence-alt": "Atividade de completar frases com um trecho de Alice no País das Maravilhas.",
    "entrelinhas-reading-corner-alt": "Cronômetro do Recanto de Leitura, com uma lontra adulta lendo com uma criança.",
    "entrelinhas-art-alt": "Tela do Ateliê que convida as crianças a criar um desenho.",
    "tower-gallery-label": "Na App Store",
    "tower-gallery-title": "Entre no campo de batalha",
    "tower-video-alt": "Vídeo de apresentação do Wakes na App Store",
    "tower-shot-1-alt": "Imagem do Wakes na App Store mostrando a defesa da vila em um cenário de inverno.",
    "tower-shot-2-alt": "Imagem do Wakes na App Store sobre atacar inimigos de diferentes ângulos.",
    "tower-shot-3-alt": "Imagem do Wakes na App Store mostrando a loja de melhorias entre as ondas.",
    "tower-shot-4-alt": "Imagem do Wakes na App Store apresentando diferentes tipos de inimigos.",
    "tower-shot-5-alt": "Imagem do Wakes na App Store mostrando um inimigo gigante se aproximando da vila.",
    "tower-shot-6-alt": "Imagem do Wakes na App Store mostrando o desafio das ondas finais.",
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
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.getAttribute("data-i18n-alt");
    const val = (translations[lang] && translations[lang][key]) || translations["en"][key];
    if (val !== undefined) el.setAttribute("alt", val);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria-label");
    const val = (translations[lang] && translations[lang][key]) || translations["en"][key];
    if (val !== undefined) el.setAttribute("aria-label", val);
  });
}

function toggleLang() {
  const current = getLang();
  setLang(current === "en" ? "pt" : "en");
}

document.addEventListener("DOMContentLoaded", () => {
  setLang(getLang());
});
