const johnB = {
  roomId: 'shittown',
  inventory: ['dog'],
  rooms: [
    {
      name: 'Welcome to Shittown, Alabama',
      id: 'shittown',
      img: `                    
                   ++-                  
             +Mm:.sMMy--hMy             
        .ss--hMMMMMMMMMMMMm:-os.        
        .NMMMMds/:-.oMMMMMMMMMM-        
     /s+sMMMM-       dMMmo/omMMs/o/     
     oNMMMMMM+      /MMN.    oMMMMy     
     -dMMMMMMMNs:.-oNMMo      :MMm-     
   sMMMMh.  /hMMMMMMMMMh-     :MMMMNy   
   ./mMM-     .NMMd//dMMMmdddmMMMMN+-   
   -:mMM-     -mMMh--hMMMNmmmNMMMMm:-   
   yMMMMs-  -sNMMMMMMMMd-     +MMMMMd   
    -.dMMMmNMMMh+:/sMMM+      -MMm--    
     oNMMMMMMs-     +MMN-    /NMMNo     
     +yoyMMMM-       dMMd+:/dMMhoyo     
        .NMMMNh+:.--/NMMMMMMMMN.        
        -hy:/mMMMMMMMMMMMMm//yh-        
             yMm/:hMMy:/NMs             
              -   -ss-  -.  
      `,
      desc: `
        Located in Bibb County, Shittown (officially known as Woodstock) is a small, sorry ass town with a population of about 1,500. Looking around the town you can see several churches but not a damn bookstore. Poverty abounds and with poverty comes corruption.
        You find yourself on the property of John B. McLemore.
      `,
      exits: [
        { dir: 'north', id: 'house' }
      ]
    },
    {
      name: 'The House',
      id: 'house',
      img: `
                               @@                                         
                             @@@@@@                                       
                           @@@@@@@@@@                                     
                         @@@@@@@@@@@@@@                                   
                       @@@@@@@@@@@@@@@@@@                                 
                      ***(**(****(****(**                                 
                      *__#####___(____( *                                 
                      *  #####   (____( *                                 
                      *__#####___(|**|( *                                 
                      *  #####   (|**|( *                                 
                      *  (   (   (|**|( *                                 
                      *******************           
      `,
      desc: `
        You come upon a house. It doesn't look like much but it could be described as stately. Aside from the sound of barking dogs you don't hear much - there is no loud hum of air conditioning. You realize that the sound of the dogs might just be a memory. Looking around, you don't see anything that would indicate that the owner of this house has any posessions of value.
      `,
      exits: [
        { dir: 'north', id: 'porch' },
          { dir: 'south', id: 'shittown' },
          { dir: 'west', id: 'clearedLand' },
          { dir: 'east', id: 'forest2' }
      ]
    },
 {
      name: 'The Path',
      id: 'path',
      img: `                    
      `,
      desc: `
        You find yourself on a path. Ahead, you see a grey stone wall, lovingly crafted. There are round pilars at either end of the wall and the wall increases in height with a slight curve.
      `,
      exits: [
        { dir: 'west', id: 'maze' },
          { dir: 'north', id: 'forest' },
          { dir: 'south', id: 'garden' },
          { dir: 'east', id: 'land' }
      ]
    },
      {
      name: 'A maze...?',
      id: 'maze',
      img: `                    
      `,
      desc: `
        Looking forward you see several small plants meticulously arranged. There are also several wooden doors interspersed between the plants. Upon closer inspection you notice that the plants apear to be rosebushes and while they are only hip high you can imagine that when full grown this would be an incredible maze. Unfortunately, it has fallen into a state of disrepair. On the ground you see a considerable amount of leaves and debris as well as a watering can. It appears that whoever started this maze abandoned it.
      `,
      items: [
          { name: 'watering can', desc: 'It\'s a watering can full of water.', isTakeable: true, use: ({disk, println, getRoom}) => {
          const room = getRoom(disk.roomId);
          if (room == 'maze' || room == 'garden') {
            println('Your pour a bit on water on the rosebushes. It seems to make you feel a bit better although there is still a lot of work to be done.');
          } else {
            println('That seems wasteful. Is this the best place to use this?');
          }
        }},
      ],
      exits: [
        { dir: 'north', id: 'center' },
          { dir: 'south', id: 'forest' },
          { dir: 'east', id: 'path' },
          { dir: 'west', id: 'forest' }
      ]
    },
      {
      name: 'The shop',
      id: 'shop',
      img: `                    
      `,
      desc: `
        You find youself in a shop. There are lots of tools everywhere and clock parts are scattered everywhere. There is a shovel leaning up against the door. The shop looks pretty dangerous. However, you can tell that the shop is well used. There is a table in the corner.
      `,
      items: [
          { name: 'watering can', desc: 'It\'s a watering can full of water.', isTakeable: true, use: ({disk, println, getRoom}) => {
          const room = getRoom(disk.roomId);
          if (room == 'maze') {
            println('Your pour a bit on water on the rosebushes. It seems to make you feel a bit better although there is still a lot of work to be done.');
          } else {
            println('That seems wasteful. Is this the best place to use this?');
          }
        }
      },
          {
              name: 'table', desc: 'On the table there is an assortment of tools as well as alcohol. You see a few droplets of mercury on the table... Amongst the tools you notice a piercing gun as well as a bottle of liquid.'
          },
          {
              name: 'bottle', desc: 'This is a bottle of potassium cyanide. It looks pretty dangerous.', isTakeable: true, use: ({disk, println, getRoom}) =>
              {
                  const room = getRoom(disk.roomId);
                  if (room == 'porch')
                      {
                         if (inInventory('telephone'))
                             {
                                 //Check if the phone was *just* used. 
                                 if (disk.input[input.length - 1] == 'use telephone')
                                 {
                                     enterRoom('endGame');
                                 }
                                 else
                                 {
                                      println('You don\'t want to do this alone. There must be someone that you can call to make sure that your wishes are observed.');
                                 }
                             }
                          else
                              {
                                  println('You don\'t want to do this alone. There must be someone that you can call to make sure that your wishes are observed.');
                              }
                      }
                  else
                      {
                          println('This just doesn\'t seem like the right place.')
                      }
              }
          },
          {
              name: 'piercing gun', desc: 'This is a tool used for piercings. There isn\'t any jewelry around.', isTakeable: true, use: ({disk, println, getRoom}) => {
                  const room = getRoom(disk.roomId);
                  if (room == 'shop')
                      {
                          println('You lift up your shirt and take the gun in your hand, quickly piercing your nipple. It feels right somehow. The pain is pleasurable but nothing happens.');
                      }
                  else{
                      println('This doesn\'t seem like the right place. Church would be better.');
                  }
              }
          },
          {
            name: 'shovel', desc: 'This is a normal shovel used to dig holes.', isTakeable: true, use: ({disk, println}) =>
              {
              println('You dig the shovel into the earth. You dig deeper and deeper. John B. say he was unbanked and worth millions. He definitely lived comfortably, always talking about gold. It\'s got to be burried here somewhere. This has got to be the right spot. Unfortunately, you find nothing... but you know it is here somewhere. It\'s got to be');
          }
          },
      ],
      exits: [
        { dir: 'north', id: 'slab' },
          { dir: 'south', id: 'forest' },
          { dir: 'east', id: 'forest' }
      ]
    },
     {
      name: 'The kitchen',
      id: 'kitchen',
      img: `                    
      `,
      desc: `
        You enter the kitchen of John B.\'s house. A window above the sink lets in light. There is a telephone on the wall and a bottle of Tums sits on the counter. In the corner, there is a potbelly stove. As with most kitchens, there is a fridge.
      `,
      items: [
          { name: 'fridge', desc: 'This fridge is nothing special, it looks like any fridge.', use: ({disk, println}) => {
                println('You open the fridge. There nothing special there. You open the freezer and rummage around. You had heard rumors of gold being stored in the freezer. You don\'t see anything though. John was so insistent, telling everyone that there was gold. And you\'re pretty sure he said some was in the freezer. You dig deeper inspecting everything closely but find nothing. Perhaps this is just a fool\'s errand.');
                }
          },
          {
             name: 'stove', desc: 'This potbelly stove is pristine. You examine it closely checking in every nook and cranny but, contrary to popular belief, you don\'t find anything.' 
          },
          {
           name: 'Tums', desc: 'A bottle of Tums. These should counteract your acid reflux.', isTakeable: true, use: ({disk, println}) => {
                 println('You pop a Tums in your mouth. Unfortunately it is one of those awful cherry flavored ones. That would be the first one to hop out.');
                }
          },
          {
          name: 'telephone', desc: 'This looks like a cordless landline phone.', isTakeable: true, use: ({disk, println, getRoom}) =>
              {
                  const room = getRoom(disk.roomId);

                  if (room == 'porch')
                  {
                  println('This could be an uncomfortable call. You call your old friend Faye Gamble. You know she will know what to do. Perhaps there is something you should use now.');
                    }
                  else if (room == 'kitchen')
                  {
                  println('You call up Brian Reed. He\'s become a confidant of yours. You tell him all about life here in Shittown, Alabama where you can get away with murder if your family has the right connections. Matter of fact, thats what you hear happened to one of the Burt boys. He was bragging about it around town and that just wasn\'t right. Hopefully, he can find out some more about that. Several hours later you hang up the phone.' );
                  }
                  else{
                  println('You call Tyler. He\'s like a son to you and maybe he will come over. You\'ve got some Wild Turkey in the shop and plenty of work that needs to be done. According to your calculations he is running low on cash and while you\'re not running a charity you make sure that your family is taken care of. Several hours later you hang up the phone.');
                  }
              }
          },
      ],
      exits: [
        { dir: 'south', id: 'houseInterior' }
      ]
    },
       {
      name: 'The Office',
      id: 'office',
      img: `                    
      `,
      desc: `
        You enter a room that seems to be an office. There is a computer on a messy desk. You see stacks of papers on the desk. You can tell that this room was used frequently and for long periods of time.
      `,
      items: [
      { name: 'computer', desc: 'It\'s a computer. It probably works.', use: ({disk, println}) => 
       {
        println('You turn on the computer and begin to poke around. In the browser history you find multiple visits to sites about global warming, fossil fuels, and other upcoming problems. You see several online postings under the name Hiruit Nguyse. In the documents you find a manifesto. It is quite lengthy.');
        } 
         },
          {
          name: 'papers', desc: 'You pick up the stack of papers and start flipping through them. Among them you find a title.'
          },
          {
          name: 'title', desc: 'This is a title for a pickup truck.', isTakeable: true
          }
      ],
      exits: [
        { dir: 'east', id: 'houseInterior' }
      ]
    },
      {
      name: 'The Center of the Maze',
      id: 'mazeCenter',
      img: `                    
      `,
      desc: `
        You continue until you reach the center of the maze. What an accomplishment! With so many potential solutions, you can\'t help but admire the craftsmanship, even if the maze hasn\'t been kept up. This place feels special. You know that this place is important. It\'d be a great place to keep something special or important.
      `,
      exits: [
        { dir: 'north', id: 'forest' },
          {dir: 'south', id: 'maze'},
          {dir: 'east', id: 'forest'},
          {dir: 'west', id: 'forest'}
      ]
    },
      {
      name: 'The Slab',
      id: 'slab',
      img: `                    
      `,
      desc: `
       You see that the ground is more solid now. There is a slab of cement. Looking closely you can see discoloration where it appears that vehicles were stored. One place is definitely large enough to have been a bus or large trailer.
      `,
      exits: [
        { dir: 'north', id: 'forest' },
          {dir: 'south', id: 'shop'},
          {dir: 'east', id: 'land'},
          {dir: 'west', id: 'forest'}
      ]
    },
      {
      name: 'The Porch',
      id: 'porch',
      img: `                    
      `,
      desc: `
      You approach the house and are now standing on the front porch. There\'s a rocking chair as well as a mat. This looks like a nice place to make a phone call.
      `,
    items: [
        {
            name: 'rocking chair', desc: 'This looks like an ordinary rocking chair.'
        },
        {
            name: 'mat', desc: 'It is a mat. Some people use them to hide things. You notice a key slightly sticking out from under the mat'
        },
        {
            name: 'key', desc: 'It is an intricate key. It looks very special, as if it is a clue or maybe the key to a special hiding spot.', isTakeable: true
        }
    ],
      exits: [
        {dir: 'north', id: 'houseInterior'},
          {dir: 'south', id: 'house'}
      ]
    },
      {
      name: 'The Land',
      id: 'land',
      img: `                    
      `,
      desc: `
      You find yourself on a nice piece of land. You can see that whoever owns this land really cares for it. Outside of the clearing, you are surrounded by trees.
      `,
      exits: [
        {dir: 'north', id: 'forest'},
          {dir: 'east', id: 'slab'},
          {dir: 'west', id: 'path'}
      ]
    },
           {
      name: 'The Forest',
      id: 'forest',
      img: `                    
      `,
      desc: `
      You are surrounded by trees. You get the feeling that there's over 100 acres of trees around. There doesn't seem to be much of anything else around.
      `,
      exits: [
        {dir: 'north', id: 'land'},
          {dir: 'south', id: 'land'},
          {dir: 'east', id: 'land'},
          {dir: 'west', id: 'land'}
      ]
    },
   {
      name: 'The Forest',
      id: 'forest2',
      img: `                    
      `,
      desc: `
      You are surrounded by trees. You get the feeling that there's over 100 acres of trees around. There doesn't seem to be much of anything else around.
      `,
      exits: [
          {dir: 'east', id: 'house'},
          {dir: 'west', id: 'house'}
      ]
    },
    {
      name: 'The Garden',
      id: 'garden',
      img: `                    
      `,
      desc: `
      You come across a garden. There's quite a variety of plants here, some of which you have never heard of. There is a large leafy plant that you recognise as Aspidistra elatior.
      `,
      exits: [
          {dir: 'north', id: 'path'},
          {dir: 'west', id: 'forest'},
          { dir: 'south', id: 'clearedLand' }
      ]
    },
    {
      name: 'Cleared Land',
      id: 'clearedLand',
      img: `                    
      `,
      desc: `
      You find yourself on a bit of land that has been cleared. From here you can see some land that looks like it was maintained at some point. The ground is dusty and there is some debris.
      `,
        items: [
            {
                name: 'ground', desc: 'The ground is dusty but among the debris you can make out a gear'
            },
            {
                name: 'debris', desc: 'The ground is dusty but among the debris you can make out a gear'
            },
            {
                name: 'gear', desc: 'The gear is older and appears to be gold. It looks like it is the appropriate size for a clock.', isTakeable: true
            }
        ],
      exits: [
          {dir: 'north', id: 'garden'},
          {dir: 'south', id: 'forest2'},
          {dir: 'west', id: 'forest'},
          { dir: 'east', id: 'house' }
      ]
    },
    {
      name: 'Inside the House',
      id: 'houseInterior',
      img: `                    
      `,
      desc: `
      You enter the house. It doesn't look like much.
      `,
      exits: [
        {dir: 'north', id: 'kitchen'},
          {dir: 'south', id: 'porch'},
          {dir: 'west', id: 'office'}
      ]
    },
      {
      name: 'The End',
      id: 'endGame',
      img: `                    
      `,
      desc: `
        'Usually when you see jokers that look like that they done something to get like that.'

        Maybe it was all the mercury that caused you to feel like this was the answer, maybe it was the realization that at age 50 all you have to look forward to in life is decline - all of your good moments have been spent, maybe it is because the world is a terrible place and can't survive the abuse it is receiving, maybe you're just lonely and feel like no one truely cares about you. It doesn't matter. Whatever the reason, you pick up the bottle of cyanide and begin to drink it.

        You make sure to tell Faye who to contact in the event of your death and let her know that if she calls the cops that you'll shoot them once you see them. She'll want to keep them safe... even then you know that the cyanide will have done its job well before the police would ever make it out to you. 

        But the cyanide is more painful that you expected. You feel it burn as it goes down your throat. You scream in pain and anguish and writhe on the ground. You struggle ot breathe and no matter what you do you just can't seem to get any air. In a matter of minutes you're dead. 

        --The End--
      `,
    },
  ],
};
