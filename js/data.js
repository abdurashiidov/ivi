var cartoons = [
    {
    "id": 1,
    "title": "Ну, погоди!",
    "year": 1969,
    "summary": "«Ну, погоди́!» — популярная серия советских и российских мультфильмов. Пилотный выпуск был снят режиссёром Геннадием Сокольским, и вышел на экраны в 1969 г., в том же году вышел первый мультфильм основной серии. В основе сюжета лежит постоянно оканчивающаяся неудачей погоня Волка за Зайцем, после которой Заяц всегда оказывается невредим, а Волк говорит или кричит ему: «Ну, Заяц, ну, погоди!».",
    "image": "https://zbk.ru/wp-content/uploads/2020/02/nu-pogodi-souyzmultfilm.jpg"
    },
    {
    "id": 2,
    "title": "Tom and Jerry",
    "year": 1940,
    "summary": "Cерия короткометражных мультфильмов, созданная американскими аниматорами Уильямом Ханной и Джозефом Барберой. В сюжетной линии каждой части изображено (с элементами лёгкой житейской сатиры) соперничество главных героев — кота Тома и мышонка Джерри[1]. Пилотный выпуск проекта «Кот получает пинка» вышел на экраны 20 марта 1940 года",
    "image": "https://images-na.ssl-images-amazon.com/images/I/8134XeLmkRL._RI_.jpg"
    },
    {
    "id": 3,    
    "title": "The Smurfs",
    "year": 1958,
    "summary": "The Smurfs (French: Les Schtroumpfs; Dutch: De Smurfen) is a Belgian comic franchise centered on a fictional colony of small, blue, humanoid creatures who live in mushroom-shaped houses in the forest. The Smurfs was first created and introduced as a series of comic characters by the Belgian comics artist Peyo (the pen name of Pierre Culliford) in 1958, wherein they were known as Les Schtroumpfs.",
    "image": "https://zbk.ru/wp-content/uploads/2020/02/nu-pogodi-souyzmultfilm.jpg"
    },
    {
    "id": 4,    
    "title": "Masha and the Bear",
    "year": "2009",
    "summary": "Masha and the Bear (Russian: Ма́ша и Медве́дь, romanized: Masha i Medved Russian pronunciation: [ˈmaʂə i mʲɪdˈvʲetʲ]) is a Russian animated television series created by Oleg Kuzovkov and produced by Animaccord Animation Studio, loosely based on the oral children's folk story of the same name. The show focuses on the adventures of a little girl named Masha and her caring friend, the bear that always keeps her safe from disasters.",
    "image": "https://static.wikia.nocookie.net/masha-and-bear/images/a/a9/Masha_and_the_Bear.png/revision/latest?cb=20180612195257"
    },
    {
    "id": 5,
    "title": "Tarzan",
    "year": "1999", 
    "summary": "Tarzan is a 1999 American animated adventure film produced by Walt Disney Feature Animation for Walt Disney Pictures. The 37th Disney animated feature film, the tenth and last released during the Disney Renaissance era, it is based on the story Tarzan of the Apes by Edgar Rice Burroughs, being the first animated major motion picture version of the story.",
    "image": "https://i.pinimg.com/originals/68/ac/74/68ac74d34cc3d800a2bcf6cab69cc996.jpg"
    },
    {
    "id": 6,
    "title": "Pinocchio",
    "year": "1940",
    "summary": "Pinocchio is an Italian fictional character and the protagonist of the children's novel The Adventures of Pinocchio (1883) by Italian writer Carlo Collodi of Florence, Tuscany.[2][3] Pinocchio was carved by a woodcarver named Geppetto in a Tuscan village. He was created as a wooden puppet but he dreams of becoming a real boy. He is notably characterized for his frequent tendency to lie, which causes his nose to grow.",
    "image": "https://mult-online.ru/posters/260_347_90_1/uploads/posts/2011-04/thumbs/1302681046_pinokkio.gif"
    }, 
    {
    "id": 7,        
    "title": "Mickey Mouse",
    "year": "1928",
    "summary": "Mickey Mouse is a cartoon character created in 1928 by Walt Disney, and is the mascot of The Walt Disney Company. An anthropomorphic mouse who typically wears red shorts, large yellow shoes, and white gloves, Mickey is one of the world's most recognizable fictional characters.",
    "image": "https://static.wikia.nocookie.net/mickey-and-friends/images/7/7a/Mickey.jpg/revision/latest?cb=20200829043032"
    },    
    {
    "id": 8,
    "title": "SpongeBob",
    "year": "1999",
    "summary": "SpongeBob SquarePants (also simply referred to as SpongeBob) is an American animated comedy television series created by marine science educator and animator Stephen Hillenburg for Nickelodeon.",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
    },
    {
    "id": 9,
    "title": "Kid vs Kat",
    "year": "2008",
    "summary": "Kid vs. Kat is a Canadian animated television series that originally aired on YTV in Canada from October 25, 2008, to June 4, 2011.[2] The series was created and co-directed by Rob Boutilier, developed and produced at Studio B Productions, in association with YTV and Jetix Europe for its first season[1] and Disney XD for its second season.[3] 52 episodes were produced.[4]",
    "image": "https://upload.wikimedia.org/wikipedia/ru/7/7a/%D0%9A%D0%B8%D0%B4_vs._%D0%9A%D1%8D%D1%82.jpg"
    },   
    {
    "id": 10,
    "title": "Phineas and Ferb",
    "year": "2007",
    "summary": "Povenmire and Marsh had previously worked together on Fox's The Simpsons and Nickelodeon's Rocko's Modern Life. The creators also voice two of the main B-plot characters, Dr. Doofenshmirtz and Major Monogram.",
    "image": "https://i.pinimg.com/736x/06/39/15/06391521fbf86f390707c68ecf08412e.jpg"
    },    
    {
    "id": 11,
    "title": "The Lion King",
    "year": "1994",
    "summary": "The Lion King is a 1994 American animated musical drama film produced by Walt Disney Feature Animation and released by Walt Disney Pictures. It is the 32nd Disney animated feature film, and the fifth animated film produced during a period known as the Disney Renaissance.",
    "image": "https://media.vanityfair.com/photos/5d2f2de1466c6d000868d204/16:9/w_1280,c_limit/MSDLIKI_EC007.jpg"
    },
    {
    "id": 12,
    "title": "The Simpsons",
    "year": "1987",
    "summary": "The Simpsons is an American animated sitcom created by Matt Groening for the Fox Broadcasting Company. The series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie.",
    "image": "https://www.saturdayeveningpost.com/wp-content/uploads/satevepost/2020-01-15-the-simpsons-alamy-860x573.jpg"
    },
    {
    "id": 13,
    "title": "Shrek",
    "year": "2001",
    "summary": "Shrek is a 2001 American computer-animated comedy film loosely based on the 1990 fairy tale picture book of the same name by William Steig. Directed by Andrew Adamson and Vicky Jenson in their directorial debuts, it stars Mike Myers, Eddie Murphy, Cameron Diaz, and John Lithgow as the voices of the lead characters.",
    "image": "https://upload.wikimedia.org/wikipedia/ru/thumb/3/39/Shrek.jpg/640px-Shrek.jpg"
    },
    {
    "id": 14,
    "title": "Pokémon",
    "year": "1997",
    "summary": "",
    "image": ""
    },    
    
]

