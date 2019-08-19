import * as React from 'react'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome'
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons'

// define IconComponent, color, sizes and OverflowIcon in one place
const CustomHeaderButton = props => (
  <HeaderButton
    {...props}
    IconComponent={FontAwesomeIcons}
    iconSize={23}
    // color="blue"
  />
)

export const CustomHeaderButtons = props => {
  return (
    <HeaderButtons
      HeaderButtonComponent={CustomHeaderButton}
      OverflowIcon={<FontAwesomeIcons name="pencil" size={23} />}
      {...props}
    />
  )
}
export { Item } from 'react-navigation-header-buttons'
