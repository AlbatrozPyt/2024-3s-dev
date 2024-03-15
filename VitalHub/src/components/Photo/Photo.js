import { Camera, CameraType } from "expo-camera"
import * as MediaLibrary from 'expo-media-library'
import { useEffect, useRef, useState } from "react"
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BottomCamera, ButtonBack, CameraIcons, LastPhoto, LastPhotoBox } from "./Style";

export const CameraTela = ({ setPhotoView, setShowCamera }) => {


    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()

            const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync()
        })();
    }, [])

    const [modal, setModal] = useState(false);
    const [photo, setPhoto] = useState(null); // foto
    const cameraRef = useRef(null); // referencia

    // Capturar foto
    async function CapturePhoto() {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();
            setPhoto(photo.uri);
            setPhotoView(photo.uri);
            console.log(photo.uri);
        }
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
                ratio="16:9"
                ref={cameraRef}
                style={styles.camera}
            >
                <ButtonBack onPress={() => setShowCamera(false)}>
                    <CameraIcons
                        source={require(`../../../assets/back-arrow.png`)}
                    />
                </ButtonBack>
            </Camera>

            <BottomCamera>
                <TouchableOpacity onPress={ async () =>  { await CapturePhoto();}}>
                    <CameraIcons
                        source={require(`../../../assets/camera.png`)}
                    />
                </TouchableOpacity>
            </BottomCamera>

            <LastPhotoBox>
                <LastPhoto
                    source={{ uri: photo }}
                />
            </LastPhotoBox>
        </>
    )
}

const styles = StyleSheet.create({
    camera: {
        position: `absolute`,
        width: `100%`,
        height: `100%`
    }
})  