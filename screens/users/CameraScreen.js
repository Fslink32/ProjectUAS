import React, {useRef} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';

const CameraScreen = () => {
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri); // Handle the captured image data here
    }
  };

  return (
    <View style={{flex: 1}}>
      <RNCamera
        ref={cameraRef}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      />
      <TouchableOpacity onPress={takePicture}>
        <Text style={{color: 'white'}}>Take Picture</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraScreen;
