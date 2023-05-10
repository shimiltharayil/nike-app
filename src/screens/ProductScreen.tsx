import { FlatList, Image, StyleSheet, View } from "react-native";
import products from "../data/products";
import { Product } from "../../types";



type Props = {
  products: Product[];
};

const ProductScreen: React.FC<Props> = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
            // numColumns={2} // Note: numColumns prop is not applicable in Image component
          />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()} // Provide a unique key for each item
      numColumns={2} // Display items in 2 columns
    />
  
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductScreen;
