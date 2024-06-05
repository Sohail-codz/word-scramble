const words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
    {
        word: "festival",
        hint: "A day or period of celebration"
    },
    {
        word: "desert",
        hint: "A dry, barren area of land"
    },
    {
        word: "diamond",
        hint: "A precious stone of carbon"
    },
    {
        word: "engine",
        hint: "A machine for converting energy"
    },
    {
        word: "globe",
        hint: "A spherical model of Earth"
    },
    {
        word: "harmony",
        hint: "A pleasing combination of sounds"
    },
    {
        word: "iceberg",
        hint: "A large floating mass of ice"
    },
    {
        word: "journal",
        hint: "A daily record of news and events"
    },
    {
        word: "kingdom",
        hint: "A country ruled by a king or queen"
    },
    {
        word: "labyrinth",
        hint: "A complicated irregular network of passages"
    },
    {
        word: "marathon",
        hint: "A long-distance running race"
    },
    {
        word: "nightmare",
        hint: "A frightening or unpleasant dream"
    },
    {
        word: "ocean",
        hint: "A large body of salt water"
    },
    {
        word: "puzzle",
        hint: "A game or problem designed to test ingenuity"
    },
    {
        word: "quarantine",
        hint: "A state of isolation to prevent the spread of disease"
    },
    {
        word: "radiation",
        hint: "The emission of energy as electromagnetic waves"
    },
    {
        word: "symphony",
        hint: "An elaborate musical composition"
    },
    {
        word: "telescope",
        hint: "An instrument for observing distant objects"
    },
    {
        word: "umbrella",
        hint: "A device for protection from rain or sun"
    },
    {
        word: "volcano",
        hint: "A mountain with a crater through which lava erupts"
    },
    {
        word: "wilderness",
        hint: "An uncultivated and uninhabited region"
    },
    {
        word: "xylophone",
        hint: "A musical instrument with wooden bars"
    },
    {
        word: "yacht",
        hint: "A medium-sized sailboat"
    },
    {
        word: "zebra",
        hint: "An African wild horse with black-and-white stripes"
    },
    {
        word: "avalanche",
        hint: "A mass of snow, ice, and rocks falling rapidly"
    },
    {
        word: "bacteria",
        hint: "Microscopic organisms that can cause disease"
    },
    {
        word: "cylinder",
        hint: "A solid geometric figure with straight parallel sides"
    },
    {
        word: "dolphin",
        hint: "A small toothed whale with a beaklike snout"
    },
    {
        word: "eclipse",
        hint: "An event where one celestial body moves into the shadow of another"
    },
    {
        word: "fossil",
        hint: "The remains of a prehistoric organism"
    },
    {
        word: "galaxy",
        hint: "A system of millions or billions of stars"
    },
    {
        word: "horizon",
        hint: "The line where the earth's surface and sky appear to meet"
    },
    {
        word: "island",
        hint: "A piece of land surrounded by water"
    },
    {
        word: "jungle",
        hint: "An area of dense, tangled vegetation"
    },
    {
        word: "kaleidoscope",
        hint: "An instrument with colored glass reflecting patterns"
    },
    {
        word: "lagoon",
        hint: "A stretch of salt water separated from the sea"
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the earth's surface"
    },
    {
        word: "nebula",
        hint: "A cloud of gas and dust in space"
    },
    {
        word: "orchard",
        hint: "A piece of land planted with fruit trees"
    },
    {
        word: "prairie",
        hint: "A large open area of grassland"
    },
    {
        word: "quartz",
        hint: "A hard, crystalline mineral"
    },
    {
        word: "reef",
        hint: "A ridge of jagged rock or coral"
    },
    {
        word: "savannah",
        hint: "A grassy plain in tropical regions"
    },
    {
        word: "tundra",
        hint: "A vast, flat, treeless Arctic region"
    },
    {
        word: "underwater",
        hint: "Located, occurring, or done beneath the surface of the water"
    },
    {
        word: "valley",
        hint: "A low area of land between hills or mountains"
    },
    {
        word: "waterfall",
        hint: "A stream of water falling from a height"
    },
    {
        word: "xerox",
        hint: "A brand name synonymous with photocopying"
    },
    {
        word: "yawning",
        hint: "Involuntarily opening one's mouth wide due to tiredness"
    },
    {
        word: "zephyr",
        hint: "A gentle, mild breeze"
    },
    {
        word: "abyss",
        hint: "A deep or seemingly bottomless chasm"
    },
    {
        word: "balloon",
        hint: "A flexible bag filled with gas or air"
    },
    {
        word: "compass",
        hint: "An instrument for determining direction"
    },
    {
        word: "dungeon",
        hint: "A dark, often underground prison cell"
    },
    {
        word: "echo",
        hint: "A sound or series of sounds caused by the reflection of sound waves"
    },
    {
        word: "furnace",
        hint: "An enclosed structure for intense heat"
    },
    {
        word: "geyser",
        hint: "A hot spring that intermittently sends up fountain-like jets of water"
    },
    {
        word: "harbor",
        hint: "A sheltered place along a coast where ships dock"
    },
    {
        word: "igloo",
        hint: "A dome-shaped Eskimo house"
    },
    {
        word: "jade",
        hint: "A hard, typically green stone used for ornaments and implements"
    },
    {
        word: "kiosk",
        hint: "A small open-fronted hut or cubicle"
    },
    {
        word: "lagoon",
        hint: "A shallow body of water separated from a larger sea"
    },
    {
        word: "meadow",
        hint: "A piece of grassland"
    },
    {
        word: "nest",
        hint: "A structure built by birds for laying eggs and sheltering their young"
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found"
    },
    {
        word: "plaza",
        hint: "A public square, marketplace, or similar open space in a built-up area"
    },
    {
        word: "quill",
        hint: "A pen made from a large feather"
    },
    {
        word: "ridge",
        hint: "A long, narrow hilltop, mountain range, or watershed"
    },
    {
        word: "safari",
        hint: "An expedition to observe or hunt animals in their natural habitat"
    },
    {
        word: "terrain",
        hint: "A stretch of land, especially with regard to its physical features"
    },
    {
        word: "utopia",
        hint: "An imagined place where everything is perfect"
    },
    {
        word: "vortex",
        hint: "A mass of whirling fluid or air, especially a whirlpool or whirlwind"
    },
    {
        word: "wasteland",
        hint: "An unused area of land that has become barren"
    },
    {
        word: "xenon",
        hint: "A heavy, colorless gas used in some lamps and tubes"
    },
    {
        word: "yarn",
        hint: "Spun thread used for knitting, weaving, or sewing"
    },
    {
        word: "zenith",
        hint: "The highest point reached by a celestial or other object"
    }
]
