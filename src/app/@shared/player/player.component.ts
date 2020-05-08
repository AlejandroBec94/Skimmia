import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = true;
  msaapPlaylist: Track[] = [
    {
      title: 'Chris Isaak - Wicked Game ',
      link: '../../../assets/music/Wicked_Game.mp3'
    },
    {
      title: 'Scary Love - The neighbourhood',
      link: '../../../assets/music/scary_love.mp3'
    },
    {
      title: 'Sebastián Yatra, Isabela Merced - My Only One',
      link: '../../../assets/music/My_Only_One.mp3'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
