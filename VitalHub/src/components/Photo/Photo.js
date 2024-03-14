import { Camera, CameraType } from "expo-camera"
import * as MediaLibrary from 'expo-media-library'
import { useEffect, useRef, useState } from "react"
import { StyleSheet, View } from "react-native";

export const CameraTela = () => {


    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()

            const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync()
        })();
    }, [])

    const [photo, setPhoto] = useState(null); // foto
    const cameraRef = useRef(null); // referencia

    // Capturar foto
    async function CapturePhoto() {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();
            setPhoto(photo.uri);
            console.log(photo);
        }
    }

    async function ClearPhoto() {
        // setPhoto(null)

        await MediaLibrary.deleteAssetsAsync(photo)
            .then(() => {
                alert(`A foto foi deletada com sucesso`)
            }).catch(error => {
                alert(`Nao foi possivel deletar a foto`)
            })
    }

    // fazer o upload da imagem
    async function UploadPhoto() {
        await MediaLibrary.createAssetAsync(photo)
            .then(() => {
                alert(`A foto foi salva com sucesso.`)
            }).catch(error => {
                alert(`Nao foi possivel processar a foto`)
            })
    }


    return (
        <>
            <Camera
                style={styles.camera}
            >

            </Camera>

            <View>
                <Text>Tirar</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    camera: {
        width: `100%`,
        height: `90%`
    }
})