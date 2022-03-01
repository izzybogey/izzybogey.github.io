const app = document.querySelector('.app');
const memories = {
    'most-amazing-person-ever': {
        'url': '.../images/Snapchat-1748312008.jpg',
        'text': 'All of this is for the most amazing person in the world, Isabella Akhtar',
        'is_closed': true
    },
    'hospital': {
        'url': '/images/download_hospital.jpg',
        'text': 'I know you\'ve had a lot of trips to hospitals and doctors, and I know your life hasn\'t been the best, but it will get better. You will heal in every way, and all the sucky bits will become just memories',
        'is_closed': true
    },
    'Mm': {
        'url': 'images/download_mm.jpg',
        'text': 'Toilets exist for a reason. Take all the dumb shit you think about yourself, and put it there. Then you can realize how goddamn amazing you are',
        'is_closed': true
    },
    'mirror': {
        'url': 'images/download_mirror-pose.JPG',
        'text': 'You\'re cute',
        'is_closed': true
    },
    'hugging': {
        'url': 'images/IMG_20220221_222715.JPG',
        'text': '<3',
        'is_closed': true
    },
    'bathtub': {
        'url': 'images/download_bathtub.JPG',
        'text': 'Bathtub!',
        'is_closed': true
    },
    'tongue-out': {
        'url': 'images/download_tongue-out2.JPG',
        'text': 'I know at one point I said this was my favorite picture I had of you. That\'s not true. You are the only thing a picture needs for it to be my favorite, so any with you are my favorite. It\'s still a good picture though',
        'is_closed': true
    },
    'outside-hug': {
        'url': 'images/IMG_20220221_222922.JPG',
        'text': 'No matter how cold it is outside, you warm my heart enough that I won\'t ever get cold',
        'is_closed': true
    },
    'fboy': {
        'url': 'images/download_izzy-fboy.JPG',
        'text': 'I still think you are good at the face. There\'s nothing you can do to convince me otherwise',
        'is_closed': true
    },
    'wyatt-face': {
        'url': 'images/download_wyatt-face.JPG',
        'text': 'I may have finally gotten over my regret of sending this to you. Maybe...',
        'is_closed': true
    },
    'mirror-hug': {
        'url': 'images/IMG_20220221_222719.JPG',
        'text': 'You put a smile on my face :)',
        'is_closed': true
    },
    'bikini': {
        'url': 'images/download_bikini-pose.JPG',
        'text': 'Skinny ass :p',
        'is_closed': true
    },
    'night-a-star-was-born': {
        'url': 'images/IMG_20211109_232823341.JPG',
        'text': 'Even if I protest gifts, I still appreciate the thought and effort that you put into them. Thank you for the gifts. That being said, next time you think about getting me anything I\'m gonna throw a fit',
        'is_closed': true
    },
    'pose': {
        'url': 'images/download_pose.JPG',
        'text': 'Pretty, cute, beautiful, gorgeous, perfect, hot, flawless, etc. There aren\'t enough words in the English language to describe you',
        'is_closed': true
    },
    'bat': {
        'url': 'images/IMG_20220221_225118.JPG',
        'text': 'All the first times we hung out and bonked each other, and when you got absolutely destroyed in Jenga were absolutely amazing. I wouldn\'t trade anything in the world for them.',
        'is_closed': true
    },
    'florida-night': {
        'url': 'images/download_tongue-out.JPG',
        'text': 'You\'re attractive as hell when you\'re this confident. Actually you\'re always attractive as hell',
        'is_closed': true
    },
    'crazy-hair': {
        'url': 'images/download_crazy-hair.JPG',
        'text': 'Crazy hairrrrrrrr',
        'is_closed': true
    },
    'cuddling': {
        'url': 'images/download_cuddle.JPG',
        'text': 'Cuddling with you is fantastic. I would recommend it to everyone, but that means it wouldn\'t be reserved for me, so I can\'t do that',
        'is_closed': true
    },
    'ACL': {
        'url': 'images/IMG_7597-900x675.JPG',
        'text': 'Even if you don\'t believe in yourself, I believe in you and that you will get into MATA. You\'re gonna have an amazing time in culinary arts next year',
        'is_closed': true
    },
    'slumped': {
        'url': 'images/download_slumped.JPG',
        'text': 'Sorry this is just funny',
        'is_closed': true
    },
    'mohawk': {
        'url': 'images/Snapchat-1760562063.JPG',
        'text': 'I couldn\'t resist adding the bad hair pictures',
        'is_closed': true
    },
    '90-degree': {
        'url': 'images/Snapchat-1581651479.JPG',
        'text': 'Math class wasn\'t enough so I had to do math with my hair too. I wonder what the length of the hypotenuse is..?',
        'is_closed': true
    },
    'volcano': {
        'url': 'images/Snapchat-378899703.JPG',
        'text': 'Volcano hair!',
        'is_closed': true
    },
    'surfing': {
        'url': 'images/Snapchat-516861480.JPG',
        'text': 'Hair surfing! Lowkey have no idea how this happened but it\'s kinda sick.',
        'is_closed': true
    }
}
const myeyes = {
    'rocket': {
        'url': 'images/Snapchat-195223921.JPG',
        'text': 'We\'re on the rocketship all by ourselves. There\'s one bedroom and one bathroom and one kitchen and a TV room. The architecture is really cool. We wake up in our bed that we share and cuddle. Then I carry you down the stairs to the kitchen. There\'s an island with stools and put you down at one while I make you a good breakfast. I kiss you while I make it and then I sit next to you with a plate. We share a plate and you eat whatever you want and I have the rest. Your stomach feels amazing and you don\'t feel bloated or full at all. We go to the couch and cuddle and put on TV in the background. We kiss and hug a lot but the show is really good. After a while we turn it off and just cuddle pressed tight against each other. We do nothing but enjoy each others company. Bogey comes over and we play with bogey for a little bit. Fenton decides he wants some too so he comes to get petted for a while too. Then, I go to the kitchen and make you lunch. You hug my waist while I\'m making it and we have a really fun conversation. We sit down again and this time you sit on my lap but like a baby. I airplane the food into your mouth until you\'re full and it\'s really good, and then I let you do the same with me. I push you down and make out with you until we\'re both struggling for breath and we have to stop. So we go to the bed and I spoon you. We take a nap and I hold you tight so you feel safe and comfortable. Then we wake up and we sit criss cross applesauce facing each other in the bed and just talk for hours. We go and look out the window at space and I hug your waist and trace your back. We go back to the bed and I give you a full body massage. You decide you\'re hungry so we make an amazing gourmet meal for dinner and it\'s the best ever because we are just fantastic chefs. We talk while we eat dinner and we laugh and smile and have a great time. We have some dessert and it\'s really good. Your stomach is completely normal tho so it doesn\'t hurt and none of you hurts. We go cuddle on the couch again and I remind you of how skinny and beautiful and amazing you are. And you really are skinny and beautiful and amazing. You\'re getting sleepy so we go up to the bed and we kiss and cuddle as we both fall asleep whispering how much we love each other.',
        'is_closed': true
    },
    'blush': {
        'url': 'images/download_blush-filter.JPG',
        'text': 'Probably first time I noticed your freckle. Also you just look good :)',
        'is_closed': true
    }


    /*

    'a': {
        'url': 'images/',
        'text': '',
        'is_closed': true
    },
    */
}
var snaps_button = document.querySelector('.snaps_button');
var myeyes_button = document.querySelector('.my_eyes_only_button');

snaps_button.addEventListener('click', () => {
snaps_button.classList.add('selected');
if (myeyes_button.classList.contains('selected')) myeyes_button.classList.remove('selected');
load_memories();
})

myeyes_button.addEventListener('click', () => {
myeyes_button.classList.add('selected');
if (snaps_button.classList.contains('selected')) snaps_button.classList.remove('selected');
lockscreen();
})

load_memories();

function load_memories() {
    var arr = Object.keys(memories);
    var snaps = document.querySelector('.snaps');
    snaps.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        console.log(i)
        var memory = arr[i];
        console.log(memory)
        let container = document.createElement('div');container.className = 'snap_container';snaps.append(container);
        let img_container = document.createElement('div');img_container.className = 'img_container';container.append(img_container);
        let img = document.createElement('img');img.className = 'snap_image';img.src = memories[memory].url;eventFor(img, container, i);img_container.append(img);img.draggable=false;
        let text = document.createElement('div');text.className = 'snap_text';text.textContent = memories[memory].text;container.append(text)
    }
    function eventFor(image, container, i) {
        console.log(i)
        image.addEventListener('click', () => {
            if (memories[arr[i]].is_closed) {
                memories[arr[i]].is_closed = false;
                container.classList.add('focused');
            } else {
                memories[arr[i]].is_closed = true;
                // https://stackoverflow.com/questions/635706/how-to-scroll-to-an-element-inside-a-div
                container.scrollTop = 0;
                container.classList.remove('focused');
            }
            console.log(memories[arr[i]].is_closed)
        })
    }
}
function lockscreen() {
    var snaps = document.querySelector('.snaps');
    snaps.innerHTML = '';
    var sequence = [];
    var length_container = document.createElement('div');length_container.className = 'length_container';snaps.append(length_container);
    for (i=0;i<4;i++){
        var length = document.createElement('div');length.className = 'length_indicator';length_container.append(length);
    }
    var buttons_container = document.createElement('div');buttons_container.className = 'myeyes_buttons_container';snaps.append(buttons_container);
    for (let i = 1; i < 10; i++) {
        create_button(i)
        if (i==9) {
            create_button(0)
            var backspace = document.createElement('svg');backspace.className = 'my_eyes_backspace';buttons_container.append(backspace);eventForBackspace(backspace);backspace.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="#ff196c" d="M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1V208.1z"/></svg>'
        }
    }
    function create_button(i) {
        var button = document.createElement('div');button.className = 'my_eyes_number';buttons_container.append(button);button.textContent = i;eventFor(button, i);
    }
    function eventFor(button, i) {
        button.addEventListener('click', () => {
            sequence.push(i);
            update_indicators();
            if (sequence.length >= 4) {
                try_sequence();
            }
        })
    }
    function try_sequence() {
        if (sequence.join('') == '1108') {
            load_myeyes();
             return;
        }
        // all the following will not be correct
        sequence = [];
        update_indicators();
    }
    function update_indicators() {
        for (i=document.getElementsByClassName('indicator_on').length - 1;i>=0;i--){
            document.getElementsByClassName('indicator_on')[i].classList.remove('indicator_on')
        }
        for (i=0;i<sequence.length;i++) {
            document.querySelectorAll('.length_indicator')[i].classList.add('indicator_on')
        }
    }
    function eventForBackspace(backspace) {
        backspace.addEventListener('click', () => {
            if (sequence.length > 0) {
                sequence.pop();
                console.log(sequence.length)
            }
            update_indicators();
        })
    }
}

function load_myeyes() {
     var arr = Object.keys(myeyes);
    var snaps = document.querySelector('.snaps');
    snaps.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        console.log(i)
        var memory = arr[i];
        console.log(memory)
        let container = document.createElement('div');container.className = 'snap_container';snaps.append(container);
        let img_container = document.createElement('div');img_container.className = 'img_container';container.append(img_container);
        let img = document.createElement('img');img.className = 'snap_image';img.src = myeyes[memory].url;eventFor(img, container, i);img_container.append(img)
        let text = document.createElement('div');text.className = 'snap_text';text.textContent = myeyes[memory].text;container.append(text)
    }
    function eventFor(image, container, i) {
        console.log(i)
        image.addEventListener('click', () => {
            if (myeyes[arr[i]].is_closed) {
                myeyes[arr[i]].is_closed = false;
                container.classList.add('focused');
            } else {
                myeyes[arr[i]].is_closed = true;
                container.classList.remove('focused');
            }
            console.log(myeyes[arr[i]].is_closed)
        })
    }
}
