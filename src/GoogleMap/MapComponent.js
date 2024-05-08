import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styled from 'styled-components';





const MapComponent = () => {
    return (
        <YMaps>
            <div>
                <Map defaultState={{ center: [54.717776, 20.557712], zoom: 9 }}>
                    <Placemark geometry={[54.717776, 20.557712]} />
                </Map>
              
            </div>
        </YMaps>
        
    );
}

export default MapComponent;



