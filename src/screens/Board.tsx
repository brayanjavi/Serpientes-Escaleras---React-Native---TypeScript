import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface BoardProps {
  players: { name: string; position: number }[];
}

const Board: React.FC<BoardProps> = ({ players }) => {
  const renderCells = () => {
    let cells = [];
    for (let i = 0; i < 100; i++) {
      const playerInCell = players.find(player => player.position === i);
      cells.push(
        <View key={i} style={styles.cell}>
          {playerInCell && <Text style={styles.player}>{playerInCell.name}</Text>}
        </View>
      );
    }
    return cells;
  };

  return <View style={styles.board}>{renderCells()}</View>;
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    height: 300,
  },
  cell: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  player: {
    fontSize: 10,
    color: 'red',
  },
});

export default Board;