import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PlayerProps {
  name: string;
  position: number;
}

const Player: React.FC<PlayerProps> = ({ name, position }) => {
  return (
    <View style={styles.player}>
      <Text>{name}: {position}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  player: {
    padding: 10,
  },
});

export default Player;
