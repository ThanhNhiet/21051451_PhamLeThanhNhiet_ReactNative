import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity, ScrollView, TextInput } from 'react-native';

const DATA = [
  {
    id: '1',
    img: require('../assets/capDen.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.5,
    reviews: 15,
  },
  {
    id: '2',
    img: require('../assets/capusb.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.5,
    reviews: 15,
  },
  {
    id: '1',
    img: require('../assets/capDen.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.5,
    reviews: 15,
  },
  {
    id: '2',
    img: require('../assets/capusb.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.5,
    reviews: 15,
  },
  {
    id: '1',
    img: require('../assets/capDen.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.5,
    reviews: 15,
  },
  {
    id: '2',
    img: require('../assets/capusb.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.5,
    reviews: 15,
  },
  {
    id: '1',
    img: require('../assets/capDen.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.5,
    reviews: 15,
  },
  {
    id: '2',
    img: require('../assets/capusb.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.5,
    reviews: 15,
  },
];

type ItemProps = {
  title: string;
  img: any;
  price: string,
  discount: string,
  rating: number,
  reviews: number,
};

const Item = ({ img, title, price, discount, rating, reviews }: ItemProps) => (
  <View style={styles.itemContainer}>
    <Image source={img} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.rating}>
      ⭐ {rating} ({reviews})
    </Text>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.discount}>{discount}</Text>
    </View>
  </View>
);

export default function App({ goBack }: { goBack: () => void }) {
  return (
    <View style={styles.container}>
   <View style={styles.topNavigation}>
  <Image style={styles.icon} source={require("../assets/back.png")} />
  <View style={styles.inputContainer}>
  <Image style={{height: 30, width: 30}} source={require("../assets/search.png")}/>
  <TextInput style={styles.input} placeholder="Dây cáp USB"/>
  </View>
  <Image style={styles.icon} source={require("../assets/cart.png")
  } />
  <Text style={{fontSize: 25, color: 'white'}}>...</Text>
</View>

     <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <Item
          img={item.img}
          title={item.title}
          price={item.price}
          discount={item.discount}
          rating={item.rating}
          reviews={item.reviews}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
    />

      <View style={styles.topNavigation}>
        <Image style={styles.icon} source={require("../assets/recent.png")} />
        <Image style={styles.icon} source={require("../assets/home.png")} />
        <Image style={styles.icon} source={require("../assets/return.png")} />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    flexDirection: "row",
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#1ba9ff',
    height: 50,
    marginTop: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 140,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
    padding: 5
  },
  input: {
    paddingLeft: 10,
  },
  icon: {
    height: 40,
    width: 40,
  },
  
  itemContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 14,
    marginVertical: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  discount: {
    fontSize: 12,
    paddingLeft: 10,
    color: 'gray',
  },
  rating: {
    fontSize: 12,
    color: 'orange',
  },
  row: {
    justifyContent: 'space-between',
  },
  

});
