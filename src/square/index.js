import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, { type, amount }) => {
  switch (type) {
    case 'red':
      if (state.red + amount > 255 || state.red + amount < 0) return state
      return { ...state, red: state.red + amount }
    case 'blue':
      if (state.blue + amount > 255 || state.blue + amount < 0) return state
      return { ...state, blue: state.blue + amount }
    case 'green':
      if (state.green + amount > 255 || state.green + amount < 0) return state
      return { ...state, green: state.green + amount }
    default:
      return state
  }
}

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    blue: 0,
    green: 0,
  })

  const { red, blue, green } = state
  //
  return (
    <View
      style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Text style={{ textAlign: 'center', marginTop: 5 }}>Red ({red})</Text>
      <View
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <Button
          title="+"
          onPress={() => {
            dispatch({ type: 'red', amount: 5 })
          }}
          style={{ flex: 1 }}
        />
        <Button
          title="-"
          onPress={() => {
            dispatch({ type: 'red', amount: -5 })
          }}
          style={{ flex: 1 }}
        />
      </View>
      <Text style={{ textAlign: 'center', marginTop: 5 }}>Green ({green})</Text>
      <View
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <Button
          title="+"
          onPress={() => {
            dispatch({ type: 'green', amount: 5 })
          }}
          style={{ flex: 1 }}
        />
        <Button
          title="-"
          onPress={() => {
            dispatch({ type: 'green', amount: -5 })
          }}
          style={{ flex: 1 }}
        />
      </View>
      <Text style={{ textAlign: 'center', marginTop: 5 }}>Blue ({blue})</Text>
      <View
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <Button
          title="+"
          onPress={() => {
            dispatch({ type: 'blue', amount: 5 })
          }}
          style={{ flex: 1 }}
        />
        <Button
          title="-"
          onPress={() => {
            dispatch({ type: 'blue', amount: -5 })
          }}
          style={{ flex: 1 }}
        />
      </View>

      <View
        style={{
          backgroundColor: `rgb(${red},${green},${blue})`,
          width: 150,
          height: 150,
        }}
      ></View>
    </View>
  )
}

const style = StyleSheet.create({})

export default SquareScreen
