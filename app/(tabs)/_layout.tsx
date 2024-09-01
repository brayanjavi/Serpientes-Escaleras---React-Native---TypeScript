import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Board from '@/src/screens/Board';
import Dice from '@/src/screens/Dice';
import Player from '@/src/screens/Player';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [players, setPlayers] = useState([{ name: 'Player 1', position: 0 }, { name: 'Player 2', position: 0 }]);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const handleRoll = (diceValue: number) => {
    let newPosition = players[currentPlayer].position + diceValue;

    if (newPosition > 99) newPosition = 99; // Limitar a 100 casillas

    setPlayers(prev =>
      prev.map((player, index) =>
        index === currentPlayer ? { ...player, position: newPosition } : player
      )
    );

    // Cambiar turno
    setCurrentPlayer((currentPlayer + 1) % players.length);
  };

  return (
    <View style={styles.container}>
      <Board players={players} />
      {players.map(player => (
        <Player key={player.name} name={player.name} position={player.position} />
      ))}
      <Dice onRoll={handleRoll} />
      <Text>Turno de: {players[currentPlayer].name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});