import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {WebViewLeaflet} from "react-native-webview-leaflet";

// const instructions = Platform.select({
//   ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
//   android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
// });

export default function App() {
  const map = React.createRef();

  const handleMessage = event => {

  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcome}>My Map in React Native with Leaflet</Text>  
        <Text style={styles.intro}>Makes use of react-native-webview-leaflet-v5</Text>  
      </View>
      <View style={styles.mapContainer}>    
        <WebViewLeaflet
          ref={map}
          backgroundColor={'blue'}
          mapLayers={[{
            baseLayerName: 'OpenStreetMap',
            baseLayerIsChecked: 'true',
            layerType: 'VectorLayer',
            baseLayer: true,
            url: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
            attribution:
              `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`
          }]}
          mapCenterPosition={ {lat: 13.1060, lng: -59.6132} }
          onMessageReceived={handleMessage}
          zoom={15}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ace1af',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  intro: {
    fontStyle: "italic",
    textAlign: "center",
    paddingTop: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  mapContainer: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 2,
    height: 500,
    marginHorizontal: 10,
    marginVertical: 20,
  }
});
