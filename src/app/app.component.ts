import { Component } from '@angular/core';

import LiferayParams from '../types/LiferayParams'
import {Router} from "@angular/router";

declare const Liferay: any;

@Component({
	templateUrl: '/o/portlet-template-angular8/app/app.component.html'
})
export class AppComponent {
	params: LiferayParams;
	labels: any;

	constructor(private router: Router) {
		this.labels = {        
			
			configuration: Liferay.Language.get('configuration'),
			
			portletNamespace: Liferay.Language.get('portlet-namespace'),
        	contextPath: Liferay.Language.get('context-path'),
			portletElementId: Liferay.Language.get('portlet-element-id'),
		}
		this.router.navigateByUrl("/component1");
	}

	get configurationJSON() {
		return JSON.stringify(this.params.configuration, null, 2);
	}
}
