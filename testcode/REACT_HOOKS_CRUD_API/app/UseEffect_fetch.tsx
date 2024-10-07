import React, { useState, useEffect } from 'react'
import { Button, View , Text} from 'react-native'

export default function App() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://api.artic.edu/api/v1/artworks/search?q=cats');
        const data = await response.json();
        setData(data);
      };
    
      fetchData();
    }, []);
  
    return (
      <View>
        <Text>Pham Le Thanh Nhiet</Text>
        <Text>{JSON.stringify(data)}</Text>
      </View>
    );
}
  
  