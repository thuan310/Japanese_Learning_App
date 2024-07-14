export const writingCourses = [
    {
        id: 1,
        title: "あ",
        name: "Hiragana",
        description: "This chapter serves as a foundational introduction to Hiragana, the primary phonetic script used in the Japanese language. Hiragana is essential for reading and writing in Japanese and is used in conjunction with Katakana and Kanji.",
        images: require('../images/japan.png'),
        chapter: [
            {
                title: "あ",
                content: [
                    {
                        title: "あ",
                        description: `To remember this kana, find the capital A inside of it. This "A" will tell you that this kana is also "a" aka あ. There is another similar kana, お, but that one doesn't have an 'A' in it, which is how you can differentiate them.`,
                        image: require('../images/あ.png'),
                        sound: require('../sound/あ.mp3')
                    },
                    {
                        title: "い",
                        description: `To remember this kana, just think of a couple of eels hanging out. They're upright because they're trying to mimic the letter "i" which also stands upright and also happens to be the way you spell out this character in romaji.`,
                        image: require('../images/い.png'),
                        sound: require('../sound/い.mp3')
                    },
                    {
                        title: "う",
                        description: `To remember this kana, notice the U shape right in it! It's sideways but it's there, telling you what this kana is. Be careful, there's another similar hiragana, つ, but that one isn't wearing a hat like U (you) are. Ooh, ahh, what a nifty hat!`,
                        image: require('../images/う.png'),
                        sound: require('../sound/う.mp3')
                    },
                    {
                        title: "え",
                        description: `To remember this kana, think of it like an exotic bird. The feathery thing on its head gives it away that it's exotic and not normal. It also lays exotic eggs, because it's an exotic bird, after all.                        `,
                        image: require('../images/え.png'),
                        sound: require('../sound/え.mp3')
                    },
                    {
                        title: "お",
                        description: `Can you see the letter o in here, two times? This one looks similar to あ, except for its one key difference: there are two letter "o" symbols visible in there. Make sure you use this to differentiate this kana (お) and that similar kana (あ). This is one area of hiragana where a lot of people trip up, but by using this mnemonic you will be able to figure them out every time.`,
                        image: require('../images/お.jpg'),
                        sound: require('../sound/お.mp3')
                    }
                ]
            },
            {
                title: "か",
                content: [
                    {
                        title: "か",
                        description: "ka"
                    },
                    {
                        title: "き",
                        description: "ki"
                    },
                    {
                        title: "く",
                        description: "ku"
                    },
                    {
                        title: "け",
                        description: "ke"
                    },
                    {
                        title: "こ",
                        description: "ko"
                    }
                ]
            },
            {
                title: "さ",
                content: [
                    {
                        title: "さ",
                        description: "sa"
                    },
                    {
                        title: "し",
                        description: "shi"
                    },
                    {
                        title: "す",
                        description: "su"
                    },
                    {
                        title: "せ",
                        description: "se"
                    },
                    {
                        title: "そ",
                        description: "so"
                    }
                ]
            },
            {
                title: "た",
                content: [
                    {
                        title: "た",
                        description: "ta"
                    },
                    {
                        title: "ち",
                        description: "chi"
                    },
                    {
                        title: "つ",
                        description: "tsu"
                    },
                    {
                        title: "て",
                        description: "te"
                    },
                    {
                        title: "と",
                        description: "to"
                    }
                ]
            },
            {
                title: "な",
                content: [
                    {
                        title: "な",
                        description: "na"
                    },
                    {
                        title: "に",
                        description: "ni"
                    },
                    {
                        title: "ぬ",
                        description: "nu"
                    },
                    {
                        title: "ね",
                        description: "ne"
                    },
                    {
                        title: "の",
                        description: "no"
                    }
                ]
            },
        ]
    },

    {
        id:2,
        title: "ア",
        name: "Katakana",
        images: require('../images/japan.png'),
        description:" This chapter serves as a foundational introduction to Katakana, the secondary phonetic script used in the Japanese language. Katakana is essential for reading and writing in Japanese and is used in conjunction with Hiragana and Kanji.",
        chapters:{

        }
    }
]

export const jlptCourses = [
    {
        title:"N5",
        name: "JLPT N5"
    },
    {
        title:"N4",
        name: "JLPT N4"
    },
    {
        title:"N3",
        name: "JLPT N3"
    },
    {
        title:"N2",
        name: "JLPT N2"
    },
    {
        title:"N1",
        name: "JLPT N1"
    },
]
//export default {writingCourses, jlptCourses}