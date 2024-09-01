import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Dice: React.FC<{ onRoll: (number: number) => void }> = ({ onRoll }) => {
  const [roll, setRoll] = useState<number>(1);

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setRoll(result);
    onRoll(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.dice}>{roll}</Text>
      <Button title="Roll" onPress={rollDice} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  dice: {
    fontSize: 40,
    marginBottom: 10,
  },
});

export default Dice;
