import {Component, NgZone, OnInit} from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    something = true;

    constructor(private zone: NgZone) {}

    ngOnInit() {
        setTimeout(() => {
            this.zone.run(() => {
                this.something = false;
            })
        }, 5000);
    }
}