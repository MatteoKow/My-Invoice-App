import RNFS from 'react-native-fs';
const logoDir = `${RNFS.DocumentDirectoryPath}/LogoImages`;

export const createLogoDirectory = async () => {
    try {
      const dirExists = await RNFS.exists(logoDir);
      if (!dirExists) {
        await RNFS.mkdir(logoDir);
        console.log('LogoImages directory created');
      }
    } catch (error) {
      console.error('Error creating LogoImages directory: ', error);
    }
  };

  export const saveImage = async (uri, fileName) => {
    try {
      const destPath = `${logoDir}/${fileName}.png`;

      if (uri.startsWith('content://')) {
        const imageData = await RNFS.readFile(uri, 'base64');
        await RNFS.writeFile(destPath, imageData, 'base64');
      } else {
        await RNFS.copyFile(uri, destPath);
      }

      console.log('Image saved to', destPath);

      return destPath

    } catch (error) {
      console.error('Error saving image: ', error);
    }
  };

  export const loadImage = async (imagePath) => {
    try {
        const filePath = `${imagePath}`;
        const fileExists = await RNFS.exists(filePath);
        if (!fileExists) {
            console.error('File does not exist:', filePath);
            return;
        }
        return filePath;

    } catch (error) {
        console.error('Error loading image:', error);
    }
};

export const deleteImage = async (path) => {
    try {
      await RNFS.unlink(path);
      console.log('Image deleted:', path);
    } catch (error) {
      console.error('Error deleting image: ', error);
    }
  };