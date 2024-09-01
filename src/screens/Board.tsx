import React from 'react';
import { View, StyleSheet } from 'react-native';

const Board: React.FC = () => {
  const renderCells = () => {
    let cells = [];
    for (let i = 0; i < 100; i++) {
      cells.push(<View key={i} style={styles.cell} />);
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
  },
});

export default Board;
