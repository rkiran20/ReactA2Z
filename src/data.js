export const randomWords = [
    "apple", "bread", "chair", "dream", "eagle", "frame", "grape", "heart", "igloo", "joker",
    "knife", "lemon", "money", "night", "ocean", "peach", "queen", "river", "sauce", "table",
    "unity", "voice", "water", "xylos", "yield", "zebra", "arise", "brain", "cloud", "dance",
    "earth", "field", "ghost", "house", "input", "juice", "kneel", "laugh", "mount", "north",
    "other", "place", "quiet", "right", "share", "thing", "value", "witch", "world", "angry",
    "begin", "close", "drive", "eager", "fresh", "great", "happy", "issue", "jumbo", "known",
    "light", "major", "never", "order", "power", "quick", "reply", "start", "train", "until",
    "worth", "zones", "above", "bring", "clock", "enjoy", "faith", "grass", "ideal", "joint",
    "lucky", "match", "nerve", "phone", "relax", "shock", "tough", "upset", "world", "youth",
    "after", "below", "candy", "draft", "empty", "giant", "image", "jelly", "learn", "magic",
    "offer", "peace", "shine", "think", "urban", "walks", "actor", "black", "depth", "entry",
    "grape", "happy", "known", "march", "opera", "reply", "smart", "trust", "value", "water",
    "yield", "zones", "angle", "brush", "cloth", "earth", "grand", "joker", "knife", "learn",
    "north", "royal", "small", "taste", "under", "watch", "xerox", "amber", "brave", "clear",
    "drink", "frost", "honey", "input", "kneel", "lemon", "night", "quick", "stone", "union",
    "worth", "amber", "brave", "clear", "drink", "entry", "frost", "ghost", "honey", "input",
    "joint", "kneel", "lemon", "money", "night", "ocean", "peach", "quiet", "right", "stone",
    "trust", "union", "voice", "water", "xylos", "yield", "zones", "above", "bring", "clock",
    "depth", "earth", "first", "grand", "house", "image", "joker", "kneel", "learn", "magic",
    "north", "ocean", "quiet", "royal", "small", "taste", "under", "value", "watch", "xerox"
]

export const randomGenerator = (data)=>{
    return(
        data[Math.floor(Math.random()*200)].toUpperCase()
    )
}