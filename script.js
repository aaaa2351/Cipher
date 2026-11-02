const subQs = {
    Computer: [
        {
            q: "What does CPU stand for?",
            options: ["Central Processing Unit", "Central Program Utility", "Computer Personal Unit", "Core Processing Utility"],
            ans: "Central Processing Unit"
        },
        {
            q: "Which of these is an input device?",
            options: ["Monitor", "Printer", "Keyboard", "Speaker"],
            ans: "Keyboard"
        },
        {
            q: "What does RAM stand for?",
            options: ["Read Access Memory", "Random Access Memory", "Rapid Application Memory", "Run Active Memory"],
            ans: "Random Access Memory"
        },
        {
            q: "Which number system do computers use internally?",
            options: ["Decimal", "Octal", "Binary", "Hexadecimal"],
            ans: "Binary"
        },
        {
            q: "What is the main circuit board of a computer called?",
            options: ["Daughterboard", "Motherboard", "Chipboard", "Backplane"],
            ans: "Motherboard"
        },
        {
            q: "Which of these is an operating system?",
            options: ["Linux", "Google Chrome", "Python", "Photoshop"],
            ans: "Linux"
        },
        {
            q: "What does URL stand for?",
            options: ["Uniform Resource Locator", "Universal Reference Link", "Unified Resource Loader", "Uniform Routing Location"],
            ans: "Uniform Resource Locator"
        },
        {
            q: "How many bits are in a byte?",
            options: ["4", "8", "16", "32"],
            ans: "8"
        },
        {
            q: "Which device directs data between networks?",
            options: ["Scanner", "Router", "Projector", "Webcam"],
            ans: "Router"
        },
        {
            q: "What does HTTP stand for?",
            options: ["HyperText Transfer Protocol", "High Transfer Text Process", "HyperText Transmission Program", "Host Transfer Ticket Protocol"],
            ans: "HyperText Transfer Protocol"
        },
        {
            q: "Which of these is a programming language?",
            options: ["Windows", "Ethernet", "Python", "Bluetooth"],
            ans: "Python"
        },
        {
            q: "What is the main job of an operating system?",
            options: ["Browse the internet", "Manage hardware and software resources", "Edit photos", "Print documents"],
            ans: "Manage hardware and software resources"
        },
        {
            q: "Which storage device has no moving parts?",
            options: ["Hard Disk Drive", "Solid State Drive", "Floppy Disk", "Magnetic Tape"],
            ans: "Solid State Drive"
        },
        {
            q: "Which of these is the largest unit of storage?",
            options: ["Megabyte", "Gigabyte", "Kilobyte", "Terabyte"],
            ans: "Terabyte"
        },
        {
            q: "What does GPU stand for?",
            options: ["General Processing Unit", "Graphical Program Utility", "Graphics Processing Unit", "Game Power Unit"],
            ans: "Graphics Processing Unit"
        },
        {
            q: "What is malware?",
            options: ["Software designed to harm a computer", "A type of hardware", "A backup tool", "A web browser"],
            ans: "Software designed to harm a computer"
        },
        {
            q: "What is a set of step-by-step instructions to solve a problem called?",
            options: ["Compiler", "Protocol", "Firewall", "Algorithm"],
            ans: "Algorithm"
        },
        {
            q: "Which of these is a web browser?",
            options: ["Firefox", "Linux", "Excel", "Oracle"],
            ans: "Firefox"
        },
        {
            q: "What does a firewall do?",
            options: ["Cools the processor", "Monitors and controls network traffic", "Stores backups", "Speeds up the monitor"],
            ans: "Monitors and controls network traffic"
        },
        {
            q: "Who is known as the father of the computer?",
            options: ["Bill Gates", "Steve Jobs", "Charles Babbage", "Tim Berners-Lee"],
            ans: "Charles Babbage"
        }
    ],
    Math: [
        {
            q: "What is 12 x 12?",
            options: ["124", "144", "132", "154"],
            ans: "144"
        },
        {
            q: "What is the square root of 81?",
            options: ["7", "8", "9", "10"],
            ans: "9"
        },
        {
            q: "What is the approximate value of pi?",
            options: ["2.14", "3.14", "3.41", "4.13"],
            ans: "3.14"
        },
        {
            q: "What is 15% of 200?",
            options: ["20", "25", "30", "35"],
            ans: "30"
        },
        {
            q: "What is the sum of the angles in a triangle?",
            options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
            ans: "180 degrees"
        },
        {
            q: "Which of these is a prime number?",
            options: ["21", "27", "29", "33"],
            ans: "29"
        },
        {
            q: "What is 7 squared?",
            options: ["14", "42", "49", "56"],
            ans: "49"
        },
        {
            q: "What is the perimeter of a square with a side of 5?",
            options: ["10", "15", "20", "25"],
            ans: "20"
        },
        {
            q: "Solve for x: 3x = 27",
            options: ["6", "7", "8", "9"],
            ans: "9"
        },
        {
            q: "What is the area of a rectangle with length 8 and width 6?",
            options: ["14", "28", "48", "56"],
            ans: "48"
        },
        {
            q: "What is 1/2 + 1/4?",
            options: ["1/6", "2/6", "3/4", "1/8"],
            ans: "3/4"
        },
        {
            q: "How many sides does a hexagon have?",
            options: ["5", "6", "7", "8"],
            ans: "6"
        },
        {
            q: "What is the next number in the sequence 2, 4, 8, 16?",
            options: ["24", "30", "32", "36"],
            ans: "32"
        },
        {
            q: "What is the value of 10 - (-5)?",
            options: ["5", "-5", "15", "-15"],
            ans: "15"
        },
        {
            q: "What is the cube of 3?",
            options: ["9", "18", "27", "81"],
            ans: "27"
        },
        {
            q: "What is the median of 2, 5, 9, 12, 20?",
            options: ["5", "9", "9.6", "12"],
            ans: "9"
        },
        {
            q: "Which formula gives the area of a circle?",
            options: ["2πr", "πr²", "πd", "r²/2"],
            ans: "πr²"
        },
        {
            q: "What is 2 to the power of 6?",
            options: ["12", "32", "64", "128"],
            ans: "64"
        },
        {
            q: "What is the Roman numeral for 50?",
            options: ["C", "D", "L", "X"],
            ans: "L"
        },
        {
            q: "What is the hypotenuse of a right triangle with legs 3 and 4?",
            options: ["5", "6", "7", "12"],
            ans: "5"
        }
    ],
    Astronomy: [
        {
            q: "How many planets are in our Solar System?",
            options: ["7", "8", "9", "10"],
            ans: "8"
        },
        {
            q: "What is the hottest planet in our Solar System?",
            options: ["Mercury", "Venus", "Earth", "Mars"],
            ans: "Venus"
        },
        {
            q: "Which planet is known as the Red Planet?",
            options: ["Venus", "Saturn", "Mars", "Jupiter"],
            ans: "Mars"
        },
        {
            q: "What is the largest planet in our Solar System?",
            options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
            ans: "Jupiter"
        },
        {
            q: "Which planet has the most prominent ring system?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            ans: "Saturn"
        },
        {
            q: "What is the smallest planet in our Solar System?",
            options: ["Mars", "Venus", "Mercury", "Pluto"],
            ans: "Mercury"
        },
        {
            q: "Which planet is closest to the Sun?",
            options: ["Venus", "Earth", "Mercury", "Mars"],
            ans: "Mercury"
        },
        {
            q: "Which gas is most abundant in Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            ans: "Nitrogen"
        },
        {
            q: "What galaxy is Earth located in?",
            options: ["Andromeda", "Milky Way", "Sombrero", "Triangulum"],
            ans: "Milky Way"
        },
        {
            q: "What force keeps us on the ground and planets in orbit?",
            options: ["Magnetism", "Gravity", "Friction", "Inertia"],
            ans: "Gravity"
        },
        {
            q: "Which planet rotates on its side?",
            options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
            ans: "Uranus"
        },
        {
            q: "What is the name of Earth's only natural satellite?",
            options: ["Titan", "Europa", "Moon", "Phobos"],
            ans: "Moon"
        },
        {
            q: "Which planet is known as the Earth's twin because of its similar size?",
            options: ["Mars", "Venus", "Mercury", "Neptune"],
            ans: "Venus"
        },
        {
            q: "What is the center of our Solar System?",
            options: ["Earth", "Jupiter", "The Sun", "Black Hole"],
            ans: "The Sun"
        },
        {
            q: "Which planet has the Great Dark Spot?",
            options: ["Neptune", "Saturn", "Jupiter", "Uranus"],
            ans: "Neptune"
        },
        {
            q: "What is the primary component of the Sun?",
            options: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
            ans: "Hydrogen"
        },
        {
            q: "Which planet is farthest from the Sun in our Solar System?",
            options: ["Uranus", "Neptune", "Saturn", "Mars"],
            ans: "Neptune"
        },
        {
            q: "What is the asteroid belt primarily located between?",
            options: ["Earth and Mars", "Mars and Jupiter", "Jupiter and Saturn", "Venus and Earth"],
            ans: "Mars and Jupiter"
        },
        {
            q: "Who was the first person to walk on the Moon?",
            options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
            ans: "Neil Armstrong"
        },
        {
            q: "What is a light-year a measure of?",
            options: ["Time", "Distance", "Speed", "Brightness"],
            ans: "Distance"
        }
    ],
    WebDevelopment: [
        {
            q: "What does HTML stand for?",
            options: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language", "Home Text Markup Language"],
            ans: "HyperText Markup Language"
        },
        {
            q: "Which language is used to style web pages?",
            options: ["Python", "CSS", "SQL", "C++"],
            ans: "CSS"
        },
        {
            q: "Which HTML tag creates a hyperlink?",
            options: ["<link>", "<href>", "<a>", "<url>"],
            ans: "<a>"
        },
        {
            q: "Which language adds interactivity to web pages in the browser?",
            options: ["JavaScript", "SQL", "Swift", "Ruby"],
            ans: "JavaScript"
        },
        {
            q: "Which HTML tag creates the largest heading?",
            options: ["<h6>", "<h1>", "<head>", "<title>"],
            ans: "<h1>"
        },
        {
            q: "Which CSS property changes the text color?",
            options: ["font-color", "text-style", "color", "background"],
            ans: "color"
        },
        {
            q: "Which HTML tag is used to insert an image?",
            options: ["<img>", "<image>", "<pic>", "<src>"],
            ans: "<img>"
        },
        {
            q: "What does CSS stand for?",
            options: ["Creative Style System", "Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
            ans: "Cascading Style Sheets"
        },
        {
            q: "Which symbol selects a class in CSS?",
            options: ["#", ".", "*", "&"],
            ans: "."
        },
        {
            q: "Which symbol selects an id in CSS?",
            options: [".", "@", "#", "$"],
            ans: "#"
        },
        {
            q: "Which JavaScript keyword declares a block-scoped variable that can be reassigned?",
            options: ["var", "let", "const", "int"],
            ans: "let"
        },
        {
            q: "Which method selects an element by its id in JavaScript?",
            options: ["document.getElementById()", "document.querySelectorAll()", "document.getElement()", "document.selectId()"],
            ans: "document.getElementById()"
        },
        {
            q: "What does DOM stand for?",
            options: ["Data Object Mode", "Digital Output Method", "Document Object Model", "Document Oriented Markup"],
            ans: "Document Object Model"
        },
        {
            q: "Which CSS property controls the space inside an element's border?",
            options: ["margin", "padding", "spacing", "border-gap"],
            ans: "padding"
        },
        {
            q: "Which CSS display value creates a flexible layout container?",
            options: ["block", "inline", "flex", "table"],
            ans: "flex"
        },
        {
            q: "Which HTTP status code means Not Found?",
            options: ["200", "301", "404", "500"],
            ans: "404"
        },
        {
            q: "Which HTML tag holds metadata such as the page title?",
            options: ["<body>", "<head>", "<footer>", "<section>"],
            ans: "<head>"
        },
        {
            q: "Which JavaScript method adds an item to the end of an array?",
            options: ["pop()", "push()", "shift()", "slice()"],
            ans: "push()"
        },
        {
            q: "What is the alt attribute on an image used for?",
            options: ["Setting the image size", "Describing the image for accessibility", "Linking the image", "Adding a border"],
            ans: "Describing the image for accessibility"
        },
        {
            q: "Which tool is commonly used for version control in web projects?",
            options: ["Git", "Node", "Webpack", "Sass"],
            ans: "Git"
        }
    ],
    English: [
        {
            q: "Which of the following is a noun?",
            options: ["Quickly", "Happiness", "Run", "Beautiful"],
            ans: "Happiness"
        },
        {
            q: "What is the past tense of the verb 'go'?",
            options: ["Gone", "Going", "Went", "Goes"],
            ans: "Went"
        },
        {
            q: "Which word is a synonym for 'huge'?",
            options: ["Tiny", "Gigantic", "Narrow", "Short"],
            ans: "Gigantic"
        },
        {
            q: "Which word is an antonym for 'ancient'?",
            options: ["Old", "Modern", "Historic", "Aged"],
            ans: "Modern"
        },
        {
            q: "Choose the correctly spelled word:",
            options: ["Recieve", "Receive", "Receeve", "Recive"],
            ans: "Receive"
        },
        {
            q: "What type of word modifies a verb, adjective, or another adverb?",
            options: ["Pronoun", "Preposition", "Adverb", "Conjunction"],
            ans: "Adverb"
        },
        {
            q: "Identify the conjunction in this sentence: 'I wanted to go, but it was raining.'",
            options: ["wanted", "go", "but", "raining"],
            ans: "but"
        },
        {
            q: "What is a word called that sounds the same as another word but has a different meaning?",
            options: ["Homophone", "Antonym", "Synonym", "Acronym"],
            ans: "Homophone"
        },
        {
            q: "Which sentence uses proper punctuation?",
            options: ["Whose jacket is this?", "Whos jacket is this?", "Who's jacket is this?", "Whose's jacket is this?"],
            ans: "Whose jacket is this?"
        },
        {
            q: "What is a figure of speech that directly compares two things using 'like' or 'as'?",
            options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
            ans: "Simile"
        },
        {
            q: "Which of these is a plural noun?",
            options: ["Child", "Foot", "Geese", "Mouse"],
            ans: "Geese"
        },
        {
            q: "What is the main subject of a sentence called?",
            options: ["Predicate", "Subject", "Object", "Clause"],
            ans: "Subject"
        },
        {
            q: "Which word is an adjective in: 'The loud music startled everyone'?",
            options: ["loud", "music", "startled", "everyone"],
            ans: "loud"
        },
        {
            q: "What is an extreme exaggeration used for emphasis called?",
            options: ["Idiom", "Hyperbole", "Oxymoron", "Alliteration"],
            ans: "Hyperbole"
        },
        {
            q: "Choose the correct pronoun: 'Sarah and ____ went to the store.'",
            options: ["me", "I", "myself", "us"],
            ans: "I"
        },
        {
            q: "Which literary device involves the repetition of initial consonant sounds?",
            options: ["Assonance", "Alliteration", "Onomatopoeia", "Rhyme"],
            ans: "Alliteration"
        },
        {
            q: "What punctuation mark is used to show possession or missing letters?",
            options: ["Comma", "Apostrophe", "Hyphen", "Semicolon"],
            ans: "Apostrophe"
        },
        {
            q: "What is a group of words containing a subject and a verb called?",
            options: ["Phrase", "Clause", "Idiom", "Prefix"],
            ans: "Clause"
        },
        {
            q: "Which prefix means 'against'?",
            options: ["Pre-", "Un-", "Anti-", "Re-"],
            ans: "Anti-"
        },
        {
            q: "Who wrote the play 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
            ans: "William Shakespeare"
        }
    ],
    GeneralStudies1: [
        {
            q: "What is the largest continent by land area?",
            options: ["Africa", "North America", "Asia", "Europe"],
            ans: "Asia"
        },
        {
            q: "Which organ pumps blood throughout the human body?",
            options: ["Brain", "Lungs", "Liver", "Heart"],
            ans: "Heart"
        },
        {
            q: "In which year did World War II end?",
            options: ["1918", "1939", "1945", "1950"],
            ans: "1945"
        },
        {
            q: "What is the longest river in the world?",
            options: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
            ans: "Nile River"
        },
        {
            q: "Which gas do plants absorb from the atmosphere for photosynthesis?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            ans: "Carbon Dioxide"
        },
        {
            q: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
            ans: "Leonardo da Vinci"
        },
        {
            q: "What is the capital city of Japan?",
            options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
            ans: "Tokyo"
        },
        {
            q: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Quartz"],
            ans: "Diamond"
        },
        {
            q: "How many continents are there on Earth?",
            options: ["5", "6", "7", "8"],
            ans: "7"
        },
        {
            q: "Which ocean is the largest on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            ans: "Pacific Ocean"
        },
        {
            q: "What is the currency of the United Kingdom?",
            options: ["Euro", "Pound Sterling", "Dollar", "Yen"],
            ans: "Pound Sterling"
        },
        {
            q: "Which country gifted the Statue of Liberty to the United States?",
            options: ["France", "United Kingdom", "Spain", "Germany"],
            ans: "France"
        },
        {
            q: "What is the chemical symbol for Gold?",
            options: ["Ag", "Au", "Fe", "Go"],
            ans: "Au"
        },
        {
            q: "Which continent is also known as the 'Dark Continent' historically?",
            options: ["Asia", "South America", "Africa", "Australia"],
            ans: "Africa"
        },
        {
            q: "Who is known as the author of the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
            ans: "Albert Einstein"
        },
        {
            q: "What is the smallest country in the world by land area?",
            options: ["Monaco", "Vatican City", "Malta", "San Marino"],
            ans: "Vatican City"
        },
        {
            q: "Which layer of the atmosphere protects us from harmful solar radiation?",
            options: ["Troposphere", "Ozone Layer", "Mesosphere", "Thermosphere"],
            ans: "Ozone Layer"
        },
        {
            q: "What instrument is used to measure temperature?",
            options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
            ans: "Thermometer"
        },
        {
            q: "Which country has the largest population in the world?",
            options: ["United States", "India", "China", "Indonesia"],
            ans: "India"
        },
        {
            q: "What process do green plants use to make their own food?",
            options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
            ans: "Photosynthesis"
        }
    ],
    GeneralStudies2: [
        {
            q: "Which treaty, signed in 1648, established the modern system of sovereign nation-states?",
            options: ["Treaty of Versailles", "Peace of Westphalia", "Treaty of Utrecht", "Congress of Vienna"],
            ans: "Peace of Westphalia"
        },
        {
            q: "What is the deepest known location in Earth's oceans?",
            options: ["Puerto Rico Trench", "Java Trench", "Challenger Deep", "Sunda Trench"],
            ans: "Challenger Deep"
        },
        {
            q: "Which law of thermodynamics states that entropy of an isolated system always increases over time?",
            options: ["Zeroth Law", "First Law", "Second Law", "Third Law"],
            ans: "Second Law"
        },
        {
            q: "Who served as the principal author of the Declaration of Independence?",
            options: ["Benjamin Franklin", "John Adams", "Thomas Jefferson", "James Madison"],
            ans: "Thomas Jefferson"
        },
        {
            q: "What international judicial body hears disputes between sovereign nations in The Hague?",
            options: ["International Criminal Court", "International Court of Justice", "European Court of Human Rights", "Permanent Court of Arbitration"],
            ans: "International Court of Justice"
        },
        {
            q: "Which subatomic particle was discovered by J.J. Thomson in 1897 using cathode ray tubes?",
            options: ["Proton", "Neutron", "Electron", "Positron"],
            ans: "Electron"
        },
        {
            q: "What economic metric measures the total market value of all final goods and services produced within a country's borders in a given year?",
            options: ["Gross National Product (GNP)", "Gross Domestic Product (GDP)", "Net National Product (NNP)", "Purchasing Power Parity (PPP)"],
            ans: "Gross Domestic Product (GDP)"
        },
        {
            q: "Which ancient civilization constructed the city of Machu Picchu high in the Andes Mountains?",
            options: ["Aztec", "Maya", "Inca", "Olmec"],
            ans: "Inca"
        },
        {
            q: "What is the primary organic component of plant cell walls?",
            options: ["Chitin", "Cellulose", "Keratin", "Starch"],
            ans: "Cellulose"
        },
        {
            q: "Which African nation was never formally colonized by a European power, maintaining sovereignty except during Italian occupation (1936-1941)?",
            options: ["Ghana", "Nigeria", "Ethiopia", "Kenya"],
            ans: "Ethiopia"
        },
        {
            q: "What is the phenomenon where light bends as it passes from one medium to another of different density?",
            options: ["Reflection", "Diffraction", "Refraction", "Polarization"],
            ans: "Refraction"
        },
        {
            q: "Which United Nations agency is responsible for international public health?",
            options: ["UNICEF", "UNESCO", "WHO", "UNHCR"],
            ans: "WHO"
        },
        {
            q: "Who was the first woman to win a Nobel Prize and remains the only person to win Nobel Prizes in two different scientific fields?",
            options: ["Rosalind Franklin", "Marie Curie", "Ada Lovelace", "Dorothy Hodgkin"],
            ans: "Marie Curie"
        },
        {
            q: "What is the capital city of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            ans: "Canberra"
        },
        {
            q: "In economics, what curve illustrates the trade-off between inflation and unemployment?",
            options: ["Laffer Curve", "Lorenz Curve", "Phillips Curve", "Supply Curve"],
            ans: "Phillips Curve"
        },
        {
            q: "Which mountain range separates the continents of Europe and Asia?",
            options: ["Alps", "Ural Mountains", "Caucasus Mountains", "Carpathian Mountains"],
            ans: "Ural Mountains"
        },
        {
            q: "What enzyme in human saliva breaks down complex carbohydrates into simpler sugars?",
            options: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
            ans: "Amylase"
        },
        {
            q: "Which historic document, signed in 1215, limited the power of the English monarchy?",
            options: ["Magna Carta", "Bill of Rights 1689", "Edict of Nantes", "Habeas Corpus Act"],
            ans: "Magna Carta"
        },
        {
            q: "What type of chemical bond is formed by the sharing of electron pairs between atoms?",
            options: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Metallic bond"],
            ans: "Covalent bond"
        },
        {
            q: "Which island nation is located directly south of India across the Palk Strait?",
            options: ["Maldives", "Madagascar", "Sri Lanka", "Mauritius"],
            ans: "Sri Lanka"
        }
    ],
    Biology: [
        {
            q: "What is known as the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
            ans: "Mitochondria"
        },
        {
            q: "What is the green pigment in plants used for photosynthesis?",
            options: ["Chlorophyll", "Carotene", "Xanthophyll", "Hemoglobin"],
            ans: "Chlorophyll"
        },
        {
            q: "What is the largest organ in the human body?",
            options: ["Liver", "Brain", "Skin", "Heart"],
            ans: "Skin"
        },
        {
            q: "Which blood vessels carry oxygenated blood away from the heart?",
            options: ["Veins", "Arteries", "Capillaries", "Venules"],
            ans: "Arteries"
        },
        {
            q: "What type of organism makes its own food?",
            options: ["Autotroph", "Heterotroph", "Decomposer", "Herbivore"],
            ans: "Autotroph"
        },
        {
            q: "Which structure in a plant cell provides structural support and protection?",
            options: ["Cell membrane", "Cell wall", "Vacuole", "Chloroplast"],
            ans: "Cell wall"
        },
        {
            q: "What molecule carries genetic instructions in living organisms?",
            options: ["RNA", "ATP", "DNA", "Glucose"],
            ans: "DNA"
        },
        {
            q: "How many chromosomes do human body cells normally contain?",
            options: ["23", "46", "44", "48"],
            ans: "46"
        },
        {
            q: "Which blood type is known as the universal donor?",
            options: ["A Positive", "AB Positive", "O Negative", "B Negative"],
            ans: "O Negative"
        },
        {
            q: "What is the process of cell division that results in four daughter cells with half the chromosomes?",
            options: ["Mitosis", "Meiosis", "Binary Fission", "Budding"],
            ans: "Meiosis"
        },
        {
            q: "Which organ produces insulin in the human body?",
            options: ["Liver", "Kidney", "Pancreas", "Stomach"],
            ans: "Pancreas"
        },
        {
            q: "What kind of symbiotic relationship benefits one organism while hurting the other?",
            options: ["Mutualism", "Commensalism", "Parasitism", "Predation"],
            ans: "Parasitism"
        },
        {
            q: "Which part of the brain controls balance and coordination?",
            options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
            ans: "Cerebellum"
        },
        {
            q: "What type of tissue connects bones to other bones?",
            options: ["Tendon", "Ligament", "Cartilage", "Muscle"],
            ans: "Ligament"
        },
        {
            q: "What is the primary function of white blood cells?",
            options: ["Carry oxygen", "Clot blood", "Fight infections", "Transport nutrients"],
            ans: "Fight infections"
        },
        {
            q: "In which part of the digestive system does most nutrient absorption occur?",
            options: ["Stomach", "Small Intestine", "Large Intestine", "Esophagus"],
            ans: "Small Intestine"
        },
        {
            q: "What is the basic functional unit of the nervous system?",
            options: ["Nephron", "Neuron", "Alveoli", "Synapse"],
            ans: "Neuron"
        },
        {
            q: "Which chamber of the human heart pumps blood out to the rest of the body?",
            options: ["Right Atrium", "Left Atrium", "Right Ventricle", "Left Ventricle"],
            ans: "Left Ventricle"
        },
        {
            q: "What process converts glucose into cellular energy (ATP)?",
            options: ["Photosynthesis", "Cellular Respiration", "Fermentation", "Osmosis"],
            ans: "Cellular Respiration"
        },
        {
            q: "What category of animals lacks a backbone?",
            options: ["Vertebrates", "Invertebrates", "Mammals", "Amphibians"],
            ans: "Invertebrates"
        }
    ],
    Geography: [
        {
            q: "Which is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            ans: "Pacific Ocean"
        },
        {
            q: "What is the capital city of France?",
            options: ["Marseille", "Lyon", "Paris", "Nice"],
            ans: "Paris"
        },
        {
            q: "Which continent has the most countries?",
            options: ["Asia", "Africa", "Europe", "South America"],
            ans: "Africa"
        },
        {
            q: "What is the largest desert in the world?",
            options: ["Sahara Desert", "Gobi Desert", "Antarctic Desert", "Kalahari Desert"],
            ans: "Antarctic Desert"
        },
        {
            q: "Which imaginary line divides the Earth into Northern and Southern hemispheres?",
            options: ["Prime Meridian", "Equator", "Tropic of Cancer", "Tropic of Capricorn"],
            ans: "Equator"
        },
        {
            q: "What is the highest mountain peak above sea level in the world?",
            options: ["Mount Kilimanjaro", "K2", "Mount Everest", "Mount Denali"],
            ans: "Mount Everest"
        },
        {
            q: "Which country has the longest coastline in the world?",
            options: ["Russia", "Australia", "Canada", "United States"],
            ans: "Canada"
        },
        {
            q: "What is the capital city of Brazil?",
            options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
            ans: "Brasília"
        },
        {
            q: "Which sea lies between Africa and Europe?",
            options: ["Red Sea", "Caribbean Sea", "Mediterranean Sea", "Black Sea"],
            ans: "Mediterranean Sea"
        },
        {
            q: "What is the smallest continent by land area?",
            options: ["Europe", "Antarctica", "Australia", "South America"],
            ans: "Australia"
        },
        {
            q: "Which river flows through Cairo, Egypt?",
            options: ["Amazon", "Nile", "Congo", "Niger"],
            ans: "Nile"
        },
        {
            q: "In which country are the Pyramids of Giza located?",
            options: ["Sudan", "Jordan", "Egypt", "Iraq"],
            ans: "Egypt"
        },
        {
            q: "What mountain range separates Italy from the rest of mainland Europe?",
            options: ["Pyrenees", "Alps", "Apennines", "Carpathians"],
            ans: "Alps"
        },
        {
            q: "Which ocean lies between Africa, Australia, and Asia?",
            options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Southern Ocean"],
            ans: "Indian Ocean"
        },
        {
            q: "What is the capital city of Canada?",
            options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
            ans: "Ottawa"
        },
        {
            q: "Which country contains the largest portion of the Amazon Rainforest?",
            options: ["Colombia", "Peru", "Brazil", "Venezuela"],
            ans: "Brazil"
        },
        {
            q: "What type of landform is completely surrounded by water?",
            options: ["Peninsula", "Isthmus", "Island", "Cape"],
            ans: "Island"
        },
        {
            q: "Which US state is the largest by land area?",
            options: ["Texas", "California", "Alaska", "Montana"],
            ans: "Alaska"
        },
        {
            q: "What line of longitude is designated as 0 degrees?",
            options: ["Equator", "Prime Meridian", "International Date Line", "Tropic of Cancer"],
            ans: "Prime Meridian"
        },
        {
            q: "Which European country is shaped like a boot?",
            options: ["Spain", "Greece", "Portugal", "Italy"],
            ans: "Italy"
        }
    ],
    Physics: [
        {
            q: "What is the SI unit of force?",
            options: ["Joule", "Watt", "Pascal", "Newton"],
            ans: "Newton"
        },
        {
            q: "What is the speed of light in a vacuum approximately?",
            options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"],
            ans: "300,000 km/s"
        },
        {
            q: "Which law states that for every action, there is an equal and opposite reaction?",
            options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravity"],
            ans: "Newton's Third Law"
        },
        {
            q: "What type of energy is stored in an object due to its position?",
            options: ["Kinetic Energy", "Potential Energy", "Thermal Energy", "Chemical Energy"],
            ans: "Potential Energy"
        },
        {
            q: "Which component limits or regulates the flow of electrical current in a circuit?",
            options: ["Capacitor", "Resistor", "Inductor", "Diode"],
            ans: "Resistor"
        },
        {
            q: "What is the acceleration due to gravity on Earth's surface approximately?",
            options: ["5.8 m/s²", "9.8 m/s²", "12.4 m/s²", "15.0 m/s²"],
            ans: "9.8 m/s²"
        },
        {
            q: "What unit is used to measure electrical resistance?",
            options: ["Volt", "Ampere", "Ohm", "Watt"],
            ans: "Ohm"
        },
        {
            q: "What is the form of energy associated with motion?",
            options: ["Potential Energy", "Kinetic Energy", "Nuclear Energy", "Chemical Energy"],
            ans: "Kinetic Energy"
        },
        {
            q: "Which subatomic particle carries a positive charge?",
            options: ["Electron", "Neutron", "Proton", "Photon"],
            ans: "Proton"
        },
        {
            q: "What law states that energy cannot be created or destroyed, only transformed?",
            options: ["Law of Conservation of Energy", "Law of Universal Gravitation", "Hooke's Law", "Ohm's Law"],
            ans: "Law of Conservation of Energy"
        },
        {
            q: "What type of mirror curves inward like the inside of a bowl?",
            options: ["Convex", "Concave", "Flat", "Plane"],
            ans: "Concave"
        },
        {
            q: "What unit measures electrical current?",
            options: ["Volt", "Watt", "Ampere", "Joule"],
            ans: "Ampere"
        },
        {
            q: "Which wave property determines the pitch of a sound?",
            options: ["Amplitude", "Frequency", "Wavelength", "Speed"],
            ans: "Frequency"
        },
        {
            q: "What is the force that opposes motion between two surfaces in contact?",
            options: ["Gravity", "Inertia", "Friction", "Tension"],
            ans: "Friction"
        },
        {
            q: "What unit measures work and energy in the SI system?",
            options: ["Watt", "Joule", "Newton", "Pascal"],
            ans: "Joule"
        },
        {
            q: "Which instrument is used to measure electric voltage?",
            options: ["Ammeter", "Voltmeter", "Barometer", "Ohmmeter"],
            ans: "Voltmeter"
        },
        {
            q: "What state of matter has a fixed volume but no fixed shape?",
            options: ["Solid", "Liquid", "Gas", "Plasma"],
            ans: "Liquid"
        },
        {
            q: "What happens to the density of water as it freezes into ice?",
            options: ["It increases", "It decreases", "It stays the same", "It doubles"],
            ans: "It decreases"
        },
        {
            q: "What type of lens causes light rays to converge to a single focal point?",
            options: ["Convex lens", "Concave lens", "Flat lens", "Diverging lens"],
            ans: "Convex lens"
        },
        {
            q: "What property of an object measures its resistance to a change in its state of motion?",
            options: ["Velocity", "Weight", "Inertia", "Momentum"],
            ans: "Inertia"
        }
    ],
    QuantumPhysics: [
        {
            q: "What is the basic particle or packet of light energy called?",
            options: ["Proton", "Photon", "Electron", "Neutron"],
            ans: "Photon"
        },
        {
            q: "What is quantum mechanics primarily the study of?",
            options: ["Massive stars", "Subatomic particles and tiny scales", "Ocean currents", "Sound waves in air"],
            ans: "Subatomic particles and tiny scales"
        },
        {
            q: "Which famous thought experiment involves a cat that is both alive and dead until observed?",
            options: ["Einstein's Elevator", "Schrödinger's Cat", "Maxwell's Demon", "Newton's Apple"],
            ans: "Schrödinger's Cat"
        },
        {
            q: "What quantum phenomenon describes two particles becoming connected so that measuring one instantly affects the other?",
            options: ["Superposition", "Quantum Entanglement", "Quantum Tunneling", "Wave Interference"],
            ans: "Quantum Entanglement"
        },
        {
            q: "What does quantum 'superposition' mean?",
            options: ["A particle moving faster than light", "A particle existing in multiple states at once until measured", "Two particles combining into one", "A particle losing all its energy"],
            ans: "A particle existing in multiple states at once until measured"
        },
        {
            q: "Who is considered the father of quantum theory for introducing the idea of quanta in 1900?",
            options: ["Albert Einstein", "Max Planck", "Niels Bohr", "Werner Heisenberg"],
            ans: "Max Planck"
        },
        {
            q: "What principle states that you cannot simultaneously measure both the exact position and momentum of a particle?",
            options: ["Pauli Exclusion Principle", "Heisenberg Uncertainty Principle", "Planck's Law", "Bohr Model"],
            ans: "Heisenberg Uncertainty Principle"
        },
        {
            q: "What concept states that light and matter can act as both waves and particles?",
            options: ["Wave-Particle Duality", "Double-Refraction", "Quantum Decoherence", "Particle Acceleration"],
            ans: "Wave-Particle Duality"
        },
        {
            q: "What is the minimum discrete unit or 'packet' of energy called in physics?",
            options: ["Quark", "Quantum", "Atom", "Molecule"],
            ans: "Quantum"
        },
        {
            q: "Which famous experiment demonstrated that light acts as both waves and particles?",
            options: ["Michelson-Morley Experiment", "Double-Slit Experiment", "Kite Experiment", "Oil Drop Experiment"],
            ans: "Double-Slit Experiment"
        },
        {
            q: "What happens to a quantum wave function when an observation or measurement is made?",
            options: ["It explodes", "It expands infinitely", "It collapses to a single outcome", "It splits into light"],
            ans: "It collapses to a single outcome"
        },
        {
            q: "What phenomenon allows a quantum particle to pass through a barrier it normally shouldn't cross?",
            options: ["Quantum Tunneling", "Quantum Leap", "Quantum Spanning", "Quantum Reflection"],
            ans: "Quantum Tunneling"
        },
        {
            q: "What is the basic unit of information in a quantum computer called?",
            options: ["Bit", "Byte", "Qubit", "Pixel"],
            ans: "Qubit"
        },
        {
            q: "Which fundamental particle carries a negative charge in an atom?",
            options: ["Proton", "Electron", "Neutron", "Gluon"],
            ans: "Electron"
        },
        {
            q: "Who developed the model of the atom where electrons occupy fixed energy levels?",
            options: ["Isaac Newton", "Niels Bohr", "Galileo Galilei", "Ernest Rutherford"],
            ans: "Niels Bohr"
        },
        {
            q: "What fundamental particles make up protons and neutrons?",
            options: ["Photons", "Quarks", "Leptons", "Bosons"],
            ans: "Quarks"
        },
        {
            q: "What did Albert Einstein win his 1921 Nobel Prize for explaining?",
            options: ["Theory of Relativity", "Photoelectric Effect", "Black Hole Formation", "Gravitational Waves"],
            ans: "Photoelectric Effect"
        },
        {
            q: "What constant connects the energy of a photon to its frequency ($E = hf$)?",
            options: ["Gravitational Constant", "Planck's Constant", "Speed of Light", "Avogadro's Constant"],
            ans: "Planck's Constant"
        },
        {
            q: "What principle states that two identical electrons cannot occupy the exact same quantum state simultaneously?",
            options: ["Pauli Exclusion Principle", "Heisenberg Principle", "Planck Principle", "Hubble Principle"],
            ans: "Pauli Exclusion Principle"
        },
        {
            q: "What fundamental force holds the nucleus of an atom together?",
            options: ["Gravity", "Electromagnetic Force", "Strong Nuclear Force", "Weak Nuclear Force"],
            ans: "Strong Nuclear Force"
        }
    ]
};

let questions = [];

const questionElement = document.querySelector('.questions');
const nextBtn = document.querySelector('.nxt');
const prevBtn = document.querySelector('.prev');
const opt1 = document.querySelector('.ans1');
const opt2 = document.querySelector('.ans2');
const opt3 = document.querySelector('.ans3');
const opt4 = document.querySelector('.ans4');
const optInputs = document.querySelectorAll('.opt input');
const optAns = document.querySelector('.optAns');
const submitBtn = document.querySelector('.submit_btn');
const pCount = document.querySelector('.pCount');
const retryBtn = document.querySelector('.retryBtn');
const scoreModal = document.querySelector('.scoreModal');
const closeModal = document.querySelector('.closeModal');
const scoreTxt = document.querySelector('.scoreTxt');
const pBar = document.querySelector('.p_bar');
const pBar2 = document.querySelector('.p_bar2');
const navGrid = document.querySelector('.nav_grid');
const editBtn = document.querySelector('.editBtn');
const editModal = document.querySelector('.editModal');
const closeEdit = document.querySelector('.close-btn');
const editForm = document.querySelector('.edit_form');
const countDown = document.querySelector('.countDown');
const textReq = document.querySelector('.textReq');
const mainQuiz = document.querySelector('.main_quiz');
const quizStart = document.querySelector('.quizStart');
const questionsNav = document.querySelector('.questions_nav');
const timeCont = document.querySelector('.time2');
const timeCont1 = document.querySelector('.time');
const startQuizBtn = document.querySelector('.startQuizBtn');
const quitBtn = document.querySelector('.quit_btn');
const pointCount = document.querySelector('.points .point_count');
const pointCount1 = document.querySelector('.pg_card .point_count');
const pointTxt = document.querySelector('.pointTxt');
const continueBtn = document.querySelector('.continueBtn');
const hintBtn = document.querySelector('.hint_btn');
const editMinute = document.querySelector('.editMinute');
const editSecond = document.querySelector('.editSecond');
const homeNav = document.querySelector('.home');
const progressNav = document.querySelector('.progress_nav');
const settingsNav = document.querySelector('.settings');
const subjectSelect = document.querySelector('.quizStart .subjectSelect');
const subjectName = document.querySelector('.sName');
const progressSection = document.querySelector('.progressSection');
const settingsSection = document.querySelector('.settingsSection');
const pgRing = document.getElementById('pgRing');
const pgAccuracy = document.getElementById('pgAccuracy');
const pgAnswered = document.getElementById('pgAnswered');
const pgCorrect = document.getElementById('pgCorrect');
const pgStreak = document.getElementById('pgStreak');
const pgLevel = document.getElementById('pgLevel');
const pgXpText = document.getElementById('pgXpText');
const pgXpFill = document.getElementById('pgXpFill');
const pgReset = document.getElementById('pgReset');
const defaultTimeSelect = document.getElementById('defaultTimeSelect');
const autoNextToggle = document.getElementById('autoNextToggle');
const timerWarningToggle = document.getElementById('timerWarningToggle');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');
const toast = document.querySelector('.toast');

function readStored(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (err) {
        return null;
    }
}

function writeStored(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        return;
    }
}

function toCount(value) {
    const number = Number(value);
    return Number.isFinite(number) && number >= 0 ? number : 0;
}

const savedStats = readStored('quizStats') || {};
let quizStats = {
    answered: toCount(savedStats.answered),
    correct: toCount(savedStats.correct),
    streak: toCount(savedStats.streak),
    bestStreak: toCount(savedStats.bestStreak),
    xp: toCount(savedStats.xp)
};
const savedSettings = readStored('quizSettings') || {};
const quizSettings = {
    defaultTime: Number(savedSettings.defaultTime) >= 15 ? Number(savedSettings.defaultTime) : 300,
    autoNext: savedSettings.autoNext === true,
    timerWarning: savedSettings.timerWarning !== false
};
const coinNumber = {
    coinLeft: toCount(readStored('totalCoins'))
};

let currentQuestionIndex = 0;
let answerdOpt = [];
let scoredIndexes = new Set();
let hintedQuestions = {};
let timer;
let toastTimer;
const timeList = { tLeft: quizSettings.defaultTime };
let quizFinished = false;

function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

function updatePointDisplays() {
    pointCount.textContent = coinNumber.coinLeft;
    pointCount1.textContent = coinNumber.coinLeft;
}

function countAnswered() {
    return answerdOpt.filter(Boolean).length;
}

function setSubmitLabel() {
    submitBtn.textContent = quizFinished ? 'Results' : 'Submit';
}

function updatePbar() {
    const answeredCount = countAnswered();
    pCount.textContent = `${answeredCount} / ${questions.length}`;
    pBar.style.width = `${(answeredCount / questions.length) * 100}%`;
}

function checkNavClickable() {
    const atStart = currentQuestionIndex <= 0;
    const atEnd = currentQuestionIndex >= questions.length - 1;
    prevBtn.classList.toggle('disabled', atStart);
    nextBtn.classList.toggle('disabled', atEnd);
    prevBtn.disabled = atStart;
    nextBtn.disabled = atEnd;
}

function loadQuestions(QuestionIndex) {
    const currentQuestion = questions[QuestionIndex];
    questionElement.textContent = currentQuestion.q;
    subjectName.textContent = currentQuestion.subject;
    updatePbar();
    checkNavClickable();
}

function loadOptions(QuestionIndex) {
    const option = questions[QuestionIndex];
    opt1.textContent = option.options[0];
    opt2.textContent = option.options[1];
    opt3.textContent = option.options[2];
    opt4.textContent = option.options[3];
}

function resetOptions() {
    optInputs.forEach(input => {
        input.checked = false;
    });
    const removedTexts = hintedQuestions[currentQuestionIndex] || [];
    document.querySelectorAll('.opt').forEach(opt => {
        const text = opt.querySelector('.ans').textContent.trim();
        opt.style.visibility = removedTexts.includes(text) ? 'hidden' : 'visible';
    });
}

function checkAnswers() {
    const selectedInput = document.querySelector('.opt input:checked');
    if (!selectedInput) return;

    const selectedAnswer = selectedInput.closest('.opt').querySelector('.ans').textContent.trim();
    const currentQuestion = questions[currentQuestionIndex];

    answerdOpt[currentQuestionIndex] = {
        question: currentQuestion.q,
        answerSelect: selectedAnswer,
        correctAnswer: currentQuestion.ans,
        isCorrect: selectedAnswer === currentQuestion.ans
    };
    updatePbar();
}

function restoreAns() {
    const savedAns = answerdOpt[currentQuestionIndex];
    if (!savedAns) return;

    optInputs.forEach(input => {
        const answerText = input.closest('.opt').querySelector('.ans').textContent.trim();
        if (answerText === savedAns.answerSelect) {
            input.checked = true;
        }
    });
}

function clearAnswerMarks() {
    document.querySelectorAll('.opt').forEach(opt => {
        opt.classList.remove('correct', 'wrong');
    });
    optAns.textContent = '';
    optAns.classList.remove('showAns');
    optAns.classList.add('removeAns');
}

function showAnswers() {
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;

    const savedAnswer = answerdOpt[currentQuestionIndex];

    document.querySelectorAll('.opt').forEach(opt => {
        const answerText = opt.querySelector('.ans').textContent.trim();

        opt.classList.remove('correct', 'wrong');
        if (answerText === currentQuestion.ans) {
            opt.classList.add('correct');
        }
        if (savedAnswer &&
            answerText === savedAnswer.answerSelect &&
            answerText !== currentQuestion.ans) {
            opt.classList.add('wrong');
        }
    });

    optAns.textContent = savedAnswer
        ? `Answer: ${currentQuestion.ans} `
        : `Answer: ${currentQuestion.ans} ........Unanswered!!`;

    optAns.classList.add('showAns');
    optAns.classList.remove('removeAns');
}

function goToQuestion(index) {
    currentQuestionIndex = index;
    loadQuestions(index);
    loadOptions(index);
    resetOptions();
    restoreAns();
    qNav();
    if (quizFinished || scoredIndexes.has(index)) {
        showAnswers();
    } else {
        clearAnswerMarks();
    }
}

function resetQuiz() {
    quizFinished = false;
    answerdOpt = [];
    scoredIndexes = new Set();
    hintedQuestions = {};
    scoreModal.classList.remove('showModal');
    continueBtn.classList.add('hidden');
    setSubmitLabel();
    goToQuestion(0);
}

function qNav() {
    navGrid.innerHTML = '';
    questions.forEach((question, index) => {
        const qnavBtn = document.createElement('button');
        const savedAnswer = answerdOpt[index];

        qnavBtn.type = 'button';
        qnavBtn.textContent = index + 1;
        qnavBtn.setAttribute('aria-label', `Question ${index + 1}`);
        qnavBtn.classList.add('nav_btn_item');
        navGrid.appendChild(qnavBtn);

        if (index === currentQuestionIndex) {
            qnavBtn.classList.add('current_nav');
            qnavBtn.setAttribute('aria-current', 'true');
        }

        if (quizFinished) {
            if (!savedAnswer) {
                qnavBtn.classList.add('unanswered');
            } else if (savedAnswer.isCorrect) {
                qnavBtn.classList.add('correct');
            } else {
                qnavBtn.classList.add('wrong');
            }
        } else if (savedAnswer) {
            qnavBtn.classList.add('answered');
        }

        qnavBtn.onclick = function () {
            goToQuestion(index);
        };
    });
}

function clearTimeError() {
    textReq.classList.add('hiddenModal');
    textReq.classList.remove('displayTR');
}

function closeEditModal() {
    editModal.classList.remove('showEditModal');
    clearTimeError();
}

function openScoreModal() {
    scoreModal.classList.add('showModal');
    scoreModal.focus();
}

function closeScoreModal() {
    scoreModal.classList.remove('showModal');
}

function editFunc() {
    closeEdit.onclick = closeEditModal;

    editBtn.onclick = function () {
        editModal.classList.add('showEditModal');
        clearTimeError();
        editMinute.selectedIndex = 0;
        editSecond.selectedIndex = 0;
    };

    editForm.onsubmit = function (e) {
        e.preventDefault();

        const totalSeconds = (Number(editMinute.value) || 0) * 60 + (Number(editSecond.value) || 0);

        if (totalSeconds > 0) {
            timeList.tLeft = totalSeconds;
            closeEditModal();
            countDown.textContent = formatTime(totalSeconds);
        } else {
            textReq.classList.remove('hiddenModal');
            textReq.classList.add('displayTR');
        }
    };
}

function createPlaceholders() {
    questionsNav.classList.add('hidden');
    timeCont.classList.add('hidden');
    submitBtn.classList.add('hidden');
    quitBtn.classList.add('hidden');
}

function restorePlaceholders() {
    questionsNav.classList.remove('hidden');
    timeCont.classList.remove('hidden');
    submitBtn.classList.remove('hidden');
    quitBtn.classList.remove('hidden');
}

function lockNav() {
    homeNav.classList.add('disabled');
    progressNav.classList.add('disabled');
    settingsNav.classList.add('disabled');
}

function unlockNav() {
    homeNav.classList.remove('disabled');
    progressNav.classList.remove('disabled');
    settingsNav.classList.remove('disabled');
}

function quitQuiz() {
    clearInterval(timer);
    quizStart.classList.remove('q_hide');
    mainQuiz.classList.add('q_hide');
    editBtn.classList.remove('hidden');

    if (Number(timeList.tLeft) <= 0) {
        timeList.tLeft = quizSettings.defaultTime;
    }
    countDown.textContent = formatTime(Number(timeList.tLeft));
    createPlaceholders();
}

function exitQuiz() {
    unListenForKeys();
    resetQuiz();
    quitQuiz();
    unlockNav();
    hintBtn.classList.add('hidden');
    countDown.classList.remove('timerWarningTxt');
    pBar2.classList.remove('timerWarning');
}

function calculateScores() {
    let score = 0;
    let pointGained = 0;
    let newCorrect = 0;

    answerdOpt.forEach((input, index) => {
        if (!input) return;
        if (input.isCorrect) score++;
        if (scoredIndexes.has(index)) return;

        scoredIndexes.add(index);
        quizStats.answered++;

        if (input.isCorrect) {
            newCorrect++;
            pointGained += 3;
            quizStats.correct++;
            quizStats.streak++;
            quizStats.bestStreak = Math.max(quizStats.bestStreak, quizStats.streak);
        } else {
            quizStats.streak = 0;
        }
    });
    quizStats.xp += newCorrect * 10;
    writeStored('quizStats', quizStats);
    coinNumber.coinLeft += pointGained;
    writeStored('totalCoins', coinNumber.coinLeft);
    const percentage = (score / questions.length) * 100;

    scoreTxt.textContent = `Score: ${score} / ${questions.length} (${percentage.toFixed(0)}%)`;
    pointTxt.textContent = `+${pointGained}`;

    openScoreModal();
    updatePointDisplays();
}

function finishQuiz(timeUp = false) {
    if (quizFinished) return;
    checkAnswers();
    const answeredCount = countAnswered();
    quizFinished = true;
    clearInterval(timer);
    hintBtn.classList.add('hidden');
    unlockNav();
    calculateScores();
    showAnswers();
    qNav();
    setSubmitLabel();
    continueBtn.classList.toggle('hidden', !(timeUp && answeredCount < questions.length));
}

function startTimer(totalSeconds) {
    clearInterval(timer);
    const endTime = Date.now() + totalSeconds * 1000;
    pBar2.classList.remove('timerWarning');
    countDown.classList.remove('timerWarningTxt');
    countDown.textContent = formatTime(totalSeconds);
    pBar2.style.width = '100%';

    timer = setInterval(() => {
        const remainingSeconds = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));

        countDown.textContent = formatTime(remainingSeconds);
        pBar2.style.width = `${(remainingSeconds / totalSeconds) * 100}%`;

        if (remainingSeconds <= 5 && quizSettings.timerWarning) {
            pBar2.classList.add('timerWarning');
            countDown.classList.add('timerWarningTxt');
        }

        if (remainingSeconds <= 0) {
            finishQuiz(true);
        }
    }, 250);
}

function shuffle(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function loadSubjects() {
    questions = [];
    Array.from(subjectSelect.selectedOptions).forEach(option => {
        const subjectQuestions = subQs[option.value];
        if (!subjectQuestions) return;
        subjectQuestions.forEach(item => {
            questions.push({
                q: item.q,
                options: shuffle(item.options),
                ans: item.ans,
                subject: option.textContent.trim()
            });
        });
    });
}

function startQuiz() {
    loadSubjects();

    if (questions.length === 0) {
        showToast('Please select at least one subject.');
        return;
    }
    if (Number(timeList.tLeft) <= 0) {
        timeList.tLeft = quizSettings.defaultTime;
    }

    lockNav();
    quizStart.classList.add('q_hide');
    mainQuiz.classList.remove('q_hide');
    editBtn.classList.add('hidden');

    resetQuiz();
    restorePlaceholders();
    hintBtn.classList.remove('hidden');
    startTimer(Number(timeList.tLeft));
    listenForKeys();
}

function showPage(nav, section) {
    if (quizFinished) exitQuiz();

    [homeNav, progressNav, settingsNav].forEach(item => {
        item.classList.toggle('activeNav', item === nav);
    });
    [quizStart, progressSection, settingsSection].forEach(item => {
        item.classList.toggle('q_hide', item !== section);
    });
    mainQuiz.classList.add('q_hide');
    timeCont1.classList.toggle('hidden', section !== quizStart);
    navGrid.classList.toggle('hidden', section !== quizStart);
    createPlaceholders();
    unListenForKeys();
}

function progressPage() {
    showPage(progressNav, progressSection);
    showPr();
}

function homePage() {
    showPage(homeNav, quizStart);
}

function settingsPage() {
    showPage(settingsNav, settingsSection);
}

function countUp(el, to, duration = 600) {
    const start = performance.now();
    function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(to * p);
        if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

function showPr() {
    const pct = quizStats.answered ? Math.round((quizStats.correct / quizStats.answered) * 100) : 0;
    const level = Math.floor(quizStats.xp / 100) + 1;
    const xpInLevel = quizStats.xp % 100;

    pgRing.style.setProperty('--pct', pct);
    pgAccuracy.textContent = pct + '%';
    pgLevel.textContent = level;
    pgXpText.textContent = xpInLevel + ' / 100 XP';
    pgXpFill.style.width = xpInLevel + '%';

    countUp(pgAnswered, quizStats.answered);
    countUp(pgCorrect, quizStats.correct);
    countUp(pgStreak, quizStats.bestStreak);
    countUp(pointCount, coinNumber.coinLeft);
    countUp(pointCount1, coinNumber.coinLeft);
}

function nextQtn() {
    if (currentQuestionIndex < questions.length - 1) {
        goToQuestion(currentQuestionIndex + 1);
    }
}

function prevQtn() {
    if (currentQuestionIndex > 0) {
        goToQuestion(currentQuestionIndex - 1);
    }
}

function listenForKey(e) {
    if (scoreModal.classList.contains('showModal')) return;

    if (e.key === 'ArrowLeft') {
        prevQtn();
    }
    if (e.key === 'ArrowRight') {
        nextQtn();
    }
}

function listenForKeys() {
    document.addEventListener('keydown', listenForKey);
}

function unListenForKeys() {
    document.removeEventListener('keydown', listenForKey);
}

function subtractPoints(amount, purpose) {
    if (coinNumber.coinLeft < amount) {
        showToast(`Not enough points! You need ${amount} points to ${purpose}.`);
        return false;
    }
    coinNumber.coinLeft -= amount;
    writeStored('totalCoins', coinNumber.coinLeft);
    updatePointDisplays();
    pointCount.classList.add('damage-shake');
    setTimeout(() => {
        pointCount.classList.remove('damage-shake');
    }, 300);
    return true;
}

function useHint() {
    if (quizFinished) return;

    if (scoredIndexes.has(currentQuestionIndex)) {
        showToast('This question is already scored.');
        return;
    }

    if (hintedQuestions[currentQuestionIndex]) {
        showToast('Hint already used for this question!');
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const savedAnswer = answerdOpt[currentQuestionIndex];
    const optContainers = Array.from(document.querySelectorAll('.opt'));

    const incorrectOptions = optContainers.filter(opt => {
        const text = opt.querySelector('.ans').textContent.trim();
        const isPicked = savedAnswer && text === savedAnswer.answerSelect;
        return text !== currentQuestion.ans && !isPicked;
    });

    if (incorrectOptions.length < 2) {
        showToast('No options left to remove for this question!');
        return;
    }

    if (!subtractPoints(5, 'use a 50/50 hint')) return;

    incorrectOptions.sort(() => Math.random() - 0.5);

    const removed = incorrectOptions.slice(0, 2);
    removed.forEach(opt => {
        opt.style.visibility = 'hidden';
    });
    hintedQuestions[currentQuestionIndex] = removed.map(opt => opt.querySelector('.ans').textContent.trim());
}

function continueQuiz() {
    if (!subtractPoints(10, 'continue the quiz')) return;
    quizFinished = false;
    lockNav();
    hintBtn.classList.remove('hidden');
    continueBtn.classList.add('hidden');
    closeScoreModal();
    setSubmitLabel();
    goToQuestion(currentQuestionIndex);
    startTimer(60);
}

defaultTimeSelect.value = quizSettings.defaultTime;
autoNextToggle.checked = quizSettings.autoNext;
timerWarningToggle.checked = quizSettings.timerWarning;
countDown.textContent = formatTime(quizSettings.defaultTime);
homeNav.classList.add('activeNav');
updatePointDisplays();

pgReset.addEventListener('click', () => {
    if (!confirm('Reset your stats and level? Your points will be kept.')) return;
    quizStats = {
        answered: 0,
        correct: 0,
        streak: 0,
        bestStreak: 0,
        xp: 0
    };
    writeStored('quizStats', quizStats);
    showPr();
});

document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    closeScoreModal();
    closeEditModal();
});

closeModal.onclick = closeScoreModal;
continueBtn.onclick = continueQuiz;
hintBtn.onclick = useHint;
startQuizBtn.onclick = startQuiz;
progressNav.onclick = progressPage;
homeNav.onclick = homePage;
settingsNav.onclick = settingsPage;
nextBtn.onclick = nextQtn;
prevBtn.onclick = prevQtn;

retryBtn.onclick = function () {
    clearInterval(timer);
    resetQuiz();
    lockNav();
    hintBtn.classList.remove('hidden');
    startTimer(Number(timeList.tLeft));
};

quitBtn.onclick = function () {
    if (!quizFinished && countAnswered() > 0 && !confirm('Quit this quiz? Your answers will not be saved.')) return;
    exitQuiz();
};

submitBtn.onclick = function () {
    if (quizFinished) {
        openScoreModal();
        return;
    }
    const unanswered = questions.length - countAnswered();
    if (unanswered > 0 && !confirm(`You have ${unanswered} unanswered question${unanswered === 1 ? '' : 's'}. Submit anyway?`)) return;
    finishQuiz();
};

optInputs.forEach(input => {
    input.closest('.opt').onclick = function (e) {
        if (quizFinished || scoredIndexes.has(currentQuestionIndex)) {
            e.preventDefault();
            return;
        }

        input.checked = true;
        checkAnswers();
        qNav();
        if (quizSettings.autoNext) {
            nextQtn();
        }
    };
});

saveSettingsBtn.onclick = function () {
    quizSettings.defaultTime = Number(defaultTimeSelect.value) || 300;
    quizSettings.autoNext = autoNextToggle.checked;
    quizSettings.timerWarning = timerWarningToggle.checked;

    writeStored('quizSettings', quizSettings);

    timeList.tLeft = quizSettings.defaultTime;
    countDown.textContent = formatTime(quizSettings.defaultTime);

    showToast('Settings saved successfully!');
};

createPlaceholders();
editFunc();
