import React, { useState,useEffect,useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Css } from './Css';
import { MapView } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import config from './index.json';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



useEffect(()=>{
    (async function(){
        const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.000922,
                longitudeDelta: 0.000421
            })
        } else {
            throw new Error('Location permission not granted');
        }
    })();
},[]);


const Home = () => {

  return (

    <View style={css.container}> 
      <View style={css.search}>
  <GooglePlacesAutocomplete
          placeholder='Pare na Boa!'
          onPress={(data, details = null) => {
          setDestination({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.000922,
              longitudeDelta: 0.000421
          });
      }}
      query={{
          key: config.googleApi,
          language: 'pt-br',
      }}
      enablePoweredByContainer={false}
      fetchDetails={true}
      styles={{listView:{height:100}}}
  />
</View>
      
      <MapView
          style={css.map}
          initialRegion={origin}
          showsUserLocation={true}
          zoomEnabled={false}
          loadingEnabled={true}
      >
      </MapView>  

    </View>
   
  );

}

export default Home;