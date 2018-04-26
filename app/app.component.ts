import {Component, NgZone} from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {

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
