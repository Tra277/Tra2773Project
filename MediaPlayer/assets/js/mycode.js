const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let player = $('.player');
let cd = $('.cd');
let headerSong = $('header h2');
let cdThumb = $('.cd-thumb');
let audio = $('#audio');
let playBtn = $('.btn-toggle-play');
let progress = $('#progress');
let nextBtn = $('.btn-next');
let prevBtn = $('.btn-prev');
let randomBtn = $('.btn-random');
let repeatBtn = $('.btn-repeat');
let playList = $('.playlist');
const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    mouseDownOnSlider: false,
    songs: [
        {
            name: 'Nếu lúc đó',
            singer: 'Trần Thảo Linh(tlinh)',
            path: './assets/music/song1.mp3',
            image: './assets/img/song1.png'
        },
        {
            name: 'I love you so',
            singer: 'The walters',
            path: './assets/music/song2.mp3',
            image: './assets/img/song2.png'
        },
        {
            name: 'Spider-Man Theme',
            singer: 'Sony Interactive',
            path: './assets/music/song3.mp3',
            image: './assets/img/song3.png'
        },
        {
            name: 'Slow dancing in the dark',
            singer: 'Pink Guy',
            path: './assets/music/song4.mp3',
            image: './assets/img/song4.png'
        },
        {
            name: 'Shinunoga E-Wa',
            singer: 'Fuji Kaze',
            path: './assets/music/song5.mp3',
            image: './assets/img/song5.png'
        },
        {
            name: 'Pluto Projector',
            singer: 'Counter flexy',
            path: './assets/music/song6.mp3',
            image: './assets/img/song6.png'
        }, {
            name: 'Matsuri',
            singer: 'Fujji Kaze',
            path: './assets/music/song7.mp3',
            image: './assets/img/song7.png'
        },
        {
            name: 'LIMBO',
            singer: 'Keshi',
            path: './assets/music/song8.mp3',
            image: './assets/img/song8.png'
        },
        {
            name: 'Die for you',
            singer: 'Joji - Pink Guy',
            path: './assets/music/song9.mp3',
            image: './assets/img/song9.png'
        },
        {
            name: 'Here with you',
            singer: 'D4VE',
            path: './assets/music/song10.mp3',
            image: './assets/img/song10.png'
        }
    ],
    render: function () {
        let html = this.songs.map((song, index) => {
            return `<div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
            <div class="thumb"
                style="background-image: url('${song.image}')">
            </div>
            <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
            </div>
            <div class="option">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>`
        });
        playList.innerHTML = html.join('');

    }
    ,
    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            },
        });
    }
    ,
    handleEvents: function () {
        let _this = this;
        let cdWidth = cd.offsetWidth;
        // Xử lý cho đĩa CD xoay
        let cdRotating = cdThumb.animate([{
            transform: 'rotate(360deg)'
        }], {
            duration: 10000,
            iterations: Infinity
        });
        cdRotating.pause();
        // Xử lý hành động phóng to thu nhỏ CD
        document.onscroll = function () {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            let newCdWidth = cdWidth - scrollTop;
            cd.style.width = (newCdWidth > 0) ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        }
        // Xử lý play/pause audio
        playBtn.onclick = function () {
            _this.isPlaying ? audio.pause() : audio.play();
        }
        audio.onplay = function () {
            _this.isPlaying = true;
            player.classList.add('playing');
            cdRotating.play();
        }
        audio.onpause = function () {
            _this.isPlaying = false;
            player.classList.remove('playing');
            cdRotating.pause();
        }
        // Xử lý thanh progress khi chạy audio
        audio.ontimeupdate = function () {
            if (!_this.mouseDownOnSlider) {
                let progressPercent = Math.floor(this.currentTime / this.duration * 2000);
                progress.value = progressPercent;
            }

        }
        // Xử lý khi tua bài hát
        progress.onchange = function () {
            // 2000: the max value of progress bar
            let progressPercent = this.value / 2000 * 100;
            audio.currentTime = progressPercent * audio.duration / 100;
        };
        progress.onmousedown = function () {
            _this.mouseDownOnSlider = true;
        }
        progress.onmouseup = function () {
            _this.mouseDownOnSlider = false;
        }

        // Xử lý khi bấm next bài hát
        nextBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollIntoView();
        }
        // Xử lý khi bấn prev bài hát
        prevBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollIntoView();
        }

        // Xử lý khi ấn random bài hát
        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle('active', _this.isRandom);
        }
        // Xử lý khi hết bài hát
        audio.onended = function () {
            _this.isRepeat ? audio.play() : nextBtn.click();
        }
        // Xử lý khi bấm repeat-btn
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat;
            repeatBtn.classList.toggle('active', _this.isRepeat);
        }

        // Xử lý khi click vào bài hát
        playList.onclick = function (e) {
            let songChosen = e.target.closest(".song:not(.active)");
            if (songChosen || e.target.closest(".option")) {
                if (songChosen) {
                    _this.currentIndex = Number(songChosen.dataset.index);
                    _this.render();
                    _this.loadCurrentSong();
                    _this.scrollIntoView();
                    audio.play();
                }
                if (e.target.closest(".option")) {

                }
            }
        }
    }
    ,
    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    }
    ,
    nextSong: function () {

        this.currentIndex++;
        if (this.currentIndex > this.songs.length - 1) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    }
    ,
    loadCurrentSong: function () {
        headerSong.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    playRandomSong: function () {
        let randomIndex = this.currentIndex;
        while (randomIndex === this.currentIndex) {
            randomIndex = Math.floor(Math.random() * this.songs.length);
        }
        this.currentIndex = randomIndex;
        this.loadCurrentSong();
    },
    scrollIntoView: function () {
        setTimeout(() => {
            $('.song.active').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }, 350);
    }
    ,
    start: function () {
        this.defineProperties();
        this.handleEvents();
        this.loadCurrentSong();
        this.render();
    }
}
app.start();