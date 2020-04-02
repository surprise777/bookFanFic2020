export default {
    'booksLabel': '- Books',
    'commentsLabel': '- Comments',
    'reviewsLabel': '- Reviews',
    'usersLabel': '- Users',

    "comments": [{
        "book": "Harry Potter: The Philosopher's Stone",
        "comment": "Hmmmm...",
        "src": require('../static/book-cover/harrypotter.jpg'),
        "commenter": "Nick J",
    },
    {
        "book": "Harry Potter: The Chamber of Secrets",
        "comment": "Hmmmm...",
        "src": require('../static/book-cover/harrypotter.jpg'),
    },
    {
        "book": "Harry Potter: The Prisoner of Azkaban",
        "comment": "okay.",
        "src": require('../static/spanner/Essential-Books.jpg'),
    },
    {
        "book": "Harry Potter: The Deathly Hallows",
        "comment": "This is nice ending!",
        "src": require('../static/spanner/Essential-Books.jpg'),
    },],
    
    "books": [{
        "book": "Harry Potter: The Philosopher's Stone",
        "src": require('../static/book-cover/harrypotter.jpg'),
    },
    {
        "book": "Harry Potter: The Chamber of Secrets",
        "src": require('../static/spanner/Essential-Books.jpg'),
    },
    {
        "book": "Harry Potter: The Prisoner of Azkaban",
        "src": require('../static/book-cover/harrypotter.jpg'),
    },
    {
        "book": "Harry Potter: The Goblet of Fire",
        "src": require('../static/spanner/Essential-Books.jpg'),
    },
    {
        "book": "Harry Potter: The Order of the Phoenix",
        "src": require('../static/book-cover/harrypotter.jpg'),
    },
    {
        "book": "Harry Potter: The Deathly Hallows",
        "src": require('../static/spanner/Essential-Books.jpg'),
    },],

    "users": [{
        userName: "A penguin",
        email: "user",
        password: "user",
        acctType: "u",
        icon_url: require("../static/Profile/icon.jpg"),
        preference: "Novel",
        signature: "This guy is lazy, he haven't write anything yet."
    },
    {
        userName: "Killer Bee",
        email: "def@123.com",
        password: "123456",
        acctType: "u",
        preference: "Novel",
        icon_url: require("../static/Profile/icon.jpg"),
        signature: "This guy is lazy, he haven't write anything yet."
    },
    {
        userName: "Hina",
        email: "h@h.cn",
        password: "123456",
        acctType: "u",
        preference: "Novel",
        icon_url: require("../static/Profile/icon.jpg"),
        signature: "This guy is lazy, he haven't write anything yet."
    },],

    "reviews": [
        {
            'title': 'The rise of a legend - Arthur',
            'email': "user",
            'rating': 5,
            'date': "1",
            'book': "Wheel of time",
            'genres': ["Fantasy, ", "Novel"],
            'fanList': ['hina'],
            'popularity': 11,
            'content': ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec dui. Sit amet venenatis urna cursus eget nunc scelerisque. Netus et malesuada fames ac turpis egestas sed.",
                     "Tempor nec feugiat nisl pretium fusce id velit ut. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Id diam vel quam elementum pulvinar etiam non quam. Aenean euismod elementum nisi quis eleifend quam. Nulla facilisi morbi tempus iaculis. Maecenas ultricies mi eget mauris pharetra et ultrices. Tortor pretium viverra suspendisse potenti nullam. Non arcu risus quis varius. Eu turpis egestas pretium aenean pharetra magna ac. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Quis lectus nulla at volutpat diam ut venenatis.",
                     "Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Tempus egestas sed sed risus pretium quam. In aliquam sem fringilla ut morbi tincidunt. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Lacus vestibulum sed arcu non odio euismod lacinia at. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Feugiat sed lectus vestibulum mattis. Id faucibus nisl tincidunt eget nullam non nisi est.",
                     "Mi quis hendrerit dolor magna eget est lorem ipsum. Tortor vitae purus faucibus ornare suspendisse sed. Lobortis mattis aliquam faucibus purus. Porttitor eget dolor morbi non arcu risus quis varius quam. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. In iaculis nunc sed augue lacus viverra vitae. Tempus imperdiet nulla malesuada pellentesque elit. Vel risus commodo viverra maecenas accumsan. Amet consectetur adipiscing elit pellentesque habitant morbi. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Pellentesque diam volutpat commodo sed egestas egestas. Aliquet eget sit amet tellus cras adipiscing enim.",
                     "Amet luctus venenatis lectus magna fringilla. Aliquam etiam erat velit scelerisque in dictum non. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Integer eget aliquet nibh praesent tristique magna. Sit amet aliquam id diam maecenas ultricies mi. Lectus arcu bibendum at varius vel pharetra. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Tellus in metus vulputate eu scelerisque. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Habitant morbi tristique senectus et netus et malesuada. Adipiscing elit duis tristique sollicitudin nibh sit amet. Cum sociis natoque penatibus et magnis. Fringilla ut morbi tincidunt augue. Aliquet bibendum enim facilisis gravida neque convallis a cras. Placerat in egestas erat imperdiet sed.",
                     ],
         },
         {
            'title': 'Welcome to Hogwarts',
            'email': "def@123.com",
            'date': "1",
            'rating': 4,
            'fanList': ['penguin', 'hina'],
            'popularity': 12,
            'book': "Harry Potter",
            'genres': ["Fantasy, ", "Novel"],
            'content': ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec dui. Sit amet venenatis urna cursus eget nunc scelerisque. Netus et malesuada fames ac turpis egestas sed.",
                        "Tempor nec feugiat nisl pretium fusce id velit ut. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Id diam vel quam elementum pulvinar etiam non quam. Aenean euismod elementum nisi quis eleifend quam. Nulla facilisi morbi tempus iaculis. Maecenas ultricies mi eget mauris pharetra et ultrices. Tortor pretium viverra suspendisse potenti nullam. Non arcu risus quis varius. Eu turpis egestas pretium aenean pharetra magna ac. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Quis lectus nulla at volutpat diam ut venenatis.",
                        "Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Tempus egestas sed sed risus pretium quam. In aliquam sem fringilla ut morbi tincidunt. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Lacus vestibulum sed arcu non odio euismod lacinia at. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Feugiat sed lectus vestibulum mattis. Id faucibus nisl tincidunt eget nullam non nisi est.",
                        "Mi quis hendrerit dolor magna eget est lorem ipsum. Tortor vitae purus faucibus ornare suspendisse sed. Lobortis mattis aliquam faucibus purus. Porttitor eget dolor morbi non arcu risus quis varius quam. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. In iaculis nunc sed augue lacus viverra vitae. Tempus imperdiet nulla malesuada pellentesque elit. Vel risus commodo viverra maecenas accumsan. Amet consectetur adipiscing elit pellentesque habitant morbi. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Pellentesque diam volutpat commodo sed egestas egestas. Aliquet eget sit amet tellus cras adipiscing enim.",
                        "Amet luctus venenatis lectus magna fringilla. Aliquam etiam erat velit scelerisque in dictum non. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Integer eget aliquet nibh praesent tristique magna. Sit amet aliquam id diam maecenas ultricies mi. Lectus arcu bibendum at varius vel pharetra. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Tellus in metus vulputate eu scelerisque. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Habitant morbi tristique senectus et netus et malesuada. Adipiscing elit duis tristique sollicitudin nibh sit amet. Cum sociis natoque penatibus et magnis. Fringilla ut morbi tincidunt augue. Aliquet bibendum enim facilisis gravida neque convallis a cras. Placerat in egestas erat imperdiet sed.",
                        ],
        },

    ]

}