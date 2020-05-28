import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'bks-home-section',
  templateUrl: './home-plain-section.component.html',
  styleUrls: ['./home-plain-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePlainSectionComponent implements OnInit {
  @Input() imageSrc: string;
  @Input() title: string;
  @Input() description: string;
  @Input() imagePosition: 'left' | 'right' = 'left';

  constructor() {}

  ngOnInit(): void {}
}
