(() => {
  'use strict';

  const STORAGE_KEY = '434-season-guide-progress-v1';
  const LANGUAGE_KEY = '434-season-guide-language-v1';
  const SUPPORTED_LANGUAGES = ['en', 'fr', 'it', 'de', 'pl'];

  const translations = {
    en: {
      pageTitle: '434 — Season Guide',
      languageLabel: 'Language',
      openNavigation: 'Open navigation',
      nav: ['Start here', 'Items', 'Ruins', 'Daily', 'Tips'],
      heroEyebrow: 'DARK WAR SURVIVAL · INTERACTIVE GUIDE',
      heroTitle: 'Enter the season.<br><span>Know what to do.</span>',
      heroText: 'A fast, mobile-friendly guide for Server 434 players. Follow the essentials first, then dive deeper when you need details.',
      startGuide: 'Start the guide',
      resetProgress: 'Reset progress',
      progressLabel: 'YOUR PROGRESS',
      progressPending: 'Complete the five first-season actions.',
      progressDone: 'First steps complete. You are ready to push the season.',
      searchEyebrow: 'FIND IT FAST',
      searchTitle: 'Search the guide',
      searchPlaceholder: 'Search an item, task, building, buff...',
      clearSearch: 'Clear search',
      searchEmpty: 'No result yet — try another word or item name.',
      quick: [
        ['First moves', 'Get started correctly'],
        ['Item finder', 'What? Where? When?'],
        ['Divine Ruins', 'Tasks & buffs'],
        ['Daily routine', 'What not to miss'],
        ['Quick tips', 'Small things that matter']
      ],
      startEyebrow: 'START HERE',
      startTitle: 'Your first 5 actions',
      startIntro: 'Tap a card for details. Check it when done — your progress is saved on this device.',
      done: 'Done',
      steps: [
        {
          kicker: 'SEASON MAP',
          title: 'Enter the new map',
          body: 'Open the <strong>Season</strong> icon, tap <strong>ENTER</strong>, then teleport into your alliance hive.',
          flow: ['Season', 'Enter', 'Alliance hive']
        },
        {
          kicker: 'FARM FIRST',
          title: 'Hunt Boomers & Zombies',
          body: 'Kill <strong>Boomers</strong> and <strong>Zombies</strong> to collect the season currency and resources you need for the opening progression.'
        },
        {
          kicker: 'SEASON BUILDINGS',
          title: 'Build the Altar & Obelisk',
          body: 'Go to the bottom of the season tower and start building your <strong>Altar</strong> and <strong>Obelisk</strong>.',
          tip: '<span>TIP</span> Do this early so your seasonal progression is not delayed.'
        },
        {
          kicker: 'BONUS RESET',
          title: 'Use the Shadow Call reset',
          body: '<strong>Shadow Call has been reset.</strong> Take advantage of the reset and complete it again.'
        },
        {
          kicker: 'DIVINE RUINS',
          title: 'Start your Ruins Tasks',
          body: 'Start your Ruins Tasks and read every <strong>!</strong> carefully before choosing. Different tasks can offer different buffs for different troop types.',
          warning: '<strong>Choose wisely.</strong> Do not select a task only because it looks stronger — match the buff to the troops you actually use.'
        }
      ],
      itemsEyebrow: 'ITEM · WHAT IS THIS?',
      itemsTitle: 'Know what to keep — and when to use it',
      itemsIntro: 'Use this area when you find an unfamiliar season item. Each card answers the three questions that matter immediately.',
      itemFields: [
        ['WHAT?', 'What the item is, what it does and why it matters.'],
        ['WHERE?', 'The exact menu, building, event or feature where you use it.'],
        ['FROM WHEN?', 'Available now, Week 2, later in the season, or only during a specific event.']
      ],
      filters: { all: 'All', now: 'Now', week2: 'Week 2', later: 'Later' },
      itemZero: '0 items documented',
      itemOne: '1 item documented',
      itemMany: '{n} items documented',
      itemShown: '{n} shown',
      itemEmptyTitle: 'Item database ready.',
      itemEmptyBody: 'Send me an item name or screenshot and it will be added here with <b>WHAT?</b>, <b>WHERE?</b> and <b>FROM WHEN?</b>.',
      ruinsEyebrow: 'DIVINE RUINS',
      ruinsTitle: 'Read before you choose',
      ruinsIntro: 'This area will grow with the detailed Ruins tables, refresh costs and buff choices from our season notes.',
      featureRule: 'RULE #1',
      featureRuleTitle: 'The “!” matters',
      featureRuleBody: 'The warning/details icon is there for a reason. Open it before locking a task so you know which troop type or bonus the task actually supports.',
      troops: ['Troop A', 'Troop B', 'Troop C'],
      next: 'NEXT',
      refreshTitle: 'Refresh strategy',
      refreshBody: 'Refresh costs and daily limits will be added here from the verified season data.',
      dataToIntegrate: 'DATA TO INTEGRATE',
      picksTitle: 'Best task picks',
      picksBody: 'A simple selector will help players match Ruins tasks to their troop focus.',
      comingNext: 'COMING NEXT',
      dailyEyebrow: 'DAILY ROUTINE',
      dailyTitle: "Don't leave free progress behind",
      dailyIntro: 'The daily checklist will expand as we validate each season mechanic.',
      dailyItems: [
        ['Farm season enemies', 'Boomers & Zombies'],
        ['Check Ruins Tasks', 'Read the buff details before choosing'],
        ['Review seasonal buildings', 'Keep Altar & Obelisk progression moving']
      ],
      tipsEyebrow: '434 NOTES',
      tipsTitle: 'Fast reminders',
      tips: [
        'Enter the season map before you start spending time on the old map.',
        'Do not ignore resets such as Shadow Call — they are extra progression opportunities.',
        'In Divine Ruins, the best task is the one that fits your troop setup, not just the first high-looking bonus.'
      ],
      footerTitle: 'Interactive Season Guide',
      footerText: 'Made for the alliance · Mobile + desktop',
      kinds: { STEP: 'STEP', ITEM: 'ITEM', RUINS: 'RUINS', DAILY: 'DAILY', TIP: 'TIP', SECTION: 'SECTION' }
    },

    fr: {
      pageTitle: '434 — Guide de saison',
      languageLabel: 'Langue',
      openNavigation: 'Ouvrir la navigation',
      nav: ['Commencer', 'Objets', 'Ruines', 'Quotidien', 'Conseils'],
      heroEyebrow: 'DARK WAR SURVIVAL · GUIDE INTERACTIF',
      heroTitle: 'Entre dans la saison.<br><span>Sache quoi faire.</span>',
      heroText: 'Un guide rapide et adapté au mobile pour les joueurs du serveur 434. Commence par l’essentiel, puis consulte les détails quand tu en as besoin.',
      startGuide: 'Commencer le guide',
      resetProgress: 'Réinitialiser',
      progressLabel: 'TA PROGRESSION',
      progressPending: 'Termine les cinq premières actions de la saison.',
      progressDone: 'Premières étapes terminées. Tu es prêt pour la suite.',
      searchEyebrow: 'TROUVE VITE',
      searchTitle: 'Rechercher dans le guide',
      searchPlaceholder: 'Rechercher un objet, une tâche, un bâtiment, un buff...',
      clearSearch: 'Effacer la recherche',
      searchEmpty: 'Aucun résultat — essaie un autre mot ou nom d’objet.',
      quick: [
        ['Premiers gestes', 'Bien démarrer'],
        ['Objets', 'Quoi ? Où ? Quand ?'],
        ['Divine Ruins', 'Tâches et buffs'],
        ['Routine quotidienne', 'À ne pas oublier'],
        ['Conseils rapides', 'Les petits détails utiles']
      ],
      startEyebrow: 'COMMENCE ICI',
      startTitle: 'Tes 5 premières actions',
      startIntro: 'Appuie sur une carte pour voir les détails. Coche-la une fois terminée — ta progression est enregistrée sur cet appareil.',
      done: 'Fait',
      steps: [
        {
          kicker: 'CARTE DE SAISON',
          title: 'Entre sur la nouvelle carte',
          body: 'Ouvre l’icône <strong>Season</strong>, appuie sur <strong>ENTER</strong>, puis téléporte-toi dans la ruche de ton alliance.',
          flow: ['Season', 'Enter', 'Ruche alliance']
        },
        {
          kicker: 'FARME D’ABORD',
          title: 'Chasse les Boomers & Zombies',
          body: 'Tue des <strong>Boomers</strong> et des <strong>Zombies</strong> pour récupérer la monnaie et les ressources de saison nécessaires au démarrage.'
        },
        {
          kicker: 'BÂTIMENTS DE SAISON',
          title: 'Construis l’Altar & l’Obelisk',
          body: 'Va en bas de la tour de saison et commence à construire ton <strong>Altar</strong> et ton <strong>Obelisk</strong>.',
          tip: '<span>CONSEIL</span> Fais-le tôt pour ne pas ralentir ta progression de saison.'
        },
        {
          kicker: 'RESET BONUS',
          title: 'Profite du reset de Shadow Call',
          body: '<strong>Shadow Call a été réinitialisé.</strong> Profite du reset pour le compléter à nouveau.'
        },
        {
          kicker: 'DIVINE RUINS',
          title: 'Commence tes Ruins Tasks',
          body: 'Commence tes Ruins Tasks et lis attentivement chaque <strong>!</strong> avant de choisir. Les tâches peuvent donner des buffs différents selon le type de troupes.',
          warning: '<strong>Choisis bien.</strong> Ne prends pas une tâche uniquement parce que son bonus paraît plus élevé — adapte le buff aux troupes que tu utilises réellement.'
        }
      ],
      itemsEyebrow: 'OBJET · C’EST QUOI ?',
      itemsTitle: 'Sache quoi garder — et quand l’utiliser',
      itemsIntro: 'Utilise cet espace quand tu trouves un objet de saison que tu ne connais pas. Chaque fiche répond immédiatement aux trois questions essentielles.',
      itemFields: [
        ['QUOI ?', 'Ce qu’est l’objet, ce qu’il fait et pourquoi il est utile.'],
        ['OÙ ?', 'Le menu, bâtiment, événement ou module exact où l’utiliser.'],
        ['À PARTIR DE QUAND ?', 'Disponible maintenant, en semaine 2, plus tard dans la saison ou uniquement pendant un événement précis.']
      ],
      filters: { all: 'Tous', now: 'Maintenant', week2: 'Semaine 2', later: 'Plus tard' },
      itemZero: '0 objet documenté',
      itemOne: '1 objet documenté',
      itemMany: '{n} objets documentés',
      itemShown: '{n} affiché(s)',
      itemEmptyTitle: 'Base d’objets prête.',
      itemEmptyBody: 'Envoie-moi le nom ou une capture d’un objet et il sera ajouté ici avec <b>QUOI ?</b>, <b>OÙ ?</b> et <b>À PARTIR DE QUAND ?</b>.',
      ruinsEyebrow: 'DIVINE RUINS',
      ruinsTitle: 'Lis avant de choisir',
      ruinsIntro: 'Cette zone accueillera les tableaux détaillés des Ruins, les coûts de refresh et les choix de buffs issus de nos données vérifiées.',
      featureRule: 'RÈGLE N°1',
      featureRuleTitle: 'Le “!” compte',
      featureRuleBody: 'L’icône d’avertissement/détails est importante. Ouvre-la avant de verrouiller une tâche pour savoir quel type de troupe ou quel bonus elle soutient réellement.',
      troops: ['Troupe A', 'Troupe B', 'Troupe C'],
      next: 'À VENIR',
      refreshTitle: 'Stratégie de refresh',
      refreshBody: 'Les coûts de refresh et les limites quotidiennes seront ajoutés ici à partir des données de saison vérifiées.',
      dataToIntegrate: 'DONNÉES À INTÉGRER',
      picksTitle: 'Meilleurs choix de tâches',
      picksBody: 'Un sélecteur simple aidera à associer les Ruins Tasks au type de troupes joué.',
      comingNext: 'BIENTÔT',
      dailyEyebrow: 'ROUTINE QUOTIDIENNE',
      dailyTitle: 'Ne laisse pas de progression gratuite de côté',
      dailyIntro: 'La checklist quotidienne s’enrichira à mesure que chaque mécanique de saison sera validée.',
      dailyItems: [
        ['Farmer les ennemis de saison', 'Boomers & Zombies'],
        ['Vérifier les Ruins Tasks', 'Lire les détails du buff avant de choisir'],
        ['Vérifier les bâtiments de saison', 'Continuer la progression de l’Altar & de l’Obelisk']
      ],
      tipsEyebrow: 'NOTES 434',
      tipsTitle: 'Rappels rapides',
      tips: [
        'Entre sur la carte de saison avant de perdre du temps sur l’ancienne carte.',
        'N’ignore pas les resets comme Shadow Call — ce sont des occasions de progression supplémentaires.',
        'Dans Divine Ruins, la meilleure tâche est celle qui correspond à tes troupes, pas simplement celle qui affiche le plus gros bonus.'
      ],
      footerTitle: 'Guide de saison interactif',
      footerText: 'Créé pour l’alliance · Mobile + ordinateur',
      kinds: { STEP: 'ÉTAPE', ITEM: 'OBJET', RUINS: 'RUINES', DAILY: 'QUOT.', TIP: 'CONSEIL', SECTION: 'SECTION' }
    },

    it: {
      pageTitle: '434 — Guida stagionale',
      languageLabel: 'Lingua',
      openNavigation: 'Apri navigazione',
      nav: ['Inizia', 'Oggetti', 'Rovine', 'Giornaliero', 'Consigli'],
      heroEyebrow: 'DARK WAR SURVIVAL · GUIDA INTERATTIVA',
      heroTitle: 'Entra nella stagione.<br><span>Saprai cosa fare.</span>',
      heroText: 'Una guida rapida e ottimizzata per smartphone per i giocatori del Server 434. Parti dalle cose essenziali, poi approfondisci quando serve.',
      startGuide: 'Inizia la guida',
      resetProgress: 'Azzera progresso',
      progressLabel: 'I TUOI PROGRESSI',
      progressPending: 'Completa le prime cinque azioni della stagione.',
      progressDone: 'Prime fasi completate. Sei pronto per continuare.',
      searchEyebrow: 'TROVA SUBITO',
      searchTitle: 'Cerca nella guida',
      searchPlaceholder: 'Cerca un oggetto, una missione, un edificio, un buff...',
      clearSearch: 'Cancella ricerca',
      searchEmpty: 'Nessun risultato — prova un’altra parola o nome di oggetto.',
      quick: [
        ['Prime mosse', 'Inizia nel modo giusto'],
        ['Oggetti', 'Cosa? Dove? Quando?'],
        ['Divine Ruins', 'Missioni e buff'],
        ['Routine giornaliera', 'Cosa non dimenticare'],
        ['Consigli rapidi', 'Piccoli dettagli importanti']
      ],
      startEyebrow: 'INIZIA QUI',
      startTitle: 'Le tue prime 5 azioni',
      startIntro: 'Tocca una scheda per i dettagli. Spuntala quando hai finito — i progressi vengono salvati su questo dispositivo.',
      done: 'Fatto',
      steps: [
        {
          kicker: 'MAPPA STAGIONALE',
          title: 'Entra nella nuova mappa',
          body: 'Apri l’icona <strong>Season</strong>, tocca <strong>ENTER</strong>, poi teletrasportati nell’hive della tua alleanza.',
          flow: ['Season', 'Enter', 'Hive alleanza']
        },
        {
          kicker: 'FARMA SUBITO',
          title: 'Caccia Boomers & Zombies',
          body: 'Uccidi <strong>Boomers</strong> e <strong>Zombies</strong> per ottenere valuta e risorse stagionali necessarie alla progressione iniziale.'
        },
        {
          kicker: 'EDIFICI STAGIONALI',
          title: 'Costruisci Altar & Obelisk',
          body: 'Vai alla base della torre stagionale e inizia a costruire il tuo <strong>Altar</strong> e il tuo <strong>Obelisk</strong>.',
          tip: '<span>CONSIGLIO</span> Fallo presto per non rallentare la progressione stagionale.'
        },
        {
          kicker: 'RESET BONUS',
          title: 'Sfrutta il reset di Shadow Call',
          body: '<strong>Shadow Call è stato resettato.</strong> Approfittane e completalo di nuovo.'
        },
        {
          kicker: 'DIVINE RUINS',
          title: 'Inizia le Ruins Tasks',
          body: 'Inizia le Ruins Tasks e leggi attentamente ogni <strong>!</strong> prima di scegliere. Le missioni possono offrire buff diversi per tipi di truppe diversi.',
          warning: '<strong>Scegli con attenzione.</strong> Non scegliere una missione solo perché il bonus sembra più alto — abbina il buff alle truppe che usi davvero.'
        }
      ],
      itemsEyebrow: 'OGGETTO · COS’È?',
      itemsTitle: 'Scopri cosa conservare — e quando usarlo',
      itemsIntro: 'Usa questa sezione quando trovi un oggetto stagionale che non conosci. Ogni scheda risponde subito alle tre domande essenziali.',
      itemFields: [
        ['COSA?', 'Che cos’è l’oggetto, cosa fa e perché è importante.'],
        ['DOVE?', 'Il menu, edificio, evento o funzione esatta in cui usarlo.'],
        ['DA QUANDO?', 'Disponibile ora, dalla Settimana 2, più avanti nella stagione o solo durante un evento specifico.']
      ],
      filters: { all: 'Tutti', now: 'Ora', week2: 'Settimana 2', later: 'Più avanti' },
      itemZero: '0 oggetti documentati',
      itemOne: '1 oggetto documentato',
      itemMany: '{n} oggetti documentati',
      itemShown: '{n} mostrati',
      itemEmptyTitle: 'Database oggetti pronto.',
      itemEmptyBody: 'Mandami il nome o uno screenshot di un oggetto e verrà aggiunto qui con <b>COSA?</b>, <b>DOVE?</b> e <b>DA QUANDO?</b>.',
      ruinsEyebrow: 'DIVINE RUINS',
      ruinsTitle: 'Leggi prima di scegliere',
      ruinsIntro: 'Questa sezione crescerà con tabelle dettagliate, costi di refresh e scelte dei buff ricavate dai dati stagionali verificati.',
      featureRule: 'REGOLA #1',
      featureRuleTitle: 'Il “!” è importante',
      featureRuleBody: 'L’icona di avviso/dettagli serve davvero. Aprila prima di bloccare una missione per sapere quale tipo di truppa o bonus supporta.',
      troops: ['Truppa A', 'Truppa B', 'Truppa C'],
      next: 'PROSSIMO',
      refreshTitle: 'Strategia di refresh',
      refreshBody: 'Costi di refresh e limiti giornalieri verranno aggiunti qui dai dati stagionali verificati.',
      dataToIntegrate: 'DATI DA INTEGRARE',
      picksTitle: 'Migliori missioni',
      picksBody: 'Un semplice selettore aiuterà ad abbinare le Ruins Tasks alle truppe principali del giocatore.',
      comingNext: 'IN ARRIVO',
      dailyEyebrow: 'ROUTINE GIORNALIERA',
      dailyTitle: 'Non lasciare progressi gratuiti inutilizzati',
      dailyIntro: 'La checklist giornaliera crescerà man mano che verifichiamo ogni meccanica stagionale.',
      dailyItems: [
        ['Farma i nemici stagionali', 'Boomers & Zombies'],
        ['Controlla le Ruins Tasks', 'Leggi i dettagli del buff prima di scegliere'],
        ['Controlla gli edifici stagionali', 'Continua a far progredire Altar & Obelisk']
      ],
      tipsEyebrow: 'NOTE 434',
      tipsTitle: 'Promemoria rapidi',
      tips: [
        'Entra nella mappa stagionale prima di perdere tempo sulla vecchia mappa.',
        'Non ignorare reset come Shadow Call — sono opportunità extra di progressione.',
        'Nelle Divine Ruins, la missione migliore è quella adatta alle tue truppe, non semplicemente quella con il bonus più alto.'
      ],
      footerTitle: 'Guida stagionale interattiva',
      footerText: 'Creata per l’alleanza · Smartphone + desktop',
      kinds: { STEP: 'FASE', ITEM: 'OGGETTO', RUINS: 'ROVINE', DAILY: 'OGGI', TIP: 'TIP', SECTION: 'SEZIONE' }
    },

    de: {
      pageTitle: '434 — Saison-Guide',
      languageLabel: 'Sprache',
      openNavigation: 'Navigation öffnen',
      nav: ['Start', 'Items', 'Ruinen', 'Täglich', 'Tipps'],
      heroEyebrow: 'DARK WAR SURVIVAL · INTERAKTIVER GUIDE',
      heroTitle: 'Starte in die Saison.<br><span>Wisse, was zu tun ist.</span>',
      heroText: 'Ein schneller, mobilfreundlicher Guide für Spieler von Server 434. Beginne mit dem Wichtigsten und gehe bei Bedarf ins Detail.',
      startGuide: 'Guide starten',
      resetProgress: 'Fortschritt zurücksetzen',
      progressLabel: 'DEIN FORTSCHRITT',
      progressPending: 'Schließe die ersten fünf Saison-Aktionen ab.',
      progressDone: 'Die ersten Schritte sind geschafft. Du bist bereit für die Saison.',
      searchEyebrow: 'SCHNELL FINDEN',
      searchTitle: 'Guide durchsuchen',
      searchPlaceholder: 'Item, Aufgabe, Gebäude oder Buff suchen...',
      clearSearch: 'Suche löschen',
      searchEmpty: 'Noch kein Ergebnis — versuche ein anderes Wort oder einen Item-Namen.',
      quick: [
        ['Erste Schritte', 'Richtig starten'],
        ['Item-Finder', 'Was? Wo? Ab wann?'],
        ['Divine Ruins', 'Aufgaben & Buffs'],
        ['Tägliche Routine', 'Nichts Wichtiges verpassen'],
        ['Schnelle Tipps', 'Kleine Dinge, die zählen']
      ],
      startEyebrow: 'HIER STARTEN',
      startTitle: 'Deine ersten 5 Aktionen',
      startIntro: 'Tippe auf eine Karte für Details. Hake sie ab, wenn du fertig bist — dein Fortschritt wird auf diesem Gerät gespeichert.',
      done: 'Erledigt',
      steps: [
        {
          kicker: 'SAISONKARTE',
          title: 'Betritt die neue Karte',
          body: 'Öffne das <strong>Season</strong>-Symbol, tippe auf <strong>ENTER</strong> und teleportiere dich anschließend zum Hive deiner Allianz.',
          flow: ['Season', 'Enter', 'Allianz-Hive']
        },
        {
          kicker: 'ZUERST FARMEN',
          title: 'Jage Boomers & Zombies',
          body: 'Töte <strong>Boomers</strong> und <strong>Zombies</strong>, um Saisonwährung und Ressourcen für den frühen Fortschritt zu sammeln.'
        },
        {
          kicker: 'SAISON-GEBÄUDE',
          title: 'Baue Altar & Obelisk',
          body: 'Gehe zum unteren Bereich des Saisonturms und beginne mit dem Bau von <strong>Altar</strong> und <strong>Obelisk</strong>.',
          tip: '<span>TIPP</span> Erledige das früh, damit dein Saisonfortschritt nicht ausgebremst wird.'
        },
        {
          kicker: 'BONUS-RESET',
          title: 'Nutze den Shadow Call Reset',
          body: '<strong>Shadow Call wurde zurückgesetzt.</strong> Nutze den Reset und schließe ihn erneut ab.'
        },
        {
          kicker: 'DIVINE RUINS',
          title: 'Starte deine Ruins Tasks',
          body: 'Starte deine Ruins Tasks und lies jedes <strong>!</strong> sorgfältig, bevor du auswählst. Verschiedene Aufgaben können unterschiedliche Buffs für verschiedene Truppentypen bieten.',
          warning: '<strong>Wähle mit Bedacht.</strong> Nimm eine Aufgabe nicht nur, weil der Bonus größer aussieht — passe den Buff an die Truppen an, die du tatsächlich nutzt.'
        }
      ],
      itemsEyebrow: 'ITEM · WAS IST DAS?',
      itemsTitle: 'Wisse, was du behalten solltest — und wann du es benutzt',
      itemsIntro: 'Nutze diesen Bereich, wenn du ein unbekanntes Saison-Item findest. Jede Karte beantwortet sofort die drei wichtigsten Fragen.',
      itemFields: [
        ['WAS?', 'Was das Item ist, was es bewirkt und warum es wichtig ist.'],
        ['WO?', 'Das genaue Menü, Gebäude, Event oder Feature, in dem du es benutzt.'],
        ['AB WANN?', 'Jetzt verfügbar, ab Woche 2, später in der Saison oder nur während eines bestimmten Events.']
      ],
      filters: { all: 'Alle', now: 'Jetzt', week2: 'Woche 2', later: 'Später' },
      itemZero: '0 Items dokumentiert',
      itemOne: '1 Item dokumentiert',
      itemMany: '{n} Items dokumentiert',
      itemShown: '{n} angezeigt',
      itemEmptyTitle: 'Item-Datenbank bereit.',
      itemEmptyBody: 'Schick mir den Namen oder einen Screenshot eines Items. Es wird hier mit <b>WAS?</b>, <b>WO?</b> und <b>AB WANN?</b> ergänzt.',
      ruinsEyebrow: 'DIVINE RUINS',
      ruinsTitle: 'Lies, bevor du auswählst',
      ruinsIntro: 'Dieser Bereich wird mit detaillierten Ruins-Tabellen, Refresh-Kosten und Buff-Auswahlen aus verifizierten Saisondaten erweitert.',
      featureRule: 'REGEL #1',
      featureRuleTitle: 'Das “!” ist wichtig',
      featureRuleBody: 'Das Warn-/Detailsymbol hat einen Zweck. Öffne es, bevor du eine Aufgabe festlegst, damit du weißt, welchen Truppentyp oder Bonus sie wirklich unterstützt.',
      troops: ['Truppe A', 'Truppe B', 'Truppe C'],
      next: 'ALS NÄCHSTES',
      refreshTitle: 'Refresh-Strategie',
      refreshBody: 'Refresh-Kosten und tägliche Limits werden hier aus verifizierten Saisondaten ergänzt.',
      dataToIntegrate: 'DATEN FOLGEN',
      picksTitle: 'Beste Aufgabenauswahl',
      picksBody: 'Ein einfacher Selektor hilft Spielern, Ruins Tasks an ihren Truppenfokus anzupassen.',
      comingNext: 'BALD',
      dailyEyebrow: 'TÄGLICHE ROUTINE',
      dailyTitle: 'Verschenke keinen kostenlosen Fortschritt',
      dailyIntro: 'Die tägliche Checkliste wächst, sobald wir weitere Saisonmechaniken verifizieren.',
      dailyItems: [
        ['Saison-Gegner farmen', 'Boomers & Zombies'],
        ['Ruins Tasks prüfen', 'Buff-Details vor der Auswahl lesen'],
        ['Saison-Gebäude prüfen', 'Fortschritt von Altar & Obelisk weiterführen']
      ],
      tipsEyebrow: '434 NOTIZEN',
      tipsTitle: 'Schnelle Erinnerungen',
      tips: [
        'Betritt die Saisonkarte, bevor du Zeit auf der alten Karte verlierst.',
        'Ignoriere Resets wie Shadow Call nicht — sie bringen zusätzliche Fortschrittsmöglichkeiten.',
        'In Divine Ruins ist die beste Aufgabe diejenige, die zu deinen Truppen passt, nicht einfach die mit dem größten sichtbaren Bonus.'
      ],
      footerTitle: 'Interaktiver Saison-Guide',
      footerText: 'Für die Allianz · Mobil + Desktop',
      kinds: { STEP: 'SCHRITT', ITEM: 'ITEM', RUINS: 'RUINEN', DAILY: 'TÄGL.', TIP: 'TIPP', SECTION: 'BEREICH' }
    },

    pl: {
      pageTitle: '434 — Poradnik sezonowy',
      languageLabel: 'Język',
      openNavigation: 'Otwórz nawigację',
      nav: ['Start', 'Przedmioty', 'Ruiny', 'Codziennie', 'Wskazówki'],
      heroEyebrow: 'DARK WAR SURVIVAL · INTERAKTYWNY PORADNIK',
      heroTitle: 'Wejdź w sezon.<br><span>Wiedz, co robić.</span>',
      heroText: 'Szybki poradnik przyjazny dla telefonu dla graczy Serwera 434. Najpierw wykonaj najważniejsze kroki, a potem sprawdzaj szczegóły, gdy ich potrzebujesz.',
      startGuide: 'Rozpocznij poradnik',
      resetProgress: 'Resetuj postęp',
      progressLabel: 'TWÓJ POSTĘP',
      progressPending: 'Ukończ pięć pierwszych działań sezonowych.',
      progressDone: 'Pierwsze kroki ukończone. Możesz działać dalej.',
      searchEyebrow: 'ZNAJDŹ SZYBKO',
      searchTitle: 'Przeszukaj poradnik',
      searchPlaceholder: 'Szukaj przedmiotu, zadania, budynku lub buffa...',
      clearSearch: 'Wyczyść wyszukiwanie',
      searchEmpty: 'Brak wyniku — spróbuj innego słowa lub nazwy przedmiotu.',
      quick: [
        ['Pierwsze kroki', 'Zacznij poprawnie'],
        ['Przedmioty', 'Co? Gdzie? Od kiedy?'],
        ['Divine Ruins', 'Zadania i buffy'],
        ['Codzienna rutyna', 'Czego nie przegapić'],
        ['Szybkie wskazówki', 'Małe rzeczy, które mają znaczenie']
      ],
      startEyebrow: 'ZACZNIJ TUTAJ',
      startTitle: 'Twoje pierwsze 5 działań',
      startIntro: 'Dotknij karty, aby zobaczyć szczegóły. Zaznacz ją po ukończeniu — postęp zapisuje się na tym urządzeniu.',
      done: 'Gotowe',
      steps: [
        {
          kicker: 'MAPA SEZONOWA',
          title: 'Wejdź na nową mapę',
          body: 'Otwórz ikonę <strong>Season</strong>, naciśnij <strong>ENTER</strong>, a następnie teleportuj się do hive swojej sojuszu.',
          flow: ['Season', 'Enter', 'Hive sojuszu']
        },
        {
          kicker: 'NAJPIERW FARM',
          title: 'Poluj na Boomers & Zombies',
          body: 'Zabijaj <strong>Boomers</strong> i <strong>Zombies</strong>, aby zdobywać walutę i zasoby sezonowe potrzebne do początkowego rozwoju.'
        },
        {
          kicker: 'BUDYNKI SEZONOWE',
          title: 'Zbuduj Altar & Obelisk',
          body: 'Idź na dół wieży sezonowej i rozpocznij budowę <strong>Altar</strong> oraz <strong>Obelisk</strong>.',
          tip: '<span>WSKAZÓWKA</span> Zrób to wcześnie, aby nie opóźniać rozwoju sezonowego.'
        },
        {
          kicker: 'RESET BONUSU',
          title: 'Wykorzystaj reset Shadow Call',
          body: '<strong>Shadow Call został zresetowany.</strong> Skorzystaj z resetu i ukończ go ponownie.'
        },
        {
          kicker: 'DIVINE RUINS',
          title: 'Rozpocznij Ruins Tasks',
          body: 'Rozpocznij Ruins Tasks i uważnie przeczytaj każde <strong>!</strong> przed wyborem. Różne zadania mogą dawać różne buffy dla różnych typów wojsk.',
          warning: '<strong>Wybieraj mądrze.</strong> Nie wybieraj zadania tylko dlatego, że bonus wygląda na większy — dopasuj buff do wojsk, których naprawdę używasz.'
        }
      ],
      itemsEyebrow: 'PRZEDMIOT · CO TO JEST?',
      itemsTitle: 'Dowiedz się, co zachować — i kiedy tego użyć',
      itemsIntro: 'Użyj tej sekcji, gdy znajdziesz nieznany przedmiot sezonowy. Każda karta odpowiada od razu na trzy najważniejsze pytania.',
      itemFields: [
        ['CO?', 'Czym jest przedmiot, co robi i dlaczego jest ważny.'],
        ['GDZIE?', 'Dokładne menu, budynek, wydarzenie lub funkcja, w której go używasz.'],
        ['OD KIEDY?', 'Dostępny teraz, od Tygodnia 2, później w sezonie lub tylko podczas określonego wydarzenia.']
      ],
      filters: { all: 'Wszystkie', now: 'Teraz', week2: 'Tydzień 2', later: 'Później' },
      itemZero: '0 opisanych przedmiotów',
      itemOne: '1 opisany przedmiot',
      itemMany: '{n} opisanych przedmiotów',
      itemShown: '{n} pokazano',
      itemEmptyTitle: 'Baza przedmiotów gotowa.',
      itemEmptyBody: 'Wyślij nazwę lub zrzut ekranu przedmiotu, a zostanie dodany tutaj z informacjami <b>CO?</b>, <b>GDZIE?</b> i <b>OD KIEDY?</b>.',
      ruinsEyebrow: 'DIVINE RUINS',
      ruinsTitle: 'Przeczytaj, zanim wybierzesz',
      ruinsIntro: 'Ta sekcja będzie rozwijana o szczegółowe tabele Ruins, koszty refresh oraz wybory buffów na podstawie zweryfikowanych danych sezonowych.',
      featureRule: 'ZASADA #1',
      featureRuleTitle: '“!” ma znaczenie',
      featureRuleBody: 'Ikona ostrzeżenia/szczegółów nie jest przypadkowa. Otwórz ją przed zatwierdzeniem zadania, aby wiedzieć, jaki typ wojsk lub bonus naprawdę wspiera.',
      troops: ['Wojska A', 'Wojska B', 'Wojska C'],
      next: 'DALEJ',
      refreshTitle: 'Strategia refresh',
      refreshBody: 'Koszty refresh i dzienne limity zostaną dodane tutaj na podstawie zweryfikowanych danych sezonowych.',
      dataToIntegrate: 'DANE DO DODANIA',
      picksTitle: 'Najlepsze wybory zadań',
      picksBody: 'Prosty selektor pomoże graczom dopasować Ruins Tasks do głównego typu wojsk.',
      comingNext: 'WKRÓTCE',
      dailyEyebrow: 'CODZIENNA RUTYNA',
      dailyTitle: 'Nie zostawiaj darmowego postępu',
      dailyIntro: 'Codzienna lista będzie rozwijana, gdy zweryfikujemy kolejne mechaniki sezonowe.',
      dailyItems: [
        ['Farm przeciwników sezonowych', 'Boomers & Zombies'],
        ['Sprawdź Ruins Tasks', 'Przeczytaj szczegóły buffa przed wyborem'],
        ['Sprawdź budynki sezonowe', 'Kontynuuj rozwój Altar & Obelisk']
      ],
      tipsEyebrow: 'NOTATKI 434',
      tipsTitle: 'Szybkie przypomnienia',
      tips: [
        'Wejdź na mapę sezonową, zanim zaczniesz tracić czas na starej mapie.',
        'Nie ignoruj resetów takich jak Shadow Call — to dodatkowe możliwości rozwoju.',
        'W Divine Ruins najlepsze zadanie to takie, które pasuje do twoich wojsk, a nie po prostu to z najwyższym widocznym bonusem.'
      ],
      footerTitle: 'Interaktywny poradnik sezonowy',
      footerText: 'Dla sojuszu · Telefon + komputer',
      kinds: { STEP: 'KROK', ITEM: 'ITEM', RUINS: 'RUINY', DAILY: 'DZIEŃ', TIP: 'TIP', SECTION: 'SEKCJA' }
    }
  };

  const toggles = Array.from(document.querySelectorAll('.step-toggle'));
  const checks = Array.from(document.querySelectorAll('[data-progress]'));
  const progressValue = document.getElementById('progressValue');
  const progressFill = document.getElementById('progressFill');
  const progressHint = document.getElementById('progressHint');
  const resetProgress = document.getElementById('resetProgress');
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobileNav');
  const brandMark = document.querySelector('.brand-mark');
  const languageSelect = document.getElementById('languageSelect');

  const guideSearch = document.getElementById('guideSearch');
  const clearSearch = document.getElementById('clearSearch');
  const searchResults = document.getElementById('searchResults');

  const itemFilters = Array.from(document.querySelectorAll('.item-filter'));
  const itemGrid = document.getElementById('itemGrid');
  const itemEmpty = document.getElementById('itemEmpty');
  const itemCount = document.getElementById('itemCount');

  let currentLanguage = 'en';
  let currentItemFilter = 'all';
  let searchIndex = [];

  if (brandMark) brandMark.textContent = '434';

  function getSavedLanguage() {
    try {
      const saved = localStorage.getItem(LANGUAGE_KEY);
      if (SUPPORTED_LANGUAGES.includes(saved)) return saved;
    } catch (_) {}
    const browser = String(navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED_LANGUAGES.includes(browser) ? browser : 'en';
  }

  function saveLanguage(lang) {
    try { localStorage.setItem(LANGUAGE_KEY, lang); } catch (_) {}
  }

  function t() {
    return translations[currentLanguage] || translations.en;
  }

  function text(selector, value) {
    const node = document.querySelector(selector);
    if (node && value !== undefined) node.textContent = value;
  }

  function html(selector, value) {
    const node = document.querySelector(selector);
    if (node && value !== undefined) node.innerHTML = value;
  }

  function texts(selector, values) {
    const nodes = Array.from(document.querySelectorAll(selector));
    nodes.forEach((node, index) => {
      if (values[index] !== undefined) node.textContent = values[index];
    });
  }

  function readProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(saved) ? saved.map(String) : [];
    } catch (_) {
      return [];
    }
  }

  function writeProgress(values) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    } catch (_) {}
  }

  function renderProgress() {
    const copy = t();
    const completed = checks.filter((box) => box.checked).length;
    if (progressValue) progressValue.textContent = `${completed} / ${checks.length}`;
    if (progressFill) progressFill.style.width = `${checks.length ? (completed / checks.length) * 100 : 0}%`;
    if (progressHint) {
      progressHint.textContent = completed === checks.length ? copy.progressDone : copy.progressPending;
    }
  }

  function syncFromStorage() {
    const completed = new Set(readProgress());
    checks.forEach((box) => {
      box.checked = completed.has(String(box.dataset.progress));
    });
    renderProgress();
  }

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      const body = toggle.nextElementSibling;
      toggle.setAttribute('aria-expanded', String(!expanded));
      if (body) body.hidden = expanded;
    });
  });

  checks.forEach((box) => {
    box.addEventListener('change', () => {
      const completed = checks
        .filter((item) => item.checked)
        .map((item) => String(item.dataset.progress));
      writeProgress(completed);
      renderProgress();
    });
  });

  if (resetProgress) {
    resetProgress.addEventListener('click', () => {
      checks.forEach((box) => { box.checked = false; });
      writeProgress([]);
      renderProgress();
    });
  }

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      mobileNav.hidden = isOpen;
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        mobileNav.hidden = true;
      });
    });
  }

  function normalizeSearchText(value) {
    return String(value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function makeSearchEntry(element, kind, titleSelector, fallbackTitle) {
    const titleNode = titleSelector ? element.querySelector(titleSelector) : null;
    const title = (titleNode && titleNode.textContent.trim()) || fallbackTitle || kind;
    const searchAliases = element.dataset.searchAliases || '';
    const searchText = normalizeSearchText(element.textContent + ' ' + searchAliases);
    return { element, kind, title, text: searchText };
  }

  function buildSearchIndex() {
    const entries = [];

    document.querySelectorAll('.step-card').forEach((el) => {
      entries.push(makeSearchEntry(el, 'STEP', '.step-title-wrap strong', 'Step'));
    });
    document.querySelectorAll('.item-card').forEach((el) => {
      entries.push(makeSearchEntry(el, 'ITEM', '.item-card-name h3', 'Item'));
    });
    document.querySelectorAll('.feature-card').forEach((el) => {
      entries.push(makeSearchEntry(el, 'RUINS', 'h3', 'Divine Ruins'));
    });
    document.querySelectorAll('.daily-item').forEach((el) => {
      entries.push(makeSearchEntry(el, 'DAILY', 'strong', 'Daily'));
    });
    document.querySelectorAll('.tips-grid article').forEach((el, index) => {
      entries.push(makeSearchEntry(el, 'TIP', null, `Tip ${index + 1}`));
    });
    document.querySelectorAll('main > section[id]').forEach((el) => {
      const heading = el.querySelector('h2');
      if (heading) {
        entries.push({
          element: el,
          kind: 'SECTION',
          title: heading.textContent.trim(),
          text: normalizeSearchText(heading.textContent + ' ' + (el.querySelector('.eyebrow')?.textContent || ''))
        });
      }
    });

    return entries;
  }

  function getResultDescription(entry) {
    const raw = entry.element.textContent.replace(/\s+/g, ' ').trim();
    const withoutTitle = raw.replace(entry.title, '').trim();
    return withoutTitle.slice(0, 95) || entry.kind;
  }

  function closeSearchResults() {
    if (!searchResults) return;
    searchResults.hidden = true;
    searchResults.replaceChildren();
  }

  function revealSearchTarget(entry) {
    const target = entry.element;

    if (target.classList.contains('step-card')) {
      const toggle = target.querySelector('.step-toggle');
      const body = target.querySelector('.step-body');
      if (toggle && body) {
        toggle.setAttribute('aria-expanded', 'true');
        body.hidden = false;
      }
    }

    if (target.classList.contains('item-card') && target.hidden) {
      applyItemFilter('all');
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    target.classList.remove('search-hit-flash');
    void target.offsetWidth;
    target.classList.add('search-hit-flash');
    window.setTimeout(() => target.classList.remove('search-hit-flash'), 1400);
    closeSearchResults();
  }

  function renderSearchResults(query) {
    if (!searchResults || !guideSearch || !clearSearch) return;

    const copy = t();
    const normalized = normalizeSearchText(query);
    clearSearch.hidden = !normalized;

    if (!normalized) {
      closeSearchResults();
      return;
    }

    const tokens = normalized.split(' ').filter(Boolean);
    const matches = searchIndex
      .filter((entry) => tokens.every((token) => entry.text.includes(token)))
      .slice(0, 8);

    searchResults.replaceChildren();
    searchResults.hidden = false;

    if (!matches.length) {
      const empty = document.createElement('div');
      empty.className = 'search-empty';
      empty.textContent = copy.searchEmpty;
      searchResults.appendChild(empty);
      return;
    }

    matches.forEach((entry) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'search-result';

      const icon = document.createElement('span');
      icon.className = 'search-result-icon';
      icon.textContent = copy.kinds[entry.kind] || entry.kind;

      const content = document.createElement('span');
      content.className = 'search-result-copy';

      const title = document.createElement('strong');
      title.textContent = entry.title;

      const description = document.createElement('small');
      description.textContent = getResultDescription(entry);

      const arrow = document.createElement('span');
      arrow.className = 'search-result-arrow';
      arrow.setAttribute('aria-hidden', 'true');
      arrow.textContent = '→';

      content.append(title, description);
      button.append(icon, content, arrow);
      button.addEventListener('click', () => revealSearchTarget(entry));
      searchResults.appendChild(button);
    });
  }

  if (guideSearch && clearSearch) {
    guideSearch.addEventListener('input', () => renderSearchResults(guideSearch.value));
    guideSearch.addEventListener('focus', () => {
      if (guideSearch.value.trim()) renderSearchResults(guideSearch.value);
    });

    clearSearch.addEventListener('click', () => {
      guideSearch.value = '';
      clearSearch.hidden = true;
      closeSearchResults();
      guideSearch.focus();
    });

    document.addEventListener('click', (event) => {
      const searchArea = document.querySelector('.guide-search');
      if (searchArea && !searchArea.contains(event.target)) closeSearchResults();
    });
  }

  function getItemCards() {
    return itemGrid ? Array.from(itemGrid.querySelectorAll('.item-card')) : [];
  }

  function applyItemFilter(filter) {
    currentItemFilter = filter || 'all';
    const copy = t();
    const cards = getItemCards();
    let visible = 0;

    cards.forEach((card) => {
      const show = currentItemFilter === 'all' || card.dataset.available === currentItemFilter;
      card.hidden = !show;
      if (show) visible += 1;
    });

    itemFilters.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.itemFilter === currentItemFilter);
    });

    if (itemEmpty) itemEmpty.hidden = cards.length > 0;
    if (itemCount) {
      const total = cards.length;
      let label = total === 0 ? copy.itemZero : total === 1 ? copy.itemOne : copy.itemMany.replace('{n}', total);
      if (total > 0 && visible !== total) label += ' · ' + copy.itemShown.replace('{n}', visible);
      itemCount.textContent = label;
    }
  }

  itemFilters.forEach((button) => {
    button.addEventListener('click', () => applyItemFilter(button.dataset.itemFilter || 'all'));
  });

  function translateStep(index, data) {
    const card = document.querySelector(`.step-card[data-step="${index + 1}"]`);
    if (!card) return;

    const kicker = card.querySelector('.step-kicker');
    const title = card.querySelector('.step-title-wrap strong');
    const body = card.querySelector('.step-body > p');
    if (kicker) kicker.textContent = data.kicker;
    if (title) title.textContent = data.title;
    if (body) body.innerHTML = data.body;

    if (data.flow) {
      const flow = card.querySelectorAll('.micro-flow span');
      data.flow.forEach((value, i) => { if (flow[i]) flow[i].textContent = value; });
    }
    if (data.tip) html(`.step-card[data-step="${index + 1}"] .tip-box`, data.tip);
    if (data.warning) html(`.step-card[data-step="${index + 1}"] .warning-box`, data.warning);
  }

  function applyLanguage(lang, persist = true) {
    if (!SUPPORTED_LANGUAGES.includes(lang)) lang = 'en';
    currentLanguage = lang;
    const copy = t();

    document.documentElement.lang = lang;
    document.title = copy.pageTitle;
    if (languageSelect) {
      languageSelect.value = lang;
      languageSelect.setAttribute('aria-label', copy.languageLabel);
    }
    if (persist) saveLanguage(lang);

    const navDesktop = Array.from(document.querySelectorAll('.desktop-nav a'));
    const navMobile = Array.from(document.querySelectorAll('.mobile-nav a'));
    copy.nav.forEach((label, index) => {
      if (navDesktop[index]) navDesktop[index].textContent = label;
      if (navMobile[index]) navMobile[index].textContent = label;
    });

    text('.nav-toggle .sr-only', copy.openNavigation);
    text('.hero .eyebrow', copy.heroEyebrow);
    html('#heroTitle', copy.heroTitle);
    text('.hero-text', copy.heroText);
    text('.hero-actions .btn-primary', copy.startGuide);
    text('#resetProgress', copy.resetProgress);
    text('.progress-copy span', copy.progressLabel);

    text('.guide-search .eyebrow', copy.searchEyebrow);
    text('.search-copy strong', copy.searchTitle);
    if (guideSearch) guideSearch.placeholder = copy.searchPlaceholder;
    if (clearSearch) clearSearch.setAttribute('aria-label', copy.clearSearch);

    const quickLinks = Array.from(document.querySelectorAll('.quick-strip a'));
    copy.quick.forEach((values, index) => {
      if (!quickLinks[index]) return;
      const strong = quickLinks[index].querySelector('strong');
      const small = quickLinks[index].querySelector('small');
      if (strong) strong.textContent = values[0];
      if (small) small.textContent = values[1];
    });

    text('#start .eyebrow', copy.startEyebrow);
    text('#start h2', copy.startTitle);
    text('#start .section-heading > p', copy.startIntro);
    copy.steps.forEach((step, index) => translateStep(index, step));
    document.querySelectorAll('.done-check span').forEach((node) => { node.textContent = copy.done; });

    text('#items .eyebrow', copy.itemsEyebrow);
    text('#items h2', copy.itemsTitle);
    text('#items .section-heading > p', copy.itemsIntro);
    const itemPanels = Array.from(document.querySelectorAll('.item-explainer > div'));
    copy.itemFields.forEach((values, index) => {
      if (!itemPanels[index]) return;
      const strong = itemPanels[index].querySelector('strong');
      const p = itemPanels[index].querySelector('p');
      if (strong) strong.textContent = values[0];
      if (p) p.textContent = values[1];
    });
    Object.entries(copy.filters).forEach(([key, value]) => {
      const selector = key === 'week2' ? 'week-2' : key;
      const button = document.querySelector(`.item-filter[data-item-filter="${selector}"]`);
      if (button) button.textContent = value;
    });
    text('#itemEmpty strong', copy.itemEmptyTitle);
    html('#itemEmpty p', copy.itemEmptyBody);

    text('#ruins .eyebrow', copy.ruinsEyebrow);
    text('#ruins h2', copy.ruinsTitle);
    text('#ruins .section-heading > p', copy.ruinsIntro);
    text('#ruins .feature-card:nth-child(1) .feature-index', copy.featureRule);
    text('#ruins .feature-card:nth-child(1) h3', copy.featureRuleTitle);
    text('#ruins .feature-card:nth-child(1) > p', copy.featureRuleBody);
    texts('#ruins .troop-row span', copy.troops);
    text('#ruins .feature-card:nth-child(2) .feature-index', copy.next);
    text('#ruins .feature-card:nth-child(2) h3', copy.refreshTitle);
    text('#ruins .feature-card:nth-child(2) p', copy.refreshBody);
    text('#ruins .feature-card:nth-child(2) .status-pill', copy.dataToIntegrate);
    text('#ruins .feature-card:nth-child(3) .feature-index', copy.next);
    text('#ruins .feature-card:nth-child(3) h3', copy.picksTitle);
    text('#ruins .feature-card:nth-child(3) p', copy.picksBody);
    text('#ruins .feature-card:nth-child(3) .status-pill', copy.comingNext);

    text('#daily .eyebrow', copy.dailyEyebrow);
    text('#daily h2', copy.dailyTitle);
    text('#daily .section-heading > p', copy.dailyIntro);
    const dailyItems = Array.from(document.querySelectorAll('.daily-item'));
    copy.dailyItems.forEach((values, index) => {
      if (!dailyItems[index]) return;
      const strong = dailyItems[index].querySelector('strong');
      const small = dailyItems[index].querySelector('small');
      if (strong) strong.textContent = values[0];
      if (small) small.textContent = values[1];
    });

    text('#tips .eyebrow', copy.tipsEyebrow);
    text('#tips h2', copy.tipsTitle);
    texts('#tips .tips-grid article p', copy.tips);

    text('.footer div span', copy.footerTitle);
    text('.footer > p', copy.footerText);

    renderProgress();
    applyItemFilter(currentItemFilter);
    searchIndex = buildSearchIndex();
    if (guideSearch && guideSearch.value.trim()) renderSearchResults(guideSearch.value);
  }

  if (languageSelect) {
    languageSelect.addEventListener('change', () => applyLanguage(languageSelect.value, true));
  }

  syncFromStorage();
  applyLanguage(getSavedLanguage(), false);
})();