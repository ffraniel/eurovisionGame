const lyrics2 = [{
    artist:"bob",
    title:"bob's song",
    country:"Moldova",
    lyrics:"so many words,so many words",
    image:"data:image/jpeg;base64,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",
    youtube:"https://www.youtube.com/watch?v=pKLKeVC-9Y4"
},{
    artist:"toby",
    title:"toby's song",
    country:"Spain",
    lyrics:"much more thna lyricsyou can't believe",
    image:"data:image/jpeg;base64,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",
    youtube:"https://www.youtube.com/watch?v=FDga57mNny4"
}, {
    artist:"mario",
    title:"italians song",
    country:"Italy",
    lyrics:"spaghetti",
    image:"dsdsfdsdfd",
    youtube:"sfdgfsfdgsdfsd"
    },
    {
        artist:"mario",
        title:"italians song",
        country:"Italy",
        lyrics:"spaghetti",
        image:"dsdsfdsdfd",
        youtube:"sfdgfsfdgsdfsd"
    },
    {
        artist:"zdfdo",
        title:"ihnvng",
        country:"Icbvncnly",
        lyrics:"s vcvnbvnetti",
        image:"dsdsfdsdfd",
        youtube:"sfdgfsfdgsdfsd"
    },
    { 
        artist:"sdfsd",
    title:"itsfdsd",
    country:"sdfsd",
    lyrics:"ssdfsdfdshetti",
    image:"dsdsfdsdfd",
    youtube:"sfdgfsfdgsdfsd"
}
]

const lyrics = [
    {
    artist:"SuRie",
    title:"Storm",
    country:"United Kingdom",
    lyrics:"Hey, hey brother \
    Do you remember when we were kids with no fear\
    Hey, hey sister\
    Do you believe in the things we dreamt we’d discover?\
    \
    I still have faith\
    I still believe in chasing rainbows\
    \
    Storms don’t last forever, forever, remember\
    We can hold our hands together\
    Through this storm oh oh, through this storm, oh oh\
    \
    Storms don’t last forever, forever, remember\
    We can hold our hands together\
    Through this storm oh oh, through this storm, oh oh\
    \
    Hey, hey mother\
    Am I making you proud or could I do better?\
    Hey, hey father\
    There’s weight on my shoulders but it’s not over\
    \
    I still have faith\
    I still believe in chasing rainbows\
    \
    Storms don’t last forever, forever, remember\
    We can hold our hands together\
    Through this storm oh oh, through this storm, oh oh\
    \
    Storms don’t last forever, forever, remember\
    We can hold our hands together\
    Through this storm oh oh, through this storm, oh oh\
    \
    Spread your love, give all you got\
    Hold your head up, don’t give up, no no\
    Hey, hey brother, don’t give up, oh woah woah\
    \
    Storms don’t last forever, forever, remember\
    We can hold our hands together\
    Through this storm oh oh, through this storm, oh oh\
    Spread your love, give all you got\
    Hold your head up, don’t give up, no no\
    Spread your love, give all you got\
    Hold your head up, through this storm, oh oh",
    image:"http://wiwibloggs.com/wp-content/uploads/2018/04/SuRie.jpg",
    youtube:"https://youtu.be/K--kIdOpbJM"
    },
    {
        artist:"Madame Monsieur",
        title:"Mercy",
        country:"France",
        lyrics: "I  was born this morning\
            My name is Mercy\
            In the middle of the sea\
            Between two countries, Mercy\
            \
            It was a long path, and my mother took it\
            She had me inside her skin, eight months and a half\
            Oh yes, eight months and a half\
            \
            We left our home, it was the war\
            For sure she had a reason, there was nothing to lose\
            Oh no, nothing but life\
            \
            I was born this morning\
            My name is Mercy\
            They offered me a hand\
            And I’m alive\
            I am all those children\
            Who were taken by the sea\
            I’ll live a hundred thousand years\
            My name is Mercy\
            \
            And there in front of our eyes, there was the enemy\
            A blue immensity, maybe infinite\
            But yes. we knew the price\
            \
            Emerging from a wave, there’s a friendly ship\
            It gave again its luck to our survival\
            It’s there that I cried for the first time\
            \
            I was born this morning\
            My name is Mercy\
            They offered me a hand\
            And I’m alive\
            I am all those children\
            Who were taken by the sea\
            I’ll live a hundred thousand years\
            My name is Mercy\
            \
            I was born this morning\
            My name is Mercy\
            \
            Mercy, Mercy, I’m alright, thank you\
            Mercy, Mercy, I’m alright, thank you\
            Mercy, Mercy, I’m alright, thank you\
            Mercy, Mercy, I’m alright, thank you",
        image:"http://wiwibloggs.com/wp-content/uploads/2018/01/Madame-Monsieur-Destination-Eurovision-.jpg",
        youtube:"https://youtu.be/c-5UnMdKg70"
    },
    {
        artist:"Michael Schulte",
        title:"You Let Me Walk Alone",
        country:"Germany",
        lyrics:"I’m a dreamer\
        A make-believer\
        I was told that you were, too\
        \
        I love the silence\
        And a clear horizon\
        And I got it all from you\
        \
        Every now and then I’m drawn to places\
        Where I hear your voice or see your face and\
        Every little thought will lead me right back to you\
        \
        I was born, from one love\
        Of two hearts\
        We were three kids and a loving mum\
        You made this place a home\
        A shelter from the storm\
        You said I had one life\
        And a true heart\
        I tried my best and I came so far\
        But you will never know\
        Cause you let me walk this road alone\
        \
        My childhood-hero\
        Will always be you\
        And no one else comes close\
        \
        I thought you’d lead me\
        when life‘s misleading\
        That’s when I miss you most\
        \
        Every now and then I’m drawn to places\
        Where I hear your voice or see your face and\
        Every little thought will lead me right back to you\
        \
        I was born\
        From one love of two hearts\
        We were three kids and a loving mum\
        You made this place a home\
        A shelter from the storm\
        You said I had\
        One life and a true heart\
        I tried my best and I came so far\
        But you will never know\
        Cause you let me walk this road alone\
        \
        Whoah, whoah, whoah\
        \
        I was born\
        From one love of two hearts\
        We were three kids and a loving mum\
        You made this place a home\
        A shelter from the storm\
        You said I had\
        One life and a true heart\
        I tried my best and I came so far\
        But you will never know\
        Cause you let me walk this road alone" ,
        image:"http://wiwibloggs.com/wp-content/uploads/2018/04/michael-schulte-you-let-me-walk-alone-lyrics.jpg",
        youtube:"https://youtu.be/Evx0aAF79-E"
    },
    {
        artist:"Ermal Meta & Fabrizio Moro ",
        title:"Non Mi Avete Fatto Niente",
        country:"Italy",
        lyrics:"Now they don’t know what time it is in Cairo\
        The sun on La Rambla today isn’t the same\
        In France, there’s a concert, people having fun\
        Someone sings powerfully, someone screams at death\
        \
        In London it always rains, but today it doesn’t hurt\
        The sky makes no exception, even for a funeral\
        In Nice, the sea is red with fire and shame\
        With people on the asphalt and blood in the sewer\
        \
        And this enormous body that we call Earth\
        Wounded to its core form Asia to England\
        Galaxies of people dispersed in space\
        But the most important space is that of an embrace\
        \
        Of mothers without sons, sons without fathers\
        Of faces lit up like walls without pictures\
        Minutes of silence, broken by a voice\
        You haven’t done anything to me\
        \
        You haven’t done anything to me\
        This is my life, and it keeps going\
        Beyond everything, beyond people\
        You haven’t done anything to me\
        You haven’t won anything\
        Because there’s more than your pointless wars\
        \
        There are those who make the sign of the cross and those who pray on rugs\
        Churches and mosques, imams and all the priests\
        Separate entrances to the same house\
        Billions of people hoping for something\
        \
        Arms without hands, faces without names\
        Let’s swap our skin, deep down we’re all human\
        Because our lives aren’t a point of view\
        And there is no pacifist bomb\
        \
        You haven’t done anything to me\
        You’ve taken nothing from me\
        This is my life, and it keeps going\
        Beyond everything, beyond people\
        You haven’t done anything to me\
        You haven’t gotten anything\
        Because there’s more than your pointless wars\
        \
        Skyscrapers will fall, so will the metro\
        Walls of conflict raised for bread\
        But against all the terror that hinders the path\
        The world gets back up with the smile of a child\
        With the smile of a child\
        With the smile of a child\
        \
        You haven’t done anything to me\
        You haven’t won anything\
        Because there’s more than your pointless wars\
        You haven’t done anything to me\
        Your pointless wars\
        You haven’t gotten anything\
        Your pointless wars\
        \
        I know that everything won’t come back\
        Happiness flew\
        It floated away, like a bubble" ,
        image:"http://wiwibloggs.com/wp-content/uploads/2018/04/metamoro-1.jpg",
        youtube:"https://youtu.be/gs2n5JY0QzQ"
    },
    {
        artist:"Amaia y Alfred",
        title:"Tu Cancion",
        country:"Spain",
        youtube:"https://youtu.be/FDga57mNny4", 
        image:"http://wiwibloggs.com/wp-content/uploads/2018/01/Alfred-Amaia-OT-2017-Eurovision-gala-tu-cancion-1.jpg",
        lyrics:"I would have never imagined\
        that travelling to the Moon could be something real\
        You turn everything upside down\
        when you kiss my forehead I discover the reason\
        \
        I can no longer\
        Invent it\
        \
        I feel like I’m dancing for the first time\
        You’re the art that sweetens the skin\
        From my traveller mind, that follows your feet\
        I feel like I’m dancing for the first time by your side, oh\
        \
        I know that in you I can find\
        that voice that warms me when the weather’s not good\
        Everything’s perfect if you’re\
        by my side creating a new city\
        \
        I feel like I’m dancing for the first time\
        You’re the art that sweetens the skin\
        From my traveller mind, that follows your feet\
        I feel like I’m dancing for the first time by your side, oh\
        \
        I can no longer\
        Invent it\
        I just want\
        Your song, oh, oh, oh\
        \
        I feel like I’m dancing for the first time\
        You’re the art that sweetens the skin\
        From my traveller mind, that follows your feet\
        I feel like I’m dancing for the first time by your side, oh"
    },
    {
        artist:"Cláudia Pascoal",
        title:"O Jardim",
        country:"Portugal",
        youtube:"https://youtu.be/XSunKcuuhOw", 
        image:"http://wiwibloggs.com/wp-content/uploads/2018/04/Cl%C3%A1udia-Pascoal-Isaura-O-Jardim-Portugal-Eurovision-2018.jpg",
        lyrics:"I  never wanted you\
        Less than anything\
        Always, my love\
        If you're also happy in heaven\
        Take me, I'll take care\
        Always, around you\
        \
        The flowers are my place\
        Now that you're not here\
        I water your garden\
        The flowers are my place\
        Now that you're not here\
        I water your garden\
        \
        I already promissed\
        That someday I'll change\
        Or try to be bigger\
        If you're also happy in heaven\
        Take me, I swear\
        Always, for your value\
        \
        The flowers are my place\
        Now that you're not here\
        I water your garden\
        The flowers are my place\
        Now that you're not here\
        I water your garden\
        \
        Now that you're not here, I water your garden\
        Now that you're not here, I water your garden\
        Now that you're not here\
        Now that you're not here, I water your garden"
    },
    {
        artist:"",
        title:"Lie to Me",
        country:"Czech Republic",
        youtube:"https://youtu.be/k6_oxE2MxZE", 
        image:"http://wiwibloggs.com/wp-content/uploads/2017/11/Mikolas-Josef-Lie-to-Me-Czech-Republic.jpg",
        lyrics:"Oh she’s a good girl at home\
        But the skirt goes up\
        Like Marilyn Monroe’s\
        \
        Papa likes the drama\
        Mama hotter than lava\
        She rocking high heels, Prada,\
        Her face like Madonna\
        \
        By the way she moved,\
        got me making a puddle\
        Baby I already knew\
        You would be nothing but a trouble\
        \
        Damnit everybody knows\
        She never loved for real\
        Honey bunny up all night\
        Wannabe couple goals queen\
        \
        I know you\
        I know you ‘bop-whop-a-lu bop’ on his wood bamboo\
        when you were still seeing me\
        and well he didn’t even knew, hmm,\
        But God damn it come and count to three\
        now sit down GGY I’m on fire\
        \
        So come and lie to me\
        Lie to me, oh baby\
        Come a little closer\
        Lie to me,\
        Lie to me, oh baby,\
        lean upon my shoulder\
        Lie to me\
        \
        Get down on my body\
        love me like it was always meant to be\
        Now you love somebody new I always knew\
        So come and give it to me\
        \
        When the beat dropped, she dropped\
        Dropped it like its hot\
        And now without a second thought\
        she got me doing what I’m not\
        Then it got heavy\
        Mom I’m feeling home already but steady\
        Plenty mother***ers wanna eat my spaghetti\
        \
        Then she got one of my friends\
        She got him dripping on wood\
        I know it hurt so bad but it feels so good\
        Quit sweet talking me\
        now baby I don’t give a f**k\
        you should have thought about me\
        before you ****ed him at the club\
        \
        I know you ‘bop-whop-a-lu bop’ on his wood bamboo\
        when you were still seeing me\
        and well he didn’t even knew, hmm,\
        But God damn it come and count to three\
        now sit down GGY I’m on fire\
        \
        So come and lie to me\
        Lie to me, oh baby\
        Come a little closer\
        Lie to me,\
        Lie to me, oh baby,\
        lean upon my shoulder\
        Lie to me\
        \
        Get down on my body\
        love me like it was always meant to be\
        Now you love somebody new I always knew\
        So come and give it to me\
        \
        You know I like it\
        (When you lie, lie, lie)\
        You look so good\
        (When you lie, lie, lie\
        Set my camel in the mood\
        (When you lie, lie, lie)\
        (When you lie, lie, lie)\
        \
        So come and lie to me\
        Lie to me, oh baby\
        Come a little closer\
        Lie to me,\
        Lie to me, oh baby,\
        lean upon my shoulder\
        Lie to me\
        \
        Get down on my body\
        love me like it was always meant to be\
        Now you love somebody new I always knew\
        So come and give it to me"
    }
    // {
    //     artist:"",
    //     title:"",
    //     country:"",
    //     youtube:"", 
    //     image:"",
    //     lyrics:""
    // }

];

export default lyrics;