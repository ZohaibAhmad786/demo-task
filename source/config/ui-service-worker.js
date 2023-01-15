/* eslint-disable */
import { Platform } from 'react-native';
import { openCamera, openPicker } from 'react-native-image-crop-picker';
// Import Document Picker


const UI_API = {


  _openCamera: async (setData, onError) => {
    try {
      const response = await openCamera({
        mediaType: 'photo',
        // cropping: false,
        // width: 300,
        // height: 400,
        // forceJpg: Platform.OS === "ios",
        //waitAnimationEnd: false,
      });
      // const size = UI_API.bytesToSize(response?.size) || "";
      // if (size.split(" ")[0] * 1 < 3 && size.includes("MB")) throw new Error("Oops! It seems your image size is greater than 2 MB.");
      const ext = response?.path?.split('/');
      const fileName = ext[ext.length - 1];
      setData({
        uri:
          Platform.OS === 'android'
            ? response?.path
            : response?.path.replace('file://', ''),
        name: fileName,
        type: response?.mime,
      });
    } catch (error) {
      console.log("error",error)
      onError(UI_API._returnError(error));
    }
  },
  _openGallery: async (setData, onError) => {
    try {
      const response = await openPicker({
        mediaType: 'photo',
        // cropping: true,
        // width: 300,
        // height: 400,
        // // forceJpg: Platform.OS === "ios",
        // waitAnimationEnd: false,
      });

      // const size = UI_API.bytesToSize(response?.size) || "";
      // if (size.split(" ")[0] * 1 < 3 && size.includes("MB")) throw new Error("Oops! It seems your image size is greater than 2 MB.");
      const ext = response?.path?.split('/');
      const fileName = ext[ext.length - 1];
      setData({
        uri:
          Platform.OS === 'android'
            ? response?.path
            : response?.path.replace('file://', ''),
        name: fileName,
        type: response?.mime,
      });
    } catch (error) {
      onError(UI_API._returnError(error));
    }
  },
  _isEmpty: (value) => {
    return (
      value === null || // check for null
      value === undefined || // check for undefined
      value === '' || // check for empty string
      (Array.isArray(value) && value.length === 0) || // check for empty array
      (typeof value === 'object' && Object.keys(value).length === 0) // check for empty object
    );
  }
};

export default UI_API;



