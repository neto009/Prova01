import { StyleSheet, FlatList, Text, View } from "react-native";

export const Cart = ({ items, getTotalPrice }) => {
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View>
              <Text style={styles.texto2}>
                {item.product.name} x {item.qty}
              </Text>
            </View>
            <View>
              <Text style={styles.texto}>
                R$ {item.product.price * item.qty}
              </Text>
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={styles.container2}>
            <Text style={styles.texto}>Total:</Text>
            <Text style={styles.texto}>R$ {getTotalPrice()}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  container2: {
    margin: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    borderTopColor: "gray",
    borderTopWidth: 2,
  },
  
  texto: {
    fontSize: 20,
    fontWeight: "bold",
  },

  texto2: {
    fontSize: 20,
  },
});
