import { Component } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrl: './mail.component.scss'
})
export class MailComponent {
  filterList = [
    "JohnDoe01",
    "JaneSmith02",
    "SamWilson03",
    "LisaBrown04",
    "EmilyDavis05",
    "MichaelJones06",
    "SarahMiller07",
    "DavidClark08",
    "LauraTaylor09",
    "JamesMoore10",
    "RobertHall11",
    "LindaWhite12",
    "DanielHarris13",
    "EmmaMartin14",
    "SophiaThompson15",
    "OliviaWalker16",
    "WilliamYoung17",
    "IsabellaKing18",
    "LiamScott19",
    "MiaGreen20"
  ];
  selectAll: boolean = false;
}
