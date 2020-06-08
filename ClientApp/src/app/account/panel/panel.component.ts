import { Component, OnInit } from '@angular/core';

import { DatabaseInfoService } from 'src/app/core/services/database.info.service';
import { IEntityInfoDto } from 'src/app/core/interfaces';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  entitiesInfo: IEntityInfoDto[];

  constructor(private dbInfoService: DatabaseInfoService) {}

  ngOnInit(): void {
    this.dbInfoService.get().subscribe((data) => {
      this.entitiesInfo = data;
    });
  }
}
