// possible example: https://github.com/NYPL/pic-app/blob/master/app/assets/javascripts/typings/cesium.d.ts
declare module Cesium {
    export class ArcGisMapServerImageryProvider implements ImageryProvider {
        constructor(options:Object);

    }

    export interface Clock {
    }

    export interface DataSourceCollection {
    }

    export interface Globe {
    }

    export interface ImageryProvider {
    }

    export interface MapMode2D {
    }

    export interface MapProjection {
    }

    export interface ProviderViewModel {
    }

    export interface SceneMode {
    }

    export interface ShadowMode {
    }

    export interface SkyAtmosphere {
    }

    export interface SkyBox {
    }

    export interface TerrainProvider {
    }

    export class Viewer {
        container: Element;
        constructor(container: Element | string, 
            options?: {
                animation?: boolean,
                automaticallyTrackDataSourceClocks?: boolean,
                baseLayerPicker?: boolean,
                clock?: Clock,
                contextOptions?: any,
                creditContainer?: Element,
                dataSources?: DataSourceCollection,
                fullscreenButton?: boolean,
                fullscreenElement?: Element,
                geocoder?: boolean,
                globe?: Globe,
                homeButton?: boolean,
                imageryProvider?: ImageryProvider,
                imageryProviderViewModels?: Array<ProviderViewModel>,
                infoBox?: boolean,
                mapMode2D?: MapMode2D
                mapProjection?: MapProjection,
                navigationHelpButton?: boolean,
                navigationInstructionsInitiallyVisible?: boolean,
                orderIndependentTranslucency?: boolean,
                scene3DOnly?: boolean,
                sceneMode?: SceneMode,
                sceneModePicker?: boolean,
                selectedImageryProviderViewModel?: ProviderViewModel,
                selectedTerrainProviderViewModel?: ProviderViewModel,
                selectionIndicator?: boolean,
                shadows?: boolean,
                showRenderLoopErrors?: boolean,
                skyAtmosphere?: SkyAtmosphere,
                skyBox?: SkyBox,
                targetFrameRate?: number,
                terrainExaggeration?: number,
                terrainProvider?: TerrainProvider,
                terrainProviderViewModels?: Array<ProviderViewModel>,
                terrainShadows?: ShadowMode,
                timeline?: boolean,
                useDefaultRenderLoop?: boolean,
                vrButton?: boolean,
            });
    }
}