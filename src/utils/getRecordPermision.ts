import { PermissionsAndroid, Platform } from "react-native";

const getRecordPermision = async () => {
  if (Platform.OS === "android") {
    try {
      const grants = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
      console.log("write external stroage", grants);
      
      if (
        grants["android.permission.WRITE_EXTERNAL_STORAGE"] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants["android.permission.READ_EXTERNAL_STORAGE"] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants["android.permission.RECORD_AUDIO"] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log("Permissions granted");
      } else {
        console.log("All required permissions not granted");
        return;
      }
    } catch (err) {
      console.warn(err);
      return;
    }
  }
};

export default getRecordPermision;