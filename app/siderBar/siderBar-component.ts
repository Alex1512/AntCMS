import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate,
  Input,
  Output,
} from '@angular/core';
import { MenuService } from '../common/api/menu-service';

@Component({
  moduleId: 'sider-bar',
  selector: 'sider-bar',
  templateUrl: 'siderBar-component.html',
  providers: [MenuService],
  animations: [
    trigger('siderBarState',
      [
        state('inactive',
          style({
            width: '0',
          })
        ),
        state('active', style({
          width: '230px',
        })),
        transition('inactive=>active', animate('100ms ease-in')),
        transition('active=>inactive', animate('100ms ease-out')),
      ]),
  ],
})
export class SiderBarComponent implements OnInit {
  @Input() state: string;
  public menus: any;
  constructor(private menuApi: MenuService) { }
  ngOnInit() {
    const self = this;
    this.menuApi.getMenus().then((result: any) => {
      self.menus = result;
    }).catch(err => {
      console.error(err);
    });
  }
}
