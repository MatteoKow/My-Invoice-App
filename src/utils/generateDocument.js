import htmlToPdf from 'react-native-html-to-pdf';
import Share from 'react-native-share';
import { invoiceTemplate } from './invoiceTemplate';

export const generateDocument = async (data) => {
  const fileName = `FV_${data.info.issueDate.getFullYear()}_${(data.info.issueDate.getMonth() + 1).toString().padStart(2, '0')}_${data.info.invoiceNumber}`
    try {
      const options = {
        html: await invoiceTemplate(data),
        fileName: fileName,
        directory: 'Documents',
        paddingLeft: 0,
        paddingRight: 0, 
        paddingTop: 0, 
        paddingBottom: 0, 
        padding: 0, 
      };

      

      const file = await htmlToPdf.convert(options);

    

      const shareOptions = {
        title: 'Share PDF',
        url: `file://${file.filePath}`,
        type: 'application/pdf',
        failOnCancel: false,
      };

      await Share.open(shareOptions);
    
      console.log('PDF generated and shared to', file.filePath);
    } catch (error) {
      Alert.alert('Error', 'Failed to generate or share PDF');
      console.error('Error generating or sharing PDF: ', error);
    }
  };