import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import products from "../data/products";
import { Product } from "../../types";

const ProductDetailScreen = () => {
  const product: Product = products[0];
  const { width } = useWindowDimensions();
  return (
    <View>
      {/* Image Carousel */}
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              style={{ width: width, aspectRatio: 1 }}
              source={{ uri: item }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        {/* Title */}
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20, marginVertical: 10 }}>
            {product.name}
          </Text>
          {/* Price */}

          <Text style={styles.price}>${product.price}</Text>
          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* // *! Add To Cart Button */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    position: "absolute",
    backgroundColor: "",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    borderRadius: 100,
    padding: 20,
  },
  buttonText: {},
});
