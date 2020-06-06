import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet , Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from './styles';

export default function ExpoScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
 

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Código de barras com o tipo ${type} e dados ${data} que foram digitalizados!`);
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão da câmera !</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera!</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <Overlay /> 
      {scanned && <Button 
                      title={'Toque para digitalizar novamente'} 
                      onPress={() => setScanned(false)} />}
    </View>
  );
}


function Overlay() {
  const margin = size * 0.2;
  const blockSize = (size - margin) * 0.5;
   
  return (
    <View
      pointerEvents="none"
      style={[
        StyleSheet.absoluteFill,
        { justifyContent: 'center', alignItems: 'center' },
      ]}>
      <Text style={styles.paragraph}>Scanner</Text>
      <View style={{ width: size, height: size }}>
        <Corner style={styles.cornerTopLeft}/>
        <Corner style={styles.cornerTopRight}/>
        <Corner style={styles.cornerBottomLeft}/>
        <Corner style={styles.cornerBottomRight}/>
      </View>
    </View>
  );
}

const size = 185;
function Corner({ style }) {
  const margin = size * 0.2;
  const borderWidth = 6;
  const blockSize = (size - margin) * 0.2;
  const borderRadius = 1;

  return (
    <View
      style={[
        {
          position: 'absolute',

          width: blockSize,
          height: blockSize,

          borderColor: 'white',
        },
        style
      ]}
    />
  );
}
