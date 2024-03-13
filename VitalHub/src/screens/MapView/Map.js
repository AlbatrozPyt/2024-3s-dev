import { StyleSheet, Text, View } from "react-native";
import MapViewDirections from "react-native-maps-directions";

export const Map = () => {
    return (
        <View style={styles.container}>
            {
                initialPosition !== null ? (
                    <MapView
                        ref={mapReference}
                        initialRegion={{
                            latitude: initialPosition.coords.latitude,
                            longitude: initialPosition.coords.longitude,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }}
                        style={styles.map}
                        customMapStyle={grayMapStyle}
                        provider={PROVIDER_GOOGLE}
                    >

                        <MapViewDirections
                            origin={initialPosition.coords}
                            destination={{
                                latitude: finalPosition.latitude,
                                longitude: finalPosition.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005,
                            }}
                            apikey={mapskey}

                            strokeWidth={5}
                            strokeColor='purple'
                        />

                        <Marker
                            coordinate={{
                                latitude: initialPosition.coords.latitude,
                                longitude: initialPosition.coords.longitude,
                            }}
                            pinColor='green'
                            icon={img}
                            title='Localização atual'
                        />

                        <Marker
                            coordinate={{
                                latitude: -23.62467868478801,
                                longitude: -46.5105385534594,
                            }}
                            pinColor='red'
                            title='Destino'
                        />


                    </MapView>
                ) : (
                    <>
                        <Text>localiazação não encontrada</Text>
                    </>
                )
            }


        </View>
    )


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        map: {
            flex: 1,
            width: `100%`
        }
    });

    const grayMapStyle = [
        {
            elementType: "geometry",
            stylers: [
                {
                    color: "#E1E0E7",
                },
            ],
        },
        {
            elementType: "geometry.fill",
            stylers: [
                {
                    saturation: -5,
                },
                {
                    lightness: -5,
                },
            ],
        },
        {
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "on",
                },
            ],
        },
        {
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#FBFBFB",
                },
            ],
        },
        {
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#33303E",
                },
            ],
        },
        {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
                {
                    color: "#fbfbfb",
                },
            ],
        },
        {
            featureType: "administrative.country",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#fbfbfb",
                },
            ],
        },
        {
            featureType: "administrative.land_parcel",
            stylers: [
                {
                    visibility: "on",
                },
            ],
        },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#fbfbfb",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#fbfbfb",
                },
            ],
        },
        {
            featureType: "poi.business",
            stylers: [
                {
                    visibility: "on",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
                {
                    color: "#66DA9F",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text",
            stylers: [
                {
                    visibility: "on",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#fbfbfb",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#1B1B1B",
                },
            ],
        },
        {
            featureType: "road",
            stylers: [
                {
                    visibility: "on",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#C6C5CE",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#FBFBFB",
                },
            ],
        },
        {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
                {
                    color: "#ACABB7",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
                {
                    color: "#8C8A97",
                },
            ],
        },
        {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [
                {
                    color: "#8C8A97",
                },
            ],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#fbfbfb",
                },
            ],
        },
        {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#fbfbfb",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                {
                    color: "#8EA5D9",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#fbfbfb",
                },
            ],
        },
    ];


}