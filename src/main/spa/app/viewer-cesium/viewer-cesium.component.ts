///<reference path="cesium.d.ts" />

import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

require('cesium/Cesium.js');

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'viewer-cesium',
  styleUrls: ['./viewer-cesium.component.scss'],
  templateUrl: './viewer-cesium.component.html'
})
export class ViewerCesiumComponent  { 
    viewer:Cesium.Viewer;

    ngOnInit() {
        this.viewer = new Cesium.Viewer('cesiumContainer', {
            animation: false,
            baseLayerPicker: false,
            fullscreenButton: false,
            geocoder: false,
            homeButton: false,
            imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
                url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
            }),
            infoBox: false,
            navigationHelpButton: false,
            navigationInstructionsInitiallyVisible: false,
            sceneModePicker: false,
            selectionIndicator: false,
            timeline: false,
        });
    }
}