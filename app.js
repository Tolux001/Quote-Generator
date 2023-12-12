const quote = document.querySelector('.quote');
const btn = document.getElementById('quote-btn');
const author = document.getElementById('author');
//Fifty Codes
const quoteArr = [
    {
        quote: "When you change your thoughts, remember to also change your world",
        person: "Norman Vincent Peale"
    },
    {
        quote: "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out",
        person: "Eleanor Roosevelt"
    },
    {
        quote: "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
        person: "Mark Twain"
    },
    {
        quote: "Learn as if you will live forever, live like you will die tomorrow",
        person: "Mahatma Gandhi"
    },
    {
        quote: "We cannot solve problems with the kind of thinking we employed when we came up with them",
        person: "Albert Einstein"
    },
    {
        quote: "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest",
        person: "Walter Anderson"
    },
    {
        quote: "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.",
        person: "Diane McLaren"
    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts",
        person: "Winston S. Churchill"
    },
    {
        quote: "It is better to fail in originality than to succeed in imitation.",
        person: "Herman Melville"
    },
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        person: "Colin R. Davis"
    },
    {
        quote: "Success usually comes to those who are too busy looking for it.",
        person: "Henry David Thoreau"
    },
    {
        quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
        person: "Dale Carnegie"
    },
    {
        quote: "Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan 'Press On' has solved and always will solve the problems of the human race.",
        person: "Calvin Coolidge"
    },
    {
        quote: "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind",
        person: "Mister Rogers"
    },
    {
        quote: "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.",
        person: "John Wooden"
    },
    {
        quote: "never dreamed about success. I worked for it",
        person: "Estée Lauder"
    },
    {
        quote: "Success is getting what you want, happiness is wanting what you get",
        person: "W. P. King-stellar"
    },
    {
        quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        person: "Winston Churchill"
    },
    {
        quote: "Don't let yesterday take up too much of today.",
        person: "Will Rogers"
    },
    {
        quote: "You learn more from failure than from success. Don’t let it stop you. Failure builds character.",
        person: "Tolux001"
    },
    {
        quote: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you",
        person: "Steve Jobs"
    },
    {
        quote: "Take the attitude of a student, never be too big to ask questions, never know too much to learn something new.” ",
        person: "Augustine Og Mandin"
    },
    {
        quote: "You'll find that education is just about the only thing lying around loose in this world, and it’s about the only thing a fellow can have as much of as he’s willing to haul away.",
        person: "John Graham"
    },
    {
        quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
        person: "Amelia Earhart"
    },
    {
        quote: "You've got to get up every morning with determination if you're going to go to bed with satisfaction.",
        person: "George Lorimer"
    },
    {
        quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
        person: "David Brinkley"
    },
    {
        quote: "The successful man will profit from his mistakes and try again in a different way.",
        person: "Dale Carnegie"
    },
    {
        quote: "A man who has committed a mistake and doesn’t correct it is committing another mistake.",
        person: "Confucius Kongzi"
    },
    {
        quote: "One secret of success in life is for a man to be ready for his opportunity when it comes",
        person: "Benjamin Disraeli"
    },
    {
        quote: "He who conquers himself is the mightiest warrior: Try not to become a man of success, but rather become a man of value",
        person: "Confucius"
    },
    {
        quote: "I swear, by my life and my love of it, that I will never live for the sake of another man, nor ask another man to live for mine.",
        person: "Ayn Rand"
    },
    {
        quote: "The strongest actions for a woman is to love herself, be herself and shine amongst those who never believed she could",
        person: "Tolux001"
    },
    {
        quote: "We don’t just sit around and wait for other people. We just make, and we do : It’s not about better time management. It’s about better life management",
        person: "Arlan Hamilton"
    },
    {
        quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
        person: "Steve Jobs"
    },
    {
        quote: "Setting goals is the first step in turning the invisible into the visible.",
        person: "Tony Robbins"
    },
    {
        quote: "Opportunity is missed by most people because it is dressed in overalls and looks like work. ",
        person: "Thomas Edison"
    },
    {
        quote: "When we strive to become better than we are, everything around us becomes better too.",
        person: "Paulo Coelho"
    },
    {
        quote: "I'm a greater believer in luck, and I find the harder I work the more I have of it.",
        person: "Thomas Jefferson"
    },
    {
        quote: "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus. ",
        person: "Alexander Graham Bell"
    },
    {
        quote: "To know how much there is to know is the beginning of learning to live.",
        person: "Dorothy West"
    }
]
//Function that creates random numbers
let randomNumber = () => {
    return Math.floor(Math.random() * quoteArr.length)
}
//click event listened to the button
btn.addEventListener('click', () => {
    const random = randomNumber();
    quote.textContent = quoteArr[random]["quote"];
    author.textContent = quoteArr[random]["person"];
})