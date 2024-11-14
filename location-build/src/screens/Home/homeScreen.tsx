import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { requestForegroundPermissionsAsync,
    getCurrentPositionAsync, 
    LocationObject,
    watchPositionAsync,
    LocationAccuracy,
} from 'expo-location';

export default function Home() {
    const [location, setLocation] = useState<LocationObject | null>(null);
    const [permissionGranted, setPermissionGranted] = useState(false);
    const [locationHistory, setLocationHistory] = useState<LocationObject[]>([])

    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            setPermissionGranted(true);
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
        } 
    }

    const handleSaveLocation = async function() {
        if(!location) {
            return
        }

        locationHistory.push(location)

        Alert.alert("Salvar Localização", "Localização salva com sucesso!", [
            {text: "OK", onPress: () => console.log("OK Pressed")},
        ])
    }

    useEffect(() => {
        requestLocationPermissions();
    }, []);

    useEffect(() => {
        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1,
        }, (response) =>{
            // console.log("nova localização! =>", response);
            setLocation(response);
         })
    }, []);

    return (
        <View style={styles.container}>
            {
                location &&
                <MapView
                style ={styles.map}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                >
                    <Marker
                    coordinate={{
                        latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    }}
                    />
                </MapView>

            }

            <View style={{
                position: 'absolute',
                bottom: 32,
            }}>
                <Button title='Salvar localização' onPress={() => {
                    handleSaveLocation();
                }}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },
    map:{
        flex: 1,
        width: '100%'
    }
});