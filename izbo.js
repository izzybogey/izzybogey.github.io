const app = document.querySelector('.app');
const memories = {
    'philly_cheesesteak': {
        'url': 'https://lh3.googleusercontent.com/l1SLt4UkcTx1qdbVnH3CSt55tUEEibfu3vTgFjd9UqVnHuZC58s131RTBoDKqW_gTqKwL-HJ0T4wMwTvHtPAIgHqFsuQgHYeeK9dk68KbUmvqnR8B_hq2rm7KiEzORbDnJx3lIxh3B633RXwQ7g4hgS8m-2y9cwfStKaC1P_M6q3w6oKN-x8YH9pvw1mWZU5oiPqXTnLjcQ8nR6YeGC0c0fehybL7adDrnLXOFR_-oMsAmZNC2OpMU9Vgj4jksUW7TQHwV57yQM0YT6katlB_7URaix3Iu3Q2b_yXTs4KJ3fzG0wlLDVZxAgz2CHOJ0vDRPhgJLUZom6CoZwqvc_PNoWkERsRmDJU30aTyyp8PBt4YyFzrdbmS-W6o7AmXTCuqAB2vNu48ucjVlfkDe9qFAW260om8QVS4_yQcP-Rc0-K2bR7rOIqmmr8fAzFT7wT14Sq_oIQ9uQ6kieNIJh7jzAJfoPbXOL8TPNF4YhhS0sQB_ok5b_ukWTN6bfGpoxWFwbFAa2zgbQ53_GOx7kg6Q0HeCXMF3Pro0gnovELbTZbgomHbSJM9PTYJc7Tl-79Ol2r-6lwnRGrL_J-J7Xk0dsyt-xOHGoLVoWQp-mLZspKdQ-DYCP3UnuwwTs4xQTyunZBBww130CIrAKWgoFqYW2Gd2n-4OXFZA84nt-8Z8ypSBh6rdShOQpcRmYV-mc4JDILOEhLzuQtoQRl9_fP9U=w464-h933-no?authuser=0',
        'text': 'hehe',
        'is_closed': true
    }
}
const myeyes = {
    'rocket': {
        'url': 'https://lh3.googleusercontent.com/C8H0M7g5fJrO5vbkDJd0CcpgtGdyp03tRM232fRupOhKm5KfT-FusgwRQIBfAFR6RI_9Hie4kMp9PUHez-DKOOGvo-ur7aQCvmgWa9j0nM6Tey72iq7M5lWbzqIMJfKlOPVKHMy9ADWO-0CxAEa0DqlvfYlZ2ybSyg_cZuCNY1awRP-Ki7HmSPxyrMD7W__q7u4Iwj94YFOqXWmE4W-DOm33b7582_Z0k76kNE99JWVFo0_XfVti1dW8tzWyso0hxJ_2Jd7fYxzXBrTX9XO9PF1DA3-8Q6nmb4nK3LhkcCO3l_a3YMMwsEyBuxC2_2c5z2JaKWaYR8scp3_Vt0Dl-a_L52T7m3YQGaf4xnfRZUZz_TNqxGxD-3anbjJI9vDi-Ysrt6qKgrouA3aSrPY2ZfLgNKD9s7GDn7R38qq9Cl-PLfH-eagdaFa0tlTYGRoSjWu9PiKbNdR51PE45lGCy72AxItUr8p1FAXY5GFc74pFZTN3-qeQQTdqlp3TLRC-QtMNriyul3iQB1dOHD85Hykx6VJ-TpZTqnmTGlmcDsIWUbBZ_mon_InBxfyT2JXAcdrOdzZ9nEXVUh8mw_peGdEWvOz57LBvEwIzPi4xnLg4WEt6QLZAy7Kkche1BWpScLCQsaNg0LejP_WAhDH-1gF_g2j9fMzxWC9SKVbu_GrULayJw2TIlbv92_xL3FfcFiGkObrLL_BvE9sXTkcgqbk=w700-h933-no?authuser=0',
        'text': 'hehe',
        'is_closed': true
    }/*,
    'a': {
        'url': 'a',
        'text': 'a',
        'is_closed': true
    }*/
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
        let img = document.createElement('img');img.className = 'snap_image';img.src = memories[memory].url;eventFor(img, container, i);img_container.append(img)
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