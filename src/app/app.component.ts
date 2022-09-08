import {Component, ElementRef, HostListener, NgZone, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'qwerty';

  @ViewChild('input')
  public input !: ElementRef<any>;

  public phrases = [
    {name: 'qwerty', value: 'qwerty'},
    {name: 'qwerty-full', value: 'qwertyuiopasdfghjklzxcvbnm'},
    {name: 'star-wars', value: 'Well, good for you!! I\'m an adult too (42m) but I will never hide how the Star Wars books helped me through some bad patches of my life and how the Jedi Code has, let\'s say, improved the way I see life nowadays. Some people has the bible, some people has the quran, I have the Jedi guide book in my night-stand. But I do know those all are books made from someone imagination. My imaginary friend (the Force) is not really different from someone else. I\'m also a canon bitch and thus I can understand the feelings of those invested in Star Wars. The same way we should respect the religious believes of some people we should do the same for those who found a safe place in the Star Wars universe.'},
    {name: 'twitch-spam', value: 'wow, i log on to twitch tv to chat with people and to watch a good streamer, then you guys fking spam this chat with your dumb kappas and dumb sht memes that are not even close to funny. i dont even giggle from your shtty jokes. fk you and if you fking copy this message im reporting each one of you. you all think your fking funny'},
    {name: 'morb', value: 'I watched Morbius, and it changed my life. It taught me that we cannot succumb to our primal urges if it means hurting the people around us. It also taught me that even when life seems hopeless, we can still follow our passions and change the world. I realized this during a walk I took in the woods after watching the film. While walking, I came across a boy sitting on a log neare a creek. He looked lost and afraid. I asked him if he needed any help. Being the first friendly adult he\'d met in a long time, he opened up to me about how his parents threw him out of the house for wanting to pursue a career in the arts. He struggled at home because his family always teased him for his choice of a long hair style. He didn\'t want to go home, but he had nowhere to go. I knew I had to help this kid. I told him about what I\'d learned on my walk. About how you can\'t let go of your passions even when the world might seem against you. I told him that even though your first instinct might be to run away from your problems, it gets nothing done, and only prolongs suffering. There was a glimmer in his light blue eyes. He stood up from the log where I also sat, and we walked out of the woods. That boy was Jared Leto, who grew up to be the star of Morbius.'},
    {name: 'pasta', value: 'Anyways uhm... I bought a whole bunch of flour and some water - do you know what pasta is? Anybody knows what Fettuccine is? No, not Gnocchi. I think that\'s a food made from potatoes. Talking Fettuchine. Anyways, Fettuchine is a flat noodle thats thicker and more dense than spaghetti.  So that\'s my story. I bought a whole bunch of pasta, put them in the frypan. Little strings of noodles in a pan with some sauce. Stuff like that.'},
    {name: 'squading', value: ':SQUADING: DO NOT GET IT TWISTED :SQUADING: DO NOT GAMBLE :SQUADING: DO NOT START GAMBLING :SQUADING: IT IS ENTERTAINMENT AND ENTERTAINMENT ONLY :SQUADING: YOU WONT BREAK EVEN :SQUADING: YOU WONT WIN YOU WONT DO ANY OF THAT YOU UNDERSTAND? :SQUADING: YOU WILL ONLY GO INTO DEBT AND RUIN YOUR  LIFE :SQUADING: I DO THIS CAUSE I  LOVE IT :SQUADING: I DO IT ALL THE TIME :SQUADING: ITS ENTERTAINMENT FOR PEOPLE WHO CAN AFFORD IT :SQUADING: AND THATS IT THER- LIKE THER- I- Y- Y- YOU C- :SQUADING: YOU WILL LOSE'},
    {name: 'suge-knight', value: 'Anyways, um... I bought a whole bunch of Suge Knight albums, do you know who Suge Knight is? Anybody know who Suge Knight is? No, not Shungite, I think that\'s some anti-5G mineral. I\'m talking Suge Knight. Anyway, he\'s a 55-year-old rapper who\'s been charged for multiple crimes including manslaughter and threatening death... that\'s his story, I like his songs and bought a bunch of his CD\'s. Put \'em around the la casa. Intense raps, stuff like that.'},
    {name: 'pinged-you', value: 'Yeah I just pinged you. you gonna cry? gonna go whine to the mods? did the Ping Notification hurt? are you gonna sit there at night before bed just thinking about how much the notif upset you? gonna create an incredible life with a beautiful wife and wonderful children just to cover up the fact that you\'ve been so angry at this one ping notif on a discord server that has it\'s mention notifications set as notifybecause you didn\'t mute it? gonna regret not suppressing mentions in settings every single day, wishing you had just put the slightest effort to not get pinged? gonna become slowly more and more toxic every single day of your life towards the people you\'re supposed to love but feel nothing towards? gonna go through years of lying to your therapist and pretending your issues are related to your life when in reality they\'re just related to that one mention notif you received on your discord profile ? yeah.'},
    {name: 'germany-greetings', value: 'hey greetings from Germany, how are you, I hope you\'re doing well, it\'s my birthday today and I wanted to ask if you have any balloons at home and if you would burst them with your fingernails. That would be my greatest wish and mine hope you mey can fulfill that with you afterwards and leave a subscription there and maybe even a bit more.'},
    {name: 'mine', value: 'This is my copypasta. There are many like it, but this one is mine. My copypasta is my best friend. It is my life. I must master it as I must master my life. Without me, my copypasta is useless. Without my copypasta, I am useless. I must spam my copypasta true. I must spam faster than the moderator who is trying to mute me. I must spam him before he bans me. I will... My copypasta and I know that what counts in spam war is not the emotes we spam, the capital of our letters, nor the copypasta walls we make. We know that it is the spam that count. We will spam... My copypasta is human, even as I, because it is my life. Thus, I will learn it as a brother. I will learn its weaknesses, its strength, its paragraphs, its emotes, its ctrl c and its ctrl v. I will keep my copypasta clean and ready, even as I am clean and ready. We will become part of each other. We will... Before God, I swear this creed. My copypasta and I are the spammers of this chat. We are the masters of the mods. We are the saviors of my life.'},
    {name: 'emote', value: 'Anyways uhm, I spammed a whole bunch of :anitaE:, emotes, do you know what :anitaE: is? Anybody know what :anitaE: is. no not :forsenE:, I think it\'s a sub emote. I\'m talking :anitaE:. Anyways, it\'s a soon to be 10 million times spammed follower emote, that that\'s accessible to the plebs and unwanted plebs that may be travelling in twitch chat. That\'s my story, I spammed a whole bunch of stuff. Put them around in the Squishtank. Little 51 emotes chats. Stuff like that'},
    {name: "forsen-e-128", value: "forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE forsenE"}
  ]

  public phrase : {name: string, value: string}|null = this.phrases[0];
  public gameStarted : Date|null = null;
  public gameEnded : Date|null = null;
  public time : string = '0.000s';
  public timeInterval : number|null = null;
  public currentState : string = "";

  constructor(private zone: NgZone) {
    let p = this.phrases.filter(n => n.name === location.hash.substring(1))
    if(p.length > 0)
      this.loadPhrase(p[0].name);
  }

  loadPhrase(name: string) {
    location.hash = name;
    this.phrase = this.phrases.filter(n => n.name === name)[0] ?? this.phrase;
    this.reset();
    this.currentState = ''
  }

  reset() {
    this.currentState = "";
    this.gameStarted = null;
    this.gameEnded = null;
    if(null !== this.timeInterval)
      clearInterval(this.timeInterval);

    this.setTime()
    window.scroll({top: 0, behavior: "smooth"})
  }

  get typeIndex() : number {
    return this.currentState.length;
  }

  setTime() : string {
    if(this.gameStarted === null)
      return this.time = '0.000s';

    if(this.gameEnded !== null)
      return this.time = this.padDigits((this.gameEnded.getTime() - this.gameStarted.getTime())/1000) + 's';

    return this.time = this.padDigits((new Date().getTime() - this.gameStarted.getTime())/1000) + 's';
  }

  padDigits(num: number) : string {
    let str = ""+num;
    let split = str.split('.');
    if(split.length === 1)
      return split[0] + ".000";

    return split[0] + '.' + split[1].padEnd(3, '0');
  }

  get nextChar() : string|null {
    return this.phrase?.value[this.typeIndex] ?? null;
  }

  get display() : string {
    return this.phrase?.value ?? "GGWP!";
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(evt: KeyboardEvent) {
    if(['F5'].includes(evt.key))
      return;

    evt.preventDefault()
    let key = evt.key;

    if(evt.key === 'Dead' && evt.code === 'Quote')
      key = "'";

    if(key === 'Enter')
      return this.reset();



    if(this.nextChar === key) {
      if(!this.gameStarted) {
        this.gameStarted = new Date();
        this.timeInterval = setInterval(() => this.setTime(), 1);
      }

      this.currentState += key;
      setTimeout(() => this.input.nativeElement.scroll({left: 999999, behavior: "smooth"}), 25);
      if(this.typeIndex >= (this.phrase?.value?.length ?? 0)) {
        if(this.timeInterval !== null)
          clearInterval(this.timeInterval);

        this.timeInterval = null;
        this.gameEnded = new Date();
      }
    }

  }
}
